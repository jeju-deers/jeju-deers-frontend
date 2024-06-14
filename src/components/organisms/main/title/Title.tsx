import { TitleEnSpan, TitleKoSpan, TitleLayout } from "./TitleStyles";

interface Props {
  entitle: string;
  kotitle: string;
}

const Title = ({ entitle, kotitle }: Props) => {
  return (
    <TitleLayout>
      <TitleEnSpan>{entitle}</TitleEnSpan>
      <TitleKoSpan>{kotitle}</TitleKoSpan>
    </TitleLayout>
  );
};

export default Title;
