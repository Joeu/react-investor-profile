const BASE_URL = 'http://localhost:3004';

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json",
  'Authorization': 'application/json'
}

export const fetchQuestions = () =>
  fetch(`${BASE_URL}/questions`,
    {
      method: 'GET',
      headers: headers
    }
  )
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson);
      return resJson;
    })
    .catch(error => {
      console.warn(error)
    });