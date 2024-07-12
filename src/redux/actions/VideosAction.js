import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../ActionTypes';

export const getPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        });

        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA-DcfoXWV_YOLVKAa2XIsENzWOBY4Dexc");
        
        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${errorDetails}`);
        }

        const data = await response.json();
        console.log(data);

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
            },
        });

    } catch (error) {
        console.error("There was an error making the request:", error);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message,
        });
    }
};
