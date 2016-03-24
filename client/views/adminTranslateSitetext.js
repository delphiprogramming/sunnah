Template.adminTranslateSitetext.helpers({
	ssect: function () {
		var sects = Ssect.find({}, {sort: ['order', 'asc']}).fetch();
		return sects;
	},
	stext: function () {
		var sect = this.section;
		var stext = Stext.find({section: sect}, {sort: ['order', 'asc']}).fetch();
		return stext;
	},
	langs: function () {
		var langs = Langs.find({}, {sort: ['order', 'asc']}).fetch();
		return langs;
	},
	capRef: function () {
		return this.ref.toUpperCase();
	},
	inpVal: function () {
		var parent = Template.parentData(1);
		var lang = this.ref;
		return parent[lang];
	}
});

Template.adminTranslateSitetext.events({
	'keyup input': function (e) {
		var id = e.target.id;
		var ref = id.split('-')[0];
		var lng = id.split('-')[1];
		var same = compInp(ref);
		if (same) {
			hideBut(ref);
		} else {
			showBut(ref);
		}
	},
	'click button': function (e) {
		console.log('1');
		var id = e.target.id;
		var ref = id.split('-')[0];
		var item = Stext.findOne({ref: ref});
		var iid = item._id;
		var lngs = Langs.find({});
		lngs.forEach(function (lang) {
			var l = lang.ref;
			var db = item[l] || '';
			var ip = $('#' + ref + '-' + l).val() || '';
			if (db !== ip) {
				var query = {};
				query[l] = ip;
				Stext.update(iid, {$set: query});
				remRed(ref,l);
			}
		});
		hideBut(ref);
	},
	'click #add-section': function() {
		swal({
			title: 'Add Section',
			html: '<div class="form-horizontal"><div class="form-group"><label class="col-md-4 control-label" for="as-name">Name:</label><div class="col-md-6"><input id="as-name" name="as-name" type="text" class="form-control input-md" placeholder="Section name"></div></div></div>',
			showCancelButton: true,
			closeOnConfirm: false,
			allowOutsideClick: false
		},
		function () {
			var name = $('#as-name').val();
			var sects = Ssect.find({});
			var array = [];
			sects.forEach(function (sect) {
				array.push(sect.section);
			});
			var high = Math.max.apply(Math, array);
			var numb = high + 1;
			Ssect.insert({section: numb, name: name});
			swal({
				type: 'success',
				html: 'You have added a new section: <strong>'+name+'</strong>',
				timer: 3000
			});
		});
	},
	'click #add-item': function() {
		var sects = Ssect.find({});
		var opts = '';
		sects.forEach(function(sect){
			opts += '<option value="'+sect.section+'">'+sect.name+'</option>';
		});
		var disp = '<div class="form-horizontal">';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="ai-sect">Section:</label><div class="col-md-6"><select id="ai-sect" name="ai-sect" class="form-control">'+opts+'</select></div></div>';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="ai-ref">Ref:</label><div class="col-md-6"><input id="ai-ref" name="ai-ref" type="text" class="form-control input-md" placeholder="Short code or reference"></div></div>';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="ai-label">Label:</label><div class="col-md-6"><input id="ai-label" name="ai-label" type="text" class="form-control input-md" placeholder="Label for admin section"></div></div>';
		disp += '<div class="form-group"><label class="col-md-4 control-label" for="ai-english">English:</label><div class="col-md-6"><input id="ai-english" name="ai-english" type="text" class="form-control input-md" placeholder="English text"></div></div>';
		disp += '</div>';
		swal({
			title: 'Add Item',
			html: disp,
			showCancelButton: true,
			closeOnConfirm: false,
			allowOutsideClick: false
		},
		function () {
			var sect = $('#ai-sect').val() * 1;
			var ref = $('#ai-ref').val();
			var label = $('#ai-label').val();
			var english = $('#ai-english').val();
			
			var items = Stext.find({section:sect});
			var array = [];
			items.forEach(function (item) {
				array.push(item.order);
			});
			var high = Math.max.apply(Math, array);
			var numb = high + 1;
			Stext.insert({section: sect, order: numb, ref: ref, label: label, en: english});
			
			swal({
				type: 'success',
				html: 'You have added a new item:<br><br>'+ref+'<br>'+label+'<br>'+english,
				timer: 3000
			});
		});
	}
});

function compInp(ref) {
	var item = Stext.findOne({ref: ref});
	var lngs = Langs.find({});
	var res = true;
	lngs.forEach(function (lang) {
		var l = lang.ref;
		var db = item[l] || '';
		var ip = $('#' + ref + '-' + l).val() || '';
		if (db !== ip) {
			addRed(ref,l);
			res = false;
		} else {
			remRed(ref,l);
		}
	});
	return res;
}

function remRed(ref, l) {
	$('#' + ref + '-' + l).parent().parent()
			.removeClass('has-error');
}

function addRed(ref, l) {
	$('#' + ref + '-' + l).parent().parent()
			.removeClass('has-error')
			.addClass('has-error');
}

function hideBut(ref) {
	$('#' + ref + '-sub').hide();
}

function showBut(ref) {
	$('#' + ref + '-sub').show();
}
