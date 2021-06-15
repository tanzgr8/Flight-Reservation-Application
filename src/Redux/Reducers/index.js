import bookingReducers from "./bookingReducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  bookingReducers,
});
export default rootReducer;