import tw from "twin.macro";
import styled from "styled-components";

export const HeaderBox = styled.div`
  ${tw`
    flex
    h-24
    items-center
    relative
  `}
`;

export const HeaderTextBox = styled.div`
  ${tw`
    pl-12
    font-bold
    text-2.5
    text-green-light
    absolute
  `}
`;

export const HeaderImage = styled.img`
  ${tw`
    w-22.5
    h-24
    m-auto
  `}
`;
