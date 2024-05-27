import tw from "twin.macro";
import styled from "styled-components";

export const TabMenuItemBox = styled.div`
  ${tw`
    font-extrabold
    italic
    flex
    items-center
    justify-center
    px-1
    py-2
    text-[#6b6b6b]
    bg-white
    border-[#C8C8C8]
    border-t
  `}

  :hover {
    ${tw`
      text-[#69a6ff]
    `}
  }
`;
