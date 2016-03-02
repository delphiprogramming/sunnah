Template.snap.helpers({
	facebook: function () {
		if (Meteor.user() && Meteor.user().services && Meteor.user().services.facebook) {
			var userToken = Meteor.user().services.facebook.accessToken;
			$.get("https://graph.facebook.com/me/accounts?limit=1000&access_token=" + userToken, function (res) {
				Session.set('pages',res.data);
			});
			$.get("https://graph.facebook.com/me/groups?limit=1000&access_token=" + userToken, function (res) {
				Session.set('groups',res.data);
			});
		}
		
		if (userToken)
			return true;
		return false;
	},
	fbName: function() {
		if (Meteor.user() && Meteor.user().services && Meteor.user().services.facebook)
			return Meteor.user().services.facebook.name;
		return '...';
	},
	pages: function () {
		var pages = Session.get('pages');
		if (pages) {
			return pages;
		}
		return false;
	},
	pCount: function() {
		var pages = Session.get('pages');
		if (pages) {
			return "("+pages.length+")";
		}
		return '';		
	},
	groups: function () {
		var groups = Session.get('groups');
		if (groups) {
			return groups;
		}
		return false;
	},
	gCount: function() {
		var groups = Session.get('groups');
		if (groups) {
			return "("+groups.length+")";
		}
		return '';		
	},
});
