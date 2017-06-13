import React, { Component } from 'react';
import './App.css';
// import TodoItem from './components/TodoItem'
import TodoItem from './components/EmojidoItem'

class App extends Component {
  state = {
    items: [
      {
        id: '1',
        completed: false,
        description: 'Buy food'
      },
      {
        id: '2',
        completed: false,
        description: 'Buy coffee'
      },
      {
        id: '3',
        completed: false,
        description: 'Do codewars kata'
      },
      {
        id: '4',
        completed: true,
        description: 'Play tennis'
      },
      {
        id: '5',
        completed: true,
        description: 'Watch movie'
      },
      {
        id: '6',
        completed: true,
        description: 'Sleep'
      }
    ]
  }

  // 1. User interaction
  // 2. Browser event
  // 3. Action handler
  // 4. Changes the state
  // 5. Rerenders our app
  // 6. Users see the updated user interface

  handleToggleCompleteItem = (index) => {
    this.setState((prevState) => {
      //const newItems = prevState.items
      // Update the correct item in the array
      //newItems[index].completed = !newItems[index].completed
      const newItems = prevState.map(item => {
        if (item.id == id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  handleChangeItemDescription = (index, newDescription) => {
    this.setState((prevState) => {
      const newItems = prevState.items
      // Update the correct item in the array
      newItems[index].description = newDescription

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  render() {
    const items = this.state.items
    const incompleteItems = items.filter((item) => {
      return !item.completed 
    })
    const completedItems = items.filter((item) => {
      return item.completed 
    })

    return (
      <main>
        <h1>Emojido</h1>
        {
          items.map((item, itemIndex) => {
            return (
              <TodoItem
                { ...item }
                onToggleComplete={
                  (event) => {
                    this.handleToggleCompleteItem(itemIndex)
                  }
                }
                onChangeDescription={
                  (event) => {
                    // My live <input> the user interacted with
                    const htmlInput = event.target
                    // Get the current value from the <input>
                    const newDescription = htmlInput.value
                    // Call our handler method, which updates the state
                    this.handleChangeItemDescription(itemIndex, newDescription)
                  }
                }
              />
            )
          })
        }
      </main>
    );
  }
}

export default App;
