import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tce.ce.gov.br/index.php/sim/1_0',
});

export default api;
