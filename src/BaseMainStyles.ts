import tw from "twin.macro";
import styled from "styled-components";
import mainBodyBackgroundImage from "~/assets/images/main_background_dark.svg";

export const BaseMainLayout = styled.div`
  ${tw`
    flex
    flex-col
    h-screen
    relative
  `}
`;

export const BaseMainBox = styled.div`
  ${tw`
    flex
    h-full
  `}
`;

export const ContentBox = styled.div`
  background-image: url(${mainBodyBackgroundImage});
  ${tw`
    flex
    flex-col
    bg-cover
    bg-no-repeat
    w-screen
    h-full
    relative
    overflow-x-hidden
    whitespace-nowrap
  `}
`;

export const OutletBox = styled.div`
  ${tw`
    flex-1
    relative
    pt-32
  `}
`;
