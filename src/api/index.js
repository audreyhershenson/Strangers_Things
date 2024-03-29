import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-A";
const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2206-FTB-ET-WEB-FT";

export async function createPost(post, authToken) {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      method: "POST",
      body: JSON.stringify({
        post
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error
  }
}

export async function getAllPosts(authToken) {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}

export async function getMyPosts(authToken) {
  try {
    console.log(authToken, "<-AuthToken")
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error;
  }
}

export async function deletePost(_id, authToken) {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
    });
    const result = await response.json();
    return result; 
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
    const userResult = result.data;
    return userResult;
  } catch (error) {
    console.error(error);
  }
}