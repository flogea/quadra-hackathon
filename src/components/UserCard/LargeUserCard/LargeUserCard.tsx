import React from 'react';
import styles from './LargeUserCard.module.scss';
import { User } from '../../../types';
import { getFullOrganizationPath } from '../../../utils';

export const LargeUserCard = ({
  id,
  orgStructureoOne,
  orgStructureTwo,
  orgStructureThree,
  orgStructureFour,
  funcBlock,
  role,
  post,
  lastName,
  firstName,
}: User) => {
  return (
    <div className={styles.largeCard}>
      <div className={styles.image}>
        <img
          className={styles.image}
          src="https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=612x612&w=0&k=20&c=klIlcueGJlAnOehrIZNpvFrVT_olKKqhaVT77H5Fj-s="
          alt="portrait"
        />
        <div className={styles.status}></div>
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>
          {lastName} {firstName}
        </h2>
        <div className={styles.userPositionInfo}>
          <div className={styles.text}>
            <span className={styles.title}>Роль</span>
            <span className={styles.subtitle}>{role}</span>
          </div>
          <div className={styles.text}>
            <span className={styles.title}>Блок</span>
            <span className={styles.subtitle}>{funcBlock}</span>
          </div>
          <div className={styles.text}>
            <span className={styles.title}>Подразделение</span>
            <span className={styles.subtitle}>
              {getFullOrganizationPath(
                orgStructureoOne,
                orgStructureTwo,
                orgStructureThree,
                orgStructureFour,
                post,
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
