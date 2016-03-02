Template.adminUsers.events({
	'click .demoteBtn': function (e) {
		var id = e.target.id;
		Meteor.call('demoteUser', id, function (error) {
			if (error && error.error) {
				console.log('Error: '+error.message);
				return false;
			}
		});
	},
	'click .promoteBtn': function (e) {
		var id = e.target.id;
		Meteor.call('promoteUser', id, function (error) {
			if (error && error.error) {
				console.log('Error: '+error.message);
				return false;
			}
		});
	}
});

Template.adminUsers.helpers({
	usersData: function () {
		return usersTableData;
	},
	usersOptions: {
		id: 'recitersTable',
		paging: false,
		order: [[0, "asc"], [1, "asc"]],
		columns: [{
				title: ' ',
				className: 'hide',
				render: renderOrder,
				width: '0%'
			}, {
				title: 'Name',
				className: 'alignLeft',
				data: 'profile.name',
				width: '45%'
			}, {
				title: 'Email',
				className: 'alignLeft',
				render: renderEmail,
				width: '20%'
			}, {
				title: 'Profile',
				className: 'alignCenter',
				render: renderProfile,
				width: '15%'
			}, {
				title: 'Role',
				className: 'alignCenter',
				render: renderRole,
				width: '10%'
			}, {
				title: 'Actions',
				className: 'alignCenter',
				render: renderActions,
				width: '10%'
			}],
		oLanguage: {
			sInfo: "_TOTAL_ users",
			sInfoEmpty: "_TOTAL_ users",
			sInfoFiltered: "found from _MAX_"
		},
		initComplete: function () {
			$('#datatable').addClass('table-striped table-bordered');
			$('.dataTables_filter > label > input').attr("placeholder", "Search").focus();
		}
	}
});

function usersTableData() {
	return Meteor.users.find({}, {sort: {'profile.name': 1}}).fetch(); // or .map()
}

function renderOrder(cellData, renderType, currentRow) {
	if (currentRow && currentRow.roles && currentRow.roles[0] === 'owner')
		return 1;
	else if (currentRow && currentRow.roles && currentRow.roles[0] === 'admin')
		return 2;
	return 3;
}

function renderEmail(cellData, renderType, currentRow) {
	if (currentRow && currentRow.services && currentRow.services.google)
		return '<small>' + currentRow.services.google.email + '</small>';
	if (currentRow && currentRow.services && currentRow.services.facebook)
		return '<small>' + currentRow.services.facebook.email + '</small>';
	return '<small>-</small>';
}

function renderProfile(cellData, renderType, currentRow) {
	var out = '';

	if (currentRow && currentRow.services && currentRow.services.facebook && currentRow.services.facebook.link)
		out += '<a href="' + currentRow.services.facebook.link + '" target="_blank" style="color:#3b5998"><i class="fa fa-facebook-square"></i></a>';
	if (currentRow && currentRow.services && currentRow.services.google && currentRow.services.google.email)
		out += ' <a href="mailto:' + currentRow.services.google.email + '" target="_blank" style="color:#dd4b39"><i class="fa fa-google-plus-square"></i></a>';
	return out;
}

function renderRole(cellData, renderType, currentRow) {
	if (currentRow && currentRow.roles && currentRow.roles[0] === 'owner')
		return '<span style="color:#009ACD">Admin</span>';
	else if (currentRow && currentRow.roles && currentRow.roles[0] === 'admin')
		return '<span style="color:#008B00">Admin</span>';
	return '-';
}

function renderActions(cellData, renderType, currentRow) {
	if (currentRow._id === Meteor.userId())
		 return '';
		if (currentRow && currentRow.roles && currentRow.roles[0] === 'owner')
			return '';
	if (currentRow && currentRow.roles && currentRow.roles[0] === 'admin')
		return '<a id="' + currentRow._id + '" class="waves-effect waves-light red btn btn-sm demoteBtn">Demote</a>';
	return '<a id="' + currentRow._id + '" class="waves-effect waves-light green btn btn-sm promoteBtn">Promote</a>';
}
