import tw from "twin.macro";
import styled from "styled-components";

export const GameScheduleBox = styled.div`
  ${tw`
  `}
`;

export const GameScheduleInformationBox = styled.div`
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

export const GameTeamDetailsBox = styled.div`
  ${tw`
    flex
    items-center
    p-4
    justify-center
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

export const GameDateTimeBox = styled.div`
  ${tw`
    font-semibold
    text-[40px]
  `}
`;

export const OurTeamImage = styled.img`
  ${tw`
    w-40
    h-40
  `}
`;

export const OurTeamSpan = styled.span`
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

export const OpposingTeamSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]  
  `}
`;

export const VersusSpan = styled.span`
  ${tw`
    font-bold
    text-[40px]
    mx-[40px]
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

export const ScoreBox = styled.div`
  ${tw`
    basis-1/12
    text-center
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

export const ButtonGroup = styled.div`
  ${tw`
    text-right
    mb-4
    gap-4
  `}
`;

export const GameScheduleButton = styled.button`
  ${tw`
    py-3
    px-8
    text-xl
    rounded-lg
    border
    border-[#D9D9D9]
    bg-white
    hover:bg-gray-300
    focus:outline-none
    focus:ring-2
    focus:ring-gray-400
    disabled:bg-gray-100
    disabled:cursor-not-allowed
    ml-5
  `}
`;

export const ScheduleInfomationSelect = styled.select`
  ${tw`
    p-2
    text-[20px]
    border
    border-gray-300
    rounded-md
    w-52
    h-16
  `}
`;

export const ScheduleInfomationInput = styled.input`
  ${tw`
    p-2
    text-[30px]
    border
    border-gray-300
    rounded-md
    w-52
    h-16
  `}
`;
