Template.adminTranslate.helpers({
	lang: function () {
		var langs = Langs.find({}, {sort: ['order', 'asc']});
		return langs;
	},
	capRef: function () {
		return this.ref.toUpperCase();
	},
	qurPer: function() {
		var ref = this.ref;
		var query = {};
		query['text.'+ref] = {$exists: true};
		var cnt = Ayat.find(query).count();;
		var perc = (cnt / 6236) * 100;
		var perc = Math.round(perc * 100) / 100;
		if (perc === 100)
			return '<span style="color:blue">100%</span>';
		return perc+'%';
	},
	w1: function() {
		var l = Langs.find({}).count();
		var c = l + 4;
		var u = 100 / c;
		return u*2;
	},
	w2: function() {
		var l = Langs.find({}).count();
		var c = l + 4;
		var u = 100 / c;
		return u;
	}
});
