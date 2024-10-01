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
  DetailToListBox,
  MoveListButtonBox,
  MovePostButtonBox,
  PostDetailBox,
  PostInformationBox,
  PostStats,
  StatsCountBox,
  TitleBox,
} from "./BoardDetailStyles";
import Text from "~/common/components/atom/boardDetail/Text";
import useGetSingleBoard from "~/hooks/board/query/useGetSingleBoard";

interface Props {
  singleBoardId: string;
}

const BoardDetail = ({ singleBoardId }: Props) => {
  const { singleBoard } = useGetSingleBoard(singleBoardId);
  // TODO: [2024-10-01] belong(소속), views(조회수)에 대한 데이터가 서버에서 추가되면 사용 예정
  const { title, content, owner, type, createdAt } = singleBoard;

  return (
    <BoardDetailLayout>
      <MovePostButtonBox>
        <Button text="이전글" image={upArrowImage} styleType="movePostButton" />
        <Button text="다음글" image={downArrowImage} styleType="movePostButton" />
      </MovePostButtonBox>
      <PostDetailBox>
        <DetailToListBox>
          <Text
            text={type}
            // image={nextArrowImage}
            className="text-lg text-green-light"
          />
          <img src={nextArrowImage} />
        </DetailToListBox>
        <TitleBox>
          <Text text={title} className="text-8" />
        </TitleBox>
        <PostInformationBox>
          <CreationInformationBox>
            <AuthorBox>
              <Text text={owner} className="text-sm-base" />
              <Text text="매니저" className="text-sm-base text-blue" />
            </AuthorBox>
            <Text text={createdAt} className="text-sm-base text-gray-600" />
          </CreationInformationBox>
          <PostStats>
            <StatsCountBox>
              <Text text="조회수" className="text-4.5" />
              <Text text="0" className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
            <StatsCountBox>
              <Text text="댓글수" className="text-4.5" />
              <Text text="10" className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
          </PostStats>
        </PostInformationBox>
        <ContentBox dangerouslySetInnerHTML={{ __html: content }} />
        <Text text="댓글" className="text-2xl font-semibold" />
        <CommentBox>
          <CommentAuthorBox>
            <Text text="김민재" className="text-xl font-semibold" />
            <Text text="OB" className="text-xl text-blue" />
          </CommentAuthorBox>
          <Text text="확실한 가요?" className="text-xl" />
          <Text text="2024.08.23. 14:00" className="text-xl text-gray-450" />{" "}
        </CommentBox>
        <CommentSeparateLineBox />
        <CommentBox>
          <CommentAuthorBox>
            <Text text="고겨레" className="text-xl font-semibold" />
            <Text text="OB" className="text-xl text-blue" />
          </CommentAuthorBox>
          <Text text="지가 봤구먼유" className="text-xl" />
          <Text text="2024.08.23. 14:10" className="text-xl text-gray-450" />{" "}
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
        <Button text="목록" styleType="moveListButton" />
        <Button text="TOP" image={upArrowImage} styleType="moveListButton" />
      </MoveListButtonBox>
    </BoardDetailLayout>
  );
};

export default BoardDetail;
