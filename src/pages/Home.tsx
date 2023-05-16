import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonInput,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonLabel,
  IonPage,
  IonGrid,
  IonCol,
  IonRow,
  InputChangeEventDetail,
} from "@ionic/react";
import "./Home.css";
import { useStorage } from "../hooks/useStorage";
import { useCallback, useRef } from "react";
import { checkmarkDoneOutline, arrowUndoOutline } from "ionicons/icons";

// React useState not working with Ionic, so we use "let" instead
let textVal = "";

const Home: React.FC = () => {
  const { todos, addTodo, updateTodoStatus, removeTodo } = useStorage();
  const ionList = useRef(null as any);

  const onChange = useCallback(
    async (e: CustomEvent<InputChangeEventDetail>) => {
      const ionInput = e.currentTarget;
      if (!ionInput) {
        return;
      }
      textVal = e.detail.value!;
    },
    []
  );

  const updateTstatus = async (id: string, status: number) => {
    await updateTodoStatus(id, status);
    ionList.current.closeSlidingItems();
  };

  const deleteTodo = async (id: string) => {
    await removeTodo(id);
    ionList.current.closeSlidingItems();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> To-Do List </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol>
              <IonInput
                fill="solid"
                type="text"
                onIonChange={onChange}
                placeholder="Write task:"
              ></IonInput>

              <IonButton
                onClick={async () => {
                  await addTodo(textVal);
                }}
              >
                Add
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList inset={true} ref={ionList}>
          {todos.map((todo, key) => (
            <IonItemSliding key={key}>
              <IonItem className={todo.status === 1 ? "done" : ""}>
                <IonLabel> {todo.task}</IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption
                  color="danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </IonItemOption>
              </IonItemOptions>

              <IonItemOptions side="end">
                <IonItemOption
                  color="secondary"
                  onClick={() => updateTstatus(todo.id, 0)}
                >
                  <IonIcon icon={arrowUndoOutline}></IonIcon>
                </IonItemOption>
                <IonItemOption
                  color="primary"
                  onClick={() => updateTstatus(todo.id, 1)}
                >
                  <IonIcon icon={checkmarkDoneOutline}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
