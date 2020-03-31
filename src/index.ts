import axios from "axios";

/**
 * Gets latest amount of total confirmed cases, deaths, and recovered.
 * @returns latest values
 */
export const getLatest = () => {
  return axios
    .get("https://coronavirus-tracker-api.herokuapp.com/v2/latest")
    .then(res => {
      return res.data.latest;
    })
    .catch(err => {
      return err;
    });
};

/**
 * Gets the data-sources that are currently available to Coronavirus Tracker API to retrieve the data of the pandemic.
 * @returns data sources
 */
export const getSources = () => {
  return axios
    .get("https://coronavirus-tracker-api.herokuapp.com/v2/sources")
    .then(res => {
      return res.data.sources;
    })
    .catch(err => {
      return err;
    });
};

/**
 * Gets data about a location by its country id
 * @param id country id
 */
export const getLocationById = (id: string) => {
  return axios
    .get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/" + id)
    .then(res => {
      return res.data.location;
    })
    .catch(err => {
      return err;
    });
};

/**
 * Gets data about a location by its country code
 * @param countryCode country code
 */
export const getLocationByCountryCode = (countryCode: string) => {
  return axios
    .get(
      "https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=" +
        countryCode
    )
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};
