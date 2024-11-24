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

interface Props {
  writeOption: string;
  setWriteOption: React.Dispatch<React.SetStateAction<string>>;
}

const NewsWrite = ({ writeOption, setWriteOption }: Props) => {
  const [title, setTitle] = useState("");
  // ESLint에서 '사용되지 않는 변수'에 대한 기본 규칙에 대해 예외 처리를 위해 아래 주석 사용
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState("");

  const handleWriteDropdownChange = (element: React.ChangeEvent<HTMLSelectElement>) => {
    setWriteOption(element.target.value);
  };

  return (
    <NewsWriteLayout>
      <Heading src={helmet} alt="helmet" text="게시글 작성" />
      <SaveButtonWrap>
        <SaveButton>등록</SaveButton>
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
          onChange={(element) => setTitle(element.target.value)}
        />
      </WriteTitleBox>
      <WriteContentBox>
        <CkEditor onChange={(data) => setContent(data)} />
      </WriteContentBox>
    </NewsWriteLayout>
  );
};

export default NewsWrite;
