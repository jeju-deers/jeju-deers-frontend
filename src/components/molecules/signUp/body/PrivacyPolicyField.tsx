import PrivacyPolicyAgree from "~/components/atoms/signUp/body/PrivacyPolicyAgree";
import PrivacyPolicyText from "~/components/atoms/signUp/body/PrivacyPolicyText";
import {
  PrivacyPolicyContentBox,
  PrivacyPolicyFieldBox,
  PrivacyPolicyFieldLabelBox,
} from "./PrivacyPolicyFieldStyles";
import EssentialMark from "~/components/atoms/signUp/body/EssentialMark";
import ItemLabel from "~/components/atoms/signUp/body/ItemLabel";

const PrivacyPolicyField = () => {
  return (
    <PrivacyPolicyFieldBox>
      <PrivacyPolicyFieldLabelBox>
        <EssentialMark />
        <ItemLabel id="privacyPolicyAgree" text="동의" />
      </PrivacyPolicyFieldLabelBox>
      <PrivacyPolicyContentBox>
        <PrivacyPolicyText />
        <PrivacyPolicyAgree />
      </PrivacyPolicyContentBox>
    </PrivacyPolicyFieldBox>
  );
};

export default PrivacyPolicyField;
