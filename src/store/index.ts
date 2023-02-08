import { createStore} from "redux"
import { reducer } from "./reducer"

export * from "./selectors"
export * from "./actionCreators"

export const store = createStore(reducer)