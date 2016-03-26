/***************
 * Instantiate *
 ***************/
Ssect = new Mongo.Collection('ssect');
Stext = new Mongo.Collection('stext');



/***************
 * Permissions *
 ***************/
Ssect.allow({
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
Stext.allow({
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



/***********************
 * Publish & Subscribe *
 ***********************/
if (Meteor.isServer) {
	Meteor.publish('ssect', function () { return Ssect.find({}); });
	Meteor.publish('stext', function () { return Stext.find({}); });
}

if (Meteor.isClient) {
	Meteor.subscribe('ssect');
	Meteor.subscribe('stext');
}



/****************
 * Default Data *
 ****************/
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Ssect.find({}).count() === 0) {
			console.log('** ST sections database empty, filling some example entries.');
			Ssect.insert({section: 1, name: 'Menu Items'});
			Ssect.insert({section: 2, name: 'Nouns'});
			Ssect.insert({section: 3, name: 'Words'});
			Ssect.insert({section: 4, name: 'Messages'});
		}
		if (Stext.find({}).count() === 0) {
			console.log('** Site text database empty, filling some example entries.');
			Stext.insert({section: 1, order: 1, ref: 'mqu', label: 'Menu: Quran', en: 'Quran', id: 'Quran'});
			Stext.insert({section: 1, order: 2, ref: 'mha', label: 'Menu: Hadith', en: 'Hadith', id: 'Hadist'});
			Stext.insert({section: 1, order: 3, ref: 'msc', label: 'Menu: Scholars', en: 'Scholars', id: 'Ulama'});
			Stext.insert({section: 1, order: 4, ref: 'mbo', label: 'Menu: Books', en: 'Books', id: 'Buku'});
			Stext.insert({section: 1, order: 5, ref: 'mar', label: 'Menu: Articles', en: 'Articles', id: 'Artikel'});
			Stext.insert({section: 1, order: 6, ref: 'mqo', label: 'Menu: Quotes', en: 'Quotes', id: 'Kutipan'});
			Stext.insert({section: 1, order: 7, ref: 'mto', label: 'Menu: Tools', en: 'Tools', id: 'Perangkat'});
			Stext.insert({section: 1, order: 8, ref: 'mab', label: 'Menu: About', en: 'About', id: 'Tentang'});
			Stext.insert({section: 1, order: 9, ref: 'mco', label: 'Menu: Contact', en: 'Contact', id: 'Kontak'});
			Stext.insert({section: 1, order: 10, ref: 'mte', label: 'Menu: Terms', en: 'Terms', id: 'Syarat'});
			Stext.insert({section: 1, order: 11, ref: 'mpo', label: 'Menu: Policy', en: 'Policy', id: 'Ketentuan'});
			Stext.insert({section: 1, order: 12, ref: 'fuo', label: 'Footer: Follow', en: 'Follow us on:', id: 'Ikuti kita di:'});
			Stext.insert({section: 2, order: 1, ref: 'usf', label: 'Organization Name', en: 'us-Sunnah Foundation', id: 'Yayasan us-Sunnah'});
			Stext.insert({section: 3, order: 1, ref: 'surah', label: 'Surah', en: 'Surah', id: 'Surah'});
			Stext.insert({section: 3, order: 2, ref: 'name', label: 'Name', en: 'Name', id: 'Nama'});
			Stext.insert({section: 3, order: 3, ref: 'done', label: 'Done', en: 'Done', id: 'Selesai'});
			Stext.insert({section: 3, order: 4, ref: 'total', label: 'Total', en: 'Total', id: 'Total'});
			Stext.insert({section: 3, order: 5, ref: 'percent', label: 'Percent', en: 'Percent', id: 'Persen'});
			Stext.insert({section: 4, order: 1, ref: 'hos', label: 'Home Search', en: 'Search coming soon..', id: ''});
			Stext.insert({section: 4, order: 2, ref: 'ht1', label: 'Home Text 1', en: 'Sunnah Source is a community managed resource allowing you to search the Quran, Sunnah and authentic works of Islamic scholars.', id: 'Sunnah Sumber adalah sumber daya yang dikelola oleh masyarakat yang memungkinkan Anda untuk mencari Quran, Sunnah dan karya otentik dari ulama Islam.'});
			Stext.insert({section: 4, order: 3, ref: 'ht2', label: 'Home Text 2', en: 'Want to contribute? Login with your Facebook or Google at the top!', id: 'Ingin berkontribusi? Login dengan Facebook atau Google di atas!'});
			Stext.insert({section: 4, order: 4, ref: 'qus', label: 'Quran Search', en: 'Quran searching coming soon..', id: 'Pencarian segera'});
			Stext.insert({section: 4, order: 5, ref: 'qt1', label: 'Quran Text 1', en: 'Quran section text..', id: 'Quran begian text..'});
			Stext.insert({section: 4, order: 6, ref: 'qna', label: 'Quran Not Available', en: 'The Quran is currently not available in this language on our site. Our contributors will do our best to make it available as soon as possible. If you would like to help please contact us via the contact link at the bottom middle of this page. Jazakallahu khair.', id: 'Quran saat ini tidak tersedia dalam bahasa ini di situs kami. kontributor kami akan melakukan yang terbaik untuk membuatnya tersedia sesegera mungkin. Jika Anda ingin membantu silahkan hubungi kami melalui link kontak di bagian bawah tengah halaman ini. Jazakallah khair.'});
			Stext.insert({section: 4, order: 7, ref: 'qam', label: 'Quran Admin Message', en: 'ADMIN: You can edit the Quran information below and open Surahs to edit the content until it is ready for the public.', id: 'ADMIN: Anda dapat mengedit informasi Quran di bawah ini dan Surah terbuka untuk mengedit konten sampai siap untuk publik.'});
		}
	});
}

