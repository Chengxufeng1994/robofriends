import React from 'react';

interface ISearchBox {
  searchChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBox = ({ /** searchfield, */ searchChange }: ISearchBox) => {
  console.log('[Render SearchBox]');
  return (
    <div className="pa2">
      <input
        aria-label="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
