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
import axios from "axios";
import Heading from "~/components/atoms/club/Heading";
import helmet from "~/assets/images/helmet.svg";

interface Props {
  writeOption: string;
  setWriteOption: React.Dispatch<React.SetStateAction<string>>;
}

const NewsWrite = ({ writeOption, setWriteOption }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleWriteDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWriteOption(e.target.value);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://jeju-deers-backend.fly.dev/boards",
        {
          title,
          content,
          type: writeOption,
          owner: "kimmjae2312",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        },
      );
      console.log("Post saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving the post:", error);
    }
  };

  return (
    <NewsWriteLayout>
      <Heading src={helmet} alt="helmet" text="게시글 작성" />
      <SaveButtonWrap>
        <SaveButton onClick={handleSave}>등록</SaveButton>
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
