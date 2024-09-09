import upArrowImage from "~/assets/images/up_arrow.svg";
import downArrowImage from "~/assets/images/down_arrow.svg";
import Button from "~/common/components/atom/boardDetail/Button";
import { BoardDetailLayout, MoveListButtonBox, MovePostButtonBox } from "./BoardDetailStyles";

const BoardDetail = () => {
  return (
    <BoardDetailLayout>
      <MovePostButtonBox>
        <Button text="이전글" image={upArrowImage} styleType="movePostButton" />
        <Button text="다음글" image={downArrowImage} styleType="movePostButton" />
        <Button text="등록" styleType="submitCommentButton" />
      </MovePostButtonBox>
      <div>
        <div>디어스 훈련 일정</div>
        <div>24년 8월 훈련 일정 공지</div>
        <div>
          <div>
            <div>
              <div>박재광</div>
              <div>매니저</div>
            </div>
            <div>2024년 8월 23일 13:30</div>
          </div>
          <div>
            <div>
              <div>조회수</div>
              <div>0</div>
            </div>
            <div>
              <div>댓글수</div>
              <div>10</div>
            </div>
          </div>
        </div>
        <div>제 이름은 박재광 입니다.</div>
        <div>댓글</div>
        <div>
          <div>
            <div>김민재</div>
            <div>OB</div>
          </div>
          <div>확실한 가요?</div>
          <div>2024.08.23. 14:00</div>
        </div>
        <div>
          <div>
            <div>박재광</div>
            <div>댓글을 남겨보세요</div>
          </div>
          <Button text="등록" styleType="submitCommentButton" />
        </div>
      </div>
      <MoveListButtonBox>
        <Button text="목록" styleType="moveListButton" />
        <Button text="TOP" image={upArrowImage} styleType="moveListButton" />
      </MoveListButtonBox>
    </BoardDetailLayout>
  );
};

export default BoardDetail;
