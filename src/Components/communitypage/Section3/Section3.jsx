import React from 'react';

import styles from './section3.module.scss';

const Section3 = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading1}>Terms &amp; Conditions </span>
      <div className={styles['main-content']}>
          <div className={styles.text}>
            <div>Effective Date: August 27, 2020</div>
            <div className={styles.accept}>Acceptance of Terms</div>
          </div>
          <ul className={styles['text-1']}>
            <li>
            The use of the Feminist Bible website represents an understanding and acceptance of the following terms. If you disagree with the following terms, you should not use the Feminist Bible website.
            </li>
            <li>
            The following terms may be updated occasionally, at the Feminist Bible (&quot;our&quot;) discretion, the Feminist Bible (&quot;We&quot;) will make reasonable effort to notify you of any significant changes. We recommend that you regularly review the terms and conditions to ensure your continued understanding and acceptance.
            </li>
            <li>   
            If you are under 18 years old, you must review the following terms with a parent or guardian. Your parent or guardian must provide permission for you before you establish an account.
            </li>
             </ul>
          </div>
          <span className={styles.heading2}>Authorized Users</span>
          <div className={styles['main-content']}>
            <div className={styles['sub-text']}>The Feminist Bible website content is for the following users:</div>
             <ul className={styles['text-2']}>
            <li>Individual participants at least 15 years of age (parent or guardian permission).</li>
            <li>Authorized individuals 18 years of age and older.</li>
            <li>Authorized groups and or organizations.</li>
          </ul>
          <div className={styles['sub-text2']}>If you do not understand and accept the terms and conditions, the community guidelines and code conduct, and established an account. In that case, the account is immediately deleted, and your access will be blocked. </div>
          <div className={styles['sub-text3']}>The Feminist Bible does not allow search-indexing or public access to user profiles, writing projects, or forums. You may not solicit individuals without express consent by the members of this community.</div>
          </div>   
          <span className={styles.heading3}>Personal Information</span>
          <div className={styles['main-content']}>
            <ul className={styles.list1}>
            <li>Username</li>
            <li>Email address</li>
            <li>Password</li>
            <li>Time Zone</li>
            <li>Ethnic Descent</li>
            <li>Gender and Pronoun Used</li>
            </ul>
            <div className={styles.list2}>On the Feminist Bible website, you may have the option to provide:</div>
            <ul className={styles.list3}>
              <li>Birthdate</li>
              <li>Zip Code and Or Location</li>
              <li>Avatar Graphic</li>
              <li>Profile Information (i.e., alias, favorites, and interests)</li>
              <li>Regional affiliation(s) (i.e., volunteer programs, organizations)</li>
              <li>Projects (i.e., initiatives, blogs, podcast, books)</li>
              <li>Session information (i.e., when you commented, wrote stories, reactions)</li>
            </ul>
            <div className={styles.list4}>The Feminist Bible website also collects IP addresses, tracks your browser cookies, and login session information. We use these only to improve your interaction with the website further, not to collect additional personal information.</div>
          </div>
          <span className={styles.heading4}>Emails &amp; Mailing List</span>
          <div className={styles['main-content']}>
            <div className={styles.text1}>Establishing an account on the Feminist Bible website subscribes you to our mailing list. We use a third-party service (MailChimp) for our mailing-list management, but your information is only accessible by the Feminist Bible.</div>
            <div className={styles.text2}>You may unsubscribe or update your email preferences at any time.</div>
          </div>
          <span className={styles.heading4}>Data Privacy &amp; Protection</span>
          <div className={styles['main-content']}>
            <div className={styles.text1}>You may access and or update the majority of your personal information at any time. Some information that we collect is stored only in the Feminist Bible database; in these cases, you may contact us to request a copy of all the information we possess.</div>
            <div className={styles.text2}>You may delete your Feminist Bible account, and all stored personal information, at any time via Account Settings.</div>
          </div>
          <span className={styles.heading5}>Communications &amp; Announcements</span>
          <div className={styles['main-content1']}>
          The Feminist Bible will occasionally share significant changes, initiatives, and messages on behalf of our sponsors and partners. These messages will be distributed via our email or content systems, not by the sponsors and partners themselves.

          </div>
          
      </div>
  );
}; 

export default Section3;
