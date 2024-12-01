import React from 'react';
import { DefaultUserCard, SmallUserCard } from '../UserCard';
import styles from './StructureComponent.module.scss';

export const StructureComponent = ({ podrName, user, image }: any) => {
  return (
    <div className={styles.org}>
      <h2>{podrName}</h2>
      <div className={styles.orgAndMains}>
        <DefaultUserCard {...user} small image={image} />

        <div className={styles.mains}>
          <SmallUserCard {...user} small image={image} />
          <SmallUserCard {...user} small image={image} />
          <SmallUserCard {...user} small image={image} />
        </div>
      </div>
    </div>
  );
};
