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
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    const token = result.token;

    if (token) {
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);
      return result;
    }
  }
  catch (error) {
    console.error
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
          password: password
        }
      }),
    });
    const result = await response.json();
    return result;
  }
  catch (error) {
    console.error
  }
}

export async function getUser(authToken) {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
    });
    const result = await response.json();
    const data = result.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function createPost(postTitle, postBody, postPrice, postLocation) {
  try {
    const authToken = localStorage.getItem("token")
    console.log("attempting to create post...")
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      method: "POST",
      body: JSON.stringify({
        postTitle: postTitle,
        postBody: postBody,
        postPrice: postPrice,
        postLocation: postLocation
      }),
    });
    const result = await response.json();
    console.log("post created!", result)
    return result;
  } catch (error) {
    console.error
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
