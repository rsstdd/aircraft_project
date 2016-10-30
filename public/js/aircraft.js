'use strict';

(function() {
  const aircraftId = window.QUERY_PARAMETERS.id;

  if (!aircraftId) {
    window.location.href = '/index.html';
  }

  const renderAircraft = function(aircraft) {
    $('#name').text(aircraft.name);
    $('#countryOfOrigin').text(aircraft.countryOfOrigin);
    $('#engines').text(aircraft.engines);
    $('#maxSpeed').text(aircraft.maxSpeed);
    $('#maxRange').text(aircraft.maxRange);
    $('#ceiling').text(aircraft.ceiling);
    $('#description').text(aircraft.description);
    $('#operators').text(aircraft.operators);
    $('#img').attr({ src: aircraft.imgUrl, alt: aircraft.title });
    $('#img').attr('class', 'materialboxed responsive-img');
    $('#editAircraft').attr('href', `/edit_aircraft.html?id=${aircraft.id}`);
  };

  const attachListeners = function(aircraft) {
    $('#view').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ aircraftId: aircraftId }),
        dataType: 'json',
        type: 'POST',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#addFavorite').addClass('hide');
          $('#removeFavorite').removeClass('hide');

          Materialize.toast(
            'Added aircraft to your favorites',
            3000
          );
        })
        .fail(() => {
          Materialize.toast(
            'Unable to add this aircraft to your favorites',
            3000
          );
        });
    });

    $('#addFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ aircraftId: aircraftId }),
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
          Materialize.toast(
            'Unable to add this aircraft to your favorites',
            3000
          );
        });
    });

    $('#removeFavorite').click((event) => {
      event.preventDefault();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ aircraftId: aircraftId }),
        dataType: 'json',
        type: 'DELETE',
        url: '/favorites'
      };

      $.ajax(options)
        .done(() => {
          $('#removeFavorite').addClass('hide');
          $('#addFavorite').removeClass('hide');

          Materialize.toast(
          'Removed aircraft from your favorites',
          3000
        );
        })
        .fail(() => {
          Materialize.toast(
            'Unable to remove this aircraft from your favorites',
            3000
          );
        });
    });
  };

  $.getJSON(`/airplanes/${aircraftId}`)
    .done((aircraft) => {
      renderAircraft(aircraft);
      attachListeners(aircraft);
    })
    .fail(() => {
      Materialize.toast(
        'Your aircraft could not be retrieved',
        3000
      );
    });

  $.getJSON('/token')
    .done((isLoggedIn) => {
      if (!isLoggedIn) {
        return;
      }

      $.getJSON(`/favorites/check?aircraftId=${aircraftId}`)
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
