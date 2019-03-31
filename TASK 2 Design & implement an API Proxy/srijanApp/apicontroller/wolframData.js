const WolframAlphaAPI = require("wolfram-alpha-api");
const Config = require("../config/config.json");
const waApi = WolframAlphaAPI(Config.AppID);

// middleware to authenticate employee.
// const authenticate = require("../middlewares/authenticateEmployee");

module.exports = function(app) {
  // json data
  app.post("/api/search/:format", (req, res) => {
    let format = req.params.format;
    let query = req.body.query;
    if (!query) {
      return res.status(404).send();
    }

    waApi
      .getFull({
        input: query,
        output: format
      })
      .then(data => {
        res.send(data);
      })
      .catch(e => {
        res.send(e);
      });
  });
}; //main function
