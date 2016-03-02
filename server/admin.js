Meteor.methods({
	promoteUser: function (targetUser) {
		check(targetUser, String);
		var loggedInUser = Meteor.user();

		if (!loggedInUser || !Roles.userIsInRole(loggedInUser,['owner','admin']))
			throw new Meteor.Error(403, "Access denied");
		if (!loggedInUser || Roles.userIsInRole(targetUser,['owner']))
			throw new Meteor.Error(403, "Can not promote owner");
		if (!loggedInUser || Roles.userIsInRole(targetUser,['admin']))
			throw new Meteor.Error(403, "User is already an admin");

		Roles.setUserRoles(targetUser, 'admin');
		return true;
	},
	demoteUser: function (targetUser) {
		check(targetUser, String);
		var loggedInUser = Meteor.user();

		if (!loggedInUser || !Roles.userIsInRole(loggedInUser,['owner','admin']))
			throw new Meteor.Error(403, "Access denied");
		if (!loggedInUser || Roles.userIsInRole(targetUser,['owner']))
			throw new Meteor.Error(403, "Can not demote owner");
		if (!loggedInUser || !Roles.userIsInRole(targetUser,['admin']))
			throw new Meteor.Error(403, "User is not an admin");

		Roles.setUserRoles(targetUser, []);
		return true;
	}
});