module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100], // commit 메시지 100자 이내 작성
    "subject-case": [0], // commit subject 규칙 비활성화
    "subject-empty": [2, "never"], // commit subject 필수 작성
    "subject-full-stop": [2, "never", "."], // commit subject 마지막 .으로 마무리 X
    "type-case": [2, "always", "lower-case"], // commit 타입 소문자
    "type-empty": [2, "never"], // commit 타입 필수 작성
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "refactor",
        "modify",
        "fix",
        "style",
        "merge",
        "build",
        "docs",
        "perf",
        "comment",
        "rename",
        "cleanup",
      ],
    ], // commit 타입 종류
  },
};
