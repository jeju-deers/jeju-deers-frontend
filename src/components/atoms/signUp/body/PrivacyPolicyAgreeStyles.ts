import styled from "styled-components";
import tw from "twin.macro";

export const PrivacyPolicyAgreeBox = styled.div`
  ${tw`
    flex
    items-center
    gap-3.5
  `}
`;

export const PrivacyPolicyAgreeInput = styled.input`
  ${tw`
    w-5
    h-5
    border
    border-gray-1000
  `}
`;

export const PrivacyPolicyAgreeLabel = styled.label`
  ${tw`
    text-xl
    text-red
    font-medium
  `}
`;
