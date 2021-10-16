import HelpersServiceResolver from "./types/HelpersServiceResolver";
import Response from "@formidablejs/framework/types/Http/Response/Response";
import ViewResponse from "@formidablejs/framework/types/Http/Response/ViewResponse";

declare global {
  /**
   * Convert custom object into a js object.
   */
  function asObject(object: any): Object;

  /**
   * Get a config value using dot notation.
   */
  function config(notation: String, default$?: any): any;

  /**
   * Decrypt an encrypted string.
   */
  function decrypt(hash: String, unserialize?: Boolean): any;

  /**
   * Use dot notation to get a value from an object.
   * @alias dot
   */
  function dotNotation(object: Object, key: String): any;

  /**
   * Use dot notation to get a value from an object.
   */
  function dot(object: Object, key: String): any;

  /**
   * Encrypt a value.
   */
  function encrypt(value: any, serialize?: Boolean): String;

  /**
   * Get a value from the environment variables.
   */
  function env(key: String, default$?: any): any;

  /**
   * Create expiration date for Redis.
   */
  function expiresIn(time: String): String;

  /**
   * Check if an object is an Array.
   */
  function isArray(object: any): Boolean;

  /**
   * Check if an object is a Boolean.
   */
  function isBoolean(object: any): Boolean;

  /**
   * Check if an object is a Class.
   */
  function isClass(object: any): Boolean;

  /**
   * Check if an object is empty.
   */
  function isEmpty(value: any): Boolean;

  /**
   * Check if an object is a Function.
   */
  function isFunction(object: any): Boolean;

  /**
   * Check if a value is an Integer.
   */
  function isNumber(object: any): Boolean;

  /**
   * Check if an object is an Object.
   */
  function isObject(object: any): Boolean;

  /**
   * Check if an object is a String.
   */
  function isString(object: any): Boolean;

  /**
   * Get current timestamp.
   */
  function now(): String;

  /**
   * Return a response object.
   */
  function response(data?: Object, statusCode?: number): Response;

  /**
   * Convert string into a slug.
   */
  function slug(value: String, separator?: String): String;

  /**
   * Generate a random string.
   */
  function strRandom(length?: number): String;

  /**
   * Convert value into a Boolean.
   */
  function toBoolean(value: any): Boolean;

  /**
   * Application version.
   */
  function version(): String;

  /**
   * Return view response.
   */
  function view(view: Function, data?: Object | null): ViewResponse;

  /**
   * Check if a string matches the supplied pattern.
   */
  function wildcard(value: String, match: String): Boolean;

  /**
   * Return an object without specific keys.
   */
  function without(object: Object, exclude: String[]): Object;
}

export {
  HelpersServiceResolver
}