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
    font-medium
    w-[20px]
    h-[20px]
    border-[1px]
    border-[#6B6B6B]
  `}
`;

export const PrivacyPolicyAgreeLabel = styled.label`
  ${tw`
    text-xl
    text-[#FF0000]
    font-['Inter']
    font-medium
  `}
`;
