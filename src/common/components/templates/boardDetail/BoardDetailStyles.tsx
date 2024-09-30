import tw from "twin.macro";
import styled from "styled-components";

export const BoardDetailLayout = styled.div`
  ${tw`
    px-32
    py-20
    min-w-250
  `}
`;

export const MovePostButtonBox = styled.div`
  ${tw`
    flex
    gap-3
    justify-end
  `}
`;

export const MoveListButtonBox = styled.div`
  ${tw`
    flex
    gap-5
    justify-end
  `}
`;

export const PostDetailBox = styled.div`
  ${tw`
    border
    border-gray-550
    rounded-default-md
    my-6
    p-10
  `}
`;

export const DetailToListBox = styled.div`
  ${tw`
    flex
  `}
`;

export const TitleBox = styled.div`
  ${tw`
    pb-3
    border-b
    border-black
  `}
`;

export const PostInformationBox = styled.div`
  ${tw`
    flex
    pt-3
    items-center
  `}
`;

export const CreationInformationBox = styled.div`
  ${tw`
    
  `}
`;

export const AuthorBox = styled.div`
  ${tw`
    flex
    gap-2
  `}
`;

export const PostStats = styled.div`
  ${tw`
    flex
    w-full
    gap-6
    justify-end
  `}
`;

export const StatsCountBox = styled.div`
  ${tw`
    flex
    gap-2
  `}
`;

export const ContentBox = styled.div`
  ${tw`
    pt-10
    pb-40
  `}
`;

export const CommentBox = styled.div`
  ${tw`
    flex
    flex-col
    py-5
  `}
`;

export const CommentAuthorBox = styled.div`
  ${tw`
    flex
    gap-2
  `}
`;

export const CommentSeparateLineBox = styled.div`
  ${tw`
    border
    border-gray-300
  `}
`;

export const CommentFieldBox = styled.div`
  ${tw`
    flex
    justify-between
    border
    border-gray-1000
    rounded
    my-10
    py-5
    px-5
    h-33.25
  `}
`;

export const CommentInformationBox = styled.div`
  ${tw`
    flex
    flex-col
    pr-5
  `}
`;

export const CommentSubmitButtonBox = styled.div`
  ${tw`
    flex
    items-center
  `}
`;
