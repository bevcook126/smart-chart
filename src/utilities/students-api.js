import sendRequest from "./send-request";
const BASE_URL = '/api/students';

export function addStudent(formData) {
    return sendRequest(`${BASE_URL}`, "POST", formData);
}

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}