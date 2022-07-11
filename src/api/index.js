import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-A";
const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2206-FTB-ET-WEB-FT";

export async function getAllPosts() {
  try {
    const response = await fetch(`${BASE}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}

export async function registerUser(username, password) {
  console.log("Lets get the event inputs", event.target);
  console.log(`${BASE_URL}${COHORT_NAME}/users/register`);

  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result, "result")
    const token = result.data.token;
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
  }

}
  export async function loginUser(username, password) {
  
    try {
      const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      const token = result.data.token;
      console.log(token);
      return token;
    } catch (error) {
      console.error(error);
    }
  }

  export async function getUser(authToken) {
    try {
      const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}` 
      },
    }); 
    const result = await response.json();
    const data = result.data;
    return data;
    return result;
    }catch (error) {
      console.error(error);
    }
  }



  // try {
  //   const response = await fetch(`${BASE}/users/register`);
  //   const data = await response.json();
  //   return data;
  // }
  // catch (error) {
  //   console.error;
  // }


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
