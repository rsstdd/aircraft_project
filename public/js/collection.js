'use strict';

(function() {
// eslint-disable-next-line max-statements

  const $images = $('#images');
  const $logout = $('#logout');

  $.getJSON(`/airplanes`)
    .done((data) => {
      for (let i = 0; i < data.length; i++) {
        $images.append(
          `<div class="col s12 m12 l6">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${data[i].imgUrl}" height="300px" width="100px">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 truncate">
                  ${data[i].name}<i class="material-icons right">more_vert</i>
                </span>
                <div class="divider"></div>
                <p>
                  <a type="submit" class="btn search" id="${data[i].id}">view</a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                ${data[i].name}<i class="material-icons right">close</i></span>
                <p>${data[i].description}</p>
                  <div class="divider"></div>
                  <p>
                    <a type="submit" class="btn delete" id="${data[i].id}">
                      Delete
                    </a>
                  </p>
              </div>
            </div>
          </div>`
        );
      }
      const $del = $('.delete');

      $del.click(deleteFav);

      const $search = $('.search');

      $search.click(searchFav);
    })
    .fail(() => {
      window.location.href = '/collection.html';
    });

  function airplaneSearch(event) {
    event.preventDefault();

    const searchInput = $country.val().trim();

    localStorage.input = searchInput;

    if (!searchInput) {
      return Materialize.toast('Search must not be blank', 3000);
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ searchInput }),
      dataType: 'json',
      type: 'GET',
      url: '/api/images'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = `/result.html?${searchInput}`;
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  }

  function citySearch(event) {
    event.preventDefault();

    const searchInput = $city.val().trim();

    localStorage.input = searchInput;

    if (!searchInput) {
      return Materialize.toast('Search must not be blank', 3000);
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ searchInput }),
      dataType: 'json',
      type: 'GET',
      url: '/api/images/city'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = `/cityResult.html?${searchInput}`;
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  }

  function deleteFav(event) {
    event.preventDefault();
    const destinationId = this.id;

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ destinationId }),
      dataType: 'json',
      type: 'DELETE',
      url: '/favorites'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/user_search.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  }

  function searchFav(event) {
    event.preventDefault();

    const searchInput = this.id;

    localStorage.input = searchInput;

    if (!searchInput) {
      return Materialize.toast('Search must not be blank', 3000);
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ searchInput }),
      dataType: 'json',
      type: 'GET',
      url: '/api/images'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = `/result.html?${searchInput}`;
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  }

  const logout = function(event) {
    event.preventDefault();

    const options = {
      contentType: 'application/json',
      dataType: 'json',
      type: 'DELETE',
      url: '/token'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/index.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  }

  $logout.click(logout);
})();
