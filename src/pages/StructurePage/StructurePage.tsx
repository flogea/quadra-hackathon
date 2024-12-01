import { useEffect } from 'react';
import { Search, TreeChart } from '../../components';
import { useStore } from '../../app/StoreContext';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './StructurePage.module.scss';

export const StructurePage = () => {
  const { userStore } = useStore();
  const { fetchUsers } = userStore;

  useEffect(() => {
    fetchUsers();
  }, [userStore]);

  if (userStore.loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (userStore.error) {
    return <div>Ошибка: {userStore.error}</div>;
  }

  const { users } = userStore;
  return (
    <div className={styles.structure}>
      <Search users={users} />
      <Link to={`/user/1`}>Назад</Link>
      <TreeChart />
    </div>
  );
};
