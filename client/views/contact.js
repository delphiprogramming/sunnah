Template.contact.events({
	'submit form': function (e) {
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		Meteor.call('contactUs', name, email, subject, message, function (err, data) {
			if (err) {
				swal({
					title: 'Error: Email not sent',
					type: 'error',
					showConfirmButton: false,
					timer: 3000
				});
				return false;
			}

			swal({
				title: 'Your email has been sent',
				type: 'success',
				showConfirmButton: false,
				timer: 3000
			});
			document.getElementById("contactus").reset();
		});

		e.preventDefault();
	}
});
