import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-københavn',
    predictionPlace: {
      address: 'København, Danmark',
      bounds: new LatLngBounds(new LatLng(55.74554627, 12.67817949), new LatLng(55.57823396, 12.43128698)),
    },
  },
  {
    id: 'default-odense',
    predictionPlace: {
      address: 'Odense, Danmark',
      bounds: new LatLngBounds(new LatLng(55.51730605, 10.58031336), new LatLng(55.27339592, 10.22281997)),
    },
  },
  {
    id: 'default-aalborg',
    predictionPlace: {
      address: 'Aalborg, Danmark',
      bounds: new LatLngBounds(new LatLng(57.11818151, 10.05726289), new LatLng(56.94775266, 9.7965655)),
    },
  },
  {
    id: 'default-århus',
    predictionPlace: {
      address: 'Århus, Danmark',
      bounds: new LatLngBounds(new LatLng(56.23634759, 10.30242021), new LatLng(56.06188569, 10.04172283)),
    },
  },
  {
    id: 'default-roskilde',
    predictionPlace: {
      address: 'Roskilde, Danmark',
      bounds: new LatLngBounds(new LatLng(55.68856905, 12.18691072), new LatLng(55.57628135, 12.02133942)),
    },
  },
];
