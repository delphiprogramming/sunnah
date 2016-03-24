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
			Ssect.insert({section: 1, name: 'Proper Nouns'});
			Ssect.insert({section: 2, name: 'Menu Items'});
			Ssect.insert({section: 3, name: 'Messages'});
		}
		if (Stext.find({}).count() === 0) {
			console.log('** Site text database empty, filling some example entries.');
			Stext.insert({section: 1, order: 1, ref: 'usf', label: 'Organization Name', en: 'us-Sunnah Foundation', id: 'Yayasan us-Sunnah'});
			Stext.insert({section: 2, order: 1, ref: 'mqu', label: 'Menu: Quran', en: 'Quran'});
			Stext.insert({section: 2, order: 2, ref: 'mha', label: 'Menu: Hadith', en: 'Hadith'});
			Stext.insert({section: 2, order: 3, ref: 'msc', label: 'Menu: Scholars', en: 'Scholars'});
			Stext.insert({section: 2, order: 4, ref: 'mbo', label: 'Menu: Books', en: 'Books'});
			Stext.insert({section: 2, order: 5, ref: 'mar', label: 'Menu: Articles', en: 'Articles'});
			Stext.insert({section: 2, order: 6, ref: 'mqo', label: 'Menu: Quotes', en: 'Quotes'});
			Stext.insert({section: 2, order: 7, ref: 'mto', label: 'Menu: Tools', en: 'Tools'});
			Stext.insert({section: 2, order: 8, ref: 'mab', label: 'Menu: About', en: 'About'});
			Stext.insert({section: 2, order: 9, ref: 'mco', label: 'Menu: Contact', en: 'Contact'});
			Stext.insert({section: 2, order: 10, ref: 'mte', label: 'Menu: Terms', en: 'Terms'});
			Stext.insert({section: 2, order: 11, ref: 'mpo', label: 'Menu: Policy', en: 'Policy'});
			Stext.insert({section: 2, order: 12, ref: 'fuo', label: 'Footer: Follow', en: 'Follow us on:'});
			Stext.insert({section: 3, order: 1, ref: 'qum', label: 'Quran Section', en: 'Quran section...'});
			Stext.insert({section: 3, order: 2, ref: 'qna', label: 'Quran Not Available', en: 'Not available..'});
		}
	});
}
