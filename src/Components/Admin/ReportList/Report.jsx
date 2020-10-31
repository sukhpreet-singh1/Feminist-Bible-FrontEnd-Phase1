import PropTypes from 'prop-types';

import React from 'react';

import styles from './reportList.module.scss';

const Report = ({ report }) => {
  return (
    <div className={styles['report-container']}>
      <div className={styles['upper-row']}>
        <div className={styles['left-col']}>
          <img src="/images/desktop-img3.png" alt="" />
        </div>
        <div className={styles['right-col']}>
          <h2>What I learnt from rediscovering my passions</h2>
          <p>
            {' '}
            Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus creatus
            est.{' '}
          </p>
          <span> Tiffany Grant Aug 2, 2020</span>
        </div>
      </div>
      {/** =============================== Report Remark ================================= */}
      <div className={styles['bottom-row']}>
        {report && report.type === 'comment' && report.commentData && (
          <div className={styles['report-feedback']}>
            <img src="/icons/comment.png" alt="warning" />
            <p>{report.commentData}</p>
          </div>
        )}
        <div className={styles['report-feedback']}>
          <img src="/icons/warning.svg" alt="warning" />
          <p>{report.data}</p>
        </div>
      </div>
      {/** =============================== Report Remark Ends ================================= */}
    </div>
  );
};

Report.propTypes = {
  report: PropTypes.shape({
    type: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    commentData: PropTypes.string
  }).isRequired
};

export default Report;
