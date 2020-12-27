import React, { useEffect, useState } from 'react';

import { getProfile } from '../../services/user';
import styles from './profile.module.scss';
import BottomComponent from './BottomComponents/BottomComponent';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState(1);

  {
    /** ====================== Get Data for displaying Profile ====================== */
  }

  const getData = async () => {
    try {
      const res = await getProfile();
      const data = res && res.data && res.data.data;
      if (data) setUserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  {
    /** ====================== Set the content option to display in bottom row ====================== */
  }

  const setBottomRowContent = (id) => {
    setOption(id);
  };

  if (loading) return <div> Loading ....</div>;

  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        {/** ------------------------------- Upper Row ------------------------------- */}
        <div className={styles['upper-row']}>
          <img src="/test/user1.png" alt="Profile" />
          <div className={styles['right-col']}>
            <div id={styles.name}>
              {
                userData &&
                  userData.name &&
                  userData.name /** Name of The User */
              }
              {/** Edit Profile Option */}
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <a href="editprofile">
                  <img
                    src="/icons/edit.png"
                    id={styles.edit}
                    alt="Edit Profile"
                  />
                </a>
                {/** Tag of Admin (if Admin) */}
                {userData && userData.role && userData.role === 'admin' && (
                  <span id={styles.tag}> {userData.role.toUpperCase()} </span>
                )}
              </span>
            </div>
            <div id={styles.username}>
              <span>{userData.username && `@${userData.username}`}</span>
              <span>
                {userData.pronoun ? userData.pronoun : 'pronoun(He/She)'}
              </span>
            </div>
            <div id={styles.description}>
              {userData.bio
                ? userData.bio
                : `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              sed fermentum, morbi diam viverra mollis.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Auctor sed fermentum, morbi
              diam viverra mollis.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Auctor sed fermentum, morbi diam viverra
              mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Auctor sed fermentum, morbi diam viverra mollis.`}
              <br />
              <a
                href={
                  userData.link
                    ? userData.link
                    : 'https://feminist-bible-phase1.netlify.app/'
                }
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}>
                Socials
              </a>
            </div>
          </div>
        </div>
        {/** ------------------------------- Upper Row Ends ------------------------------- */}

        {/** ------------------------------- Bottom Row ------------------------------- */}
        <div className={styles['bottom-row']}>
          <div className={styles['menu-items']}>
            <button
              type="button"
              onClick={() => {
                setBottomRowContent(1);
              }}
              className={option === 1 ? styles['selected'] : null}>
              Published Work
            </button>

            <button
              type="button"
              onClick={() => {
                setBottomRowContent(2);
              }}
              className={option === 2 ? styles['selected'] : null}>
              Liked Articles
            </button>

            <button
              type="button"
              onClick={() => {
                setBottomRowContent(3);
              }}
              className={option === 3 ? styles['selected'] : null}>
              Following
            </button>

            <button
              type="button"
              onClick={() => {
                setBottomRowContent(4);
              }}
              className={option === 4 ? styles['selected'] : null}>
              Followers
            </button>
          </div>
          <BottomComponent option={option} />
        </div>
      </div>
    </div>
  );
}
