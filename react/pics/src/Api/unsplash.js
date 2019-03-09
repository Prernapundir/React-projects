import axios from 'axios';

export default axios.create({
  baseURL :'https://api.unsplash.com' ,
  headers: {
    Authorization : 'Client-ID 0f3940ebc578306d20e271e0dfd7f9031628743ab2d94d9927c7d98c26f502b0'
  }
});
