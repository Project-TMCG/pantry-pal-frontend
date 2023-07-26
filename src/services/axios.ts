//Import Axios w/ TypeScript typings
const axios = require('axios').default;

//Grab Backend Endpoint from Env Variables
const backend_url = process.env.EXPO_PUBLIC_BACKEND_ENDPOINT

const testPostData = {
  includeIngredients: 'tomato,lettuce',
  diet: "vegetarian",
  number: 1
}

export default async function getRecipes(postData: Object=testPostData){

  try {

    const response = await axios.post(backend_url, postData)

    const data = response.data
    return(data)

  } catch (error) {

    if (error.response) {
      // The request was made, but the server responded with an error status code
      console.error('Server responded with status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error(error)
    }

    return null

  }
}