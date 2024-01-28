import { useState, useEffect, cloneElement } from "react";
import {
   collection,
   getDocs,
   doc,
   setDoc,
   deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useData = () => {
   const [loading, setLoading] = useState(false);

   async function getData(collectionName) {
      setLoading(true);
      const dataCol = collection(db, collectionName);
      const snapshot = await getDocs(dataCol);
      const list = snapshot.docs.map((doc) => doc.data());
      setLoading(false);
      return list;
   }
   async function addData(collectionName, newData) {
      setLoading(true);
      await setDoc(doc(db, collectionName, `${newData.id}`), newData);
      setLoading(false);
   }
   async function deleteData(collectionName, id) {
      setLoading(true);
      await deleteDoc(doc(db, collectionName, `${id}`));
      setLoading(false);
   }
   return { loading, getData, addData, deleteData };
};
