import React from 'react';

import styles from './section1.module.scss';

const Section1 = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>Community Guidelines &amp; Code of Conduct</span>
      <span className={styles.belowheading}>From Feminist Bible. Made for all, by women.</span>
     
      <div className={styles['quote-div']}>
      <img src="/icons/quote-start.svg" alt='"' />
        <p>
          Every Community has certain rules in place to enhance it&apos;s
          efficiency and also for the convenience of all it&apos;s members. We
          too have a few guidelines for any prospective member of our Feminist
          Bible family! These rules would tell you most of what you would need
          to know about our community before you decide to join us.
        </p>
      </div>
      <div className={styles['main-content']}>
          <div className={styles['left-col']}>
              <div className={styles.list}>
                  <ul className="content">CONTENTS</ul>
                  <li><a href="/">1. Community Guidelines</a></li>
                  <li><a href="/">2. Code of Conduct</a></li>
                  <li><a href="/">3. Terms and Conditions</a></li>
                  <li><a href="/">4. Authorized Users</a></li>
                  <li><a href="/">5. Personal Information</a></li>
                  <li><a href="/">6. Emails &amp; Mailing List</a></li>
                  <li><a href="/">7. Data Privacy &amp; Protection</a></li>
                  <li><a href="/">8. Communication</a></li>
                  <li><a href="/">9. Announcements</a></li>
                  <li><a href="/">10. Account Security</a></li>
                  <li><a href="/">11. Intellectual Property</a></li>
              </div>
          </div>
          <div className={styles['right-col']}>
              <img src='/images/girl-with-plant.png' alt=''/>
          </div>
      </div>
      </div>

  );
};

export default Section1;
