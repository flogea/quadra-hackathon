import React from 'react';
import styles from './SmallUserCard.module.scss';
import { Tooltip } from '@mui/material';

type UserCardType = {
  id: number | string;
  name: string;
  job: string;
  image: string;
  small?: boolean;
};

export const SmallUserCard = ({ name, job, image, small }: UserCardType) => {
  return (
    <Tooltip title={name}>
      <div className={`${styles.smallCard} ${small ? styles.small : ''}`}>
        <div className={styles.image}>
          <img className={styles.image} src={image} alt="portrait" />
          <div className={styles.status}></div>
        </div>
      </div>
    </Tooltip>
  );
};
