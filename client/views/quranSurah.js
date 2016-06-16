Template.quranSurah.onCreated(function() {
	var instance = this;
	instance.autorun(function() {
		instance.lang = Session.get('lang') || 'en';
		instance.sno = parseInt(FlowRouter.getParam('surah'));
		instance.subscribe('quran');
		instance.subscribe('surat');
		instance.subscribe('editAyat', instance.lang, instance.sno);
	});
});

Template.quranSurah.helpers({
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
	ayat: function () {
		var lang = Session.get('lang') || 'en';
		var sno = parseInt(FlowRouter.getParam('surah'));
		var surah = Surat.findOne({surah: sno});
		var ayat = (surah && surah.ayat) ? surah.ayat : 0;
		var array = [];
		for (i = 1; i < ayat + 1; i++) {
			var ayah = Ayat.findOne({surah:sno, ayah:i});
			var text = (ayah && ayah.text && ayah.text[lang]) ? ayah.text[lang] : '';
			array.push({
				ayah: i,
				text: text
			});
		}
		return array;
	},
	surat: function() {
		var sno = parseInt(FlowRouter.getParam('surah'));
		return Surat.findOne({surah: sno});
	}
});

Template.quranSurah.events({
	'keyup .qseDiv': function (e) {
		var id = e.target.id;
		var s = id.split('-')[1] * 1;
		var same = compAyat(s);
		if (same) {
			hideQseb(s);
		} else {
			showQseb(s);
		}
	},
	'click .qse-save': function (e) {
		var id = e.target.id;
		var s = id.split('-')[1] * 1;
		console.log('SAVE!');
	}
});

function compAyat(s) {
	var lang = Session.get('lang') || 'en';
	var surah = Surat.findOne({surah: s});
	var ayat = (surah && surah.ayat) ? surah.ayat : 0;
	var res = true;

	for (i = 1; i < ayat + 1; i++) {
		var a = Ayat.findOne({surah: s, ayah: i});
		var at = (a && a.text && a.text[lang]) ? a.text[lang] : '';
		var ip = $('#qse-' + s + '-' + i).html() || '';
		if (at !== ip) {
			addGlow(s,i);
			res = false;
		} else {
			remGlow(s,i);
		}
	}
	return res;
}

function addGlow(s,a) {
	$('#qse-' + s + '-' + a).removeClass('dglow').addClass('dglow');
}

function remGlow(s,a) {
	$('#qse-' + s + '-' + a).removeClass('dglow');
}

function showQseb(s) {
	$('#qse-'+s+'-save').show();
}

function hideQseb(s) {
	$('#qse-'+s+'-save').hide();
}
