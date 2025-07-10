import axios from 'axios';

export const analyzeRepo = async (payload) => {
  const res = await axios.post('https://codebroom-api.onrender.com/analysis/repo', payload);
  return res.data;
};

export const analyzeFile = async (payload) => {
    const res = await axios.post('https://codebroom-api.onrender.com/analysis/file', payload);
    return res.data;
};