import tw from "twin.macro";
import styled from "styled-components";

export const MainLayout = styled.div`
  ${tw`
    flex 
    flex-col
    h-screen
  `}
`;

export const MainContentWrap = styled.div`
  ${tw`
    flex
    h-screen
    overflow-x-hidden
  `}
`;
