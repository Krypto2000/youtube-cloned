import { LOAD_PROFILE, LOGIN_REQUEST,  LOGIN_SUCESS,  LOG_OUT } from "../ActionTypes";

const initialState = {
    accessToken: sessionStorage.getItem("ytc-access-token") || null,
    user: sessionStorage.getItem("ytc-user") 
        ? JSON.parse(sessionStorage.getItem("ytc-user"))
        : null,
    loading: false,
    error: null,
};

export const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true,
                error: null, // Clear any previous errors on login request
            };
        case LOGIN_SUCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false,
                error: null,
            };
        case LOAD_PROFILE:
            return {
                ...prevState,
                user: payload,
            };
        case LOG_OUT:
            return {
                ...prevState,
                accessToken: null,
                user: null,
            };
        default:
            return prevState;
    }
};
