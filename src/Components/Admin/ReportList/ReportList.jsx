/* eslint-disable react/no-array-index-key */
import React from 'react';

import Report from './Report';

import styles from './reportList.module.scss';

const ReportList = () => {
  const reports = [
    {
      type: 'comment',
      commentData: 'Trash content.',
      data: 'Harmful comment.'
    },
    {
      type: 'post',
      data: 'This article is derogatory. Please review.'
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <h1 className={styles.heading}> Reports </h1>
        <span className={styles['filters-row']}>
          <button type="button">
            {' '}
            <img src="/icons/filter.png" alt="Filter" />
          </button>
          <button type="button">
            <img src="/icons/search-dark.png" alt="Search" />
          </button>
        </span>
        {/** ============================== Reports List Display ============================== */}
        <div className={styles['report-list-container']}>
          {reports.map((report, index) => {
            return <Report key={`${report.type}-${index}`} report={report} />;
          })}
        </div>
        {/** ============================== Reports Display Ends ============================== */}
      </div>
    </div>
  );
};

export default ReportList;
