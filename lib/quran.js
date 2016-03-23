/***************
 * Instantiate *
 ***************/
Quran = new Mongo.Collection('quran');
Surat = new Mongo.Collection('surat');
Ayat = new Mongo.Collection('ayat');



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
	Meteor.publish('ayat', function () {
		return Ayat.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('quran');
	Meteor.subscribe('surat');
	Meteor.subscribe('ayat');
}



/****************
 * Default Data *
 ****************/
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Quran.find({}).count() === 0) {
			console.log('** Quran database empty, filling some example entries.');
			Quran.insert({ref: "ar", lang: "ar", source: "الله"});
			Quran.insert({ref: "en", lang: "en", source: "Saheeh International"});
			Quran.insert({ref: "en2", lang: "en", source: "Muhsin Khan"});
			Quran.insert({ref: "id", lang: "id", source: "MUI"});
		}
		if (Surat.find({}).count() === 0) {
			console.log('** Surat database empty, filling some example entries.');
			Surat.insert({no: 1, ayat: 7, name: {ar: "الفاتحة", en: "Surat al-Fatihah"}, meaning: {en: "The Opening"}});
			Surat.insert({no: 2, ayat: 286, name: {ar: "البقرة", en: "Surat al-Baqarah"}, meaning: {en: "The Cow"}});
			Surat.insert({no: 3, ayat: 200, name: {ar: "آل عمران", en: "Surat Ali Imran"}, meaning: {en: "The Family of Imran"}});
			Surat.insert({no: 4, ayat: 176, name: {ar: "النساء", en: "Surat an-Nisaa"}, meaning: {en: "The Women"}});
			Surat.insert({no: 5, ayat: 120, name: {ar: "المائدة ", en: "Surat al-Maidah"}, meaning: {en: "The Table"}});
			Surat.insert({no: 6, ayat: 165, name: {ar: "الأنعام", en: "Al An’am"}, meaning: {en: "The Cattle"}});
			Surat.insert({no: 7, ayat: 206, name: {ar: "الأعراف", en: "Al A’raf"}, meaning: {en: "The Heights"}});
			Surat.insert({no: 8, ayat: 75, name: {ar: "الأنفال", en: "Al Anfaal"}, meaning: {en: "The Spoils of War"}});
			Surat.insert({no: 9, ayat: 129, name: {ar: "التوبة", en: "At Taubah"}, meaning: {en: "The Repentance"}});
			Surat.insert({no: 10, ayat: 109, name: {ar: "يونس", en: "Yunus"}, meaning: {en: "Jonas"}});
			Surat.insert({no: 11, ayat: 123, name: {ar: "هود", en: "Huud"}, meaning: {en: "Hud"}});
			Surat.insert({no: 12, ayat: 111, name: {ar: "يوسف", en: "Yusuf"}, meaning: {en: "Joseph"}});
			Surat.insert({no: 13, ayat: 43, name: {ar: "الرعد", en: "Ar Ra’du"}, meaning: {en: "The Thunder"}});
			Surat.insert({no: 14, ayat: 52, name: {ar: "ابراهيم", en: "Ibrahim"}, meaning: {en: "Abraham"}});
			Surat.insert({no: 15, ayat: 99, name: {ar: "الحجر", en: "Al Hijr"}, meaning: {en: "The Rock"}});
			Surat.insert({no: 16, ayat: 128, name: {ar: "النحل", en: "An Nahl"}, meaning: {en: "The Bee"}});
			Surat.insert({no: 17, ayat: 111, name: {ar: "الإسراء", en: "Al Israa’"}, meaning: {en: "The Night Journey"}});
			Surat.insert({no: 18, ayat: 110, name: {ar: "الكهف", en: "Al Kahfi"}, meaning: {en: "The Cave"}});
			Surat.insert({no: 19, ayat: 98, name: {ar: "مريم", en: "Maryam"}, meaning: {en: "Mary"}});
			Surat.insert({no: 20, ayat: 135, name: {ar: "طه", en: "Thaahaa"}, meaning: {en: "Taa Haa"}});
			Surat.insert({no: 21, ayat: 112, name: {ar: "الأنبياء", en: "Al Anbiyaa"}, meaning: {en: "The Prophets"}});
			Surat.insert({no: 22, ayat: 78, name: {ar: "الحج", en: "Al Hajj"}, meaning: {en: "The Pilgrimage"}});
			Surat.insert({no: 23, ayat: 118, name: {ar: "المؤمنون", en: "Al Mu’minun"}, meaning: {en: "The Believers"}});
			Surat.insert({no: 24, ayat: 64, name: {ar: "النور", en: "An Nuur"}, meaning: {en: "The Light"}});
			Surat.insert({no: 25, ayat: 77, name: {ar: "الفرقان", en: "Al Furqaan"}, meaning: {en: "The Criterion"}});
			Surat.insert({no: 26, ayat: 227, name: {ar: "الشعراء", en: "Asy Syu’ara"}, meaning: {en: "The Poets"}});
			Surat.insert({no: 27, ayat: 93, name: {ar: "النمل", en: "An Naml"}, meaning: {en: "The Ant"}});
			Surat.insert({no: 28, ayat: 88, name: {ar: "القصص", en: "Al Qashash"}, meaning: {en: "The Stories"}});
			Surat.insert({no: 29, ayat: 69, name: {ar: "العنكبوت", en: "Al ‘Ankabut"}, meaning: {en: "The Spider"}});
			Surat.insert({no: 30, ayat: 60, name: {ar: "الروم", en: "Ar Ruum"}, meaning: {en: "The Romans"}});
			Surat.insert({no: 31, ayat: 34, name: {ar: "لقمان", en: "Luqman"}, meaning: {en: "Luqman"}});
			Surat.insert({no: 32, ayat: 30, name: {ar: "السجدة", en: "As Sajdah"}, meaning: {en: "The Prostration"}});
			Surat.insert({no: 33, ayat: 73, name: {ar: "الأحزاب", en: "Al Ahzab"}, meaning: {en: "The Clans"}});
			Surat.insert({no: 34, ayat: 54, name: {ar: "سبإ", en: "Saba’"}, meaning: {en: "Sheba"}});
			Surat.insert({no: 35, ayat: 45, name: {ar: "فاطر", en: "Faathir"}, meaning: {en: "The Originator"}});
			Surat.insert({no: 36, ayat: 83, name: {ar: "يس", en: "Yaa Siin"}, meaning: {en: "Yaseen"}});
			Surat.insert({no: 37, ayat: 182, name: {ar: "الصافات", en: "Ash Shaaffat"}, meaning: {en: "Those drawn up in Ranks"}});
			Surat.insert({no: 38, ayat: 88, name: {ar: "ص", en: "Shaad"}, meaning: {en: "The letter Shaad"}});
			Surat.insert({no: 39, ayat: 75, name: {ar: "الزمر", en: "Az Zumar"}, meaning: {en: "The Groups"}});
			Surat.insert({no: 40, ayat: 85, name: {ar: "غافر", en: "Al Ghaafir"}, meaning: {en: "The Forgiver"}});
			Surat.insert({no: 41, ayat: 54, name: {ar: "فصلت", en: "Al Fushilat"}, meaning: {en: "Explained in detail"}});
			Surat.insert({no: 42, ayat: 53, name: {ar: "الشورى", en: "Asy Syuura"}, meaning: {en: "Consultation"}});
			Surat.insert({no: 43, ayat: 89, name: {ar: "الزخرف", en: "Az Zukhruf"}, meaning: {en: "Ornaments of gold"}});
			Surat.insert({no: 44, ayat: 59, name: {ar: "الدخان", en: "Ad Dukhaan"}, meaning: {en: "The Smoke"}});
			Surat.insert({no: 45, ayat: 37, name: {ar: "الجاثية", en: "Al Jaatsiyah"}, meaning: {en: "Crouching"}});
			Surat.insert({no: 46, ayat: 35, name: {ar: "الأحقاف", en: "Al Ahqaaf"}, meaning: {en: "The Dunes"}});
			Surat.insert({no: 47, ayat: 38, name: {ar: "محمد", en: "Muhammad"}, meaning: {en: "Muhammad"}});
			Surat.insert({no: 48, ayat: 29, name: {ar: "الفتح", en: "Al Fath"}, meaning: {en: "The Victory"}});
			Surat.insert({no: 49, ayat: 18, name: {ar: "الحجرات", en: "Al Hujuraat"}, meaning: {en: "The Inner Apartments"}});
			Surat.insert({no: 50, ayat: 45, name: {ar: "ق", en: "Qaaf"}, meaning: {en: "The letter Qaaf"}});
			Surat.insert({no: 51, ayat: 60, name: {ar: "الذاريات", en: "Adz Dzaariyaat"}, meaning: {en: "The Winnowing Winds"}});
			Surat.insert({no: 52, ayat: 49, name: {ar: "الطور", en: "Ath Thuur"}, meaning: {en: "The Mount"}});
			Surat.insert({no: 53, ayat: 62, name: {ar: "النجم", en: "An Najm"}, meaning: {en: "The Star"}});
			Surat.insert({no: 54, ayat: 55, name: {ar: "القمر", en: "Al Qamar"}, meaning: {en: "The Moon"}});
			Surat.insert({no: 55, ayat: 78, name: {ar: "الرحمن", en: "Ar Rahmaan"}, meaning: {en: "The Beneficent"}});
			Surat.insert({no: 56, ayat: 96, name: {ar: "الواقعة", en: "Al Waaqi’ah"}, meaning: {en: "The Inevitable"}});
			Surat.insert({no: 57, ayat: 29, name: {ar: "الحديد", en: "Al Hadiid"}, meaning: {en: "The Iron"}});
			Surat.insert({no: 58, ayat: 22, name: {ar: "المجادلة", en: "Al Mujaadalah"}, meaning: {en: "The Pleading Woman"}});
			Surat.insert({no: 59, ayat: 24, name: {ar: "الحشر", en: "Al Hasyr"}, meaning: {en: "The Exile"}});
			Surat.insert({no: 60, ayat: 13, name: {ar: "الممتحنة", en: "Al Mumtahanah"}, meaning: {en: "She that is to be examined"}});
			Surat.insert({no: 61, ayat: 14, name: {ar: "الصف", en: "Ash Shaff"}, meaning: {en: "The Ranks"}});
			Surat.insert({no: 62, ayat: 11, name: {ar: "الجمعة", en: "Al Jumuah"}, meaning: {en: "Friday"}});
			Surat.insert({no: 63, ayat: 11, name: {ar: "المنافقون", en: "Al Munafiqun"}, meaning: {en: "The Hypocrites"}});
			Surat.insert({no: 64, ayat: 18, name: {ar: "التغابن", en: "Ath Taghabun"}, meaning: {en: "Mutual Disillusion"}});
			Surat.insert({no: 65, ayat: 12, name: {ar: "الطلاق", en: "Ath Thalaaq"}, meaning: {en: "Divorce"}});
			Surat.insert({no: 66, ayat: 12, name: {ar: "التحريم", en: "At Tahrim"}, meaning: {en: "The Prohibition"}});
			Surat.insert({no: 67, ayat: 30, name: {ar: "الملك", en: "Al Mulk"}, meaning: {en: "The Sovereignty"}});
			Surat.insert({no: 68, ayat: 52, name: {ar: "القلم", en: "Al Qalam"}, meaning: {en: "The Pen"}});
			Surat.insert({no: 69, ayat: 52, name: {ar: "الحاقة", en: "Al Haaqqah"}, meaning: {en: "The Reality"}});
			Surat.insert({no: 70, ayat: 44, name: {ar: "المعارج", en: "Al Ma’aarij"}, meaning: {en: "The Ascending Stairways"}});
			Surat.insert({no: 71, ayat: 28, name: {ar: "نوح", en: "Nuh"}, meaning: {en: "Noah"}});
			Surat.insert({no: 72, ayat: 28, name: {ar: "الجن", en: "Al Jin"}, meaning: {en: "The Jinn"}});
			Surat.insert({no: 73, ayat: 20, name: {ar: "المزمل", en: "Al Muzammil"}, meaning: {en: "The Enshrouded One"}});
			Surat.insert({no: 74, ayat: 56, name: {ar: "المدثر", en: "Al Muddastir"}, meaning: {en: "The Cloaked One"}});
			Surat.insert({no: 75, ayat: 40, name: {ar: "القيامة", en: "Al Qiyaamah"}, meaning: {en: "The Resurrection"}});
			Surat.insert({no: 76, ayat: 31, name: {ar: "الانسان", en: "Al Insaan"}, meaning: {en: "Man"}});
			Surat.insert({no: 77, ayat: 50, name: {ar: "المرسلات", en: "Al Mursalaat"}, meaning: {en: "The Emissaries"}});
			Surat.insert({no: 78, ayat: 40, name: {ar: "النبإ", en: "An Naba’"}, meaning: {en: "The Announcement"}});
			Surat.insert({no: 79, ayat: 46, name: {ar: "النازِعات", en: "An Naazi’at"}, meaning: {en: "Those who drag forth"}});
			Surat.insert({no: 80, ayat: 42, name: {ar: "عبس", en: "‘Abasa"}, meaning: {en: "He frowned"}});
			Surat.insert({no: 81, ayat: 29, name: {ar: "التكوير", en: "At Takwir"}, meaning: {en: "The Overthrowing"}});
			Surat.insert({no: 82, ayat: 19, name: {ar: "الإنفطار", en: "Al Infithar"}, meaning: {en: "The Cleaving"}});
			Surat.insert({no: 83, ayat: 36, name: {ar: "المطففين", en: "Al Muthaffifin"}, meaning: {en: "Defrauding"}});
			Surat.insert({no: 84, ayat: 25, name: {ar: "الإنشقاق", en: "Al Insyiqaq"}, meaning: {en: "The Splitting Open"}});
			Surat.insert({no: 85, ayat: 22, name: {ar: "البروج", en: "Al Buruuj"}, meaning: {en: "The Constellations"}});
			Surat.insert({no: 86, ayat: 17, name: {ar: "الطارق", en: "Ath Thariq"}, meaning: {en: "The Morning Star"}});
			Surat.insert({no: 87, ayat: 19, name: {ar: "الأعلى", en: "Al A’laa"}, meaning: {en: "The Most High"}});
			Surat.insert({no: 88, ayat: 26, name: {ar: "الغاشية", en: "Al Ghaasyiah"}, meaning: {en: "The Overwhelming"}});
			Surat.insert({no: 89, ayat: 30, name: {ar: "الفجر", en: "Al Fajr"}, meaning: {en: "The Dawn"}});
			Surat.insert({no: 90, ayat: 20, name: {ar: "البلد", en: "Al Balad"}, meaning: {en: "The City"}});
			Surat.insert({no: 91, ayat: 15, name: {ar: "الشمس", en: "Asy Syams"}, meaning: {en: "The Sun"}});
			Surat.insert({no: 92, ayat: 21, name: {ar: "الليل", en: "Al Lail"}, meaning: {en: "The Night"}});
			Surat.insert({no: 93, ayat: 11, name: {ar: "الضحى", en: "Adh Dhuhaa"}, meaning: {en: "The Morning Hours"}});
			Surat.insert({no: 94, ayat: 8, name: {ar: "الشرح", en: "Asy Syarh"}, meaning: {en: "The Consolation"}});
			Surat.insert({no: 95, ayat: 8, name: {ar: "التين", en: "At Tiin"}, meaning: {en: "The Fig"}});
			Surat.insert({no: 96, ayat: 19, name: {ar: "العلق", en: "Al ‘Alaq"}, meaning: {en: "The Clot"}});
			Surat.insert({no: 97, ayat: 5, name: {ar: "القدر", en: "Al Qadr"}, meaning: {en: "The Power, Fate"}});
			Surat.insert({no: 98, ayat: 8, name: {ar: "البينة", en: "Al Bayyinah"}, meaning: {en: "The Evidence"}});
			Surat.insert({no: 99, ayat: 8, name: {ar: "الزلزلة", en: "Az Zalzalah"}, meaning: {en: "The Earthquake"}});
			Surat.insert({no: 100, ayat: 11, name: {ar: "العاديات", en: "Al ‘Aadiyah"}, meaning: {en: "The Chargers"}});
			Surat.insert({no: 101, ayat: 11, name: {ar: "القارعة", en: "Al Qaari’ah"}, meaning: {en: "The Calamity"}});
			Surat.insert({no: 102, ayat: 8, name: {ar: "التكاثر", en: "At Takaatsur"}, meaning: {en: "Competition"}});
			Surat.insert({no: 103, ayat: 3, name: {ar: "العصر", en: "Al ‘Ashr"}, meaning: {en: "The Declining Day"}});
			Surat.insert({no: 104, ayat: 9, name: {ar: "الهمزة", en: "Al Humazah"}, meaning: {en: "The Traducer"}});
			Surat.insert({no: 105, ayat: 5, name: {ar: "الفيل", en: "Al Fiil"}, meaning: {en: "The Elephant"}});
			Surat.insert({no: 106, ayat: 4, name: {ar: "قريش", en: "Quraisy"}, meaning: {en: "Quraysh"}});
			Surat.insert({no: 107, ayat: 7, name: {ar: "الماعون", en: "Al Maa’uun"}, meaning: {en: "Almsgiving"}});
			Surat.insert({no: 108, ayat: 3, name: {ar: "الكوثر", en: "Al Kautsar"}, meaning: {en: "Abundance"}});
			Surat.insert({no: 109, ayat: 6, name: {ar: "الكافرون", en: "Al Kafirun"}, meaning: {en: "The Disbelievers"}});
			Surat.insert({no: 110, ayat: 3, name: {ar: "النصر", en: "An Nashr"}, meaning: {en: "Divine Support"}});
			Surat.insert({no: 111, ayat: 5, name: {ar: "اللهب", en: "Al Lahab"}, meaning: {en: "The Father of Flame"}});
			Surat.insert({no: 112, ayat: 4, name: {ar: "الإخلاص", en: "Al Ikhlash"}, meaning: {en: "Sincerity"}});
			Surat.insert({no: 113, ayat: 5, name: {ar: "الفلق", en: "Al Falaq"}, meaning: {en: "The Dawn"}});
			Surat.insert({no: 114, ayat: 6, name: {ar: "الناس", en: "An Naas"}, meaning: {en: "Mankind"}});
		}
		if (Ayat.find({}).count() === 0) {
			console.log('** Ayat database empty, filling some example entries.');
			Ayat.insert({surah: 1, ayah: 1, text: {ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", en: "In the name of Allah, the Entirely Merciful, the Especially Merciful."}});
			Ayat.insert({surah: 1, ayah: 2, text: {ar: "الْحَمْدُ لِلَّـهِ رَبِّ الْعٰلَمِينَ", en: "All praise is to Allah, Lord of the worlds."}});
			Ayat.insert({surah: 1, ayah: 3, text: {ar: "الرَّحْمٰنِ الرَّحِيمِ", en: "The Entirely Merciful, the Especially Merciful."}});
			Ayat.insert({surah: 1, ayah: 4, text: {ar: "مٰلِكِ يَوْمِ الدِّينِ", en: "Sovereign of the Day of Recompense."}});
			Ayat.insert({surah: 1, ayah: 5, text: {ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِي", en: "It is You we worship and You we ask for help."}});
			Ayat.insert({surah: 1, ayah: 6, text: {ar: "اهْدِنَا الصِّرٰطَ الْمُسْتَقِيمَ", en: "Guide us to the straight path."}});
			Ayat.insert({surah: 1, ayah: 7, text: {ar: "صِرٰطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّآلِّي", en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."}});
			Ayat.insert({surah: 2, ayah: 1, text: {ar: "الٓمٓ", en: "Alif, Lam, Meem."}});
		}
	});
}
