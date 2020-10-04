
class VersionController {
  async index(req, res) {

    return res.json({
      version: process.env.REACT_APP_VERSION
    });

  }
}

export default new VersionController();
