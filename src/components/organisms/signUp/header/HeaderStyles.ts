import styled from "styled-components";
import tw from "twin.macro";
import mainBackgroundImage from "~/assets/images/main_background_dark.svg";

export const HeaderBox = styled.div`
  ${tw`
    h-[1158px]
  `}
`;

export const PrimaryHeaderWrap = styled.div`
  background-image: url(${mainBackgroundImage});
  ${tw`
    h-1/2
    flex
    flex-col
    justify-center
    mb-[105px]
    bg-no-repeat
    bg-cover
  `}
`;
