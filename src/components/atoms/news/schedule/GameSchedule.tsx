import { useMemo, useState } from "react";
import GameLocation from "./GameLocation";
import {
  GameDatelineBox,
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

  const handleChangeInput = (field: string, value: string) => {
    if ((field === "score1" || field === "score2") && isNaN(Number(value))) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const parseDatetime = (datetime: string) => {
    const match = datetime.match(/(\d{4})\/(\d{2})\/(\d{2}) - (\d+):00 (AM|PM)/); // YYYY/MM/DD - H:00 AM/PM
    if (!match) return { year: 2023, month: 1, day: 1, hour: 9 };
    let [_, year, month, day, hour, period] = match;
    let numericHour = parseInt(hour, 10);
    if (period === "PM" && numericHour !== 12) numericHour += 12;
    if (period === "AM" && numericHour === 12) numericHour = 0;
    return {
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: numericHour,
    };
  };

  const updateDatetime = (field: string, value: number) => {
    const parts = parseDatetime(formData.datetime);
    const updated = { ...parts, [field]: value };
    const period = updated.hour >= 12 ? "PM" : "AM";
    const displayHour = updated.hour % 12 === 0 ? 12 : updated.hour % 12;
    const newDatetime = `${updated.year}/${String(updated.month).padStart(2, "0")}/${String(
      updated.day,
    ).padStart(2, "0")} - ${displayHour}:00 ${period}`;
    setFormData((prev) => ({ ...prev, datetime: newDatetime }));
  };

  const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const getDay = (year: number, month: number) => {
    switch (month) {
      case 2:
        return isLeapYear(year) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };

  const currentParts = parseDatetime(formData.datetime);

  const { year, month } = currentParts;

  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const years = useMemo(() => range(2023, 2032), []);
  const months = useMemo(() => range(1, 12), []);
  const days = useMemo(() => range(1, getDay(year, month)), [year, month]);
  const hours = useMemo(() => range(9, 22), []);

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
        <GameDatelineBox>
          {isEditing ? (
            <>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <ScheduleInfomationSelect
                  value={currentParts.year}
                  onChange={(e) => updateDatetime("year", +e.target.value)}>
                  <option value="" disabled>
                    년도 선택
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}년
                    </option>
                  ))}
                </ScheduleInfomationSelect>

                <ScheduleInfomationSelect
                  value={currentParts.month}
                  onChange={(e) => updateDatetime("month", +e.target.value)}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}월
                    </option>
                  ))}
                </ScheduleInfomationSelect>

                <ScheduleInfomationSelect
                  value={currentParts.day}
                  onChange={(e) => updateDatetime("day", +e.target.value)}>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}일
                    </option>
                  ))}
                </ScheduleInfomationSelect>

                <ScheduleInfomationSelect
                  value={currentParts.hour}
                  onChange={(e) => updateDatetime("hour", +e.target.value)}>
                  {hours.map((hour) => {
                    const label =
                      hour >= 12 ? `오후 ${hour === 12 ? 12 : hour - 12}시` : `오전 ${hour}시`;
                    return (
                      <option key={hour} value={hour}>
                        {label}
                      </option>
                    );
                  })}
                </ScheduleInfomationSelect>
              </div>

              <ScheduleInfomationInput
                type="text"
                placeholder="장소"
                value={formData.location}
                onChange={(event) => handleChangeInput("location", event.target.value)}
              />
            </>
          ) : (
            <>
              <GameDateTimeBox>{formData.datetime}</GameDateTimeBox>
              <GameLocation location={location} />
            </>
          )}
        </GameDatelineBox>

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
                onChange={(event) => handleChangeInput("opposingTeam", event.target.value)}
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
                onChange={(event) => handleChangeInput("score1", event.target.value)}
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
                onChange={(event) => handleChangeInput("score2", event.target.value)}
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
