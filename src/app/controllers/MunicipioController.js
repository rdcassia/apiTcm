import apiTcm from '../../services/apitcm';

class MunicipioController {
  async index(req, res) {
    const {
      data: {
        rsp: { _content },
      },
    } = await apiTcm.get('/municipios.json');

    return res.json(_content);
  }
}

export default new MunicipioController();
