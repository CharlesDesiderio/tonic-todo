import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import AppData from '../AppContext'

import styles from './AddToDo.module.css'

const AddToDo = () => {
  
  const ContextData = useContext(AppData)

  const [input, setInput] = useState({toDoItem: ''})
  
  const handleChange = (event) => setInput({
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleSubmit = (event) => {
    ContextData.handleAddItem(event, input['toDoItem'])
    setInput({toDoItem: ''})
  }

  return (
    <div className={styles.AddToDoItem}>
      <Link className={styles.closeAddToDo} to="/">❌</Link>
      <form className={styles.addToDoForm} onSubmit={handleSubmit}>
        <input placeholder="New Item..." className={styles.addToDoFormInput} value={input['toDoItem']} name="toDoItem" type="text" onChange={handleChange} />
        <input className={styles.addToDoFormSubmit} type="submit" value="Add Item" />
      </form>
    </div>
  )
}

export default AddToDo