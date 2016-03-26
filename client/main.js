BlazeLayout.setRoot('body');

Template.layout.helpers({
	active: function(tab) {
		var page = FlowRouter.getRouteName();
		if (tab === 'tools' && (page === 'tools' || page === 'toolsApi' || page === 'toolsPray'))
			return 'active';
		if (tab === page)
			return 'active';
		return '';
	}
});

Template.langButtons.helpers({
	currentLang: function() {
		var lang = Session.get('lang') || 'en';
		var disp = Langs.findOne({ref:lang});
		var disp = (disp) ? disp.native : '';
		return disp;
	},
	otherLangs: function() {
		var lang = Session.get('lang') || 'en';
		var langs = Langs.find({ref:{$ne:lang},active:true}).fetch();
		return langs;
	}
});

Template.langButtons.events({
	'click .lang-button': function (e) {
		var lang = e.target.id.replace('lang-','');
		Session.set('lang',lang);
	}
});


Template._loginButtonsAdditionalLoggedInDropdownActions.helpers({
	active: function(tab) {
		var page = FlowRouter.getRouteName();
		if (tab === page)
			return 'default';
		return 'secondary';
	}	
});

Template.item.helpers({
	itemType: function() {
		var item = FlowRouter.getParam('a');
		
		if (People.findOne({slug: item}))
			return 'bio';
		
		return 'notFound';
	}
});

Template._loginButtonsLoggedOutDropdown = Template.my_loginButtonsLoggedOutDropdown;