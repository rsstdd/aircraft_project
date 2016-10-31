'use strict';
(function() {
  $('#register').click((event) => {
    event.preventDefault();

    const $firstName = $('#firstName').val().trim();
    const $lastName = $('#lastName').val().trim();
    const $email = $('#email').val().trim();
    const $password = $('#password').val();

    if (!$firstName) {
      return Materialize.toast(
        'First Name required here',
        3000
      );
    }

    if (!$lastName) {
      return Materialize.toast(
        'Last Name required',
        3000
      );
    }

    if (!$email) {
      return Materialize.toast(
        'Email must not be blank',
        3000
      );
    }

    if (!$password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      );
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ $firstName, $lastName, $email, $password }),
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

  $('#logIn').click((event) => {
    event.preventDefault();

    console.log('hello');
    const $firstName = $('#firstName').val().trim();
    const $lastName = $('#lastName').val().trim();
    const $email = $('#email').val().trim();
    const $password = $('#password').val();

    if (!$firstName) {
      return Materialize.toast(
        'First Name required',
        3000
      );
    }

    if (!$lastName) {
      return Materialize.toast(
        'Last Name required',
        3000
      );
    }

    if (!$email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (!$password) {
      return Materialize.toast('Password must not be blank', 3000);
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ $email, $password }),
      dataType: 'json',
      type: 'POST',
      url: '/token'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/collection.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  });
})();
