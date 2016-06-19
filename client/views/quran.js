Template.quran.onCreated(function() {
	var instance = this;
	instance.autorun(function() {
		instance.lang = Session.get('lang') || 'en';
		instance.subscribe('quran');
		instance.subscribe('surat');
		instance.subscribe('ayat', instance.lang);
	});
});

Template.quran.helpers({
	ready: function() {
		var lang = Session.get('lang') || 'en';
		var sfilt = {}; sfilt['name.'+lang] = {$exists:true};
		var surat = Surat.find(sfilt).count();
		var afilt = {}; afilt['text.'+lang] = {$exists:true};
		var ayat = Ayat.find(afilt).count();
		if (surat < 114 || ayat < 6236)
			return false;
		return true;
	},
	surat: function () {
		var lang = Session.get('lang') || 'en';
		var array = [];
		for (i = 1; i < 115; i++) {
			var surat = Surat.findOne({surah:i});
			var a = (surat && surat.ayat) ? surat.ayat : '-';
			var n = (surat && surat.name) ? surat.name : '';
			var m = (surat && surat.meaning) ? surat.meaning : '';
			array.push({
				no: i,
				ayat: a,
				name: n,
				meaning: m
			});
		}
		return array;
	},
	name: function() {
		var lang = Session.get('lang') || 'en';
		return this.name[lang];
	},
	arName: function() {
		return this.name['ar'];
	},
	done: function() {
		var lang = Session.get('lang') || 'en';
		var snum = this.no;
		var query = {};
		query['text.'+lang] = {$exists:true};
		query['surah'] = snum;
		var done = Ayat.find(query).count();
		return done;
	},
	percent: function() {
		if (this.ayat === '-')
			return '';

		var lang = Session.get('lang') || 'en';
		var snum = this.no;
		var total = this.ayat;
		var query = {};
		query['text.'+lang] = {$exists:true};
		query['surah'] = snum;
		var done = Ayat.find(query).count();
		var perc = (done / total) * 100;
		var perc = Math.round(perc * 100) / 100;
		if (perc === 100)
			return '<span style="color:green">100%</span>';
		return '<span style="color:red">'+perc+'%</span>';
	}
});

Template.quran.events({
	'click #qsave': function () {
		var lang = Session.get('lang') || 'en';
		$('.sname').each(function (i) {
			var sn = i + 1;
			var nn = {}; nn['name.'+lang] = $(this).val();
			var id = Surat.findOne({surah: sn})._id;
			Surat.update(id, { $set: nn });
		});
		sweetAlert('Saved!');
	}
});
