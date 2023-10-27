const SearchForm = ({handleSearchEmployee}: {handleSearchEmployee: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <form className="flex flex-row items-center">
      <input
        placeholder="Search employee"
        className="block px-3 py-2 text-sm bg-slate-700 outline-none w-1/2 my-2 text-slate-200"
        type="search"
        onChange={handleSearchEmployee}
      />
    </form>
  );
};

export default SearchForm;
