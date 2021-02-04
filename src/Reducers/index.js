import { combineReducers } from 'redux';
import { songsReducer, selectSongReducer } from './SongReducer'
import { calculation } from './CalculationReducer'
import { posts, user } from './PostReducers'

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer,
    calculation: calculation,
    post: posts,
    user: user
})