import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './features/toDoSlice'

const store = configureStore({
  reducer: {
    toDos: toDoReducer
  },
})

export default store