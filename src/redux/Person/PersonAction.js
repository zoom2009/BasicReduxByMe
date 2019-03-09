import { setName, setAge } from "./PersonType";

export const SetName = payload => ({
    type: setName, payload
})

export const SetAge = payload => ({
    type: setAge, payload
})