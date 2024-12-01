import React from 'react';
import styles from './WorkExperienceItem.module.scss';
import { WorkItemtype } from '../WorkExpirience';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';

export const WorkExperienceItem = ({ place, total, jobName, period }: WorkItemtype) => {
  return (
    <div className={styles.workItem}>
      <div className={styles.place}>
        <div className={styles.header}>
          <ApartmentRoundedIcon className={styles.icon} />
          <h3>{place}</h3>
        </div>
        <span className={styles.period}>—</span>
        <span className={styles.period}>{total}</span>
      </div>
      <span className={styles.job}>{jobName}</span>
      <span className={styles.period}>{period}</span>
    </div>
  );
};
