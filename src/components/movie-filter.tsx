import React, { useState } from 'react';

interface SearchBoxProps {
  movies: any[];
  onFilter: (filteredMovies: any[]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ movies, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(term));
    setSearchTerm(term);
    onFilter(filtered);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '30%',
      margin: '5% auto',
      borderRadius: '30px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    }}>
      <input
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '30px',
          border: 'none',
          outline: 'none',
          fontSize: '16px',
          textAlign: 'center'
        }}
        type="text"
        placeholder="Pesquisar Filmes"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;