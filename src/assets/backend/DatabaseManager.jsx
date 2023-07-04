import { UserAuth } from "./AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

// Create a function that adds a new document to the database when user signs up for an account
export const addNewUser = async (email, password) => {
    try {
        const docRef = await addDoc(collection(db, "users", email), {
            email: email,
            password: password
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
