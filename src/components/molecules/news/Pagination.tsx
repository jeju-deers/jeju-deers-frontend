import PageMoveButton from "~/components/atoms/news/news/PageMoveButton";
import { PageButton, PaginationBox } from "./PaginationStyles";

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ total, limit, page, setPage }: Props) => {
  const numPages = Math.ceil(total / limit);

  const isPreviousButtonDisabled = page === 1;
  const isNextButtonDisabled = page === numPages;

  const handlePreviousEvent = () => {
    setPage(page - 1);
  };

  const handleNextEvent = () => {
    setPage(page + 1);
  };

  return (
    <PaginationBox>
      <PageMoveButton
        onClick={handlePreviousEvent}
        disabled={isPreviousButtonDisabled}
        children="< Pre"
      />
      {Array(numPages)
        .fill(null)
        .map((_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : undefined}>
            {i + 1}
          </PageButton>
        ))}
      <PageMoveButton onClick={handleNextEvent} disabled={isNextButtonDisabled} children="Next >" />
    </PaginationBox>
  );
};

export default Pagination;
