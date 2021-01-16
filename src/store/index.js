import { createStore, combineReducers } from "redux"

import * as ducks from "./reducers"

const reducers = combineReducers(ducks)

const store = createStore(reducers)

export default store;