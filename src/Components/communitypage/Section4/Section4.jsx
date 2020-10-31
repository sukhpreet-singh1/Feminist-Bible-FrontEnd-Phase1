import React from 'react';

import styles from './section4.module.scss';

const Section4 = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading1}>Account Security</span>
      <div className={styles['main-content']}>
          <div className={styles.text}>We make every reasonable effort to keep your Feminist Bible website account secure. We will not be held liable for unauthorized access to your account or personal information.
           </div></div>
        <span className={styles.heading2}>Intellectual Property</span>
        <div className={styles['main-content']}>
          <div className={styles.text}><div className={styles.first}>You will not knowingly share any content, stories, profiles, copyrighted, and or trademarked by another person or entity. We will immediately delete any content we determine to be plagiarized and do not follow community guidelines and conduct codes.

        </div>
        <div className={styles.second}>Feminist Bible retains trademarks on the following :
        <ul className={styles.third}>
            <li>&quot;Feminist Bible&quot;</li>
            <li>&quot;The Feminist Bible&quot;</li>
        </ul>
        
        </div>
        </div>
          
      </div>
      </div>
      

  );
};

export default Section4;
