import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useAddData = () => {
   const [loading, setLoading] = useState(false);
   useEffect(() => {});

   async function addTeacher(data) {
      try {
         const collectionRef = collection(db, "teachers"); // Replace with your collection name
         const docRef = await addDoc(collectionRef, data);
         console.log("Document written with ID:", docRef.id);
      } catch (error) {
         console.error("Error adding document:", error);
      }
   }
};
