import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons";
import "./Menu.css";
import LogIn from "../pages/LogIn";
import CreateAccount from "../pages/CreateAccount";
import Contact from "../pages/Contact";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  component: React.FC;
}

export const appPages: AppPage[] = [
  {
    title: "Login",
    url: "login",
    component: LogIn,
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Sign up",
    url: "create-account",
    component: CreateAccount,
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Contact",
    url: "contact",
    iosIcon: heartOutline,
    component: Contact,
    mdIcon: heartSharp,
  },
  {
    title: "Todo List",
    url: "archived",
    iosIcon: archiveOutline,
    component: Contact, //laitetaan lindan todo
    mdIcon: archiveSharp,
  },
];
const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Todo App</IonListHeader>
          <IonNote>Welcome to ToDo App</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={`/page/` + appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
