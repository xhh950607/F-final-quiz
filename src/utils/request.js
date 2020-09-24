const BASE_URL = 'http://localhost:8080';

export const fetchTraineeList = () => {
  return fetch(`${BASE_URL}/trainees?grouped=false`).then((response) => response.json());
};

export const fetchTrainerList = () => {
  return fetch(`${BASE_URL}/trainers?grouped=false`).then((response) => response.json());
};

export const fetchCreateTrainer = (data) => {
  return fetch(`${BASE_URL}/trainers`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
};
