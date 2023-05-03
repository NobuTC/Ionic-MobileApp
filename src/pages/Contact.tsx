import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonTextarea, IonListHeader, IonLabel } from '@ionic/react';
import { useParams } from 'react-router';
//import './Page.css';

const Contact: React.FC = () => {

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
        <IonList>
            <IonListHeader>
                <IonLabel>Contact Us</IonLabel>
            </IonListHeader>
            <IonItem>
                <IonInput label="Outline input" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Outline input" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Outline input" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
            <IonTextarea label="Solid textarea" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
            </IonItem>
        </IonList>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Contact;