import tw from "twin.macro";
import styled from "styled-components";

export const LoginLayout = styled.div`
  ${tw`
    
  `}
`;

export const LoginForm = styled.form`
  ${tw`
    flex
    flex-col
    gap-2
    m-10
  `}
`;

export const LoginInput = styled.input`
  ${tw`
    border-2
    border-gray-400
    p-2
  `}
`;

export const LoginButton = styled.button`
  ${tw`
    bg-gray-400
  `}
`;
