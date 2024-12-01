import React, { useEffect } from 'react';
import styles from './UserInfoPage.module.scss';
import { DefaultUserCard, LargeUserCard } from '../../components/UserCard';
import {
  Contacts,
  Search,
  Skills,
  StructureComponent,
  TabsComponent,
  WorkExpirience,
} from '../../components';
import { observer } from 'mobx-react-lite';
import { CircularProgress } from '@mui/material';
import { getRandomPhotoUrl, getUserContacts } from '../../utils';
import { useStore } from '../../app/StoreContext';
import { Link, useParams } from 'react-router-dom';
import { photoLinks, skills, workExp } from '../../mocks';

export const UserInfoPage = observer(() => {
  const { userStore } = useStore();
  const { id } = useParams();
  const { fetchUserById, fetchUsers } = userStore;
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    fetchUserById(id);
    fetchUsers();
  }, [userStore, id, fetchUserById, fetchUsers]);

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

  const { currentUser, users } = userStore;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderContent = () => {
    if (value === 0) {
      return (
        <div className={styles.userPersonalInfo}>
          <WorkExpirience workExperience={workExp} />
          <Skills skills={skills} />
        </div>
      );
    }

    if (value === 1) {
      return (
        <div className={styles.orgStruct}>
          {[currentUser].map((org, index) => (
            <>
              {org?.orgStructureoOne && (
                <StructureComponent
                  podrName={org?.orgStructureoOne}
                  user={org}
                  image={getRandomPhotoUrl(photoLinks)}
                />
              )}
              {org?.orgStructureTwo && (
                <StructureComponent
                  podrName={org?.orgStructureTwo}
                  user={org}
                  image={getRandomPhotoUrl(photoLinks)}
                />
              )}
              {org?.orgStructureThree && (
                <StructureComponent
                  podrName={org?.orgStructureThree}
                  user={org}
                  image={getRandomPhotoUrl(photoLinks)}
                />
              )}
              {org?.orgStructureFour && (
                <StructureComponent
                  podrName={org?.orgStructureFour}
                  user={org}
                  image={getRandomPhotoUrl(photoLinks)}
                />
              )}
            </>
          ))}
        </div>
      );
    }

    if (value === 2) {
      return (
        <div className={styles.workExperience}>
          <h2>Команда</h2>
          {users.slice(0, 4).map((collegue, index) => (
            <DefaultUserCard
              key={collegue.id}
              {...collegue}
              image={getRandomPhotoUrl(photoLinks)}
            />
          ))}
        </div>
      );
    }
    return null;
  };

  const contacts = getUserContacts(currentUser);

  return (
    <div className={styles.userInfoPage}>
      <Search users={users} />
      <LargeUserCard {...currentUser!} />
      <div className={styles.contactInfo}>
        {contacts && contacts?.map((contact, index) => <Contacts {...contact} />)}
      </div>
      <div className={styles.tabPanel}>
        <TabsComponent value={value} handleChange={handleChange} />
        {value === 1 && <Link to={`/structure`}>Посмотреть всю структуру</Link>}
      </div>

      {renderContent()}
    </div>
  );
});
