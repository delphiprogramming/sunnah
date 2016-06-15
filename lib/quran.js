/***************
 * Instantiate *
 ***************/
Quran = new Mongo.Collection('quran');
Surat = new Mongo.Collection('surat');
Ayat = new Mongo.Collection('ayat');
QueryAyatLang = function(lang) {
	var query = {};
	query['text.'+lang] = {$exists:true};
	return query;
}

/***************
 * Permissions *
 ***************/
Quran.allow({
	insert: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	},
	update: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	},
	remove: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	}
});
Surat.allow({
	insert: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	},
	update: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	},
	remove: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	}
});
Ayat.allow({
	insert: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	},
	update: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	},
	remove: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
			return true;
		return false;
	}
});



/********************
 * Collection Hooks *
 ********************/



/***********************
 * Publish & Subscribe *
 ***********************/
if (Meteor.isServer) {
	Meteor.publish('quran', function () {
		return Quran.find({});
	});
	Meteor.publish('surat', function () {
		return Surat.find({});
	});
	Meteor.publish('ayat', function (lang) {
		return Ayat.find(QueryAyatLang(lang));
	});
}

/****************
 * Default Data *
 ****************/
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Quran.find({}).count() === 0) {
			console.log('** Quran database empty, filling starter data.');
			Quran.insert({ref: "ar", lang: "ar", source: "الله"});
			Quran.insert({ref: "en", lang: "en", source: "Saheeh International"});
			Quran.insert({ref: "id", lang: "id", source: "MUI"});
		}
		if (Surat.find({}).count() === 0) {
			Surat.insert({surah: 1, ayat: 7, name: {ar: "الفاتحة", en: "al-Fatihah", id: "al-Fatihah"}, meaning: {en: "The Opening"}});
			Surat.insert({surah: 2, ayat: 286, name: {ar: "البقرة", en: "al-Baqarah", id: "al-Baqarah"}, meaning: {en: "The Cow"}});
			Surat.insert({surah: 3, ayat: 200, name: {ar: "آل عمران", en: "Ali Imran", id: "Ali Imran"}, meaning: {en: "The Family of Imran"}});
			Surat.insert({surah: 4, ayat: 176, name: {ar: "النساء", en: "an-Nisaa", id: "an-Nisaa"}, meaning: {en: "The Women"}});
			Surat.insert({surah: 5, ayat: 120, name: {ar: "المائدة ", en: "al-Maidah", id: "al-Maidah"}, meaning: {en: "The Table"}});
			Surat.insert({surah: 6, ayat: 165, name: {ar: "الأنعام", en: "al-An’am", id: "Al An’am"}, meaning: {en: "The Cattle"}});
			Surat.insert({surah: 7, ayat: 206, name: {ar: "الأعراف", en: "al-A’raf", id: "Al A’raf"}, meaning: {en: "The Heights"}});
			Surat.insert({surah: 8, ayat: 75, name: {ar: "الأنفال", en: "al-Anfaal", id: "Al Anfaal"}, meaning: {en: "The Spoils of War"}});
			Surat.insert({surah: 9, ayat: 129, name: {ar: "التوبة", en: "at-Taubah", id: "At Taubah"}, meaning: {en: "The Repentance"}});
			Surat.insert({surah: 10, ayat: 109, name: {ar: "يونس", en: "Yunus", id: "Yunus"}, meaning: {en: "Jonas"}});
			Surat.insert({surah: 11, ayat: 123, name: {ar: "هود", en: "Hud", id: "Huud"}, meaning: {en: "Hud"}});
			Surat.insert({surah: 12, ayat: 111, name: {ar: "يوسف", en: "Yusuf", id: "Yusuf"}, meaning: {en: "Joseph"}});
			Surat.insert({surah: 13, ayat: 43, name: {ar: "الرعد", en: "ar-Ra’du", id: "Ar Ra’du"}, meaning: {en: "The Thunder"}});
			Surat.insert({surah: 14, ayat: 52, name: {ar: "ابراهيم", en: "Ibrahim", id: "Ibrahim"}, meaning: {en: "Abraham"}});
			Surat.insert({surah: 15, ayat: 99, name: {ar: "الحجر", en: "al-Hijr", id: "Al Hijr"}, meaning: {en: "The Rock"}});
			Surat.insert({surah: 16, ayat: 128, name: {ar: "النحل", en: "an-Nahl", id: "An Nahl"}, meaning: {en: "The Bee"}});
			Surat.insert({surah: 17, ayat: 111, name: {ar: "الإسراء", en: "al-Israa’", id: "Al Israa’"}, meaning: {en: "The Night Journey"}});
			Surat.insert({surah: 18, ayat: 110, name: {ar: "الكهف", en: "al-Kahf", id: "Al Kahfi"}, meaning: {en: "The Cave"}});
			Surat.insert({surah: 19, ayat: 98, name: {ar: "مريم", en: "Maryam", id: "Maryam"}, meaning: {en: "Mary"}});
			Surat.insert({surah: 20, ayat: 135, name: {ar: "طه", en: "Taa Haa", id: "Thaahaa"}, meaning: {en: "Taa Haa"}});
			Surat.insert({surah: 21, ayat: 112, name: {ar: "الأنبياء", en: "al-Anbiyaa", id: "Al Anbiyaa"}, meaning: {en: "The Prophets"}});
			Surat.insert({surah: 22, ayat: 78, name: {ar: "الحج", en: "al-Hajj", id: "Al Hajj"}, meaning: {en: "The Pilgrimage"}});
			Surat.insert({surah: 23, ayat: 118, name: {ar: "المؤمنون", en: "al-Mu’minun", id: "Al Mu’minun"}, meaning: {en: "The Believers"}});
			Surat.insert({surah: 24, ayat: 64, name: {ar: "النور", en: "an-Nuur", id: "An Nuur"}, meaning: {en: "The Light"}});
			Surat.insert({surah: 25, ayat: 77, name: {ar: "الفرقان", en: "al-Furqaan", id: "Al Furqaan"}, meaning: {en: "The Criterion"}});
			Surat.insert({surah: 26, ayat: 227, name: {ar: "الشعراء", en: "ash-Shu’ara", id: "Asy Syu’ara"}, meaning: {en: "The Poets"}});
			Surat.insert({surah: 27, ayat: 93, name: {ar: "النمل", en: "an-Naml", id: "An Naml"}, meaning: {en: "The Ant"}});
			Surat.insert({surah: 28, ayat: 88, name: {ar: "القصص", en: "al-Qasas", id: "Al Qashash"}, meaning: {en: "The Stories"}});
			Surat.insert({surah: 29, ayat: 69, name: {ar: "العنكبوت", en: "al-‘Ankabut", id: "Al ‘Ankabut"}, meaning: {en: "The Spider"}});
			Surat.insert({surah: 30, ayat: 60, name: {ar: "الروم", en: "ar-Ruum", id: "Ar Ruum"}, meaning: {en: "The Romans"}});
			Surat.insert({surah: 31, ayat: 34, name: {ar: "لقمان", en: "Luqman", id: "Luqman"}, meaning: {en: "Luqman"}});
			Surat.insert({surah: 32, ayat: 30, name: {ar: "السجدة", en: "as-Sajdah", id: "As Sajdah"}, meaning: {en: "The Prostration"}});
			Surat.insert({surah: 33, ayat: 73, name: {ar: "الأحزاب", en: "al-Ahzab", id: "Al Ahzab"}, meaning: {en: "The Clans"}});
			Surat.insert({surah: 34, ayat: 54, name: {ar: "سبإ", en: "Saba’", id: "Saba’"}, meaning: {en: "Sheba"}});
			Surat.insert({surah: 35, ayat: 45, name: {ar: "فاطر", en: "Faathir", id: "Faathir"}, meaning: {en: "The Originator"}});
			Surat.insert({surah: 36, ayat: 83, name: {ar: "يس", en: "Yaa Siin", id: "Yaa Siin"}, meaning: {en: "Yaseen"}});
			Surat.insert({surah: 37, ayat: 182, name: {ar: "الصافات", en: "as-Saaffat", id: "Ash Shaaffat"}, meaning: {en: "Those drawn up in Ranks"}});
			Surat.insert({surah: 38, ayat: 88, name: {ar: "ص", en: "Saad", id: "Shaad"}, meaning: {en: "The letter Shaad"}});
			Surat.insert({surah: 39, ayat: 75, name: {ar: "الزمر", en: "az-Zumar", id: "Az Zumar"}, meaning: {en: "The Groups"}});
			Surat.insert({surah: 40, ayat: 85, name: {ar: "غافر", en: "al-Ghaafir", id: "Al Ghaafir"}, meaning: {en: "The Forgiver"}});
			Surat.insert({surah: 41, ayat: 54, name: {ar: "فصلت", en: "al-Fusilat", id: "Al Fushilat"}, meaning: {en: "Explained in detail"}});
			Surat.insert({surah: 42, ayat: 53, name: {ar: "الشورى", en: "ash-Shuura", id: "Asy Syuura"}, meaning: {en: "Consultation"}});
			Surat.insert({surah: 43, ayat: 89, name: {ar: "الزخرف", en: "az-Zukhruf", id: "Az Zukhruf"}, meaning: {en: "Ornaments of gold"}});
			Surat.insert({surah: 44, ayat: 59, name: {ar: "الدخان", en: "ad-Dukhaan", id: "Ad Dukhaan"}, meaning: {en: "The Smoke"}});
			Surat.insert({surah: 45, ayat: 37, name: {ar: "الجاثية", en: "al-Jaatsiyah", id: "Al Jaatsiyah"}, meaning: {en: "Crouching"}});
			Surat.insert({surah: 46, ayat: 35, name: {ar: "الأحقاف", en: "al-Ahqaaf", id: "Al Ahqaaf"}, meaning: {en: "The Dunes"}});
			Surat.insert({surah: 47, ayat: 38, name: {ar: "محمد", en: "Muhammad", id: "Muhammad"}, meaning: {en: "Muhammad"}});
			Surat.insert({surah: 48, ayat: 29, name: {ar: "الفتح", en: "al-Fath", id: "Al Fath"}, meaning: {en: "The Victory"}});
			Surat.insert({surah: 49, ayat: 18, name: {ar: "الحجرات", en: "al-Hujuraat", id: "Al Hujuraat"}, meaning: {en: "The Inner Apartments"}});
			Surat.insert({surah: 50, ayat: 45, name: {ar: "ق", en: "Qaaf", id: "Qaaf"}, meaning: {en: "The letter Qaaf"}});
			Surat.insert({surah: 51, ayat: 60, name: {ar: "الذاريات", en: "adz-Dzaariyaat", id: "Adz Dzaariyaat"}, meaning: {en: "The Winnowing Winds"}});
			Surat.insert({surah: 52, ayat: 49, name: {ar: "الطور", en: "at-Tuur", id: "Ath Thuur"}, meaning: {en: "The Mount"}});
			Surat.insert({surah: 53, ayat: 62, name: {ar: "النجم", en: "an-Najm", id: "An Najm"}, meaning: {en: "The Star"}});
			Surat.insert({surah: 54, ayat: 55, name: {ar: "القمر", en: "al-Qamar", id: "Al Qamar"}, meaning: {en: "The Moon"}});
			Surat.insert({surah: 55, ayat: 78, name: {ar: "الرحمن", en: "ar-Rahmaan", id: "Ar Rahmaan"}, meaning: {en: "The Beneficent"}});
			Surat.insert({surah: 56, ayat: 96, name: {ar: "الواقعة", en: "al-Waaqi’ah", id: "Al Waaqi’ah"}, meaning: {en: "The Inevitable"}});
			Surat.insert({surah: 57, ayat: 29, name: {ar: "الحديد", en: "al-Hadiid", id: "Al Hadiid"}, meaning: {en: "The Iron"}});
			Surat.insert({surah: 58, ayat: 22, name: {ar: "المجادلة", en: "al-Mujaadalah", id: "Al Mujaadalah"}, meaning: {en: "The Pleading Woman"}});
			Surat.insert({surah: 59, ayat: 24, name: {ar: "الحشر", en: "al-Hasr", id: "Al Hasyr"}, meaning: {en: "The Exile"}});
			Surat.insert({surah: 60, ayat: 13, name: {ar: "الممتحنة", en: "al-Mumtahanah", id: "Al Mumtahanah"}, meaning: {en: "She that is to be examined"}});
			Surat.insert({surah: 61, ayat: 14, name: {ar: "الصف", en: "as-Saff", id: "Ash Shaff"}, meaning: {en: "The Ranks"}});
			Surat.insert({surah: 62, ayat: 11, name: {ar: "الجمعة", en: "al-Jumuah", id: "Al Jumuah"}, meaning: {en: "Friday"}});
			Surat.insert({surah: 63, ayat: 11, name: {ar: "المنافقون", en: "al-Munafiqun", id: "Al Munafiqun"}, meaning: {en: "The Hypocrites"}});
			Surat.insert({surah: 64, ayat: 18, name: {ar: "التغابن", en: "at-Taghabun", id: "Ath Taghabun"}, meaning: {en: "Mutual-Disillusion"}});
			Surat.insert({surah: 65, ayat: 12, name: {ar: "الطلاق", en: "at-Talaaq", id: "Ath Thalaaq"}, meaning: {en: "Divorce"}});
			Surat.insert({surah: 66, ayat: 12, name: {ar: "التحريم", en: "at-Tahrim", id: "At Tahrim"}, meaning: {en: "The Prohibition"}});
			Surat.insert({surah: 67, ayat: 30, name: {ar: "الملك", en: "al-Mulk", id: "Al Mulk"}, meaning: {en: "The Sovereignty"}});
			Surat.insert({surah: 68, ayat: 52, name: {ar: "القلم", en: "al-Qalam", id: "Al Qalam"}, meaning: {en: "The Pen"}});
			Surat.insert({surah: 69, ayat: 52, name: {ar: "الحاقة", en: "al-Haaqqah", id: "Al Haaqqah"}, meaning: {en: "The Reality"}});
			Surat.insert({surah: 70, ayat: 44, name: {ar: "المعارج", en: "al-Ma’aarij", id: "Al Ma’aarij"}, meaning: {en: "The Ascending Stairways"}});
			Surat.insert({surah: 71, ayat: 28, name: {ar: "نوح", en: "Nuh", id: "Nuh"}, meaning: {en: "Noah"}});
			Surat.insert({surah: 72, ayat: 28, name: {ar: "الجن", en: "al-Jin", id: "Al Jin"}, meaning: {en: "The Jinn"}});
			Surat.insert({surah: 73, ayat: 20, name: {ar: "المزمل", en: "al-Muzammil", id: "Al Muzammil"}, meaning: {en: "The Enshrouded One"}});
			Surat.insert({surah: 74, ayat: 56, name: {ar: "المدثر", en: "al-Muddastir", id: "Al Muddastir"}, meaning: {en: "The Cloaked One"}});
			Surat.insert({surah: 75, ayat: 40, name: {ar: "القيامة", en: "al-Qiyaamah", id: "Al Qiyaamah"}, meaning: {en: "The Resurrection"}});
			Surat.insert({surah: 76, ayat: 31, name: {ar: "الانسان", en: "al-Insaan", id: "Al Insaan"}, meaning: {en: "Man"}});
			Surat.insert({surah: 77, ayat: 50, name: {ar: "المرسلات", en: "al-Mursalaat", id: "Al Mursalaat"}, meaning: {en: "The Emissaries"}});
			Surat.insert({surah: 78, ayat: 40, name: {ar: "النبإ", en: "an-Naba’", id: "An Naba’"}, meaning: {en: "The Announcement"}});
			Surat.insert({surah: 79, ayat: 46, name: {ar: "النازِعات", en: "an-Naazi’at", id: "An Naazi’at"}, meaning: {en: "Those who drag forth"}});
			Surat.insert({surah: 80, ayat: 42, name: {ar: "عبس", en: "‘Abasa", id: "‘Abasa"}, meaning: {en: "He frowned"}});
			Surat.insert({surah: 81, ayat: 29, name: {ar: "التكوير", en: "at-Takwir", id: "At Takwir"}, meaning: {en: "The Overthrowing"}});
			Surat.insert({surah: 82, ayat: 19, name: {ar: "الإنفطار", en: "al-Infithar", id: "Al Infithar"}, meaning: {en: "The Cleaving"}});
			Surat.insert({surah: 83, ayat: 36, name: {ar: "المطففين", en: "al-Muthaffifin", id: "Al Muthaffifin"}, meaning: {en: "Defrauding"}});
			Surat.insert({surah: 84, ayat: 25, name: {ar: "الإنشقاق", en: "al-Insiqaq", id: "Al Insyiqaq"}, meaning: {en: "The Splitting Open"}});
			Surat.insert({surah: 85, ayat: 22, name: {ar: "البروج", en: "al-Buruuj", id: "Al Buruuj"}, meaning: {en: "The Constellations"}});
			Surat.insert({surah: 86, ayat: 17, name: {ar: "الطارق", en: "at-Tariq", id: "Ath Thariq"}, meaning: {en: "The Morning Star"}});
			Surat.insert({surah: 87, ayat: 19, name: {ar: "الأعلى", en: "al-A’laa", id: "Al A’laa"}, meaning: {en: "The Most High"}});
			Surat.insert({surah: 88, ayat: 26, name: {ar: "الغاشية", en: "al-Ghaasiah", id: "Al Ghaasyiah"}, meaning: {en: "The Overwhelming"}});
			Surat.insert({surah: 89, ayat: 30, name: {ar: "الفجر", en: "al-Fajr", id: "Al Fajr"}, meaning: {en: "The Dawn"}});
			Surat.insert({surah: 90, ayat: 20, name: {ar: "البلد", en: "al-Balad", id: "Al Balad"}, meaning: {en: "The City"}});
			Surat.insert({surah: 91, ayat: 15, name: {ar: "الشمس", en: "ash-Shams", id: "Asy Syams"}, meaning: {en: "The Sun"}});
			Surat.insert({surah: 92, ayat: 21, name: {ar: "الليل", en: "al-Lail", id: "Al Lail"}, meaning: {en: "The Night"}});
			Surat.insert({surah: 93, ayat: 11, name: {ar: "الضحى", en: "adh-Dhuhaa", id: "Adh Dhuhaa"}, meaning: {en: "The Morning Hours"}});
			Surat.insert({surah: 94, ayat: 8, name: {ar: "الشرح", en: "ash-Sharh", id: "Asy Syarh"}, meaning: {en: "The Consolation"}});
			Surat.insert({surah: 95, ayat: 8, name: {ar: "التين", en: "at-Tiin", id: "At Tiin"}, meaning: {en: "The Fig"}});
			Surat.insert({surah: 96, ayat: 19, name: {ar: "العلق", en: "al-‘Alaq", id: "Al ‘Alaq"}, meaning: {en: "The Clot"}});
			Surat.insert({surah: 97, ayat: 5, name: {ar: "القدر", en: "al-Qadr", id: "Al Qadr"}, meaning: {en: "The Power, Fate"}});
			Surat.insert({surah: 98, ayat: 8, name: {ar: "البينة", en: "al-Bayyinah", id: "Al Bayyinah"}, meaning: {en: "The Evidence"}});
			Surat.insert({surah: 99, ayat: 8, name: {ar: "الزلزلة", en: "az-Zalzalah", id: "Az Zalzalah"}, meaning: {en: "The Earthquake"}});
			Surat.insert({surah: 100, ayat: 11, name: {ar: "العاديات", en: "al-‘Aadiyah", id: "Al ‘Aadiyah"}, meaning: {en: "The Chargers"}});
			Surat.insert({surah: 101, ayat: 11, name: {ar: "القارعة", en: "al-Qaari’ah", id: "Al Qaari’ah"}, meaning: {en: "The Calamity"}});
			Surat.insert({surah: 102, ayat: 8, name: {ar: "التكاثر", en: "At Takaatsur", id: "At Takaatsur"}, meaning: {en: "Competition"}});
			Surat.insert({surah: 103, ayat: 3, name: {ar: "العصر", en: "al-‘Ashr", id: "Al ‘Ashr"}, meaning: {en: "The Declining Day"}});
			Surat.insert({surah: 104, ayat: 9, name: {ar: "الهمزة", en: "al-Humazah", id: "Al Humazah"}, meaning: {en: "The Traducer"}});
			Surat.insert({surah: 105, ayat: 5, name: {ar: "الفيل", en: "al-Fiil", id: "Al Fiil"}, meaning: {en: "The Elephant"}});
			Surat.insert({surah: 106, ayat: 4, name: {ar: "قريش", en: "Quraish", id: "Quraisy"}, meaning: {en: "Quraysh"}});
			Surat.insert({surah: 107, ayat: 7, name: {ar: "الماعون", en: "al-Maa’uun", id: "Al Maa’uun"}, meaning: {en: "Almsgiving"}});
			Surat.insert({surah: 108, ayat: 3, name: {ar: "الكوثر", en: "al-Kautsar", id: "Al Kautsar"}, meaning: {en: "Abundance"}});
			Surat.insert({surah: 109, ayat: 6, name: {ar: "الكافرون", en: "al-Kafirun", id: "Al Kafirun"}, meaning: {en: "The Disbelievers"}});
			Surat.insert({surah: 110, ayat: 3, name: {ar: "النصر", en: "an-Nashr", id: "An Nashr"}, meaning: {en: "Divine Support"}});
			Surat.insert({surah: 111, ayat: 5, name: {ar: "اللهب", en: "al-Lahab", id: "Al Lahab"}, meaning: {en: "The Father of Flame"}});
			Surat.insert({surah: 112, ayat: 4, name: {ar: "الإخلاص", en: "al-Ikhlash", id: "Al Ikhlash"}, meaning: {en: "Sincerity"}});
			Surat.insert({surah: 113, ayat: 5, name: {ar: "الفلق", en: "al-Falaq", id: "Al Falaq"}, meaning: {en: "The Dawn"}});
			Surat.insert({surah: 114, ayat: 6, name: {ar: "الناس", en: "an-Naas", id: "An Naas"}, meaning: {en: "Mankind"}});
		}
		if (Ayat.find({}).count() === 0) {
			var quranAr = require('./source/quran-ar.json');
			var quranEn = require('./source/quran-en.json');
			var quranId = require('./source/quran-id.json');
			// upsert ayat from quran-ar.json
			quranAr.forEach(function(content) {
				return Ayat.insert(content);
			});
			// upsert ayat from quran-en.json
			quranEn.forEach(function(content) {
				return Ayat.insert(content);
			});
			// upsert ayat from quran-id.json
			quranId.forEach(function(content) {
				return Ayat.insert(content);
			});
		}
	});
}
