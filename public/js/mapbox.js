/* eslint-disable  */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibG9yZHdhbGVzIiwiYSI6ImNrZTk0enhoMTIzMDMyc280dWk3bGpvNnQifQ.5Z9Jr_jQSZr92fstQ4Fawg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lordwales/ckebypcg31pwt19mxrptnj1hn',
    scrollZoom: false,
    //center: [-118.113491, 34.111745],
    //zoom: 6,
    // interactive: false,
  });
  map.addControl(new mapboxgl.NavigationControl());

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Maker

    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p> Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend map bounds to include current location

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 208,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
