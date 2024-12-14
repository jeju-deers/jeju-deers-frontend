import tw from "twin.macro";
import styled from "styled-components";

export const ListSectionBox = styled.div<{ basis?: string }>`
  ${tw`
    flex-1
    flex
    justify-center
  `}
  ${({ basis }) => basis && `flex-basis: ${basis}`}
`;

export const ListItemTextSpan = styled.span`
  ${tw`
    text-base
  `}
`;
