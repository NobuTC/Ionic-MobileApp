import {
  IonPage,
  IonHeader,
  IonButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import "./LogIn.css";
import { useState } from "react";

const LogIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(username, password);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LogInPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Username"
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
          placeholder="Password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />

        <IonButton onClick={loginUser}>Sign in</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
