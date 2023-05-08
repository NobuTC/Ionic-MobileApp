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
import { appPages } from "../components/Menu";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  console.log("name", name);

  const page = appPages.find((appPage) => {
    return appPage.url === name;
  });

  if (!page) return null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{page.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{page.title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <page.component></page.component>
      </IonContent>
    </IonPage>
  );
};

export default Page;
