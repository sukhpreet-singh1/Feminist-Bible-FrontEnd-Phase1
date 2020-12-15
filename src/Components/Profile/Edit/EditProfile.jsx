import React, { useEffect, useState } from 'react';

import { getProfile } from '../../../services/user';
import styles from './editProfile.module.scss';

export default function EditProfile() {
  {
    /* ========================= Form Input States ========================= */
  }
  const [name, setName] = useState(''); // Name of User
  const [email, setEmail] = useState(''); // Email of User
  const [pronoun, setPronoun] = useState(''); // Pronoun of User
  const [bio, setBio] = useState(''); // Bio of User
  const [username, setUsername] = useState(''); // username of User
  const [social, setSocial] = useState(''); // Social Link

  {
    /* ========================= Form Input Error States ========================= */
  }

  const [nameError, setNameError] = useState(null); // Name
  const [emailError, setEmailError] = useState(null); // Email
  const [pronounError, setPronounError] = useState(null); // Pronoun
  const [bioError, setBioError] = useState(null); // Bio
  const [usernameError, setUsernameError] = useState(null); // username
  const [socialError, setSocialError] = useState(null); // Social Link

  const [loading, setLoading] = useState(true);

  const setFields = (data) => {
    data && data.name && setName(data.name);
    data && data.email && setEmail(data.email);
    data && data.username && setUsername(data.username);
    data && data.pronoun && setPronoun(data.pronoun);
    data && data.bio && setBio(data.bio);
    data && data.link && setSocial(data.link);
    return null;
  };

  const getData = async () => {
    try {
      const res = await getProfile();
      const data = res && res.data && res.data.data;
      console.log(data);
      setFields(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <div> Loading ....</div>;

  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <h2 className={styles.heading}>Edit Profile</h2>
        <form className={styles.form}>
          {/** ---------- Image ---------- */}
          <span className={styles['image-row']}>
            <img
              src="/test/user1.png"
              id={styles['profile-image']}
              alt="Profile"
            />
            <input
              type="image"
              src="/icons/camera.png"
              id={styles['image-input']}
              alt="Add"
            />
          </span>
          {/** ---------- Name ---------- */}
          <span className={styles['input-row']}>
            <label>Name </label>
            <input
              type="text"
              className={`${styles.input} ${
                nameError !== null ? 'error' : ''
              } `}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </span>
          {nameError && <span className="error-message">{nameError}</span>}

          {/** ---------- Email ---------- */}
          <span className={styles['input-row']}>
            <label>Email </label>

            <input
              type="email"
              className={`${styles.input} ${
                emailError !== null ? 'error' : ''
              } `}
              placeholder="Email"
              value={email}
              disabled
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </span>

          {emailError && <span className="error-message">{emailError}</span>}

          {/** ---------- Username ---------- */}
          <span className={styles['input-row']}>
            <label>Username</label>

            <input
              type="text"
              className={`${styles.input} ${
                usernameError !== null ? 'error' : ''
              } `}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </span>
          {usernameError && (
            <span className="error-message">{usernameError}</span>
          )}

          {/** ---------- Pronoun ---------- */}
          <span className={styles['input-row']}>
            <label>Pronoun</label>

            <input
              type="text"
              className={`${styles.input} ${
                pronounError !== null ? 'error' : ''
              } `}
              placeholder="Pronoun"
              value={pronoun}
              onChange={(e) => {
                setPronoun(e.currentTarget.value);
              }}
            />
          </span>
          {pronounError && (
            <span className="error-message">{pronounError}</span>
          )}

          {/** ---------- Bio ---------- */}
          <span className={styles['input-row']}>
            <label>Bio</label>

            <input
              type="text"
              className={`${styles.input} ${bioError !== null ? 'error' : ''} `}
              placeholder="Bio"
              value={bio}
              onChange={(e) => {
                setBio(e.currentTarget.value);
              }}
            />
          </span>
          {bioError && <span className="error-message">{bioError}</span>}

          {/** ---------- Social Link ---------- */}
          <span className={styles['input-row']}>
            <label>Link</label>

            <input
              type="link"
              className={`${styles.input} ${
                socialError !== null ? 'error' : ''
              } `}
              placeholder="Social Link"
              value={social}
              onChange={(e) => {
                setSocial(e.currentTarget.value);
              }}
            />
          </span>
          {socialError && <span className="error-message">{socialError}</span>}

          <button type="button" className={styles['save-button']}>
            {' '}
            Save{' '}
          </button>
        </form>
      </div>
    </div>
  );
}
