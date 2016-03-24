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

Template.registerHelper('first', function (list, elem) {
	return _.first(list)._id === elem._id;
});

Template.registerHelper('last', function (list, elem) {
	return _.last(list)._id === elem._id;
});
