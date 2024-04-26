import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebaseConfig";

export const useRequireDoktorAuth = () => {
  const [isDoktor, setIsDoktor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        // Check user's custom claims for doktor role
        console.log("User:", user);
        user.getIdTokenResult().then((idTokenResult) => {
          console.log("ID Token Result:", idTokenResult);
          if (idTokenResult.claims.doktor) {
            setIsDoktor(true); // User has doktor role
          } else {
            navigate("/"); // Redirect to another page if not doktor
          }
        });
      } else {
        console.log("User is not authenticated");
        navigate("/"); // Redirect if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return isDoktor;
};
