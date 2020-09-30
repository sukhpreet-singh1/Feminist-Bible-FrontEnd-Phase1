import React from 'react';

import styles from '../../scss/home/communityg.module.scss';

const Communityg = () => {
    return (
    <div className={styles.container}>
      <span className={styles.heading}>Community Guidelines</span>
      <div className={styles['main-content']}>
         
        
        <div className={styles['left-col']}>
          <p className={styles['text-1']}>
          Each community member(s), global citizen(s), group(s) and organization must follow the following community guidelines:<br/>
          </p><br/><br/>
          <ul className={styles['text-2']}>
            <li>Every opinion and voice matters. </li>
            <li>
            Maintain the sanctity of this safe space.
            </li>
            <li>
            Be empathetic to people&apos;s life choices.
            </li>
            <li>Equity is essential because it allows others to treat individual wants respectfully.</li>
          </ul>
        </div>
        <div className={styles['right-col']}>
          <img src="../images/communityguidelines.jpg" alt="" />
        </div>
       </div>
    </div>
    );
};

export default Communityg;


