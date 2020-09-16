import React from 'react';

import styles from '../../scss/header_footer/footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles['left-col']}>
        <span><h2>MP &amp; RK Company</h2></span>
      </div>
      <div className={styles['right-col']} />

    </div>
  );
}
