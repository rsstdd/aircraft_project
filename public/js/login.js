'use strict';
(function() {
  $('#signUpForm').submit((event) => {
    event.preventDefault();

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();

    if (!firstName) {
      return Materialize.toast(
        'First Name required here',
        3000
      );
    }

    if (!lastName) {
      return Materialize.toast(
        'Last Name required',
        3000
      );
    }

    if (!email) {
      return Materialize.toast(
        'Email must not be blank',
        3000
      );
    }

    if (email.indexOf('@') < 0) {
      return Materialize.toast(
        'Email must be valid',
        3000
      );
    }

    if (!password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      );
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/users'
    };

    $.ajax(options)
      .done(() => {
        $('.pop-out-box').hide();

        const options2 = {
          contentType: 'application/json',
          data: JSON.stringify({ email, password }),
          dataType: 'json',
          type: 'POST',
          url: '/token'
        };

        $.ajax(options2)
          .done(() => {
            Materialize.toast(
              `Thanks for signing up, ${firstName}.
You're now logged in. You can now add tweets to your favorites.`,
              4000);

          })
          .fail(($xhr) => {
            console.log($xhr.responseText);
          });
      })
      .fail(($xhr) => {
        console.log($xhr.responseText);
      });
 });
})();
