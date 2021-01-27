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