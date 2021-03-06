"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saferShellOpenExternal = saferShellOpenExternal;

var _electron = require("electron");

var _url = _interopRequireDefault(require("url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BLOCKED_URL_PROTOCOLS = ['file:', 'javascript:', 'vbscript:', 'data:', 'about:', 'chrome:', 'ms-cxh:', 'ms-cxh-full:', 'ms-word:'];

function saferShellOpenExternal(externalUrl) {
  let parsedUrl;

  try {
    parsedUrl = _url.default.parse(externalUrl);
  } catch (_) {
    return Promise.reject();
  }

  if (parsedUrl.protocol == null || BLOCKED_URL_PROTOCOLS.includes(parsedUrl.protocol.toLowerCase())) {
    return Promise.reject();
  }

  return _electron.shell.openExternal(externalUrl);
}