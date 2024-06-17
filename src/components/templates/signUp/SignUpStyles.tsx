import styled from "styled-components";
import tw from "twin.macro";

export const WholeSignUpLayout = styled.div`
  ${tw`
    overflow-auto
  `}
`;

export const PrimaryHeaderWrap = styled.div`
  ${tw`
    max-w-[1712px]
    min-w-[1452px]
  `}
`;

export const SignUpLayout = styled.div`
  ${tw`
    mt-24
    mb-40
    max-w-[1200px]
    min-w-[940px]
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
    border-[#0C2F23]
  `}
`;

export const SignUpForm = styled.form`
  ${tw`
    w-[940px]
    flex
    flex-col
    items-center
  `}
`;

export const SignUpPurposeFieldWrap = styled.div`
  ${tw`
    w-full
    py-12
    border-b-[1px]
    border-[#C8C8C8]
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
  `}
`;

export const PrivacyPolicyFieldWrap = styled.div`
  ${tw`
    w-full
    pt-7
    pb-12
  `}
`;
