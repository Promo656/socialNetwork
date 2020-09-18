import {v1} from "uuid";

export type FriendsReducerAT =
    FollowAT
    | UnFollowAT
    | SetUsersAT
    | AddFriendAT
    | UpdateNewFriendTextAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT

export type LocationType = {
    country: string
    city: string
}
export type FriendType = {
    id: string
    name: string
    followed: boolean
    status: string
    location: LocationType
}
export type FriendsPageType = {
    users: FriendType[]
    pageSize: number
    TotalUsersCount: number
    currentPage: number
    newFriendsText: string
}

let initialState: FriendsPageType = {
    users: [],
    pageSize: 10,
    TotalUsersCount: 0,
    currentPage: 1,
    newFriendsText: ""
}

export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerAT) => {
    switch (action.type) {
        case ADD_FRIEND: {
            return {
                ...state, users: state.users = [{
                    id: v1(),
                    name: state.newFriendsText,
                    followed: true,
                    status: "Hello, there!",
                    location:
                        {
                            country: "Russia",
                            city: "Moscow"
                        }
                },
                    ...state.users],
                newFriendsText: state.newFriendsText = ""
            }
        }
        case UPDATE_NEW_FRIEND_TEXT: {
            return {...state, newFriendsText: state.newFriendsText = action.newText}
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, TotalUsersCount:action.totalCount}
        }
        default:
            return state
    }
}
//--------------------------------------FOLLOW----------------------------------
const FOLLOW = "FOLLOW"
export type FollowAT = {
    type: typeof FOLLOW
    userId: string
}
export const FollowAC = (userId: string): FollowAT => ({
    type: FOLLOW,
    userId: userId
})
//--------------------------------------UNFOLLOW----------------------------------
const UNFOLLOW = "UNFOLLOW"
export type UnFollowAT = {
    type: typeof UNFOLLOW
    userId: string
}
export const UnFollowAC = (userId: string): UnFollowAT => ({
    type: UNFOLLOW,
    userId: userId
})
//--------------------------------------SET_USERS----------------------------------
const SET_USERS = "SET_USERS"
export type SetUsersAT = {
    type: typeof SET_USERS
    users: FriendType[]
}
export const SetUsersAC = (users: FriendType[]): SetUsersAT => ({
    type: SET_USERS,
    users: users
})
//--------------------------------------ADD-FRIEND----------------------------------
const ADD_FRIEND = "ADD-FRIEND"
export type AddFriendAT = {
    type: typeof ADD_FRIEND
}
export const addFriendAC = (): AddFriendAT =>
    ({type: ADD_FRIEND})
//------------------------------------UPDATE-NEW-FRIEND-TEXT----------------------
const UPDATE_NEW_FRIEND_TEXT = "UPDATE-NEW-FRIEND-TEXT"
export type UpdateNewFriendTextAT = {
    type: typeof UPDATE_NEW_FRIEND_TEXT
    newText: string
}
export const updateNewFriendTextAC = (text: string): UpdateNewFriendTextAT => ({
    type: UPDATE_NEW_FRIEND_TEXT,
    newText: text
})
//------------------------------------SET-CURRENT-PAGE----------------------
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export type SetCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
export const SetCurrentPageAC = (pageNumber: number): SetCurrentPageAT => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber
})
//------------------------------------SET-TOTAL-USERS-COUNT----------------------
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export type SetTotalUsersCountAT = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount:number
}
export const SetTotalUsersCountAC=(totalCount:number):SetTotalUsersCountAT=>({
    type:SET_TOTAL_USERS_COUNT,
    totalCount:totalCount
})