import tw from "twin.macro";
import styled from "styled-components";

export const BoardUpdateLayout = styled.div`
  ${tw`
    h-full
    w-full
    py-20
    px-28
    min-w-235
  `}
`;

export const Notice = styled.div`
  ${tw`
    bg-gray-200
    p-4
  `}

  span {
    ${tw`
      text-red
    `}
  }
`;

export const NoticeBox = styled.div`
  ${tw`
    mb-6
  `}
`;

export const WriteTitleBox = styled.div`
  ${tw`
    flex
    gap-4
    w-full
  `}
`;

export const WriteDropdownButtonWrap = styled.div`
  ${tw`
    basis-3/12
  `}
`;

export const TitleInput = styled.input`
  ${tw`
    border
    border-gray-300
    h-11
    basis-9/12
    rounded-md
    p-2
  `}
`;

export const WriteContentBox = styled.div`
  ${tw`
    w-full
    my-4
  `}
`;

export const SaveButtonWrap = styled.div`
  ${tw`
    flex
    pb-4
    flex-row-reverse
    relative
  `}
`;

export const SaveButton = styled.button`
  ${tw`
    bg-blue
    h-14
    w-28
    text-white
    text-2xl
    rounded-xl
    absolute
    bottom-7
  `}
`;
