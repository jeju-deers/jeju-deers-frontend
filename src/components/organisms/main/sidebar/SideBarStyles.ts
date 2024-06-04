import tw from "twin.macro";
import styled from "styled-components";
import sidebarBackgroundImage from "~/assets/images/homepage_logo_middle.svg";

export const SidebarBox = styled.div`
  background-image: url(${sidebarBackgroundImage});
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
