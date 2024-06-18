import {
  PrivacyPolicyAgreeBox,
  PrivacyPolicyAgreeInput,
  PrivacyPolicyAgreeLabel,
} from "./PrivacyPolicyAgreeStyles";

const PrivacyPolicyAgree = () => {
  return (
    <PrivacyPolicyAgreeBox>
      <PrivacyPolicyAgreeInput
        type="checkbox"
        id="privacyPolicyAgree"
        name="privacyPolicyAgree"
        required
      />
      <PrivacyPolicyAgreeLabel htmlFor="privacyPolicyAgree">
        개인정보 수집 및 이용에 동의합니다.
      </PrivacyPolicyAgreeLabel>
    </PrivacyPolicyAgreeBox>
  );
};

export default PrivacyPolicyAgree;
