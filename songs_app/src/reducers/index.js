import { combineReducers } from 'redux';


const songsReducer = () => {
   return [

       { title: "Don't Speak", duration: '4:05',movie:'No Doubt'},
       { title: 'Macarena', duration: '2:30' ,movie:'Los Del Rio'},
       { title: 'I want it that way', duration: '3:15',movie:'Backstreet Boys' },
       { title: 'Jump', duration: '1:45',movie:'Kris Kross' }
       
   ];

};



const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } else if(action.type === 'SONG_DESELECTED'){
        return null;
    }
        return selectedSong;
    
};

export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
});


