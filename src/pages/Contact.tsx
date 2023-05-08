import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonTextarea, IonListHeader, IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useParams } from 'react-router';
import './contact.css';
import { useState } from "react";

const Contact: React.FC = () => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage() {
    console.log(user, email, phone, message);
    document.getElementById("user")!.innerHTML = user;
    document.getElementById("email")!.innerHTML = email;
    document.getElementById("phone")!.innerHTML = phone;
    document.getElementById("message")!.innerHTML = message;
  };

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
                <IonInput label="Name" labelPlacement="floating" fill="solid" placeholder="Enter text" onIonChange={(e: any) => setUser(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Email" type="email" labelPlacement="floating" fill="solid" placeholder="Enter text" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Phone number" type="tel" labelPlacement="floating" fill="solid" placeholder="Enter text" onIonChange={(e: any) => setPhone(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonTextarea label="Message" labelPlacement="floating" fill="solid" placeholder="Enter text" onIonChange={(e: any) => setMessage(e.target.value)}></IonTextarea>
            </IonItem>
            <IonItem>
                <IonButton onClick={sendMessage}color="primary" className="button" expand="block">Submit</IonButton>
            </IonItem>
        </IonList>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle id="user">Name</IonCardTitle>
            <IonCardSubtitle id="phone">Phone number</IonCardSubtitle>
            <IonCardSubtitle id="email">Email</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent id="message">Your message will be shown here.</IonCardContent>
    </IonCard>
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