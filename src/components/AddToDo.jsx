import { useState, useContext } from 'react'
import AppData from '../AppContext'

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
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="toDoItem"></label>
      <input value={input['toDoItem']} name="toDoItem" type="text" onChange={handleChange} />
      <input type="submit" value="Add Item" />
      </form>
    </div>
  )
}

export default AddToDo