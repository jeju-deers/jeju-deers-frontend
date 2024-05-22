import tw from "twin.macro";
import styled from "styled-components";
import mainBodyBackgroundImage from "~/assets/images/background_image_dark.svg";

export const MainBodyBox = styled.div`
  background-image: url(${mainBodyBackgroundImage});
  ${tw`
    flex
    flex-col
    bg-cover
    bg-no-repeat
    w-screen
    relative
  `}
`;
