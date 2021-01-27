import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'O Sanam', duration: '3.30'},
        {title: 'Kaho na pyaar hy', duration: '4.40'},
        {title: 'Jhalak Dikh La ja', duration: '1.45'},
        {title: 'Pehla Nasha', duration: '5.50'}
    ]
}

const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        selectedSong = action.payload
        return selectedSong;
    }

    return selectedSong;
}


//these methods are for calculator

const calculation = (result = 0, action) => {
    if (action.type === 'INCREASE_BY') {
        return result + action.payload
    }
    if (action.type === 'DECREASE_BY') {
        return result - action.payload
    }

    return result;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer,
    calculation: calculation
})