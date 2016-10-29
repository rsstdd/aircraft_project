'use strict';

(function() {
  $('.modal-trigger').leanModal();

  // eslint-disable-next-line max-statements
  $('#register').click((event) => {
    event.preventDefault();

    const email = $('#email').val().trim();
    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const password = $('#password').val();

    if (!firstName) {
      return Materialize.toast(
        'You Must Include a First Name',
        3000
      );
    }

    if (!lastName || lastName.trim()) {
      return Materialize.toast(
        'You Must Include a Last Name',
        3000
      );
    }

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (email.indexOf('@') < 0) {
      return Materialize.toast('Email must be valid', 3000);
    }

    if (!password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      );
    }


    const options = { // req body
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/users'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/collection.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  });

  $('#logIn').click((event) => {
    event.preventDefault();

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();

    if (!firstName) {
      return Materialize.toast(
        'You Must Include a First Name',
        3000
      );
    }

    if (!lastName) {
      return Materialize.toast(
        'You Must Include a Last Name',
        3000
      );
    }

    if (!email) {
      return Materialize.toast(
        'Email must not be blank',
        3000
      );
    }

    if (!password) {
      return Materialize.toast(
        'Password must not be blank',
        300
      );
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password }),
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
