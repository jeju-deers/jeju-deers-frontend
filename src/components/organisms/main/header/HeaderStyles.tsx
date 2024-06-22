import tw from "twin.macro";
import styled from "styled-components";

interface props {
  headercolor: string;
}

export const HeaderBox = styled.div<props>`
  ${tw`
    flex
    w-full
    justify-start
    fixed
    left-0
    top-0
    pr-12
    py-5
    z-10
  `}

  background-color: ${(props) => props.headercolor};
`;
