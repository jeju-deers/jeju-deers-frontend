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
    text-[#6B6B6B]
    font-["Inter"]
    font-medium
  `}
`;

export const EssentialMarkSpan = styled.span`
  ${tw`
    text-2xl
    text-[#FF0000]
    font-["Inter"]
    font-medium
  `}
`;
