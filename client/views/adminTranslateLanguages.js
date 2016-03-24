Template.adminTranslateLanguages.helpers({
	lang: function () {
		var langs = Langs.find({}).fetch();
		return langs;
	},
	act1: function () {
		var a = this.active;
		var n = this.ref;
		return (a) ? 'blue' : 'red';
	},
	act2: function () {
		var a = this.active;
		var n = this.ref;
		return (a) ? 'Yes' : 'No';
	},
	but: function () {
		var a = this.active;
		var n = this.ref;
		return (a) ? 'Deactivate / Delete' : 'Activate / Delete';
	}
});

Template.adminTranslateLanguages.events({
	'click .langToggle': function (e) {
		var ln = e.target.id.replace('tog-', '');
		if (ln === 'ar' || ln === 'en' || ln === 'id') {
			swal({type: 'error', text: 'Can not disable a default language', timer: 2000, showConfirmButton: false});
			return false;
		}

		var la = Langs.findOne({ref: ln});
		var id = la._id;
		var tg = (la.active) ? false : true;
		Langs.update(id, {$set: {active: tg}});
	},
	'click .langDelete': function (e) {
		var ln = e.target.parentNode.id.replace('rem-', '');
		if (ln === 'ar' || ln === 'en' || ln === 'id') {
			swal({type: 'error', text: 'Can not delete a default language', timer: 2000, showConfirmButton: false});
			return false;
		}

		var la = Langs.findOne({ref: ln});
		swal({
			html: "<p>Are you sure you want to delete:</p><br><pre>" + la.name + "</pre>",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Delete',
			closeOnConfirm: false
		}, function (isConfirm) {
			if (isConfirm) {
				Langs.remove(la._id);
				swal({
					text: la.name + " language has been deleted.",
					type: 'success',
					timer: 2000
				});
			}
		});
	}
});
