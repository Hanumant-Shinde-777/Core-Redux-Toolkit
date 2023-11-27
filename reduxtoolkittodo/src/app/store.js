import{configureStore} from '@reduxjs/toolkit';
import tofoReducer from '.../feature/todo/todoSlice';
export const store = configureStore({

reducer: todoReducer

})