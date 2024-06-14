import styled from "styled-components";
import tw from "twin.macro";

export const WholeSignUpLayout = styled.div`
  ${tw`
    overflow-hidden
  `}
`;

export const SignUpLayout = styled.div`
  ${tw`
    mt-24
    mb-40
    max-w-[1200px]
    min-w-[910px]
    mx-64
  `}
`;

export const SubHeaderWrap = styled.div`
  ${tw`
    pb-12
    border-b-8
    border-[#0C2F23]
  `}
`;

export const SignUpForm = styled.form`
  ${tw`
    flex
    flex-col
    items-center
  `}
`;

export const SignUpPurposeFieldWrap = styled.div`
  ${tw`
    w-[930px]
  `}
`;

export const PrivacyPolicyFieldWrap = styled.div`
  ${tw`
    w-[930px]
    pt-[28px]
    pb-[99px]
  `}
`;
