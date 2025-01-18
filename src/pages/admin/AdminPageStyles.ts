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

export const ContentTitleBox = styled.div`
  ${tw`
    mt-8
    mb-10
    text-8
    font-bold
  `}
`;

export const SearchBox = styled.div`
  ${tw`
    flex
    relative
    gap-5
    pb-6
    border-b
    border-black
  `}
`;

export const SearchInput = styled.input`
  ${tw`
    flex
    w-75
    h-10.25
    border
    border-gray-450
    items-center
    pl-4
    rounded
  `}

  &::placeholder {
    ${tw`
      text-gray-1000
    `}
  }
`;

export const SearchButtonWrap = styled.div`
  ${tw`
    absolute
    right-0
  `}
`;

export const SearchButton = styled.button`
  ${tw`
    flex
    w-16
    h-10.25
    rounded-lg
    bg-blue
    items-center
    justify-center
    text-white
  `}
`;

export const DeleteButton = styled.button`
  ${tw`
    w-16
    h-10.25
    mt-6 mb-5
    rounded-lg
    bg-red-dark
    items-center
    justify-center
    text-white
  `}
`;

export const ListBox = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

export const ListHeaderBox = styled.div`
  ${tw`
    flex
    h-16
    bg-gray-275
    items-center
    border-b-2
    border-black
  `}
`;

export const ListItemBox = styled.div`
  ${tw`
    flex
    h-16
    items-center
    border-b
    border-black
  `}
`;

export const CheckBoxInput = styled.input`
  ${tw`
    w-4 ml-5
  `}
`;

export const ListSectionBox = styled.div<{ basis?: string }>`
  ${tw`
    flex-1
    flex
    justify-center
  `}
  ${({ basis }) => basis && `flex-basis: ${basis}`}
`;

export const ListItemTextSpan = styled.span`
  ${tw`
    text-base
  `}
`;

export const AccountEditButton = styled.button<{ opacity?: string }>`
  ${tw`
    w-25
    h-11
    bg-green-dark
    rounded-lg
    justify-center
    text-white
    mr-20
  `}
  ${({ opacity }) => opacity === "hidden" && `opacity: 0;`}
`;

export const ExitButtonBox = styled.div`
  ${tw`
    flex
    justify-center
    mt-16
    mb-6
  `}
`;

export const ExitButton = styled.button`
  ${tw`
    w-62
    h-14
    bg-blue-gray
    text-white
    text-2xl
    rounded-xl
  `}
`;
