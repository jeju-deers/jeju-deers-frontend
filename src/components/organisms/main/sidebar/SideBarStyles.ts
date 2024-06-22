import tw from "twin.macro";
import styled from "styled-components";
import sidebarBackgroundImage from "~/assets/images/homepage_logo_middle.svg";

export const SidebarBox = styled.div`
  background-image: url(${sidebarBackgroundImage});
  ${tw`
    w-1/12
    min-w-36
    max-h-screen
    flex
    flex-col
    sticky
    top-0
    items-center
    justify-between
    bg-white
    bg-center
    bg-no-repeat
    z-20
  `}
`;
