import PersonInitState from "./PersonInitState";
import { setName, setAge } from "./PersonType";

export default (state = PersonInitState, action) => {
    switch (action.type) {
        case setName:
            state = {
                ...state,
                name: action.payload
            }
            break
        case setAge:
            state = {
                ...state,
                age: action.payload
            }
            break
    }
    return state
}