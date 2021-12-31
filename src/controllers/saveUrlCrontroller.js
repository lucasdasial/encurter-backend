const db = require("../config/_database");

exports.postUrl = (req, res) => {
  const $url = req.body.url;
  const $shortUrl = req.body.shortUrl;

  (async function save() {
    
    await res.send({
        message: 'to aqui',
        urlCompleta: $url,
        urlEncurtada: $shortUrl,
        
      });
  })();
};
