export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  address: string; // Адрес рабочего места
  city: string; // Город
  post: string; // Должность
  funcBlock: string; // Функциональный блок
  orgStructureoOne: string; // Уровень 1 организационной структуры
  orgStructureTwo: string; // Уровень 2 организационной структуры
  orgStructureThree: string; // Уровень 3 организационной структуры
  orgStructureFour: string; // Уровень 4 организационной структуры
  role: string; // Роль
  birthDate?: string;
  email?: string;
};
