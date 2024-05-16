import tw from "twin.macro";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: url("../public/homepage_logo_middle.svg");
  ${tw`
    w-1/12
    min-w-36
    flex
    flex-col
    items-center
    justify-between
    bg-center
    bg-no-repeat
  `}
`;
