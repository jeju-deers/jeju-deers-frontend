import tw from "twin.macro";
import styled from "styled-components";
import mainBodyBackgroundImage from "~/assets/images/main_background_dark.svg";

interface Props {
  isRootPath: boolean;
}

export const BaseLayout = styled.div`
  ${tw`
    flex
    flex-col
    h-screen
    relative
  `}
`;

export const BaseBox = styled.div<Props>`
  ${tw`
    flex
  `}

  ${({ isRootPath }) => isRootPath && tw`h-full`}
`;

export const ContentBox = styled.div<Props>`
  ${tw`
    flex
    flex-col
    w-screen
    h-full
    relative
    overflow-x-hidden
    whitespace-nowrap
  `}

  ${({ isRootPath }) =>
    !isRootPath
      ? tw`bg-none`
      : `background-image: url(${mainBodyBackgroundImage});          
      ${tw`
        bg-cover
        bg-no-repeat
     `}
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
