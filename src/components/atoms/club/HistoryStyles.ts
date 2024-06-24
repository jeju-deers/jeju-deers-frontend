import tw from "twin.macro";
import styled from "styled-components";

export const HistoryBox = styled.div`
  ${tw`
    mt-20
  `}
`;

export const HistoryListBox = styled.div`
  ${tw`
    flex
    p-12
    justify-between
    mb-48
  `}
`;

export const Content = styled.div`
  ${tw`
    w-3/5
  `}
`;

export const HistoryContentBox = styled.div`
  ${tw`
    flex
    h-20
    items-center
    justify-between
    border-t
  `}
`;

export const HistoryYearSpan = styled.span`
  ${tw`
    text-9xl
    font-normal
  `}
`;

export const HistoryDateSpan = styled.span`
  ${tw`
    text-2xl
    font-normal
  `}
`;

export const HistoryContentSpan = styled.span`
  ${tw`
    text-2xl
    font-normal
    w-7/12
  `}
`;
