import { useState } from 'react'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

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
      <Router>
        <div className={styles.container}>
          <Switch>
            <Route path="/">
            <Route exact path="/">
              <Link className={styles.addButton} to="/add">New Item</Link>
            </Route>
            <Route path="/add">
              <AddToDo />
            </Route>
              {toDoList.length === 0 ? <div>Nothing here yet :(</div> : null}
              {toDoList.map((itemData, index) => {
                return (
                  <ToDoItem key={index} item={itemData}/>
                )
              })}
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App;
