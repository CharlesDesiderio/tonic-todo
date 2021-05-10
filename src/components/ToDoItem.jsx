import { useContext } from 'react'
import AppData from '../AppContext'

const ToDoItem = (props) => {

  const ContextData = useContext(AppData)

  const createdDate = new Date(props.item.createdOn)
  const completedDate = new Date(props.item.completedOn)
  

  return (
    <div>
      <button onClick={(event) => ContextData.deleteItem(event, props.item)}>X</button>
      <span onClick={(event) => ContextData.markItemDone(event, props.item)}>
        {props.item.itemName}
      </span>
      <span>
        {createdDate.toLocaleDateString()} at {createdDate.toLocaleTimeString()}
      </span>
      {props.item.completed ? 'DONE!' : 'oh'}
      {props.item.completedOn ? <div>{completedDate.toLocaleTimeString()} {completedDate.toLocaleDateString()}</div> : ''}
    </div>
  )
}

export default ToDoItem