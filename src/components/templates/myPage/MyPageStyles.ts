import tw from "twin.macro";
import styled from "styled-components";

export const MyPageLayout = styled.div`
  ${tw`
    mt-24
    mb-40
    max-w-300
    min-w-235
    mx-64
    items-center
    flex
    flex-col
  `}
`;

export const SubHeaderWrap = styled.div`
  ${tw`
    w-full
    pb-12
    border-b-8
    border-green-dark
  `}
`;

export const MyPageForm = styled.form`
  ${tw`
    w-235
    flex
    flex-col
    items-center
  `}
`;

export const SignUpPurposeFieldWrap = styled.div`
  ${tw`
    w-full
    py-12
    border-b
    border-gray-500
  `}
`;

export const BasicItemsInputFieldWrap = styled.div`
  ${tw`
    w-full
    pt-12
  `}
`;

export const OptionItemsInputFieldWrap = styled.div`
  ${tw`
    w-full
    pb-12
  `}
`;

export const FormActionButtonBox = styled.div`
  ${tw`
    flex
    gap-4
  `}
`;
