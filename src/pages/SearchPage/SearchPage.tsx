import { useEffect } from 'react';
import { DefaultUserCard, Search } from '../../components';
import styles from './SearchPage.module.scss';
import { CircularProgress } from '@mui/material';
import { useStore } from '../../app/StoreContext';
import { Link } from 'react-router-dom';

export const SearchPage = () => {
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
  console.log(users);

  return (
    <div className={styles.seacrhPage}>
      <Search users={users ? users : []} />
      {users.map((user, index) => (
        <Link to={`/user/${user.id}`}>
          <DefaultUserCard {...user} image="" />
        </Link>
      ))}
    </div>
  );
};
