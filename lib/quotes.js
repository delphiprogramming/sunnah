/***************
 * Instantiate *
 ***************/
Quotes = new Mongo.Collection('quotes');



/***************
 * Permissions *
 ***************/
Quotes.allow({
	insert: function (userId, doc) {
		// Allow from all
		return true;
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
	Meteor.publish('quotes', function () {
		return Quotes.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('quotes');
}
