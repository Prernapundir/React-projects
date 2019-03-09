import axios from 'axios';

const KEY = 'AIzaSyDL77Es-JNDkFbKXe_1TInaflUEcUUOilo';


export default axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3" ,
  params: {
    part:'snippet',
    maxResults:5,
    key:KEY,

  }
});
