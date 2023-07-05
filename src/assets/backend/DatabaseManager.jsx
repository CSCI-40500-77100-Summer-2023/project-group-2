import { UserAuth } from "./AuthContext";
import { db } from "./FirebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

// Function to add a new document to the "users" collection
export const addNewUser = async (email, password) => {
  try {
    const userDocRef = doc(db, "users", email);
    await setDoc(userDocRef, {
      email: email,
      password: password,
    });
    console.log("Document written with ID: ", userDocRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Function adds the map object holding user's dates to the user's document
export const addDatesToUser = async (email, dates) => {
    try {
        // Check if document is empty
        const userDocRef = doc(db, "users", email);
        const docSnap = await userDocRef.get();
        if (docSnap.exists()) {
            // If document exists, add the dates to the document
            await setDoc(userDocRef, {
                dates: dates,
            }, { merge: true });
        } else {
            // If document does not exist, create the document and add the dates to the document
            await setDoc(userDocRef, {
                dates: dates,
            });
        }
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

