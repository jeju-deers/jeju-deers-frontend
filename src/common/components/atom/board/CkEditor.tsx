import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Alignment,
  AutoImage,
  AutoLink,
  Autosave,
  Base64UploadAdapter,
  Bold,
  Essentials,
  GeneralHtmlSupport,
  Heading,
  ImageBlock,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Link,
  Paragraph,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

import { CKEditorWrapper, EditorContainer, MainContainer } from "./CkEditorStyles";
import translations from "ckeditor5/translations/ko.js";

const LICENSE_KEY = import.meta.env.LICENSE_KEY;

interface Props {
  onChange: (data: string) => void;
  content: string;
}

const CkEditor = ({ onChange, content }: Props) => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const editorConfig: any = {
    toolbar: {
      items: ["heading", "|", "bold", "|", "link", "|", "alignment"],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      Alignment,
      AutoImage,
      AutoLink,
      Autosave,
      Base64UploadAdapter,
      Bold,
      Essentials,
      GeneralHtmlSupport,
      Heading,
      ImageBlock,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Link,
      Paragraph,
    ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    image: {
      toolbar: [
        "imageTextAlternative",
        "|",
        "imageStyle:alignBlockLeft",
        "imageStyle:block",
        "imageStyle:alignBlockRight",
        "|",
        "resizeImage",
      ],
      styles: {
        options: ["alignBlockLeft", "block", "alignBlockRight"],
      },
    },
    initialData: content,
    language: "ko",
    licenseKey: LICENSE_KEY,
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    placeholder: "내용을 입력해주세요",
    translations: [translations],
  };

  return (
    <MainContainer>
      <EditorContainer ref={editorContainerRef}>
        <CKEditorWrapper ref={editorRef}>
          {isLayoutReady && (
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              data={content}
              onChange={(_, editor) => {
                const data = editor.getData();
                onChange(data);
              }}
            />
          )}
        </CKEditorWrapper>
      </EditorContainer>
    </MainContainer>
  );
};

export default CkEditor;
