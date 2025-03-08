import { useEffect, useState } from "react";
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
  date: string;
  location: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  awayTeamImage: string;
  isEditing: boolean;
  onSave: (updatedData: Partial<Props>) => void;
  onDelete: () => void;
  onEdit: () => void;
}

const GameSchedule = ({
  date,
  location,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  awayTeamImage,
  isEditing,
  onSave,
  onDelete,
  onEdit,
}: Props) => {
  const [formData, setFormData] = useState({
    isEditing,
    date,
    location,
    homeTeam,
    awayTeam,
    homeScore: homeScore || "",
    awayScore: awayScore || "",
  });

  useEffect(() => {
    setFormData({
      isEditing,
      date,
      location,
      homeTeam,
      awayTeam,
      homeScore: homeScore || "",
      awayScore: awayScore || "",
    });
  }, [isEditing, date, location, homeTeam, awayTeam, homeScore, awayScore]);

  const isFormValid =
    formData.date &&
    formData.location &&
    formData.homeTeam &&
    formData.awayTeam &&
    !isNaN(Number(formData.homeScore)) &&
    !isNaN(Number(formData.awayScore));

  const handleInputChange = (field: string, value: string) => {
    if ((field === "homeScore" || field === "awayScore") && !/^[0-9]*$/.test(value)) return;

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
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}>
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
              <GameDateTimeBox>{date.replace(" ", " - ")}</GameDateTimeBox>
              <GameLocation location={location} />
            </>
          )}
        </GameDetailsBox>

        <GameTeamDetailsBox>
          <OurTeamBox>
            <OurTeamImage src={teamlogo} />
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="우리 팀"
                value={formData.homeTeam}
                onChange={(e) => handleInputChange("homeTeam", e.target.value)}
              />
            ) : (
              <OurTeamSpan>{homeTeam}</OurTeamSpan>
            )}
          </OurTeamBox>
          <VersusSpan>VS</VersusSpan>
          <OpposingTeamBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="상대 팀"
                value={formData.awayTeam}
                onChange={(e) => handleInputChange("awayTeam", e.target.value)}
              />
            ) : (
              <OpposingTeamSpan>{awayTeam}</OpposingTeamSpan>
            )}
            <OpposingTeamImage src={awayTeamImage} />
          </OpposingTeamBox>
        </GameTeamDetailsBox>

        <GameResultBox>
          <ScoreBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="우리 팀 점수"
                value={formData.homeScore}
                onChange={(e) => handleInputChange("homeScore", e.target.value)}
              />
            ) : (
              <OurTeamScoreSpan>{homeScore}</OurTeamScoreSpan>
            )}
          </ScoreBox>
          <VersusSpan>VS</VersusSpan>
          <ScoreBox>
            {isEditing ? (
              <ScheduleInfomationInput
                type="text"
                placeholder="상대 팀 점수"
                value={formData.awayScore}
                onChange={(e) => handleInputChange("awayScore", e.target.value)}
              />
            ) : (
              <OpposingTeamScoreSpan>{awayScore}</OpposingTeamScoreSpan>
            )}
          </ScoreBox>
        </GameResultBox>
      </GameScheduleInformationBox>
    </GameScheduleBox>
  );
};

export default GameSchedule;
