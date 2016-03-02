BlazeLayout.setRoot('body');

Template.layout.helpers({
	active: function(tab) {
		var page = FlowRouter.getRouteName();
		if (tab === page)
			return 'active';
		return '';
	},
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