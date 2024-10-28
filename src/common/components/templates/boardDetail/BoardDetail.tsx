import upArrowImage from "~/assets/images/up_arrow.svg";
import downArrowImage from "~/assets/images/down_arrow.svg";
import nextArrowImage from "~/assets/images/next_arrow.svg";
import Button from "~/common/components/atom/boardDetail/Button";
import {
  AuthorBox,
  BoardDetailLayout,
  CommentAuthorBox,
  CommentBox,
  CommentFieldBox,
  CommentInformationBox,
  CommentSeparateLineBox,
  CommentSubmitButtonBox,
  ContentBox,
  CreationInformationBox,
  DetailToBoardBox,
  MoveListButtonBox,
  MovePostButtonBox,
  PostDetailBox,
  PostInformationBox,
  PostStatsBox,
  StatsCountBox,
  TitleBox,
} from "./BoardDetailStyles";
import Text from "~/common/components/atom/boardDetail/Text";
import useGetSingleBoard from "~/hooks/board/query/useGetSingleBoard";
import PendingMessage from "../../atom/PendingMessage";
import { Link } from "react-router-dom";
import TAB_MENU_ITEMS, { TabMenuItems } from "~/constants/tabMenuItems";
import useFormatKoreanTime from "~/hooks/board/useFormatKoreanTime";

interface Props {
  singleBoardId: string;
}

const BoardDetail = ({ singleBoardId }: Props) => {
  const { singleBoard, isLoading } = useGetSingleBoard(singleBoardId);

  if (isLoading) {
    return <PendingMessage />;
  }

  const { title, content, owner, belong, type, createdAt, views } = singleBoard;

  const { year, month, day, hours, minutes } = useFormatKoreanTime(createdAt);

  const findBoardRoute = (type: string) => {
    for (const category in TAB_MENU_ITEMS) {
      const menus = TAB_MENU_ITEMS[category as keyof TabMenuItems];

      const menu = menus.find((item) => item.boardType === type);

      if (menu) {
        return menu.to;
      }
    }
    return "/";
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <BoardDetailLayout>
      <MovePostButtonBox>
        <Button text="이전글" image={upArrowImage} styleType="movePostButton" />
        <Button text="다음글" image={downArrowImage} styleType="movePostButton" />
      </MovePostButtonBox>
      <PostDetailBox>
        <Link to={findBoardRoute(type)}>
          <DetailToBoardBox>
            <Text
              text={type}
              // image={nextArrowImage}
              className="text-lg text-green-light"
            />
            <img src={nextArrowImage} />
          </DetailToBoardBox>
        </Link>
        <TitleBox>
          <Text text={title} className="text-8" />
        </TitleBox>
        <PostInformationBox>
          <CreationInformationBox>
            <AuthorBox>
              <Text text={owner || "알 수 없음"} className="text-sm-base" />
              {/* TODO: [2024-10-28] 게시물 등록 시, belong(소속) 데이터를 전달 받아야합니다. 아직 글쓰기 작업에서 belong을 전달 하는 코드가 구현되지 않아 belong을 전달 받지 못해, 이 경우 "소속없음"을 출력하도록 구현하였습니다.*/}
              <Text text={belong || "소속없음"} className="text-sm-base text-blue" />
            </AuthorBox>
            <Text
              text={`${year}년 ${month}월 ${day}일 ${hours}:${minutes}`}
              className="text-sm-base text-gray-600"
            />
          </CreationInformationBox>
          <PostStatsBox>
            <StatsCountBox>
              <Text text="조회수" className="text-4.5" />
              <Text text={views} className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
            <StatsCountBox>
              <Text text="댓글수" className="text-4.5" />
              <Text text="10" className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
          </PostStatsBox>
        </PostInformationBox>
        <ContentBox dangerouslySetInnerHTML={{ __html: content }} />
        <Text text="댓글" className="text-2xl font-semibold" />
        <CommentBox>
          <CommentAuthorBox>
            <Text text="김민재" className="text-xl font-semibold" />
            <Text text="OB" className="text-xl text-blue" />
          </CommentAuthorBox>
          <Text text="확실한 가요?" className="text-xl" />
          <Text text="2024.08.23. 14:00" className="text-xl text-gray-450" />
        </CommentBox>
        <CommentSeparateLineBox />
        <CommentBox>
          <CommentAuthorBox>
            <Text text="고겨레" className="text-xl font-semibold" />
            <Text text="OB" className="text-xl text-blue" />
          </CommentAuthorBox>
          <Text text="지가 봤구먼유" className="text-xl" />
          <Text text="2024.08.23. 14:10" className="text-xl text-gray-450" />
        </CommentBox>
        <CommentFieldBox>
          <CommentInformationBox>
            <Text text="박재광" className="text-xl" />
            <Text text="댓글을 남겨보세요" className="text-4.5 text-gray-500" />
          </CommentInformationBox>
          <CommentSubmitButtonBox>
            <Button text="등록" styleType="submitCommentButton" />
          </CommentSubmitButtonBox>
        </CommentFieldBox>
      </PostDetailBox>
      <MoveListButtonBox>
        <Link to={findBoardRoute(type)}>
          <Button text="목록" styleType="moveListButton" />
        </Link>
        <Button
          text="TOP"
          image={upArrowImage}
          styleType="moveListButton"
          onClick={handleScrollTop}
        />
      </MoveListButtonBox>
    </BoardDetailLayout>
  );
};

export default BoardDetail;
