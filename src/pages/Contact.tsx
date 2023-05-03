import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonTextarea, IonListHeader, IonLabel, IonButton } from '@ionic/react';
import { useParams } from 'react-router';
import './contact.css';

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
        <div className="flex-center">
        <IonList>
            <IonListHeader>
                <IonLabel>Contact Us</IonLabel>
            </IonListHeader>
            <IonItem>
                <IonInput label="Name" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Email" type="email" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Phone number" type="tel" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
            </IonItem>
            <IonItem>
                <IonTextarea label="Message" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
            </IonItem>
            <IonItem>
                <IonButton color="primary" className="button" expand="block">Submit</IonButton>
            </IonItem>
        </IonList>
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

export default Contact;