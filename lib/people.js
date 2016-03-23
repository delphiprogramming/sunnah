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
		if (Roles.userIsInRole(userId, ['admin', 'owner']))
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



/****************
 * Default Data *
 ****************/
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (People.find({}).count() === 0) {
			console.log('** People database empty, filling some example entries.');
			People.insert({name: {ar: "", en: "Prophet Muhammad ﷺ", id: ""}, slug: "muhammad", born: "-52", died: "11", era: "0"});
			ab = People.insert({name: {ar: "", en: "Abu Bakr as-Saddiq", id: ""}, slug: "abubakr", born: "-50", died: "13", era: "1"});
			um = People.insert({name: {ar: "", en: "Umar ibn al-Khattab", id: ""}, slug: "umar", born: "-39", died: "24", era: "1"});
			People.insert({name: {ar: "", en: "Uthman ibn Affan", id: ""}, slug: "uthman", born: "-46", died: "35", era: "1"});
			People.insert({name: {ar: "", en: "Ali ibn Abi Talib", id: ""}, slug: "ali", born: "-24", died: "40", era: "1"});
			People.insert({name: {ar: "", en: "Hasan al-Basri", id: ""}, slug: "hasan-albasri", born: "20", died: "110", era: "2"});
			People.insert({name: {ar: "", en: "Abu Hanifa", id: ""}, slug: "abu-hanifa", born: "79", died: "149", era: "2"});
			People.insert({name: {ar: "", en: "Malik ibn Anas", id: ""}, slug: "imam-malik", born: "92", died: "178", era: "3"});
			People.insert({name: {ar: "", en: "Muhamad ibn Idris ash-Shafi'i", id: ""}, slug: "imam-shafii", born: "149", died: "203", era: "3"});
			People.insert({name: {ar: "", en: "Ahmed ibn Hanbal", id: ""}, slug: "imam-ahmed", born: "163", died: "240", era: "4"});
			People.insert({name: {ar: "", en: "Muhammad ibn Ismail Bukhari", id: ""}, slug: "imam-bukhari", born: "194", died: "256", era: "4"});
			People.insert({name: {ar: "", en: "Abu Zakaria Yahya Ibn Sharaf al-Nawawi", id: ""}, slug: "imam-nawawi", born: "630", died: "676", era: "4"});
			People.insert({name: {ar: "", en: "Ibn Taymiyyah", id: ""}, slug: "ibn-taymiyyah", born: "661", died: "728", era: "5"});
			People.insert({name: {ar: "", en: "Ibn al-Qayyim", id: ""}, slug: "ibn-alqayyim", born: "691", died: "751", era: "5"});
			People.insert({name: {ar: "", en: "Muhammad ibn Abdulwahhab", id: ""}, slug: "abdulwahhab", born: "1114", died: "1206", era: "5"});
			People.insert({name: {ar: "", en: "Abdurrahman ibn Nasir as-Sa'di", id: ""}, slug: "abdurrahman-assadi", born: "1307", died: "1376", era: "6"});
			People.insert({name: {ar: "", en: "Muhammad ibn al-Uthaymeen", id: ""}, slug: "uthaymeen", born: "1347", died: "1421", era: "6"});
		}
	});
}
