import react from "react";
import { format } from "date-fns";
import { de, es } from "date-fns/locale";

function PostDate({ date }) {
  const formattedDate = format(new Date(date), "dd MMMM yyyy", {
    locale: es,
  });

  return <span>{formattedDate}</span>;
}

export default PostDate;
