import apiConfig from '../API/apiConfig'
import _ from 'lodash'

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const increase = (num) => {
    return {
        type: 'INCREASE_BY',
        payload: num
    }
}

export const decrease = (num) => {
    return {
        type: 'DECREASE_BY',
        payload: num
    }
}

export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost());

    const userID = _.uniq(_.map(getState().post, 'userId'))

    userID.forEach(id=> dispatch(fetchUser(id)))
}

export const fetchPost = () => async dispatch => {
    const response = await apiConfig.get('/posts')
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = (userID) => async dispatch => {
    const response = await apiConfig.get('/users/' + userID)
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}
