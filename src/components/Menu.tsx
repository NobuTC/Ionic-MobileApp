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
  listCircleOutline,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  personCircle,
} from "ionicons/icons";
import "./Menu.css";
import LogIn from "../pages/LogIn";
import CreateAccount from "../pages/CreateAccount";
import Contact from "../pages/Contact";
import { useContext } from "react";
import { UserContext } from "../App";
import LogOut from "../pages/Logout";
import Home from "../pages/Home";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  component: React.FC;
  hideOnLogin?: boolean;
  hideWhenUserIsNotLoggedIn?: boolean;
}

export const appPages: AppPage[] = [
  {
    title: "Login",
    url: "login",
    component: LogIn,
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    hideOnLogin: true,
  },
  {
    title: "Sign up",
    url: "create-account",
    component: CreateAccount,
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    hideOnLogin: true,
  },
  {
    title: "Contact",
    url: "contact",
    iosIcon: personCircle,
    component: Contact,
    mdIcon: personCircle,
  },
  {
    title: "Log out",
    url: "logout",
    iosIcon: listCircleOutline,
    component: LogOut,
    mdIcon: listCircleOutline,
    hideWhenUserIsNotLoggedIn: true,
  },
  {
    title: "ToDo",
    url: "home",
    iosIcon: archiveOutline,
    component: Home,
    mdIcon: archiveSharp,
  },
];
const Menu: React.FC = () => {
  const location = useLocation();
  const myUser = useContext(UserContext);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Todo App</IonListHeader>
          <IonNote>Welcome to ToDo App</IonNote>
          {appPages.map((appPage, index) => {
            if (
              (myUser?.isLoggedIn && appPage.hideOnLogin) ||
              (!myUser?.isLoggedIn && appPage.hideWhenUserIsNotLoggedIn)
            )
              return null;
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === `/page/` + appPage.url
                      ? "selected"
                      : ""
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
