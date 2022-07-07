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


// export async function RegisterUser() {
//   try {
//     const response = await fetch(`${BASE}/users/register`);
//     const data = await response.json();
//     return data;
//   } 
//   catch (error) {
//     console.error;
//   }
// }

// export async function Login() {
//   try {
//     const response = await fetch(`${BASE}/users/login`);
//     const data = await response.json();
//     return data;
//   } 
//   catch (error) {
//     console.error;
//   }
// }

