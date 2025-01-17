import React, { useState, useEffect } from "react";
import { NOTICE_DATA } from "~/constants/noticeData";
import WriteDropdownButton from "../atom/board/WriteDropDownButton";
import CkEditor from "../atom/board/CkEditor";
import Heading from "~/components/atoms/club/Heading";
import helmet from "~/assets/images/helmet.svg";
import useUpdateBoard from "~/common/hooks/update/mutate/useUpdateBoard";
import {
  BoardUpdateLayout,
  Notice,
  NoticeBox,
  SaveButton,
  SaveButtonWrap,
  TitleInput,
  WriteContentBox,
  WriteDropdownButtonWrap,
  WriteTitleBox,
} from "./BoardUpdateStyle";

interface Props {
  singleBoardId: string;
}

const BoardUpdate = ({ singleBoardId }: Props) => {
  const [writeOption, setWriteOption] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutate: updateBoard, isError, isSuccess } = useUpdateBoard();

  // useEffect(() => {
  //   const fetchBoardData = async () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       console.error("토큰이 만료되었습니다. 다시 로그인 해주세요");
  //       return;
  //     }
  //     if (singleBoardId) {
  //       // const numericId = parseInt(id, 10);
  //       // const boardData = await getBoardDetails({ id: numericId, token });
  //       setTitle(singleBoard.title);
  //       setContent(singleBoard.content);
  //       setWriteOption(singleBoard.type.toLowerCase());
  //     }
  //   };

  //   fetchBoardData();
  // }, [singleBoardId, setWriteOption]);

  const handleWriteDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWriteOption(event.target.value);
  };

  const handleSave = () => {
    const token = localStorage.getItem("token");
    const owner = localStorage.getItem("owner");

    if (!token || !owner) {
      console.error("토큰이 만료되었습니다. 다시 로그인 해주세요");
      return;
    }

    const upperCaseWriteOption = writeOption.toUpperCase();

    if (!singleBoardId) {
      console.error("ID가 존재하지 않습니다. URL을 확인하세요.");
      return;
    }

    updateBoard({ id: singleBoardId, title, content, type: upperCaseWriteOption, token, owner });
    console.log(`Updated: ${title}, ${content}, ${upperCaseWriteOption}`);
  };

  return (
    <BoardUpdateLayout>
      <Heading src={helmet} alt="helmet" text="게시글 수정" />
      <SaveButtonWrap>
        <SaveButton onClick={handleSave}>수정 완료</SaveButton>
      </SaveButtonWrap>
      {isError && <p style={{ color: "red" }}>게시글 수정 실패!</p>}
      {isSuccess && <p style={{ color: "green" }}>게시글이 성공적으로 수정되었습니다!</p>}
      <NoticeBox>
        <Notice>{NOTICE_DATA}</Notice>
      </NoticeBox>
      <WriteTitleBox>
        <WriteDropdownButtonWrap>
          <WriteDropdownButton value={writeOption} onChange={handleWriteDropdownChange} />
        </WriteDropdownButtonWrap>
        <TitleInput
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </WriteTitleBox>
      <WriteContentBox>
        <CkEditor onChange={(data) => setContent(data)} />
      </WriteContentBox>
    </BoardUpdateLayout>
  );
};

export default BoardUpdate;
