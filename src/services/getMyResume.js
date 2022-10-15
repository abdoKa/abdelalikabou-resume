import {BASE_URL} from "../constant/index.js";

export const getMyResume = async () => {
    const response = await fetch(`${BASE_URL}/me`, {
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
}