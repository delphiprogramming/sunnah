/****************
 * Basic Routes *
 ****************/

FlowRouter.route('/', {
	name: 'home',
	action: function () {
		BlazeLayout.render("layout", {page: 'home'});
		$('body').css('background','url(/bg-home.jpg)');
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action: function () {
		BlazeLayout.render("layout", {page: 'about'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/contact', {
	name: 'contact',
	action: function () {
		BlazeLayout.render("layout", {page: 'contact'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/terms', {
	name: 'terms',
	action: function () {
		BlazeLayout.render("layout", {page: 'terms'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/policy', {
	name: 'policy',
	action: function () {
		BlazeLayout.render("layout", {page: 'policy'});
		$('body').css('background','url(/bg.jpg)');
	}
});

/***********************
 * Profile Routes *
 ***********************/

FlowRouter.route('/profile', {
	name: 'profile',
	action: function () {
		BlazeLayout.render("layout", {page: 'profile'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/snap', {
	name: 'snap',
	action: function () {
		BlazeLayout.render("layout", {page: 'snap'});
		$('body').css('background','url(/bg.jpg)');
	}
});

/***********************
 * Content Home Routes *
 ***********************/

FlowRouter.route('/quran', {
	name: 'quran',
	action: function () {
		BlazeLayout.render("layout", {page: 'quran'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/hadith', {
	name: 'hadith',
	action: function () {
		BlazeLayout.render("layout", {page: 'hadith'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/scholars', {
	name: 'scholars',
	action: function () {
		BlazeLayout.render("layout", {page: 'scholars'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/books', {
	name: 'books',
	action: function () {
		BlazeLayout.render("layout", {page: 'books'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/articles', {
	name: 'articles',
	action: function () {
		BlazeLayout.render("layout", {page: 'articles'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/quotes', {
	name: 'quotes',
	action: function () {
		BlazeLayout.render("layout", {page: 'quotes'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/tools', {
	name: 'tools',
	action: function () {
		BlazeLayout.render("layout", {page: 'tools'});
		$('body').css('background','url(/bg.jpg)');
	}
});

/****************
 * Admin Routes *
 ****************/

FlowRouter.route('/admin', {
	name: 'admin',
	action: function () {
		BlazeLayout.render("layout", {page: 'admin'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/admin/translate', {
	name: 'adminUsers',
	action: function () {
		BlazeLayout.render("layout", {page: 'adminTranslate'});
		$('body').css('background','url(/bg.jpg)');
	}
});

FlowRouter.route('/admin/users', {
	name: 'adminUsers',
	action: function () {
		BlazeLayout.render("layout", {page: 'adminUsers'});
		$('body').css('background','url(/bg.jpg)');
	}
});

/*************************
 * Dynamic Content Route *
 *************************/

FlowRouter.route('/:a/:b?/:c?', {
	name: 'item',
	action: function () {
		BlazeLayout.render("layout", {page: 'item'});
		$('body').css('background','url(/bg.jpg)');
	}
});
