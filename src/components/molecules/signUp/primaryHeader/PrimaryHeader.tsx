import PrimaryTitle from "~/components/atoms/signUp/primaryHeader/PrimaryTitle";
import PrimaryTitleEnglish from "~/components/atoms/signUp/primaryHeader/PrimaryTitleEnglish";
import { PrimaryHeaderBox } from "./PrimaryHeaderStyles";

const PrimaryHeader = () => {
  return (
    <PrimaryHeaderBox>
      <PrimaryTitleEnglish />
      <PrimaryTitle />
    </PrimaryHeaderBox>
  );
};

export default PrimaryHeader;
