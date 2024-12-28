import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoardWriteLayout,
  Notice,
  NoticeBox,
  TitleInput,
  WriteContentBox,
  WriteDropdownButtonWrap,
  WriteTitleBox,
  SaveButtonWrap,
  SaveButton,
} from "./BoardWriteStyle";
import { NOTICE_DATA } from "~/constants/noticeData";
import WriteDropdownButton from "../atom/board/WriteDropDownButton";
import CkEditor from "../atom/board/CkEditor";
import Heading from "~/components/atoms/club/Heading";
import helmet from "~/assets/images/helmet.svg";
import usePostWrite from "~/common/hooks/write/mutate/usePostWrite";

interface Props {
  section: any;
}

const BoardWrite = ({ section }: Props) => {
  const [writeOption, setWriteOption] = useState(section || "");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutate, isError, isSuccess } = usePostWrite();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      alert("게시글 저장 실패!");
    }

    if (isSuccess) {
      alert("게시글이 성공적으로 저장되었습니다!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [isError, isSuccess]);

  const handleWriteDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWriteOption(event.target.value);
  };

  const handleSaveButton = () => {
    const token = localStorage.getItem("token");
    const owner = localStorage.getItem("owner");

    if (!token || !owner) {
      console.error("토큰이 만료되었습니다. 다시 로그인 해주세요");
      return;
    }
    const upperCaseWriteOption = writeOption.toUpperCase();
    mutate({ title, content, owner, type: upperCaseWriteOption, token });
    console.log(title, content, owner, upperCaseWriteOption);
  };

  return (
    <BoardWriteLayout>
      <Heading src={helmet} alt="helmet" text="게시글 작성" />
      <SaveButtonWrap>
        <SaveButton onClick={handleSaveButton}>등록</SaveButton>
      </SaveButtonWrap>
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
          onChange={(event) => setTitle(event.target.value)}
        />
      </WriteTitleBox>
      <WriteContentBox>
        <CkEditor onChange={(data) => setContent(data)} />
      </WriteContentBox>
    </BoardWriteLayout>
  );
};

export default BoardWrite;
