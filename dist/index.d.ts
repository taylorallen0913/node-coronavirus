/**
 * Gets latest amount of total confirmed cases, deaths, and recovered.
 * @returns latest values
 */
export declare const getLatest: () => Promise<any>;
/**
 * Gets the data-sources that are currently available to Coronavirus Tracker API to retrieve the data of the pandemic.
 * @returns data sources
 */
export declare const getSources: () => Promise<any>;
/**
 * Gets data about a location by its country id
 * @param id country id
 */
export declare const getLocationById: (id: string) => Promise<any>;
/**
 * Gets data about a location by its country code
 * @param countryCode country code
 */
export declare const getLocationByCountryCode: (countryCode: string) => Promise<any>;
