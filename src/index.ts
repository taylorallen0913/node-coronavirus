import axios from "axios";

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
