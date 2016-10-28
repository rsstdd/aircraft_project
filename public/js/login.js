'use strict';
(function() {
  $('#loginForm').submit((event) => {
    event.preventDefault();

    const email = $('#email').val().trim();
    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const password = $('#password').val();

    if (!password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      );
    }

    if (!firstName || firstName.trim()) {
      return Materialize.toast(
        'First Name required',
        3000
      );
    }

    if (!lastName || lastName.trim()) {
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

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/token'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/favorites.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  });
})();
