import {
  Content,
  HistoryBox,
  HistoryContentBox,
  HistoryContentSpan,
  HistoryDateSpan,
  HistoryListBox,
  HistoryYearSpan,
} from "./HistoryStyles";

interface Props {
  historyData: { year: string; events: { date: string; content: string }[] }[];
}

const History = ({ historyData }: Props) => (
  <HistoryBox>
    {historyData.map(({ year, events }, index) => (
      <HistoryListBox key={index}>
        <HistoryYearSpan>{year}</HistoryYearSpan>
        <Content>
          {events.map(({ date, content }, idx) => (
            <HistoryContentBox key={idx}>
              <HistoryDateSpan>{date}</HistoryDateSpan>
              <HistoryContentSpan>{content}</HistoryContentSpan>
            </HistoryContentBox>
          ))}
        </Content>
      </HistoryListBox>
    ))}
  </HistoryBox>
);

export default History;
