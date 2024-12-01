import React from 'react';
import styles from './Contacts.module.scss';

type ContactsType = {
  title: string;
  contact: string;
};

export const Contacts = ({ title, contact }: ContactsType) => {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.contactInfo}>{contact}</span>
    </div>
  );
};
