import React from "react";

/*
import {v1} from "uuid";
import {ActionType} from "./redux-store";
//-----------------------------------START CREATE TYPES-------------------------------------
export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    MessageText: string
}
export type ChatPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type PostType = {
    id: string
    text: string
}
export  type PostPageType = {
    newPostText: string
    posts: PostType[]
}
export type FriendType = {
    id: string
    name: string
}
export type FriendsPageType = {
    friends: FriendType[]
    newFriendsText: string
}
export type AppStateType = {
    chatPage: ChatPageType
    postPage: PostPageType
    friendsPage: FriendsPageType
}
export type StoreType = {
    _state: AppStateType
    _callSubscriber: (state: AppStateType) => void
    getState: () => AppStateType
    subscribe: (observer: (state: AppStateType) => void) => void
    dispatch: (action: any) => void
}

//-----------------------------------END CREATE TYPES-------------------------------------
//------------------------------------------------------------------------------------------
//-----------------------------------START CREATE STORE-------------------------------------
export const store: StoreType = {
    _state: {
        chatPage: {
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
                {id: v1(), MessageText: "Fine!!!"},
            ],
            newMessageText: ""
        },
        postPage: {
            posts: [
                {id: v1(), text: "Hello, everyone!!!!!!!!!!!!!"},
                {id: v1(), text: "It's my first site!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
                {id: v1(), text: "Yoo!"},
            ],
            newPostText: ""
        },
        friendsPage: {
            friends: [
                {id: v1(), name: "Valera"},
                {id: v1(), name: "Gosha"},
                {id: v1(), name: "Ilya"},
                {id: v1(), name: "Yura"}
            ],
            newFriendsText: ""
        }
    },
    _callSubscriber(state: AppStateType) {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        //this._state.postPage = profileReducer(this._state.postPage, action)
        //this._state.chatPage = chatReducer(this._state.chatPage, action)
        //this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state)
    }
}
//-----------------------------------END CREATE STORE-------------------------------------









*/
