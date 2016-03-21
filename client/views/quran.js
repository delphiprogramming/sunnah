Template.quran.helpers({
	ready: function() {
		var lang = Session.get('lang') || 'en';
		var sfilt = {}; sfilt['name.'+lang] = true; 
		var surat = Surat.find({},sfilt).count();
		var afilt = {}; sfilt['text.'+lang] = true; 
		var ayat = Surat.find({},afilt).count();		
		if (surat < 114 || ayat < 6236)
			return false;
		return true;
	},
	surat: function () {
		var lang = Session.get('lang') || 'en';
		var filter = {}; filter['name.'+lang] = true; 
		var surat = Surat.find({},filter).fetch();
		return surat;
	},
	name: function() {
		var lang = Session.get('lang') || 'en';
		return this.name[lang];
	},
	percent: function() {
		var lang = Session.get('lang') || 'en';
		var snum = this.no;
		var total = this.ayat;
		var filter = {}; filter['text.'+lang] = true;
		var done = Ayat.find({surah:snum},filter).count();
		var perc = (done / total) * 100;
		var perc = Math.round(perc * 100) / 100;
		if (perc === 100)
			return '<span style="color:green">100%</span>';
		return '<span style="color:red">'+perc+'%</span>';
	}
});
