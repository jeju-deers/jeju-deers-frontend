import tw from "twin.macro";
import styled from "styled-components";

export const WholePageBox = styled.div`
  ${tw`
    flex
    h-lvh
    min-w-380
  `}
`;

export const SideBarWrap = styled.div`
  ${tw`
    flex
    w-86.75
    h-full
    bg-green
    z-10
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
    min-h-[calc(100vh-6rem)]
    bg-gray-275
  `}
`;

export const ContentBox = styled.div`
  ${tw`
    flex-1
    m-6
    px-12
    rounded-lg-xl
    bg-white
  `}
`;

export const SubHeaderWrap = styled.div`
  ${tw`
    w-full
    pt-24
    pb-12
    border-b-8
    border-green-dark
  `}
`;
