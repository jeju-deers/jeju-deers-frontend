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
    w-[20px]
    h-[20px]
    border-[1px]
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
