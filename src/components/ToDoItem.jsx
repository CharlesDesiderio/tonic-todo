import { useContext } from 'react'
import AppData from '../AppContext'

const ToDoItem = (props) => {

  const ContextData = useContext(AppData)

  const itemDate = new Date(props.item.createdOn)

  return (
    <div>
      <button onClick={(event) => ContextData.deleteItem(event, props.item)}>X</button>
      <span>
        {props.item.itemName}
      </span>
      <span>
        {itemDate.toLocaleDateString()} at {itemDate.toLocaleTimeString()}
      </span>
    </div>
  )
}

export default ToDoItem