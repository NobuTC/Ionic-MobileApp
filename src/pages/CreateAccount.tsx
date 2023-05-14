import {
  IonPage,
  IonHeader,
  IonButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonInput,
  IonText,
} from "@ionic/react";
import "./CreateAccount.css";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const myUser = useContext(UserContext);

  const whenClickOnSignUpButton = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsError(false);
        if (user && myUser?.setIsLoggedIn) {
          myUser.setIsLoggedIn(true);
          console.log("logged in", user);

          // doc: https://v5.reactrouter.com/web/example/auth-workflow
          history.replace("/");
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log("something went wrong", error.code);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Email"
          type="email"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        {isError && (
          <IonText color="danger">
            <p>Password is too short! Must be 6 or more characters!</p>
          </IonText>
        )}
        <IonButton onClick={whenClickOnSignUpButton}>Sign up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;
