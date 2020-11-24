import {combineReducers} from 'redux';

import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer';
const RootReducer=combineReducers(
   { 
      products:ProductReducer,
      cart:CartReducer,
   }
)

export default RootReducer;


