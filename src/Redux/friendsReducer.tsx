import {ActionType, AppStateType, ChatPageType} from "./store";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState ={
    dialogs: [
        {name: "Valera", id: v1()},
        {name: "Gosha", id: v1()},
        {name: "Ilya", id: v1()},
        {name: "Yura", id: v1()}
    ],
    messages: [
        {id: v1(), MessageText: "Hello"},
        {id: v1(), MessageText: "Where are you?"},
        {id: v1(), MessageText: "Brooo"},
        {id: v1(), MessageText: "Fine"},
    ],
    newMessageText: ""
}

export const chatReducer = (state: ChatPageType=initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: v1(), MessageText: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.MessageText
            return state
        default:
            return state
    }
}
