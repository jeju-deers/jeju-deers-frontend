import BoardDetail from "~/common/components/templates/boardDetail/BoardDetail";

const BoardDetailPage = () => {
  // TODO: [2024-10-26] 조회할 게시글의 아이디를 임의로 적용. 추후 수정 필요.
  const singleBoardId = "24";

  return <BoardDetail singleBoardId={singleBoardId} />;
};

export default BoardDetailPage;
