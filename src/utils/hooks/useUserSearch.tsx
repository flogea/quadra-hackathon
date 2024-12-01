import { useState } from 'react';

export const useUserSearch = (users: any[]) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<any[]>(users);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = users.filter((user) => {
      const queryLowerCase = query.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(queryLowerCase) ||
        user.lastName.toLowerCase().includes(queryLowerCase) ||
        user.post.toLowerCase().includes(queryLowerCase) ||
        user.funcBlock.toLowerCase().includes(queryLowerCase) ||
        user.orgStructureoOne.toLowerCase().includes(queryLowerCase) ||
        user.orgStructureTwo.toLowerCase().includes(queryLowerCase) ||
        user.orgStructureThree.toLowerCase().includes(queryLowerCase) ||
        user.orgStructureFour.toLowerCase().includes(queryLowerCase)
      );
    });

    setFilteredUsers(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return {
    searchQuery,
    filteredUsers,
    handleSearchChange,
    clearSearch,
  };
};
