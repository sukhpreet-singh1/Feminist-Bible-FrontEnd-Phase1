import React from 'react';

import styles from './section3.module.scss';

const Section3 = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading1}>Community Guidelines </span>
      <div className={styles['main-content']}>
          <div className={styles.text}>Each community member(s), global citizen(s), group(s) and organization must follow the following community guidelines:</div>
          <ul className={styles['text-1']}>
            <li>
            Every opinion and voice matters.
            </li>
            <li>Maintain the sanctity of this safe space.</li>
            <li>
              Be empathetic to people&apos;s life choices.
            </li>
            <li>
              Equity is essential because it allows others to treat individual
              wants respectfully.
            </li>
             </ul>
          </div>
          <span className={styles.heading2}>Code of Conduct</span>
          <div className={styles['main-content']}>
          <ul className={styles['text-1']}>
            <li>
            Be respectful of people&apos;s writing(s), comment(s), and or feedback.</li>
            <li>Respect people&apos;s confidentiality.</li>
            <li>
            Individuals share vulnerable thoughts and experiences. Please be kind and respectful to them.Feminist Bible is a child-friendly and family-oriented community website. 
            </li>
            <li>
            Abusive, offensive and disrespectful language in comments, feedback, and website content should be reported to the Feminist Bible team via the &quot;Report&quot; button.
            </li>
            <li>If you are having a problem with another account member, please send our Feminist Bible team a message containing as much information on the issues and/or incident to address the situation adequately.</li>
             </ul>
          </div>
          
      </div>
      

  );
};

export default Section3;
