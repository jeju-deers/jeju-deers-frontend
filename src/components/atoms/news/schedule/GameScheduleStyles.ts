import tw from "twin.macro";
import styled from "styled-components";

export const GameScheduleBox = styled.div`
  ${tw`
    border
    border-[#D9D9D9]
    mb-6
  `}
`;

export const GameDetailsBox = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    py-2
    px-4
    border-b
    border-[#D9D9D9]
  `}
`;
export const GameDateSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]
  `}
`;

export const GameTeamDetailsBox = styled.div`
  ${tw`
    flex
    items-center
    p-4
    justify-center
  `}
`;

export const OurTeamSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]
  `}
`;

export const OurTeamImage = styled.img`
  ${tw`
    w-40
    h-40
  `}
`;

export const VersusSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]
    mx-[40px]
  `}
`;

export const OpposingTeamSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]  
  `}
`;

export const OpposingTeamImage = styled.img`
  ${tw`
    w-40
    h-40
  `}
`;

export const GameResultBox = styled.div`
  ${tw`
    flex
    items-center
    p-4
    justify-center
  `}
`;

export const OurTeamScoreSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]
  `}
`;

export const OpposingTeamScoreSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]
  `}
`;

export const OurTeamBox = styled.div`
  ${tw`
    flex
    justify-end
    gap-8
    text-center
    items-center
    w-4/5
  `}
`;

export const OpposingTeamBox = styled.div`
  ${tw`
    flex
    gap-8
    text-center
    items-center
    w-4/5
  `}
`;

export const ScoreBox = styled.div`
  ${tw`
    basis-1/12
    text-center
  `}
`;
