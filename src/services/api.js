import API_URL from '../const/api';

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function callApi(endpoint, header) {
  return fetch(`${API_URL}${endpoint}`, header)
    .then(response => response.json())
    .catch(error => error);
}

export const getGameModes = () => callApi('/game-settings.json', {
  method: 'get',
});

export const getLeaders = () => callApi('/winners.json', {
  method: 'get',
});

// this method is optional
export const sendResult = body => callApi('/result', {
  method: 'post',
  headers: jsonHeaders,
  body: JSON.stringify(body),
});
