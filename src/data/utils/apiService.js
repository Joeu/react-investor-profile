const BASE_URL = 'https://api.myjson.com/bins/y70hy';

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json",
  'Authorization': 'application/json'
}

export const fetchQuestions = () =>
  fetch(`${BASE_URL}`,
    {
      method: 'GET',
      headers: headers
    }
  )
    .then(res => res.json())
    .then(resJson => {
      return resJson;
    })
    .catch(error => {
      console.warn(error)
    });