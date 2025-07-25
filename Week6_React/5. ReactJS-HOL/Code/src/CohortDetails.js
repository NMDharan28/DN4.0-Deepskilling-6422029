// src/CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css'; // ✅ Import CSS Module

function CohortDetails({ cohort }) {
  // ✅ Step 10: Conditionally set <h3> style
  const headingStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohort.name}</h3>
      <dl>
        <dt>Batch:</dt>
        <dd>{cohort.batch}</dd>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date:</dt>
        <dd>{cohort.endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
