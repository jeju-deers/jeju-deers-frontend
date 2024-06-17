import PrivacyPolicyAgree from "~/components/atoms/signUp/body/PrivacyPolicyAgree";
import PrivacyPolicyText from "~/components/atoms/signUp/body/PrivacyPolicyText";
import { PrivacyPolicyContentBox, PrivacyPolicyFieldBox } from "./PrivacyPolicyFieldStyles";
import ItemTitle from "~/components/atoms/signUp/body/ItemTitle";

const PrivacyPolicyField = () => {
  return (
    <PrivacyPolicyFieldBox>
      <ItemTitle id="privacyPolicyAgree" text="동의" required />
      <PrivacyPolicyContentBox>
        <PrivacyPolicyText />
        <PrivacyPolicyAgree />
      </PrivacyPolicyContentBox>
    </PrivacyPolicyFieldBox>
  );
};

export default PrivacyPolicyField;
