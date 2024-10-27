import styled from "styled-components";
import tw from "twin.macro";

export const SearchBox = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    h-36
    gap-2
    bg-gray-100
    border-t
    border-gray-350
    pb-10
  `}
`;

export const SearchInput = styled.input`
  ${tw`
    border
    border-gray-300
    h-11
    w-75
    rounded-md
    p-2
  `}
`;
