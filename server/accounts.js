// First account gets owner role
Accounts.onCreateUser(function (options, user) {
	if (Meteor.users.find({'roles': 'owner'}).count() === 0)
		Meteor.setTimeout(function () {
			checkOwner(user._id);
		}, 1000);

	if (options.profile)
		user.profile = options.profile;

	return user;
});

// Must execute after the account is created
function checkOwner(id) {
	if (Meteor.users.find({'roles': 'owner'}).count() === 0)
		Roles.addUsersToRoles(id, 'owner');
}

// Must publish roles for alanning:roles
Meteor.publish(null, function () {
	return Meteor.roles.find({});
});
