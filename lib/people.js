/***************
 * Instantiate *
 ***************/
People = new Mongo.Collection('scholars');
PeopleEdits = new Meteor.Collection("scholarEdits");



/***************
 * Permissions *
 ***************/
People.allow({
	insert: function (userId, doc) {
		// Allow from all
		return true;
	},
	update: function (userId, doc) {
		// Allow from all
		return true;
	},
	remove: function (userId, doc) {
		// Allow from admin only
		if (Roles.userIsInRole(userId, ['admin','owner']))
			return true;
		return false;
	}
});

PeopleEdits.allow({
	insert: function (userId, doc) {
		// Allow from all
		return true;
	}
});



/********************
 * Collection Hooks *
 ********************/
People.before.insert(function (userId, doc) {
	if (doc.era)
		return true;
	else if (doc.born < 12)
		doc.era = 1; // Sahabah
	else if (doc.born < 81)
		doc.era = 2; // Tabieen
	else if (doc.born < 152)
		doc.era = 3; // Tabi Tabieen
	else if (doc.born < 656)
		doc.era = 4; // Abbasid
	else if (doc.born < 1292)
		doc.era = 5; // Ottoman
	else
		doc.era = 6; // Modern
});

PeopleEdits.before.insert(function (userId, doc) {
	doc.when = Date.now();
});



/***********************
 * Publish & Subscribe *
 ***********************/
if (Meteor.isServer) {
	Meteor.publish('scholars', function () {
		return People.find({});
	});
	Meteor.publish("scholarEdits", function () {
		return PeopleEdits.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('scholars');
	Meteor.subscribe('scholarEdits');
}
