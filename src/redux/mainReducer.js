import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11120972Reducer from '../features/SignIn11120972/redux/reducers'
import SignIn11120898Reducer from '../features/SignIn11120898/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11120972: SignIn11120972Reducer,
SignIn11120898: SignIn11120898Reducer,

});