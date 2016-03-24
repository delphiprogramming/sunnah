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
