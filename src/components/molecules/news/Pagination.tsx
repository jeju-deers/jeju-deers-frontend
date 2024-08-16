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

  const handlePageButtonClick = (pageNumber: number) => () => setPage(pageNumber);

  const handleCurrentPage = (pageNumber: number) => {
    return page === pageNumber ? "page" : undefined;
  };

  return (
    <PaginationBox>
      <PageMoveButton
        onClick={handlePreviousEvent}
        disabled={isPreviousButtonDisabled}
        buttonName="< Pre"
      />
      {Array(numPages)
        .fill(null)
        .map((_, index) => (
          <PageButton
            key={index + 1}
            onClick={handlePageButtonClick(index + 1)}
            aria-current={handleCurrentPage(index + 1)}>
            {index + 1}
          </PageButton>
        ))}
      <PageMoveButton
        onClick={handleNextEvent}
        disabled={isNextButtonDisabled}
        buttonName="Next >"
      />
    </PaginationBox>
  );
};

export default Pagination;
