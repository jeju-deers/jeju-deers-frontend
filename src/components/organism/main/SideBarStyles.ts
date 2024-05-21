import tw from "twin.macro";
import styled from "styled-components";

export const SidebarBox = styled.div`
  ${tw`
    w-1/12
    min-w-36
    flex
    flex-col
    items-center
    justify-between
    bg-center
    bg-no-repeat
    bg-[url('../public/homepage_logo_middle.svg')]
  `}
`;
