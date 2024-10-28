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
import COMMENT_TEMPORORY_DATA from "~/constants/commentTemporaryData";

const BoardDetail = () => {
  // TODO: [2024-10-27] 임시 댓글 목록 상수 데이터를 이용하여 구현. 댓글 조회 api 구현 이후 수정 및 삭제 필요.
  const commentData = COMMENT_TEMPORORY_DATA;
  
  return (
    <BoardDetailLayout>
      <MovePostButtonBox>
        <Button text="이전글" image={upArrowImage} styleType="movePostButton" />
        <Button text="다음글" image={downArrowImage} styleType="movePostButton" />
      </MovePostButtonBox>
      <PostDetailBox>
        <DetailToBoardBox>
          <Text
            text="디어스 훈련 일정"
            // image={nextArrowImage}
            className="text-lg text-green-light"
          />
          <img src={nextArrowImage} />
        </DetailToBoardBox>
        <TitleBox>
          <Text text="24년 8월 훈련 일정 공지" className="text-8" />
        </TitleBox>
        <PostInformationBox>
          <CreationInformationBox>
            <AuthorBox>
              <Text text="박재광" className="text-sm-base" />
              <Text text="매니저" className="text-sm-base text-blue" />
            </AuthorBox>
            <Text text="2024년 8월 23일 13:30" className="text-sm-base text-gray-600" />
          </CreationInformationBox>
          <PostStatsBox>
            <StatsCountBox>
              <Text text="조회수" className="text-4.5" />
              <Text text="0" className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
            <StatsCountBox>
              <Text text="댓글수" className="text-4.5" />
              <Text text="10" className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
          </PostStatsBox>
        </PostInformationBox>
        <ContentBox>
          제 이름은 박재광 입니다. <br />
          저는 바보입니다. <br />
          감사합니다.
        </ContentBox>
        <Text text="댓글" className="text-2xl font-semibold" />
        {commentData.map(({ name, belong, create_at: createAt, content }, index) => (
          <>
            {index != 0 && <CommentSeparateLineBox />}
            <CommentBox key={index + "-" + content}>
              <CommentAuthorBox>
                <Text text={name} className="text-xl font-semibold" />
                <Text text={belong} className="text-xl text-blue" />
              </CommentAuthorBox>
              <Text text={content} className="text-xl" />
              <Text text={createAt} className="text-xl text-gray-450" />
            </CommentBox>
          </>
        ))}
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
