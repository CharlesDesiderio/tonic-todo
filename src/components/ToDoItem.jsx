import { useContext } from 'react'
import AppData from '../AppContext'
import styles from './ToDoItem.module.css'

const ToDoItem = (props) => {

  const ContextData = useContext(AppData)

  const createdDate = new Date(props.item.createdOn)
  const completedDate = new Date(props.item.completedOn)
  

  return (
    <div className={styles.toDoItem}>
      <div className={styles.createdDate}>
        <span>
          {createdDate.toLocaleDateString()} at {createdDate.toLocaleTimeString()}
        </span>
      </div>
      <div className={styles.toDoItemData}>
        <span className={styles.toDoItemName}>
          {props.item.itemName}
        </span>
        
        {props.item.completed ? 
        <div className={styles.completedTag}>
          <div className={styles.completedTagRotate}>DONE!</div>
          <div className={styles.completedDate}>{props.item.completedOn ? <div>On {completedDate.toLocaleDateString()} at {completedDate.toLocaleTimeString()}</div> : ''} </div>
        </div>
        : null
        }
        <button className={styles.toDoItemButton} onClick={(event) => ContextData.markItemDone(event, props.item)}>✔️</button>
        <button className={styles.toDoItemButton} onClick={(event) => ContextData.deleteItem(event, props.item)}>❌</button>
      </div>
    </div>
  )
}

export default ToDoItem