import SearchButton from "~/components/atoms/news/news/SearchButton";
import DropdownButton from "~/components/atoms/news/news/DropDownButton";
import { SearchBox, SearchInput } from "./SearchStyles";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchFilterOption: string;
  setSearchFilterOption: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const Search = ({
  searchQuery,
  setSearchQuery,
  searchFilterOption,
  setSearchFilterOption,
  onSearch,
}: Props) => {
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchFilterOption(event.target.value);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchBox>
      <DropdownButton value={searchFilterOption} onChange={handleDropdownChange} />
      <SearchInput
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <SearchButton onClick={onSearch} />
    </SearchBox>
  );
};

export default Search;
