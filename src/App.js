import { useState } from 'react'

import AppContext from './AppContext'

import AddToDo from './components/AddToDo'
import ToDoItem from './components/ToDoItem';

import styles from './App.module.css';

const App = () => {
  
  const [toDoList, setToDoList] = useState([])

  const AppData = {
    handleAddItem: (event, toDoItem) => {
      event.preventDefault()
      setToDoList((arr) => 
        [...arr,
        {
          itemName: toDoItem,
          completed: false,
          createdOn: Date.now(),
          completedOn: ''
        }]
      )
    },
    deleteItem: (event, item) => {
      event.preventDefault()
      const newToDoList = [...toDoList]
      newToDoList.splice(newToDoList.indexOf(item), 1)
      setToDoList(newToDoList)
    },
    markItemDone: (event, item) => {
      event.preventDefault()
      const updatedToDoList = [...toDoList]

      if (updatedToDoList[updatedToDoList.indexOf(item)].completed === true) {
        updatedToDoList[updatedToDoList.indexOf(item)].completed = false
        updatedToDoList[updatedToDoList.indexOf(item)].completedOn = ''
      } else {
        updatedToDoList[updatedToDoList.indexOf(item)].completed = true
        updatedToDoList[updatedToDoList.indexOf(item)].completedOn = Date.now()
      }

      
      
      setToDoList(updatedToDoList)

    }
  }

  return (
    <AppContext.Provider value={AppData}>

    <div className={styles.container}>
      <AddToDo />
      {toDoList.map((itemData, index) => {
        return (
            <ToDoItem key={index} item={itemData}/>
        )
      })}
    </div>
    </AppContext.Provider>
  )
}

export default App;
