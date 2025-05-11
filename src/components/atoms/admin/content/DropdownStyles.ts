import tw from "twin.macro";
import styled from "styled-components";

export const DropdownBox = styled.div`
  ${tw`
    relative
  `}
`;

export const DropdownLabel = styled.label`
  ${tw`
    flex
    flex-col
    w-45
    h-10.25
    justify-center
    border
    border-gray-450
    rounded
  `}
`;

export const DropdownButton = styled.button`
  ${tw`
    flex
    w-full
    px-4
    items-center
    justify-between
  `}
`;

export const SelectedOptionTextSpan = styled.span`
  ${tw`
    text-gray-1000
  `}
`;

export const DropdownOptionsUl = styled.ul`
  ${tw`
    absolute
    z-10
    w-full
    bg-white
    border
    border-gray-450
    text-gray-1000
  `}
`;

export const DropdownOptionLi = styled.li`
  ${tw`
    p-4
    bg-white
    border-b
    border-gray-450
    text-gray-1000
  `}
`;
