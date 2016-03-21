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
		if (Roles.userIsInRole(userId, ['admin','owner']))
			return true;
		return false;
	},
	update: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin','owner']))
			return true;
		return false;
	},
	remove: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin','owner']))
			return true;
		return false;
	}
});



/***********************
 * Publish & Subscribe *
 ***********************/
if (Meteor.isServer) {
	Meteor.publish('langs', function () { return Langs.find({}); });
}

if (Meteor.isClient) {
	Meteor.subscribe('langs');
}
