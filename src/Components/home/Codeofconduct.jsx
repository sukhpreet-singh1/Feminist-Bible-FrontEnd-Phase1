import React from 'react';

import styles from '../../scss/home/codeofconduct.module.scss';

const Codeofconduct = () => {
  return (
    <div className={styles.container}>
    <span className={styles.heading}>Code of Conduct</span>
    <div className={styles['main-content']}>
    <div className={styles['left-col']}>
    <img src="../images/Sparkle1.svg" alt=""  className={styles.image1}/>
    <img src="../images/codeofconduct.jpg" alt="" className={styles.image2}/>
    </div>
    <div className={styles['right-col']}>
    <ul className={styles['text-1']}>
            <li>Be respectful of people&apos;s writing(s), comment(s), and or feedback.</li>
            <li>
            Respect people&apos;s confidentiality.
            </li>
            <li>
            Individuals share vulnerable thoughts and experiences. Please be kind and respectful to them.
            </li>
            <li>Equity is essential because it allows others to treat individual wants respectfully.</li>
            <li>Feminist Bible is a child-friendly and family-oriented community website.</li>
            <li>Abusive, offensive and disrespectful language in comments, feedback, and website content should be reported to the Feminist Bible team via the &quot;Report&quot; button.</li>
            <li>If you are having a problem with another account member, please send our Feminist Bible team a message containing as much information on the issues and or incident to address the situation adequately</li>
          </ul>
        
    </div>
    </div>
    </div>
  );
};
 
export default Codeofconduct;