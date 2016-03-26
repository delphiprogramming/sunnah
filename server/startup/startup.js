Meteor.startup(function () {
	// Setup services from settings json provided
	var services = Meteor.settings.services;
	if (services) {
		for (var k in services) {
			var svc = {};
			if (services.hasOwnProperty(k)) {
				svc['service'] = k;
				for (var i in services[k]) {
					if (services[k].hasOwnProperty(i)) {
						svc[i] = services[k][i];
					}
				}
			}
			Accounts.loginServiceConfiguration.remove({service: svc['service']});
			Accounts.loginServiceConfiguration.insert(svc);
		}
	}

	// Start SyncedCron for SNAP
	SyncedCron.start();
});
