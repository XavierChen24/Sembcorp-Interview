// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mapDefaultZoom: 4.5,
  mapCenter: {
    lat: 0.499872,
    long:114.508358
  },
  countriesLatLong: [
    {
      name: "Burma",
      lat: 21.9162,
      long: 95.9560,
      assets: 100,
      days_online: 1000,
      capacity_kw:2100
    },
    {
      name: "Malaysia",
      lat: 4.2105,
      long: 101.9758,
      assets: 20,
      days_online: 500,
      capacity_kw:800
    },
    {
      name: "China",
      lat: 22.8167,
      long:108.3669,
      assets: 30,
      days_online: 11,
      capacity_kw:1500
    }
  ],
  weatherStationLatLong: [
    {
      name: "China",
      lat: 22.8167,
      long:108.3669
    },
    {
      name: "Vietnam",
      lat: 14.0583,
      long: 108.2772
    },
  ],

};
