import styled from "styled-components";
import tw from "twin.macro";

export const MainContainer = styled.div`
  ${tw`
    font-sans
  `}
`;

export const EditorContainer = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const CKEditorWrapper = styled.div`
  ${tw`
    
  `}

  .ck-editor__editable {
    ${tw`
      min-h-96
    `}
  }

  .media {
    ${tw`
        w-100
    `}
  }
`;
