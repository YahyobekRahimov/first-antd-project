import ContentClasses from "../content/ContentClasses/ContentClasses";
import ContentSubjects from "../content/ContentSubjects/ContentSubjects";
import ContentTeachers from "/src/content/ContentTeachers/ContentTeachers";

export default function WebContent({ contentNumber }) {
   if (contentNumber == "1") {
      return <ContentTeachers />;
   } else if (contentNumber == "2") {
      return <ContentClasses />;
   } else if (contentNumber == "3") {
      return <ContentSubjects />;
   }
}
