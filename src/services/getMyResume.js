import {BASE_URL} from "../constant/index.js";

export const getMyResume = async () => {
    const response = await fetch(BASE_URL, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}