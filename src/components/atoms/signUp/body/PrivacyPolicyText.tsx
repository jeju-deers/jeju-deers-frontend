import { PRIVACY_POLICY_DATA } from "~/constants/privacyPolicyData";
import { PrivacyPolicyTextBox } from "./PrivacyPolicyTextStyles";

const PrivacyPolicyText = () => {
  return <PrivacyPolicyTextBox>{PRIVACY_POLICY_DATA}</PrivacyPolicyTextBox>;
};

export default PrivacyPolicyText;
