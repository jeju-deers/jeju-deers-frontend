import tw from "twin.macro";
import styled from "styled-components";

export const RosterListBox = styled.div`
  ${tw`
    flex
    flex-col
    border-y-2
    min-w-[1050px]
  `}
  & > *:nth-child(odd) {
    & > *:nth-child(-n + 4) {
      ${tw`
        bg-[#f0f0f0]
      `}
    }
    & > *:nth-last-child(-n + 3) {
      ${tw`
        bg-[#f5f5f5]
      `}
    }
  }

  & > *:nth-child(even) {
    & > *:nth-child(-n + 4) {
      ${tw`
        bg-[#f5f5f5]
      `}
    }
    & > *:nth-last-child(-n + 3) {
      ${tw`
        bg-[#ffffff]
      `}
    }
  }

  & > *:nth-child(1) {
    & > *:nth-child(-n + 4) {
      ${tw`
        bg-[#f5f5f5]
      `}
    }
    & > *:nth-last-child(-n + 3) {
      ${tw`
        bg-[#ffffff]
      `}
    }
  }
`;

export const RosterListHeader = styled.div`
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

  *:nth-child(2),
  *:nth-child(4) {
    ${tw`border-r-2`}
  }

  & > *:nth-child(1),
  & > *:nth-child(2) {
    ${tw`
        basis-[15%]
        bg-white
    `}
  }

  & > *:nth-child(3),
  & > *:nth-child(4) {
    ${tw`
        basis-[10%]
        bg-white
    `}
  }

  & > *:nth-last-child(-n + 3) {
    ${tw`basis-[16.666%]`}
  }
`;

export const RosterItem = styled.div`
  ${tw`
    flex
    justify-center
    items-center
  `}
`;

export const RosterlistRow = styled.div`
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
        border-r-2
    `}
  }

  *:nth-child(4) {
    ${tw`border-r-2`}
  }

  & > *:nth-child(1) {
    ${tw`
        basis-[12%]
    `}
  }
  & > *:nth-child(2) {
    ${tw`basis-[18%]`}
  }

  & > *:nth-child(3),
  & > *:nth-child(4) {
    ${tw`basis-[10%]`}
  }

  & > *:nth-last-child(-n + 3) {
    ${tw`basis-[16.666%]`}
  }
`;

export const RosterImage = styled.img`
  ${tw`bg-white`}
`;
