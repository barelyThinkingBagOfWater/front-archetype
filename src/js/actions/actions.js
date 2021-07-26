import {
    ACTION
} from "./action-types"


export function doSomething(payload) {
    return { type: ACTION, payload } 
}