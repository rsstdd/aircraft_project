'use strict';
(function() {
  const $favorites = $('#favorites');

  $.getJSON('/favorites')
    .done((favorites) => {
      const $favs = $('#favorites');

      for (const fav of favorites) {
        const $anchor = $('<a>')
          .attr({
            href: `/aircraft.html?id=${fav.airplaneId}`,
            'data-delay': '50',
            'data-tooltip': fav.name
          })
          .tooltip();

        const $card = $('<div>').addClass('card');
        const $cardImage = $('<div>').addClass('card-image');
        const $col = $('<div>').addClass('col s6 m4 l3');
        const $img = $('<img>').attr({ src: fav.imgUrl, alt: fav.name });

        $cardImage.append($img);
        $anchor.append($cardImage);
        $card.append($anchor);
        $col.append($card);
        $favs.append($col);
      }
    })
    .fail(() => {
      window.location.href = '/aircraft.html';
    });
})();
