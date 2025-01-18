import tw from "twin.macro";
import styled from "styled-components";

export const ScheduleLayout = styled.div`
  ${tw`
    h-full
    w-full
    py-20
    px-28
    flex-row
    text-center
  `}
`;

export const AddButton = styled.button`
  ${tw`
    mt-10
    py-3
    px-8
    text-xl
    text-white
    rounded-lg
    border
    border-gray-300
    bg-green-dark
    cursor-pointer
    hover:bg-gray-300
    focus:outline-none
    focus:ring-2
    focus:ring-gray-400
  `}
`;
