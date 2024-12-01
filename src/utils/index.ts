import { User } from '../types';

export const getUserContacts = (user: User | null): { title: string; contact: string }[] => {
  if (!user) {
    return [];
  }

  const contacts = [
    { title: 'Почта', contact: user?.email || 'example@mail.ru' },
    { title: 'Телефон', contact: user.phone },
    {
      title: 'День рождения',
      contact: user.birthDate ? formatBirthDate(user.birthDate) : '01.01.1970',
    },
    { title: 'Адрес', contact: user.address },
  ];

  return contacts.filter((item) => item.contact && item.contact.trim() !== '');
};

export const formatBirthDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
};

export const getFullOrganizationPath = (
  orgStructureoOne: string,
  orgStructureTwo: string,
  orgStructureThree: string,
  orgStructureFour: string,
  post: string,
): string => {
  const parts = [
    orgStructureoOne,
    orgStructureTwo,
    orgStructureThree,
    orgStructureFour,
    post,
  ].filter((part) => part && part.trim() !== '');

  return parts.join(' / ');
};

export const getRandomPhotoUrl = (photos: string[]): string => {
  if (photos.length === 0) {
    return '';
  }
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
};
