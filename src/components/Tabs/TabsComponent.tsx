import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import styles from './Tabs.module.scss';

type TabsType = {
  value: number;
  handleChange: (event: SyntheticEvent<Element, Event>, value: number) => void;
};

export const TabsComponent = ({ value, handleChange }: TabsType) => {
  const tabsData = ['Информация', 'Структура', 'Команда'];

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      classes={{ root: styles.tabsRoot, indicator: styles.indicator }}
      style={{ minHeight: 34 }}>
      {tabsData.map((tab, index) => (
        <Tab label={tab} classes={{ root: styles.tab, selected: styles.selected }} />
      ))}
    </Tabs>
  );
};
