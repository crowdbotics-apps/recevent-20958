import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11120898Reducer from '../features/SignIn11120898/redux/reducers'
import SignUp12120897Reducer from '../features/SignUp12120897/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11120898: SignIn11120898Reducer,
SignUp12120897: SignUp12120897Reducer,

});