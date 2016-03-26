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
		if ((ln === 'ar' || ln === 'en' || ln === 'id') && (!Roles.userIsInRole(Meteor.user(), ['owner']))) {
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
	},
	'click #add-lang': function() {
		var disp = '<div class="form-horizontal">';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="al-ref">ISO:</label><div class="col-md-6"><input id="al-ref" name="al-ref" type="text" class="form-control input-md" placeholder="2 letter iso code"></div></div>';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="al-name">Name:</label><div class="col-md-6"><input id="al-name" name="al-name" type="text" class="form-control input-md" placeholder="Language in English"></div></div>';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="al-native">Native:</label><div class="col-md-6"><input id="al-native" name="al-native" type="text" class="form-control input-md" placeholder="Language in native text"></div></div>';
		disp += '</div>';
		swal({
			title: 'Add Language',
			html: disp,
			showCancelButton: true,
			closeOnConfirm: false,
			allowOutsideClick: false
		},
		function () {
			var ref = $('#al-ref').val();
			var name = $('#al-name').val();
			var native = $('#al-native').val();
			
			var items = Langs.find({});
			var array = [];
			items.forEach(function (item) {
				array.push(item.order);
			});
			var high = Math.max.apply(Math, array);
			var numb = high + 1;
			Langs.insert({order: numb, ref: ref, name: name, native: native, active: false});
			
			swal({
				type: 'success',
				html: 'You have added a new language: <strong>'+name+'</strong>',
				timer: 3000
			});
		});
	}
});
