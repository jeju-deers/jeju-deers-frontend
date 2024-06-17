import PrimaryTitleEnglish from "~/components/atoms/signUp/primaryHeader/PrimaryTitleEnglish";
import { PrimaryTitleHeaderBox } from "./PrimaryTitleHeaderStyles";
import PrimaryTitleKorean from "~/components/atoms/signUp/primaryHeader/PrimaryTitleKorean";

const PrimaryTitleHeader = () => {
  return (
    <PrimaryTitleHeaderBox>
      <PrimaryTitleEnglish />
      <PrimaryTitleKorean />
    </PrimaryTitleHeaderBox>
  );
};

export default PrimaryTitleHeader;
