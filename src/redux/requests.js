import Axios from "axios";

const getApiUrl = (endpoint) => {
    // this is to simulate a unauthenticated request that would happen 
    // when running unit tests
    let isAuthenticated = process.env.REACT_APP_API === "app";
    if(isAuthenticated){
        return `https://pokeapi.co/api/v2/${endpoint}`
    } else{
        return "";
    }
}

export const handleThunkRequest = ({ endpoint, method }, rejectWithValue) => {
    const request = {
        method,
        url: getApiUrl(endpoint),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: {}
    };
    return Axios(request).then((response) => {
        return response.data;
    }).catch((error) => {
        return rejectWithValue(error)
    })
}