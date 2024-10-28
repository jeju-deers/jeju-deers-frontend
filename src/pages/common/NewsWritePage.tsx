import { useParams } from "react-router-dom";
import NewsWrite from "~/common/components/templates/NewsWrite";
import { useState } from "react";

const NewsWritePage = () => {
  const { section } = useParams();
  const [writeOption, setWriteOption] = useState(section || "");

  return <NewsWrite writeOption={writeOption} setWriteOption={setWriteOption} />;
};
export default NewsWritePage;
