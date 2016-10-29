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
                <a class="btn search activator" id="${data[i].id}">view</a>
              </p>
            </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                ${data[i].name}<i class="material-icons right">close</i></span>
                <p>${data[i].description}</p>
                  <div class="divider"></div>
                  <p>
                    <a href="/aircraft.html?id=${data[i].id}" class="btn">
                      Technical Specs
                    </a>
                  </p>
                </div>
              </div>
            </div>`
        );
      }
      const $del = $('.delete');

      const $search = $('.search');
    })
    .fail(() => {
      window.location.href = '/collection.html';
    });

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
  };

  $logout.click(logout);
})();
