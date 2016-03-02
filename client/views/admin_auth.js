Template.onlyIfAdmin.helpers({
	authInProcess: function () {
		return Meteor.loggingIn();
	},
	loggedIn: function () {
		return !!Meteor.user();
	},
	isAdmin: function () {
		if (Roles.userIsInRole(Meteor.user(), ['owner', 'admin'])) {
			return true;
		}
		return false;
	}
});