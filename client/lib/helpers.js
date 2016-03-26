Template.registerHelper('authInProcess', function () {
	return Meteor.loggingIn();
});

Template.registerHelper('loggedIn', function () {
	return !!Meteor.user();
});

Template.registerHelper('isAdmin', function () {
	if (Roles.userIsInRole(Meteor.user(), ['owner', 'admin'])) {
		return true;
	}
	return false;
});

Template.registerHelper('isOwner', function () {
	if (Roles.userIsInRole(Meteor.user(), ['owner'])) {
		return true;
	}
	return false;
});

Template.registerHelper('first', function (list, elem) {
	return _.first(list)._id === elem._id;
});

Template.registerHelper('last', function (list, elem) {
	return _.last(list)._id === elem._id;
});

Template.registerHelper('t', function(ref) {
	var lang = Session.get('lang') || 'en';
	var stext = Stext.findOne({ref:ref});
	var def = (stext && stext['en']) ? stext['en'] : '';
	var out = (stext && stext[lang]) ? stext[lang] : def;
	return out;
});

function isOwner() {
	return Roles.userIsInRole(Meteor.user(), ['owner']);
}

function isAdmin() {
	return Roles.userIsInRole(Meteor.user(), ['owner', 'admin']);
}