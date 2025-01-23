import styled from "styled-components";
import tw from "twin.macro";

export const ItemTitleBox = styled.div`
  ${tw`
    flex
    w-40
    justify-end
    gap-2
  `}
`;

export const ItemTitleLabel = styled.label`
  ${tw`
    text-xl
    text-gray-1000
    font-medium
  `}
`;

export const EssentialMarkSpan = styled.span`
  ${tw`
    text-2xl
    text-red
    font-medium
  `}
`;
