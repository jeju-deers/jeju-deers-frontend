import tw from "twin.macro";
import styled from "styled-components";

export const SocialIconImage = styled.img`
  ${tw`
    w-7 h-7
  `}

  &:hover {
    filter: invert(61%) sepia(62%) saturate(1783%) hue-rotate(190deg) brightness(101%)
      contrast(101%);
  }
`;
