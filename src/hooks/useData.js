import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useData = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      getTeachers()
         .then((teachers) => {
            setData(teachers);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   async function getTeachers() {
      setLoading(true);
      const teachers = collection(db, "teachers");
      const snapshot = await getDocs(teachers);
      const teacherList = snapshot.docs.map((doc) => doc.data());
      setLoading(false);
      return teacherList;
   }
   return { data, loading };
};
