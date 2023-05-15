import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonInput, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonLabel } from '@ionic/react';
import './Home.css';
import { useStorage } from '../hooks/useStorage';
import { useRef, useState } from 'react';
import {checkmarkDoneOutline, arrowUndoOutline} from 'ionicons/icons'



 const Home: React.FC = () =>{
    const {todos, addTodo, updateTodoStatus, removeTodo} = useStorage();
    const [task, SetTask] = useState('')
    const ionList = useRef(null as any);

    const createTodo = async () => {
      await addTodo(task);
      SetTask('')
    }

    const updateTstatus = async (id: string, status: number) =>{
     await updateTodoStatus(id, status);
      ionList.current.closeSlidingItems()
    }

    const deleteTodo = async (id: string) => {
      await removeTodo(id)
      ionList.current.closeSlidingItems()
    }

    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle> To-Do List </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonInput value={task} 
            onIonChange={(e) => SetTask(e.detail.value!)}
            placeholder = 'Add Task..'></IonInput>
            <IonButton slot='end' onClick={() => createTodo()} fill='clear'>
              Add
            </IonButton>
          </IonItem>
          <IonList ref={ionList}>
            {todos.map((todo, key) =>(
              <IonItemSliding key={key}>
                <IonItem className={todo.status === 1 ? 'done' : ''}>
                 <IonLabel> {todo.task}</IonLabel>
                </IonItem>
                <IonItemOptions side='start'>
                  <IonItemOption color='danger'onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </IonItemOption>
                </IonItemOptions>

                <IonItemOptions side='end'>
                  <IonItemOption color='secondary'onClick={() => updateTstatus(todo.id, 0)}>
                    <IonIcon icon={arrowUndoOutline}></IonIcon>
                  </IonItemOption>
                  <IonItemOption color='primary'onClick={() => updateTstatus(todo.id, 1)}>
                  <IonIcon icon={checkmarkDoneOutline}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        </IonContent>
      </>
    );
  }

  export default Home;