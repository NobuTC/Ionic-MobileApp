import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import LogIn from "./LogIn";
import CreateAccount from "./CreateAccount";
import Contact from "./Contact";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  console.log("name", name);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name === "login" && <LogIn />}
        {name === "create-account" && <CreateAccount />}
        {name === "contact" && <Contact />}
      </IonContent>
    </IonPage>
  );
};

export default Page;
