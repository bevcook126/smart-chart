import sendRequest from './send-request';

const BASE_URL = '/api/rooms';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function updateRoom(editData) {
  return sendRequest(`${BASE_URL}`, 'PUT', editData)
}