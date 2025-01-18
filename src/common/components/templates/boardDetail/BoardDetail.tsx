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
  CommentTextArea,
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
import useFormatKoreanTime from "~/common/hooks/useFormatKoreanTime";
import { useState } from "react";
import useGetComments from "~/hooks/comment/query/useGetComments";
import usePostComment from "~/hooks/comment/mutate/usePostComment";
import { Comments } from "~/api/types/comments";

interface Props {
  singleBoardId: string;
  token?: string;
}

const BoardDetail = ({ singleBoardId, token }: Props) => {
  const { singleBoard, isLoading } = useGetSingleBoard(singleBoardId);
  const { data: commentsData = [] } = useGetComments({ postId: singleBoardId, token });

  const { mutate: postComment } = usePostComment();

  const [comment, setComment] = useState("");

  if (isLoading) {
    return <PendingMessage />;
  }

  const {
    title,
    content,
    owner: boardOwner,
    belong: boardBelong,
    type,
    createdAt,
    views,
  } = singleBoard;

  const { year, month, day, hours, minutes } = useFormatKoreanTime(createdAt);

  const loginOwner = localStorage.getItem("owner");
  const loginBelong = localStorage.getItem("belong");

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

  const handleSubmitComment = () => {
    if (!comment) {
      alert("댓글을 입력해주세요.");
      return;
    }

    if (!token || !loginOwner) {
      alert("로그인 후 이용해주세요.");
      return;
    }

    postComment({
      postId: singleBoardId,
      name: loginOwner,
      belong: loginBelong || "소속없음",
      content: comment,
      token,
    });
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
            <Text text={type} className="text-lg text-green-light" />
            <img src={nextArrowImage} />
          </DetailToBoardBox>
        </Link>
        <TitleBox>
          <Text text={title} className="text-8" />
        </TitleBox>
        <PostInformationBox>
          <CreationInformationBox>
            <AuthorBox>
              <Text text={boardOwner || "알 수 없음"} className="text-sm-base" />
              {/* TODO: [2024-10-28] 게시물 등록 시, belong(소속) 데이터를 전달 받아야합니다. 아직 글쓰기 작업에서 belong을 전달 하는 코드가 구현되지 않아 belong을 전달 받지 못해, 이 경우 "소속없음"을 출력하도록 구현하였습니다.*/}
              <Text text={boardBelong || "소속없음"} className="text-sm-base text-blue" />
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
              <Text text={commentsData.length} className="flex justify-end text-4.5 w-7" />
            </StatsCountBox>
          </PostStatsBox>
        </PostInformationBox>
        <ContentBox dangerouslySetInnerHTML={{ __html: content }} />
        <Text text="댓글" className="text-2xl font-semibold" />
        {commentsData.map(
          ({ postId, commentId, name, belong, createdAt, content }: Comments, index: any) => {
            const { year, month, day, hours, minutes } = useFormatKoreanTime(createdAt);

            return (
              <>
                {index !== 0 && <CommentSeparateLineBox />}
                <CommentBox key={`${postId}-${commentId}`}>
                  <CommentAuthorBox>
                    <Text text={name} className="text-xl font-semibold" />
                    <Text text={belong} className="text-xl text-blue" />
                  </CommentAuthorBox>
                  <Text text={content} className="text-xl" />
                  <Text
                    text={`${year}.${month}.${day}. ${hours}:${minutes}`}
                    className="text-xl text-gray-450"
                  />
                </CommentBox>
              </>
            );
          },
        )}
        <CommentFieldBox>
          <CommentInformationBox>
            <Text text={loginOwner || "알 수 없음"} className="text-xl" />
            <CommentTextArea
              placeholder="댓글을 남겨보세요"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </CommentInformationBox>
          <CommentSubmitButtonBox>
            <Button text="등록" styleType="submitCommentButton" onClick={handleSubmitComment} />
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
