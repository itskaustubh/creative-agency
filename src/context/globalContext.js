import React, { createContext, useReducer, useContext } from "react"

//Define Conext
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const initialState = { 
  isHomePage: true,
  currentTheme: 'dark',
  cursorType: null,
  cursorStyles: ['hovered','pointer','melt']
}

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.value,
      }
    }
    case "CURSOR_TYPE": {
      return {
        ...state, 
        cursorType: action.value,
      }
    }
    case "IS_HOME_PAGE": {
      return {
        ...state, 
        isHomePage: action.value,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

//Provider

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  console.log("state", state)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}


//custom hooks for when we want to use our global state
const useGlobalStateContext = () => useContext(GlobalStateContext)
const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)

export {
  GlobalProvider,
  useGlobalStateContext,
  useGlobalDispatchContext
}