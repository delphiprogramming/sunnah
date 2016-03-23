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
	Meteor.publish('quotes', function () {
		return Quotes.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('quotes');
}



/****************
 * Default Data *
 ****************/
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Quotes.find({}).count() === 0) {
			console.log('** Quotes database empty, filling some example entries.');
			Quotes.insert({name: ab, quote: "I am not going to leave anything that the Messenger of Allah (ﷺ) used to do but I will do it too, because I am afraid that if I leave anything that he used to do, I will go astray.", source: "Sahih Muslim, 1759"});
			Quotes.insert({name: um, quote: "There is no good in a people who do not advise one another and there is no good in those who do not love advice. The best of companions are those who mutually love and advise one another.", source: "Risalat al-Mustarshideen"});
			Quotes.insert({name: um, quote: "Do not think about a word that exits from a Muslim’s mouth except that you interpret it in the best manner.", source: "Ameelah, p. 395"});
		}
	});
}
