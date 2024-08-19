import { SearchButtonButton } from "./SearchButtonStyles";

interface Props {
  onClick: () => void;
}

const SearchButton = ({ onClick }: Props) => (
  <SearchButtonButton onClick={onClick}>검색</SearchButtonButton>
);

export default SearchButton;
