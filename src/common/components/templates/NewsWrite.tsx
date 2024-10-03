import React, { useState } from "react";
import {
  NewsWriteLayout,
  Notice,
  NoticeBox,
  TitleInput,
  WriteContentBox,
  WriteDropdownButtonWrap,
  WriteTitleBox,
  SaveButtonWrap,
  SaveButton,
} from "./NewsWriteStyle";
import { NOTICE_DATA } from "~/constants/noticeData";
import WriteDropdownButton from "../atom/board/WriteDropDownButton";
import CkEditor from "../atom/board/CkEditor";
import Heading from "~/components/atoms/club/Heading";
import helmet from "~/assets/images/helmet.svg";
import usePostWrite from "~/common/hooks/write/mutate/usePostWrite";

interface Props {
  writeOption: string;
  setWriteOption: React.Dispatch<React.SetStateAction<string>>;
}

const NewsWrite = ({ writeOption, setWriteOption }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutate, isError, isSuccess } = usePostWrite();

  const handleWriteDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWriteOption(e.target.value);
  };

  const handleSave = () => {
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
    <NewsWriteLayout>
      <Heading src={helmet} alt="helmet" text="게시글 작성" />
      <SaveButtonWrap>
        <SaveButton onClick={handleSave}>등록</SaveButton>
      </SaveButtonWrap>
      {isError && <p style={{ color: "red" }}>게시글 저장 실패!</p>}
      {isSuccess && <p style={{ color: "green" }}>게시글이 성공적으로 저장되었습니다!</p>}
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
    </NewsWriteLayout>
  );
};

export default NewsWrite;
