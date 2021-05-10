import { useState } from 'react'

const AddToDo = () => {

  const [input, setInput] = useState({})
  
  const handleChange = (event) => setInput({
    [event.currentTarget.name]: event.currentTarget.value
  })

  return (
    <div>
      <form action="">
      <label htmlFor="addToDo"></label>
      <input value={input[AddToDo]} name="addToDo" type="text" onChange={handleChange} />
      <input type="submit" value="Add Item" />
      </form>
    </div>
  )
}

export default AddToDo