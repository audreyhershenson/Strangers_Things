import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-A'
const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
const COHORT_NAME = '2206-FTB-ET-WEB-FT'


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


export async function registerUser(username, password) {
  console.log('Lets get the event inputs', event.target)
  console.log(`${BASE_URL}${COHORT_NAME}/users/register`)
  const response = await
    fetch(`${BASE_URL}${COHORT_NAME}/users/register`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      }).then(response => response.json())
      .then(result => {
        const token = result.data.token;
        console.log(token);
        return token;
      })
      .catch(console.error);


  // try {
  //   const response = await fetch(`${BASE}/users/register`);
  //   const data = await response.json();
  //   return data;
  // } 
  // catch (error) {
  //   console.error;
  // }
}

// export async function loginUser(username, password) {
//   console.log('Lets get the event inputs', event.target)
//   console.log(`${BASE_URL}${COHORT_NAME}/users/login`)
//   const response = await
//     fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           username: username,
//           password: password
//         }
//       })
//     }).then(response => response.json())
//       .then(result => {
//         console.log(result);
//       })
//       .catch(console.error);
//   //console.log(response, "response from user")
//   const result = await response.json()
//   return result
//   // try {
//   //   const response = await fetch(`${BASE}/users/register`);
//   //   const data = await response.json();
//   //   return data;
//   // } 
//   // catch (error) {
//   //   console.error;
//   // }
// }
