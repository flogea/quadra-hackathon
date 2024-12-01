import React from 'react';
import styles from './WorkExpirience.module.scss';
import { WorkExperienceItem } from './WorkExpirienceItem';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';

export type WorkItemtype = {
  place: string;
  total: string;
  jobName: string;
  period: string;
};

export const WorkExpirience = ({ workExperience }: { workExperience: WorkItemtype[] }) => {
  return (
    <div className={styles.workExperience}>
      <div className={styles.header}>
        <WorkOutlineRoundedIcon />
        <h2>Опыт работы</h2>
      </div>
      <div className={styles.experience}>
        {workExperience.map((place, index) => (
          <WorkExperienceItem {...place} />
        ))}
      </div>
    </div>
  );
};
