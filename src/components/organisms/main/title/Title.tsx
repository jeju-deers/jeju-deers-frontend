import { TitleEnSpan, TitleKoSpan, TitleLayout } from "./TitleStyles";

interface Props {
  titleEnglish: string;
  titleKorean: string;
}

const Title = ({ titleEnglish, titleKorean }: Props) => {
  return (
    <TitleLayout>
      <TitleEnSpan>{titleEnglish}</TitleEnSpan>
      <TitleKoSpan>{titleKorean}</TitleKoSpan>
    </TitleLayout>
  );
};

export default Title;
