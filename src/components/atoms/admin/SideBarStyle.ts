import tw from "twin.macro";
import styled from "styled-components";

export const SideBarBox = styled.div`
  ${tw`
    flex
    flex-col
    w-86.75
    h-full
    bg-green
  `}
`;

export const JejuDeersTextBox = styled.div`
  ${tw`
    flex
    border-b
    py-6
    pl-6
  `}
`;

export const JejuDeersTextImage = styled.img`
  ${tw`
    flex
    w-58.25
    h-12
  `}
`;

export const UserManagementBox = styled.div`
  ${tw`
    flex
    pt-6
    pl-9
  `}
`;

export const UserManagementImage = styled.img`
  ${tw`
    w-8
    h-8
    mr-9
  `}
`;

export const UserManagementText = styled.div`
  ${tw`
    font-bold
    text-2xl
    text-white
  `}
`;
