import tw from "twin.macro";
import styled from "styled-components";

export const StaffListBox = styled.div`
  ${tw`
    flex
    flex-col
    border-y-2
    min-w-[950px]
  `}
  & > *:nth-child(odd) {
    & > *:nth-child(-n + 3) {
      ${tw`
        bg-[#f0f0f0]
      `}
    }
    & > *:nth-last-child(-n + 2) {
      ${tw`
        bg-[#f5f5f5]
      `}
    }
  }

  & > *:nth-child(even) {
    & > *:nth-child(-n + 3) {
      ${tw`
        bg-[#f5f5f5]
      `}
    }
    & > *:nth-last-child(-n + 2) {
      ${tw`
        bg-[#ffffff]
      `}
    }
  }

  & > *:nth-child(1) {
    & > *:nth-child(-n + 3) {
      ${tw`
        bg-[#f5f5f5]
      `}
    }
    & > *:nth-last-child(-n + 2) {
      ${tw`
        bg-[#ffffff]
      `}
    }
  }
`;

export const StaffListHeader = styled.div`
  ${tw`
    flex
    text-3xl
    font-semibold
    h-16
    border-b
  `}

  *:nth-child(1) {
    ${tw`
        justify-start
        pl-2
    `}
  }

  *:nth-child(3) {
    ${tw`border-x-2`}
  }

  & > *:nth-child(-n + 3) {
    ${tw`basis-[16.666%]`}
  }

  & > *:nth-last-child(-n + 2) {
    ${tw`basis-[25%]`}
  }
`;

export const StaffItem = styled.div`
  ${tw`
    flex
    justify-center
    items-center
  `}
`;

export const StafflistRow = styled.div`
  ${tw`
    flex
    text-3xl
    font-normal
    h-56
    border-y
  `}

  *:nth-child(2) {
    ${tw`
        justify-start
    `}
  }

  *:nth-child(3) {
    ${tw`border-x-2`}
  }

  & > *:nth-child(-n + 3) {
    ${tw`basis-[16.666%]`}
  }

  & > *:nth-last-child(-n + 2) {
    ${tw`basis-[25%]`}
  }
`;

export const StaffImage = styled.img`
  ${tw`bg-white`}
`;
