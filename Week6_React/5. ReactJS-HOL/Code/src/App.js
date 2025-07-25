import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohort1 = {
    name: "Java Full Stack",
    batch: "Batch 17",
    status: "ongoing",
    startDate: "2025-07-01",
    endDate: "2025-10-15"
  };

  const cohort2 = {
    name: "Python Data Science",
    batch: "Batch 16",
    status: "completed",
    startDate: "2025-03-01",
    endDate: "2025-06-30"
  };

  return (
    <div style={{ padding: '20px' }}>
      <CohortDetails cohort={cohort1} />
      <CohortDetails cohort={cohort2} />
    </div>
  );
}

export default App;
