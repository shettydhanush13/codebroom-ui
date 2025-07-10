import axios from 'axios';

export const analyzeRepo = async (payload) => {
  const res = await axios.post('http://localhost:3001/analysis/repo', payload);
  return res.data;
};

export const analyzeFile = async (payload) => {
    const res = await axios.post('http://localhost:3001/analysis/file', payload);
    return res.data;
};