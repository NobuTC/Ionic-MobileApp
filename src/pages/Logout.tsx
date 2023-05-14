import { IonButton } from "@ionic/react";
import "./LogIn.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router";

const LogOut: React.FC = () => {
  const history = useHistory();
  const myUser = useContext(UserContext);
  const logoutHandler = () => {
    myUser?.setIsLoggedIn(false);
    history.push("/page/login");
  };
  return <IonButton onClick={logoutHandler}>Logout</IonButton>;
};

export default LogOut;
