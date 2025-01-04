import tw from "twin.macro";
import styled from "styled-components";

export const BoardBox = styled.div`
  ${tw`
    flex
    flex-col
    border-y-5
    border-gray-200
    min-w-262.5
    border-y-green-dark
  `}
`;

export const BoardHeaderBox = styled.div`
  ${tw`
    flex
    font-bold
    h-16
  `}

  & > *:nth-child(1) {
    ${tw`
      basis-[8.33%]
      min-w-[8.33%]
    `}
  }
  & > *:nth-child(2) {
    ${tw`
      flex-grow
    `}
  }
  & > *:nth-child(3) {
    ${tw`
      basis-[15%]
      min-w-[12%]
    `}
  }
  & > *:nth-child(4) {
    ${tw`
      basis-[8.33%]
      min-w-[10%]
    `}
  }
  & > *:nth-child(5) {
    ${tw`
      basis-[8.33%]
      min-w-[8.33%]
    `}
  }
`;

export const BoardItemBox = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    text-xl
    h-16
  `}

  &:nth-child(2) {
    ${tw`
      flex
      justify-start
    `}
  }
`;

export const BoardRowBox = styled.div`
  ${tw`
    flex
    font-normal
    border-y
    border-gray-200
    relative
  `}

  & > *:nth-child(1) {
    ${tw`
      basis-[8.33%]
      min-w-[8.33%]
    `}
  }
  & > *:nth-child(2) {
    ${tw`
      justify-start
      flex-grow
    `}
  }
  & > *:nth-child(3) {
    ${tw`
      basis-[15%]
      min-w-[12%]
    `}
  }
  & > *:nth-child(4) {
    ${tw`
      basis-[8.33%]
      min-w-[10%]
    `}
  }
  & > *:nth-child(5) {
    ${tw`
      basis-[8.33%]
      min-w-[8.33%]
    `}
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
`;

export const EditButton = styled(Button)`
  right: -20px;
`;

export const DeleteButton = styled(Button)`
  right: -70px;
`;
