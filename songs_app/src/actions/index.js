//Action Creator
export const selectSong = (song) => {
    // Return an action
    return {
        type:'SONG_SELECTED',
        payload:song
    };
};

export const deselectSong = (song) => {
    return {
        type:'SONG_DESELECTED',
        payload:song
    };
};
