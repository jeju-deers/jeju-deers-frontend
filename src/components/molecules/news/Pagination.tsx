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

  return (
    <PaginationBox>
      <PageMoveButton onClick={() => setPage(page - 1)} disabled={page === 1} children={"< Pre"} />
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
      <PageMoveButton
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
        children="Next >"
      />
    </PaginationBox>
  );
};

export default Pagination;
