import styles from './Search.module.scss';
import { DefaultUserCard } from '../UserCard';
import { User } from '../../types';
import { useUserSearch } from '../../utils/hooks/useUserSearch';
import { Link } from 'react-router-dom';
import { getRandomPhotoUrl } from '../../utils';
import { photoLinks } from '../../mocks';

export const Search = ({ users }: { users: User[] }) => {
  const { searchQuery, filteredUsers, handleSearchChange, clearSearch } = useUserSearch(users);

  return (
    <div className={styles.searchBlock}>
      <input
        type="search"
        className={styles.search}
        placeholder="Поиск"
        onChange={handleSearchChange}
        value={searchQuery}
      />
      {!!filteredUsers.length && searchQuery.length > 0 && (
        <div className={styles.userCards}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <Link to={`/user/${user.id}`} onClick={clearSearch}>
                <DefaultUserCard
                  key={user.id}
                  {...user}
                  image={getRandomPhotoUrl(photoLinks)}
                  small
                />
              </Link>
            ))
          ) : (
            <p>Пользователи не найдены</p>
          )}
        </div>
      )}
    </div>
  );
};
