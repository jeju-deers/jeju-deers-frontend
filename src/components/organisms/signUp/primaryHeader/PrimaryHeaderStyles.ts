import styled from "styled-components";
import tw from "twin.macro";
import mainBackgroundImage from "~/assets/images/main_background_dark.svg";

export const PrimaryHeaderBox = styled.div`
  background-image: url(${mainBackgroundImage});
  ${tw`
    h-[60vh]
    flex
    flex-col
    justify-center
    bg-no-repeat
    bg-cover
  `}
`;
