import {
  IonPage,
  IonHeader,
  IonButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
} from "@ionic/react";
import "./LogIn.css";
import { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../App";
import { useHistory } from "react-router";

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  let history = useHistory();

  const myUser = useContext(UserContext);

  const whenClickOnLoginButton = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsError(false);
        if (user && myUser?.setIsLoggedIn) {
          myUser.setIsLoggedIn(true);
          console.log("logged in", user);
          history.replace("/");
        }
      })
      .catch((error) => {
        // [TODO] save to state
        setIsError(true);
        console.log("something went wrong", error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LogInPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Email"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        {isError && (
          <IonItem>
            <p>Error: Try again! </p>
          </IonItem>
        )}
        <IonButton onClick={whenClickOnLoginButton}>Sign in</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
