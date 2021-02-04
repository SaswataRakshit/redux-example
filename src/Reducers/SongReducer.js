export const songsReducer = () => {
    return [
        {title: 'O Sanam', duration: '3.30'},
        {title: 'Kaho na pyaar hy', duration: '4.40'},
        {title: 'Jhalak Dikh La ja', duration: '1.45'},
        {title: 'Pehla Nasha', duration: '5.50'}
    ]
}

export const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        selectedSong = action.payload
        return selectedSong;
    }

    return selectedSong;
}