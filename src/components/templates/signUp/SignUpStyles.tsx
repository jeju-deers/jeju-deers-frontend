import styled from "styled-components";
import tw from "twin.macro";

export const SignUpLayout = styled.div`
  ${tw`
    overflow-hidden
  `}
`;

export const SignUpForm = styled.form`
  ${tw`
    flex
    flex-col
    items-center
    pb-[180px]
  `}
`;

export const SignUpPurposeFieldWrap = styled.div`
  ${tw`
    w-[930px]
  `}
`;

export const PrivacyPolicyFieldWrap = styled.div`
  ${tw`
    pt-[28px]
    pb-[99px]
  `}
`;
