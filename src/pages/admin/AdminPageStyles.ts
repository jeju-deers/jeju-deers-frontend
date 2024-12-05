import tw from "twin.macro";
import styled from "styled-components";

export const WholePageBox = styled.div`
  ${tw`
    flex
    h-screen
    min-w-363
  `}
`;

export const PrimaryContentBox = styled.div`
  ${tw`
    flex-1
  `}
`;

export const ContentBoxWrap = styled.div`
  ${tw`
    flex
    h-[calc(100vh-6rem)]
    bg-gray-275
  `}
`;

export const ContentBox = styled.div`
  ${tw`
    flex-1
    m-6
    rounded-lg-xl
    bg-white
  `}
`;
