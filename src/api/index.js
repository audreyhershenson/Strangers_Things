import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-A'

export async function getAllPosts() {
    try {
      const response = await fetch(`${BASE}/posts`);
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error;
    }
}