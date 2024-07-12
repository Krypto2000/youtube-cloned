import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionTypes";

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    error: null,
};

export const HomeVideosReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload.videos,
                nextPageToken: payload.nextPageToken,
                loading: false,
            };
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
