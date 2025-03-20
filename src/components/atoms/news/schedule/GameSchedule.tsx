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
  OurTeamTextSpan,
  ScoreBox,
  VersusSpan,
  ScheduleManageButtonGroup,
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
  onUpdate: (updatedData: Partial<Props>) => void;
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
  onUpdate,
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

  const handleFormChange = (field: string, value: string) => {
    if ((field === "score1" || field === "score2") && !/^\d*$/.test(value)) return;

    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const formatDateTime = (date: Date, hour: number) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return {
      value: `${year}/${month}/${day} - ${formattedHour}:00 ${period}`,
      label: `${year}/${month}/${day} - ${formattedHour}:00 ${period}`,
    };
  };

  const generateDateTimeOptions = () => {
    const options = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(now.getDate() + i);
      for (let hour = 9; hour <= 21; hour += 2) {
        options.push(formatDateTime(date, hour));
      }
    }
    return options;
  };

  const datetimeOptions = generateDateTimeOptions();

  return (
    <GameScheduleBox>
      <ScheduleManageButtonGroup>
        {isEditing ? (
          <>
            <GameScheduleButton
              onClick={() => isFormValid && onUpdate(formData)}
              disabled={!isFormValid}>
              저장
            </GameScheduleButton>
            <GameScheduleButton onClick={onDelete}>삭제</GameScheduleButton>
          </>
        ) : (
          <GameScheduleButton onClick={onEdit}>수정</GameScheduleButton>
        )}
      </ScheduleManageButtonGroup>
      <GameScheduleInformationBox>
        <GameDetailsBox>
          {isEditing ? (
            <>
              <ScheduleInfomationSelect
                value={formData.datetime}
                onChange={(event) => handleFormChange("datetime", event.target.value)}>
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
                onChange={(event) => handleFormChange("location", event.target.value)}
              />
            </>
          ) : (
            <>
              <GameDateTimeBox>{datetime}</GameDateTimeBox>
              <GameLocation location={location} />
            </>
          )}
        </GameDetailsBox>

        <GameTeamDetailsBox>
          <OurTeamBox>
            <OurTeamImage src={teamlogo} />
            <OurTeamTextSpan>JEJU DEERS</OurTeamTextSpan>
          </OurTeamBox>
          <VersusSpan>VS</VersusSpan>
          <OpposingTeamBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="상대 팀"
                value={formData.opposingTeam}
                onChange={(event) => handleFormChange("opposingTeam", event.target.value)}
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
                onChange={(event) => handleFormChange("score1", event.target.value)}
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
                onChange={(event) => handleFormChange("score2", event.target.value)}
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
