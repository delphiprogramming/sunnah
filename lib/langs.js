/***************
 * Instantiate *
 ***************/
Langs = new Mongo.Collection('langs');



/***************
 * Permissions *
 ***************/
Langs.allow({
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
	Meteor.publish('langs', function () {
		return Langs.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('langs');
}



/****************
 * Default Data *
 ****************/
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Langs.find({}).count() === 0) {
			console.log('** Languages database empty, filling some example entries.');
			Langs.insert({order: 1, ref: 'ar', name: 'Arabic', native: 'العَرَبِية‎', active: false});
			Langs.insert({order: 2, ref: 'en', name: 'English', native: 'English', active: true});
			Langs.insert({order: 3, ref: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', active: true});
		}
	});
}
