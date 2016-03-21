Template.registerHelper('authInProcess', function() {
		return Meteor.loggingIn();
});

Template.registerHelper('loggedIn', function() {
		return !!Meteor.user();
});

Template.registerHelper('isAdmin', function() {
		if (Roles.userIsInRole(Meteor.user(), ['owner', 'admin'])) {
			return true;
		}
		return false;
});
