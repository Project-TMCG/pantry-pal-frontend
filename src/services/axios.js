const axios = require('axios');
import { PANTRY_PAL_BACKEND_ENDPOINT } from 'react-native-dotenv'

export default function getData(){
    const apiBaseUrl = PANTRY_PAL_BACKEND_ENDPOINT
    console.log(apiBaseUrl) 
}