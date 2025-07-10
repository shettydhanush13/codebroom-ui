import axios from 'axios';

const url = 'https://codebroom-api.onrender.com';

export const analyzeRepo = async (payload) => {
  const res = await axios.post(`${url}/analysis/repo`, payload);
  return res.data;
};

export const analyzeFile = async (payload) => {
    const res = await axios.post(`${url}/analysis/file`, payload);
    return res.data;
};