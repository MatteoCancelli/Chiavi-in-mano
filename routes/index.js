const express = require('express');
const router  = express.Router();
const pc      = require('../controllers/pageController');

router.get('/',                      pc.home);
router.get('/chi-siamo',             pc.chiSiamo);
router.get('/showroom',              pc.showroom);
router.get('/azienda/certificati',   pc.certificati);
router.get('/servizi',               pc.servizi);
router.get('/servizi/:slug',         pc.servizioSingolo);
router.get('/contatti',              pc.contatti);

module.exports = router;
