import React from 'react';
import styles from './StatusIcon.module.scss';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SchoolIcon from '@mui/icons-material/School';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MedicationIcon from '@mui/icons-material/Medication';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

type StatusType = {
  statusType: 'vacation' | 'ilness' | 'education' | 'maternity' | 'businessTrip';
};

export const StatusIcon = ({ statusType }: StatusType) => {
  const renderIcon = () => {
    if (statusType === 'vacation') {
      return <WbSunnyIcon className={styles.icon} />;
    } else if (statusType === 'ilness') {
      return <MedicationIcon className={styles.icon} />;
    } else if (statusType === 'education') {
      return <SchoolIcon className={styles.icon} />;
    } else if (statusType === 'businessTrip') {
      return <AirplanemodeActiveIcon className={styles.icon} />;
    } else if (statusType === 'maternity') {
      return <ChildFriendlyIcon className={styles.icon} />;
    }
  };

  return <div className={styles.status}>{renderIcon()}</div>;
};
