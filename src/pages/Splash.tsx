import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import { useParams } from 'react-router';
import './Splash.css';

const Splash: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  //Tähän pitää vielä rakentaa setti, joka redirectaa etusivulle.

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