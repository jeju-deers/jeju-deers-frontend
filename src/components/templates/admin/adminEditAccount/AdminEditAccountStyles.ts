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
    flex
    flex-col
    m-6
    px-12
    rounded-lg-xl
    bg-white
    items-center
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

export const AdminEditAccountForm = styled.form`
  ${tw`
    w-235
    flex
    flex-col
    items-center
  `}
`;

export const BasicItemsInputFieldWrap = styled.div`
  ${tw`
    w-full
    items-center
    justify-center
    pt-12
  `}
`;

export const OptionItemsInputFieldWrap = styled.div`
  ${tw`
    w-full
    pb-12
  `}
`;

export const FormActionButtonBox = styled.div`
  ${tw`
    flex
    gap-4
  `}
`;
