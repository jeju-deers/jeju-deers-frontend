import { useState } from "react";
import GameLocation from "./GameLocation";
import {
  GameDetailsBox,
  GameResultBox,
  GameScheduleBox,
  GameTeamDetailsBox,
  OpposingTeamBox,
  OpposingTeamImage,
  OpposingTeamScoreSpan,
  OpposingTeamSpan,
  OurTeamBox,
  OurTeamImage,
  OurTeamScoreSpan,
  OurTeamSpan,
  ScoreBox,
  VersusSpan,
  ButtonGroup,
  ScheduleInfomationSelect,
  ScheduleInfomationInput,
  GameScheduleButton,
  GameScheduleInformationBox,
  GameDateTimeBox,
} from "./GameScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";

interface Props {
  datetime: string;
  location: string;
  opposingTeam: string;
  opposingTeamImage: string;
  score1: string;
  score2: string;
  isEditing: boolean;
  onSave: (updatedData: Partial<Props>) => void;
  onDelete: () => void;
  onEdit: () => void;
}

const GameSchedule = ({
  datetime,
  location,
  opposingTeam,
  opposingTeamImage,
  score1,
  score2,
  isEditing,
  onSave,
  onDelete,
  onEdit,
}: Props) => {
  const [formData, setFormData] = useState({
    datetime,
    location,
    opposingTeam,
    score1: score1 || "",
    score2: score2 || "",
  });

  const isFormValid =
    formData.datetime &&
    formData.location &&
    formData.opposingTeam &&
    !isNaN(Number(formData.score1)) &&
    !isNaN(Number(formData.score2));

  const handleInputChange = (field: string, value: string) => {
    // 숫자만 허용
    if ((field === "score1" || field === "score2") && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const datetimeOptions = [
    { value: "2024-07-25 13:00", label: "2024-07-25 - 1:00 PM" },
    { value: "2024-07-25 15:00", label: "2024-07-25 - 3:00 PM" },
    { value: "2024-07-26 13:00", label: "2024-07-26 - 1:00 PM" },
    { value: "2024-07-26 15:00", label: "2024-07-26 - 3:00 PM" },
  ];

  return (
    <GameScheduleBox>
      <ButtonGroup>
        {isEditing ? (
          <>
            <GameScheduleButton
              onClick={() => isFormValid && onSave(formData)}
              disabled={!isFormValid}>
              저장
            </GameScheduleButton>
            <GameScheduleButton onClick={onDelete}>삭제</GameScheduleButton>
          </>
        ) : (
          <GameScheduleButton onClick={onEdit}>수정</GameScheduleButton>
        )}
      </ButtonGroup>
      <GameScheduleInformationBox>
        <GameDetailsBox>
          {isEditing ? (
            <>
              <ScheduleInfomationSelect
                value={formData.datetime}
                onChange={(e) => handleInputChange("datetime", e.target.value)}>
                <option value="" disabled>
                  날짜 및 시간 선택
                </option>
                {datetimeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </ScheduleInfomationSelect>
              <ScheduleInfomationInput
                type="text"
                placeholder="장소"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </>
          ) : (
            <>
              <GameDateTimeBox>{datetime.replace(" ", " - ")}</GameDateTimeBox>
              <GameLocation location={location} />
            </>
          )}
        </GameDetailsBox>

        <GameTeamDetailsBox>
          <OurTeamBox>
            <OurTeamImage src={teamlogo} />
            <OurTeamSpan>JEJU DEERS</OurTeamSpan>
          </OurTeamBox>
          <VersusSpan>VS</VersusSpan>
          <OpposingTeamBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="상대 팀"
                value={formData.opposingTeam}
                onChange={(e) => handleInputChange("opposingTeam", e.target.value)}
              />
            ) : (
              <OpposingTeamSpan>{opposingTeam}</OpposingTeamSpan>
            )}
            <OpposingTeamImage src={opposingTeamImage} />
          </OpposingTeamBox>
        </GameTeamDetailsBox>

        <GameResultBox>
          <ScoreBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="우리 팀 점수"
                value={formData.score1}
                onChange={(e) => handleInputChange("score1", e.target.value)}
              />
            ) : (
              <OurTeamScoreSpan>{score1}</OurTeamScoreSpan>
            )}
          </ScoreBox>
          <VersusSpan>VS</VersusSpan>
          <ScoreBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="상대 팀 점수"
                value={formData.score2}
                onChange={(e) => handleInputChange("score2", e.target.value)}
              />
            ) : (
              <OpposingTeamScoreSpan>{score2}</OpposingTeamScoreSpan>
            )}
          </ScoreBox>
        </GameResultBox>
      </GameScheduleInformationBox>
    </GameScheduleBox>
  );
};

export default GameSchedule;
