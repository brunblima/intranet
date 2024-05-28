import { db } from "../../config/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

export const FetchUsers = async (name) => {
  const usersRef = collection(db, "users");
  const usersQuery = query(
    usersRef,
    where("username", ">=", name),
    where("username", "<=", name + "\uf8ff")
  );
  const snapshot = await getDocs(usersQuery);
  const usersData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return usersData;
};
