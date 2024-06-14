import tw from "twin.macro";
import styled from "styled-components";
import mainBodyBackgroundImage from "~/assets/images/main_background_dark.svg";

export const BaseLayout = styled.div`
  ${tw`
    flex
  `}
`;

export const ContentBox = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    relative
    overflow-x-hidden
    whitespace-nowrap
  `}
`;

export const HeaderBox = styled.div`
  background-image: url(${mainBodyBackgroundImage});
  ${tw`
    flex
    flex-col
    bg-cover
    bg-no-repeat
    h-[66vh]
    relative
  `}
`;

export const OutletBox = styled.div`
  ${tw`
    flex-1
    relative
    min-h-[40vh]
  `}
`;
