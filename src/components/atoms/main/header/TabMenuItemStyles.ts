import tw from "twin.macro";
import styled from "styled-components";

export const TabMenuItemBox = styled.div`
  ${tw`
    font-extrabold
    italic
    text-[#6b6b6b]
    bg-white
    border-[#C8C8C8]
    border-t
    flex
    justify-center
    px-1
    py-2
  `}

  :hover {
    ${tw`
      text-[#69a6ff]
    `}
  }
`;
