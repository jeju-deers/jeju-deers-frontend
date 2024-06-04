import PrimaryTitle from "~/components/atoms/signUp/header/PrimaryTitle";
import { PrimaryHeaderBox } from "./PrimaryHeaderStyles";
import PrimaryTitleEnglish from "~/components/atoms/signUp/header/PrimaryTitleEnglish";

const PrimaryHeader = () => {
  return (
    <PrimaryHeaderBox>
      <PrimaryTitleEnglish />
      <PrimaryTitle />
    </PrimaryHeaderBox>
  );
};

export default PrimaryHeader;
