import Color from 'color';
import React, { useEffect, useState } from 'react';

import * as services from '../../../services/tag';
import TagModal from './Modal/TagModal';
import styles from './tags.module.scss';

const Tags = () => {
  const [tagList, setTagList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [modalTag, setModalTag] = useState(null);

  /** ========================== Add New Tag States ========================== */
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  // Error States

  const [labelError, setLabelError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [codeError, setCodeError] = useState(null);

  /* =============================== Reset Form =============================== */

  const resetForm = () => {
    setCode('');
    setLabel('');
    setDescription('');
    setLabelError(null);
    setDescriptionError(null);
    setCodeError(null);
  };

  /* =============================== Get Tags =============================== */

  const getTags = async () => {
    try {
      const res = await services.getTags();
      const data = res && res.data && res.data.data;
      if (data) setTagList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /* =============================== Add New Tags =============================== */

  const addNewTag = async () => {
    try {
      const res = await services.addTag(label, description, code);
      if (res && res.data && res.data.data) {
        setTagList([...tagList, res.data.data].flat());
        resetForm();
      }
    } catch (error) {
      const err = error && error.data;
      if (err && err.name) setLabelError(err.name);
      if (err && err.color) setCodeError(err.color);
      if (err && err.description) setDescriptionError(err.description);
    }
  };

  /* =============================== Delete Tag =============================== */

  const deleteTag = async (id) => {
    try {
      const res = await services.deleteTag(id);
      console.log(res);
      getTags();
    } catch (error) {
      console.log(error);
    }
  };

  /* ========================================= Use effect ========================================= */

  useEffect(() => {
    getTags();
  }, []);

  /* ========================================= Check Color (Light or Dark) ========================================= */

  const checkColor = (clr) => {
    const color = Color(clr);
    return color.isLight();
  };

  /* ========================================= Render ========================================= */

  if (loading) return <div>Loading ... </div>;

  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        {/** ========= Page Heading ========= */}

        <h1>Tags</h1>

        {/** ========= Existing Tags ========= */}

        <div className={styles.existing}>
          <h2>Existing Tags</h2>
          <div className={styles['tag-div']}>
            {tagList.map((tag) => {
              return (
                <button
                  type="button"
                  key={tag._id}
                  className={styles.tag}
                  style={{
                    backgroundColor: `#${tag.color}`,
                    color: `${checkColor(`#${tag.color}`) ? '#2e2e2e' : '#fff'}`
                  }}
                  onClick={() => {
                    setTagModalVisible(true);
                    setModalTag(tag);
                  }}>
                  {tag.name}
                </button>
              );
            })}
          </div>
        </div>

        {/** ========= Add New Tag ========= */}
        <div className={styles['add-new']}>
          <h2>Add New Tag</h2>
          <form className={styles['add-new-form']}>
            <input
              type="text"
              placeholder="Label"
              className={`${styles.input} ${
                labelError === null ? '' : 'error'
              }`}
              value={label}
              onChange={(e) => {
                setLabelError(null);
                setLabel(e.currentTarget.value);
              }}
            />
            {labelError && <span className="error-message">{labelError}</span>}

            <textarea
              type="text"
              rows={4}
              placeholder="Description"
              className={`${styles.input} ${
                descriptionError === null ? '' : 'error'
              }`}
              value={description}
              onChange={(e) => {
                setDescriptionError(null);
                setDescription(e.currentTarget.value);
              }}
            />
            {descriptionError && (
              <span className="error-message">{descriptionError}</span>
            )}

            <input
              type="text"
              placeholder="Hex Color"
              className={`${styles.input} ${codeError === null ? '' : 'error'}`}
              value={code}
              onChange={(e) => {
                setCodeError(null);
                setCode(e.currentTarget.value);
              }}
            />
            {codeError && <span className="error-message">{codeError}</span>}

            <button
              type="button"
              onClick={addNewTag}
              id={styles['create-button']}>
              Create
            </button>
          </form>
        </div>
      </div>
      {tagModalVisible && (
        <TagModal
          tag={modalTag}
          close={() => setTagModalVisible(false)}
          deleteTag={(id) => deleteTag(id)}
        />
      )}
    </div>
  );
};

export default Tags;
