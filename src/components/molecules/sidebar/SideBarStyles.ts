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

export const Logo = styled.img`
  ${tw`
    w-24
    mt-2
  `}
`;

export const SocialIcons = styled.div`
  ${tw`
    flex 
    flex-col
    justify-between
    space-y-10
    mb-20
  `}
`;

export const SocialIcon = styled.img`
  ${tw`
    w-7 h-7
  `}
`;
