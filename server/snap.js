// Initialize FB Graph API

FB = new GraphAPI({
	appId: Meteor.settings.services.facebook.appId,
	secret: Meteor.settings.services.facebook.secret,
	version: 2.5
});

// userToken @ Meteor.user().services.facebook.accessToken

/* FB.getPages() returns array of all pages user has access to
 * 
 * @param {string} userToken
 * @returns [{access_token,category,name,id,perms[array]},...]
 */

GraphAPI.prototype.getPages = function (userToken) {
	var response = this.get(['me', 'accounts'], {
		access_token: userToken,
		limit: 200,
		pretty: 1,
		redirect: false
	});

	return response.ok() ? response.data.data : false;
};

/* FB.postToPage() posts to a page
 * 
 * @param {string} pageId
 * @param {string} pageToken
 * @param {urlencoded} text
 * @returns true/false
 */

GraphAPI.prototype.postToPage = function (pageId, pageToken, text) {
	var response = this.post([pageId, 'feed'], {
		access_token: pageToken,
		message: text,
		redirect: false
	});

	return response.ok() ? true : false;
};

/* FB.getGroups() returns array of all groups user is member to
 * 
 * @param {string} userToken
 * @returns [{name,privacy,id,administrator(bool),bookmark_order,unread},...]
 */

GraphAPI.prototype.getGroups = function (userToken) {
	var response = this.get(['me', 'groups'], {
		access_token: userToken,
		limit: 200,
		pretty: 1,
		redirect: false
	});

	return response.ok() ? response.data.data : false;
};

/* FB.postToGroup() posts to a group the user is member of
 * 
 * @param {string} groupId
 * @param {string} userToken
 * @param {urlencoded} text
 * @returns true/false
 */

GraphAPI.prototype.postToGroup = function (groupId, userToken, text) {
	var response = this.post([groupId, 'feed'], {
		access_token: userToken,
		message: text,
		redirect: false
	});

	return response.ok() ? true : false;
};

// SyncedCron test

SyncedCron.add({
	name: 'Hourly SNAP',
	schedule: function (parser) {
		return parser.recur().on(0).minute();
	},
	job: function () {
		var now = new Date();
		var min = now.getUTCMinutes();
		var hour = (min > 55) ? now.getUTCHours() + 1 : now.getUTCHours();
		console.log(hour);
	}
});
