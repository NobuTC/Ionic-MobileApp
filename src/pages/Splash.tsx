import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSpinner, useIonViewDidEnter, } from '@ionic/react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import './Splash.css';

const Splash: React.FC = () => {
  //2 seconds after loading user is sent to '/' route.
  const history = useHistory();
  useIonViewDidEnter(() => {
    setTimeout(() => {
    history.push("/");
    }, 2000);
  });
  const { name } = useParams<{ name: string; }>();

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
        <div className="flex-center">
            Welcome, loading your page
            <IonSpinner name="dots"></IonSpinner>
        </div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Splash;