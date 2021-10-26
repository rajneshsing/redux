import { configureStore } from '@reduxjs/toolkit'
import tutorialReducer from './slices/tutorials';
import authReducer from './slices/authReducer';
const reducer = {
  tutorials: tutorialReducer,
  user: authReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;