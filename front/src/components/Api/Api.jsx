import { BASE_URL } from '../config/consts';

function checkResponce(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getCards() {
  return fetch(`${BASE_URL}/`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponce(res)
  );
}