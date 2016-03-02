Meteor.methods({
  contactUs: function (name, email, subject, message) {
    check([name, email, subject, message], [String]);
    this.unblock(); // don't block app waiting on email send

    Email.send({
      to: 'sunnah@ussunnah.org,alisalaah@gmail.com',
      from: email,
      subject: '[Sunnah.us] '+name+' / '+subject,
      text: 'Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message
    });
  }
});
