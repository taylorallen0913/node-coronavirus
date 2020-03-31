"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
/**
 * Gets latest amount of total confirmed cases, deaths, and recovered.
 * @returns latest values
 */
exports.getLatest = function () {
    return axios_1.default
        .get("https://coronavirus-tracker-api.herokuapp.com/v2/latest")
        .then(function (res) {
        return res.data.latest;
    })
        .catch(function (err) {
        return err;
    });
};
/**
 * Gets the data-sources that are currently available to Coronavirus Tracker API to retrieve the data of the pandemic.
 * @returns data sources
 */
exports.getSources = function () {
    return axios_1.default
        .get("https://coronavirus-tracker-api.herokuapp.com/v2/sources")
        .then(function (res) {
        return res.data.sources;
    })
        .catch(function (err) {
        return err;
    });
};
/**
 * Gets data about a location by its country id
 * @param id country id
 */
exports.getLocationById = function (id) {
    return axios_1.default
        .get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/" + id)
        .then(function (res) {
        return res.data.location;
    })
        .catch(function (err) {
        return err;
    });
};
/**
 * Gets data about a location by its country code
 * @param countryCode country code
 */
exports.getLocationByCountryCode = function (countryCode) {
    return axios_1.default
        .get("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=" +
        countryCode)
        .then(function (res) {
        return res.data;
    })
        .catch(function (err) {
        return err;
    });
};
