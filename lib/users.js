// Publish & Subscribe

if (Meteor.isServer) {
	Meteor.publish('users', function () {
		if (Roles.userIsInRole(this.userId, ['owner', 'admin'])) {
			return Meteor.users.find({}, {fields: {username: 1, profile: 1, services: 1, registered_emails: 1, roles: 1}});
		}
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('users');
}
