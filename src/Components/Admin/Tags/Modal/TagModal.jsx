import Color from 'color';
import PropTypes from 'prop-types';

import React, { useState } from 'react';

import styles from './tagModal.module.scss';

const TagModal = ({ tag, deleteTag, close }) => {
  /** ========================== Edit Tag States ========================== */
  const [label, setLabel] = useState(tag.name);
  const [description, setDescription] = useState(tag.description);
  const [code, setCode] = useState(tag.color);

  // Error States

  const [labelError, setLabelError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [codeError, setCodeError] = useState(null);

  /* ========================================= Check Color (Light or Dark) ========================================= */

  const checkColor = (clr) => {
    const color = Color(clr);
    return color.isLight();
  };

  /* ========================================= Render ========================================= */

  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        {/** ========= Modal Heading ========= */}
        <button
          type="button"
          className={styles['close-button']}
          onClick={close}>
          <img src="/icons/cross.png" alt=" X " />
        </button>
        <h1>Edit Tag</h1>

        {/** ========= Existing Tag ========= */}

        <div className={styles['tag-div']}>
          <span className={styles.flex}>
            <b>Tag</b>
            <span
              key={tag._id}
              className={styles.tag}
              style={{
                backgroundColor: `#${tag.color}`,
                color: `${checkColor(`#${tag.color}`) ? '#2e2e2e' : '#fff'}`
              }}>
              {tag.name}
            </span>
          </span>
          <span className={styles.flex}>
            <b>Description </b> {tag.description}{' '}
          </span>

          {/** ============================= Edit Form ============================= */}
          <form className={styles['add-new-form']}>
            <h2> Edit Tag Form</h2>
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
              // onClick={addNewTag}
              id={styles['create-button']}>
              Edit Tag
            </button>
          </form>

          {/* ============================= Delete Option ============================= */}
          <button
            type="button"
            className={styles['delete-button']}
            onClick={() => {
              if (confirm('Are you sure to delete this Tag ?')) {
                deleteTag(tag._id);
                close();
              }
            }}>
            {' '}
            Delete Tag
          </button>
        </div>
      </div>
    </div>
  );
};

TagModal.propTypes = {
  close: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  tag: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }).isRequired
};

export default TagModal;
