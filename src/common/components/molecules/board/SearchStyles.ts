import styled from "styled-components";
import tw from "twin.macro";

export const SearchBox = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    h-36
    gap-2
    bg-[#F9F9F9]
    border-t
    border-[#E5E5E5]
    pb-10
  `}
`;

export const SearchInput = styled.input`
  ${tw`
    border
    border-gray-300
    h-11
    w-[300px]
    rounded-md
    p-2
  `}
`;
