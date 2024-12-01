import { Chip, Stack } from '@mui/material';
import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import styles from './Skills.module.scss';

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className={styles.skills}>
      <div className={styles.title}>
        <TaskAltIcon />
        <h2>Навыки</h2>
      </div>
      <Stack direction="row" spacing={1} className={styles.skillsBox}>
        {skills.map((skill, index) => (
          <Chip label={skill} color="primary" variant="outlined" size="small" />
        ))}
      </Stack>
    </div>
  );
};
