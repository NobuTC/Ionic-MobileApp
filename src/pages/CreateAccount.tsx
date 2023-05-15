import {
  IonPage,
  IonHeader,
  IonButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonInput,
  IonText,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./CreateAccount.css";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import useradd from "../images/useradd.png";

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
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol></IonCol>
            <IonCol>
              <IonImg
                className="pictures"
                src={useradd}
                alt="UserPicture"
              ></IonImg>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
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
