import { useParams } from "react-router-dom";
import NewsUpdate from "~/common/components/templates/NewsUpdate";
import { useState } from "react";

const NewsUpdatePage = () => {
  const { section } = useParams();
  const [writeOption, setWriteOption] = useState(section || "");

  return <NewsUpdate writeOption={writeOption} setWriteOption={setWriteOption} />;
};
export default NewsUpdatePage;
