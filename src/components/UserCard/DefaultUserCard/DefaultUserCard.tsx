import React from 'react';
import styles from './DefaultUserCard.module.scss';
import { User } from '../../../types';

type UserInfoCarrdType = {
  image: string;
  small?: boolean;
};

type UserSubset = Pick<User, 'id' | 'lastName' | 'firstName' | 'post' | 'funcBlock'>;

export const DefaultUserCard = ({
  id,
  lastName,
  firstName,
  post,
  funcBlock,
  image,
  small,
}: UserSubset & UserInfoCarrdType) => {
  return (
    <div className={`${styles.defaultCard} ${small ? styles.small : ''}`}>
      <div className={styles.image}>
        <img className={styles.image} src={image} alt="portrait" />
        <div className={styles.status}></div>
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>
          {lastName} {firstName}
        </h2>
        <div className={styles.userPositionInfo}>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              {funcBlock} / {post}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
