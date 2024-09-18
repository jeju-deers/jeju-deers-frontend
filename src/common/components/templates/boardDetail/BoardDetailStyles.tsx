import tw from "twin.macro";
import styled from "styled-components";

export const BoardDetailLayout = styled.div`
  ${tw`
    w-full
    px-32
    py-20
    min-w-250
  `}
`;

export const MovePostButtonBox = styled.div`
  ${tw`
    flex
    gap-3
    w-full
    justify-end
  `}
`;

export const MoveListButtonBox = styled.div`
  ${tw`
    flex
    gap-5
    w-full
    justify-end
  `}
`;

export const PostDetailBox = styled.div`
  ${tw`
    border
    border-[#C2C2C2]
    rounded-[5px]
    my-[24px]
    p-[40px]
  `}
`;
