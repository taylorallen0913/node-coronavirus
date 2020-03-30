"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
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
