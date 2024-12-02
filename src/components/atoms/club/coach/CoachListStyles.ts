import tw from "twin.macro";
import styled from "styled-components";

export const CoachListBox = styled.div`
  ${tw`
    flex
    flex-col
    border-y-2
    min-w-262.5
  `}
  & > *:nth-child(odd) {
    & > *:nth-child(-n + 3) {
      ${tw`
        bg-gray-200
      `}
    }
    & > *:nth-last-child(-n + 3) {
      ${tw`
        bg-gray-150
      `}
    }
  }

  & > *:nth-child(even) {
    & > *:nth-child(-n + 3) {
      ${tw`
        bg-gray-150
      `}
    }
    & > *:nth-last-child(-n + 3) {
      ${tw`
        bg-white
      `}
    }
  }

  & > *:nth-child(1) {
    & > *:nth-child(-n + 3) {
      ${tw`
        bg-gray-150
      `}
    }
    & > *:nth-last-child(-n + 3) {
      ${tw`
        bg-white
      `}
    }
  }
`;

export const CoachListHeaderBox = styled.div`
  ${tw`
    flex
    text-xl
    font-semibold
    h-16
    border-b
  `}

  & > *:nth-child(1) {
    ${tw`
      justify-start
      pl-2
      basis-[12%]
    `}
  }

  & > *:nth-child(2) {
    ${tw`
      basis-[18%]
    `}
  }

  & > *:nth-child(3) {
    ${tw`
      border-x-2
      basis-[20%]
    `}
  }

  & > *:nth-last-child(-n + 3) {
    ${tw`
      basis-[16.666%]
    `}
  }
`;

export const CoachItemBox = styled.div`
  ${tw`
    flex
    justify-center
    items-center
  `}
`;

export const CoachListRowBox = styled.div`
  ${tw`
    flex
    text-xl
    font-normal
    h-56
    border-y
  `}

  & > *:nth-child(1) {
    ${tw`
      basis-[12%]
    `}
  }

  & > *:nth-child(2) {
    ${tw`
      justify-start
      basis-[18%]
    `}
  }

  & > *:nth-child(3) {
    ${tw`
      border-x-2
      basis-[20%]  
    `}
  }

  & > *:nth-last-child(-n + 3) {
    ${tw`
      basis-[16.666%]
    `}
  }
`;

export const CoachImage = styled.img`
  ${tw`
    bg-white
  `}
`;
