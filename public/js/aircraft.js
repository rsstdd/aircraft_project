'use strict';

(function() {
    console.log('hello');
  // const aircraftId = window.QUERY_PARAMETERS.id;
  const aircraftId = window.location.search.substring(4);
  // console.log(aircraftId);
  // const aircraftId = window.QUERY_PARAMETERS.id;
  console.log(aircraftId);
  if (!aircraftId) {
    // console.log('bang');
    window.location.href = '/index.html';
  }

  const renderAircraft = function(aircraft) {
    console.log('herrow');
    $('#name').text(aircraft.name);
    $('#countryOfOrigin').text(aircraft.countryOfOrigin);
    $('#engines').text(aircraft.engines);
    $('#maxSpeed').text(aircraft.maxSpeed);
    $('#maxRange').text(aircraft.maxRange);
    $('#ceiling').text(aircraft.ceiling);
    $('#description').text(aircraft.description);
    $('#operators').text(aircraft.description);
    $('#image').attr({ src: aircraft.imgUrl, alt: aircraft.title });
    $('#editAircraft').attr('href', `/edit_aircraft.html?id=${aircraft.id}`);
  };

  const attachListeners = function(aircraft) {
    $('#view').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ aircraftId: aircraftId.id }),
        dataType: 'json',
        type: 'POST',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#addFavorite').addClass('hide');
          $('#removeFavorite').removeClass('hide');

          Materialize.toast('Added aircraft to your favorites', 3000);
        })
        .fail(() => {
          Materialize.toast('Unable to add this aircraft to your favorites', 3000);
        });
    });

    $('#removeFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ aircraftId: aircraft.id }),
        dataType: 'json',
        type: 'DELETE',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#removeFavorite').addClass('hide');
          $('#addFavorite').removeClass('hide');

          Materialize.toast('Removed book from your favorites', 3000);
        })
        .fail(() => {
          Materialize.toast(
            'Unable to remove this book from your favorites',
            3000
          );
        });
    });
  };

  $.getJSON(`/airplanes:${aircraftId}`)
    .done((aircraft) => {
      renderAircraft(aircraft);
      attachListeners(aircraft);
    })
    .fail(() => {
      Materialize.toast('Whyyyyyyy??  :(', 3000);
    });

  $.getJSON('/token')
    .done((isLoggedIn) => {
      if (!isLoggedIn) {
        return;
      }

      $.getJSON(`/favorites/check?bookId=${aircraftId}`)
        .done((isFavorite) => {
          if (isFavorite) {
            $('#removeFavorite').removeClass('hide');
          }
          else {
            $('#addFavorite').removeClass('hide');
          }
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        });
    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    });
})();
