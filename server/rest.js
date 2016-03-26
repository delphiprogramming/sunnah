var Api = new Restivus({
	authRequired: false,
	useDefaultAuth: false,
	prettyJson: true,
	defaultHeaders: {
		'Content-Type': 'application/json; charset=UTF-8'
	}
});

/**
 * @api {get} /quran Get Quran data (all languages) available on Sunnah.co
 * @apiName GetQuran
 * @apiGroup Quran
 *
 * @apiParam {Number} surah Surah number
 * @apiParam {Number} ayat Total ayat in Surah
 * @apiParam {Object} name Name of Surah in available languages
 * @apiParam {Object} meaning Translation of meaning of the Surah name
 */
Api.addRoute('quran', {
	get: function () {
		return Surat.find({}, {sort: ['no', 'asc'], fields: {_id: 0}}).fetch();
	}
});

/**
 * @api {get} /quran/:surah Surah data (all languages) available on Sunnah.co
 * @apiName GetSurah
 * @apiGroup Quran
 *
 * @apiParam {Number} ayah Number of the ayat
 * @apiParam {Object} text Text content of ayat in available languages
 */
Api.addRoute('quran/:surah', {
	get: function () {
		var surah = this.urlParams.surah * 1;
		return Ayat.find({surah: surah}, {sort: ['ayah', 'asc'], fields: {_id: 0, surah: 0}}).fetch();
	}
});

/**
 * @api {get} /quran/:surah/:ayat Ayat data (all languages) available on Sunnah.co
 * @apiName GetAyat
 * @apiGroup Quran
 *
 * @apiParam {Number} ayah Number of the ayat
 * @apiParam {Object} text Text content of ayat in available languages
 */
Api.addRoute('quran/:surah/:ayah', {
	get: function () {
		var surah = this.urlParams.surah * 1;
		var ayah = this.urlParams.ayah * 1;
		var res = Ayat.findOne({surah: surah, ayah: ayah}, {fields: {_id: 0, surah: 0, ayah: 0}});
		return res.text;
	}
});
