"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// First, import the necessary types from the WebExtensions API
const webextension_polyfill_ts_1 = require("webextension-polyfill-ts"); // Importing from webextension-polyfill-ts for TypeScript support
// Then, define an async function to fetch all open tabs
function getAllOpenTabs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use browser.tabs.query to get all tabs
            const tabs = yield webextension_polyfill_ts_1.browser.tabs.query({});
            return tabs;
        }
        catch (error) {
            console.error("Error retrieving tabs:", error);
            return [];
        }
    });
}
// Example usage:
(() => __awaiter(void 0, void 0, void 0, function* () {
    const openTabs = yield getAllOpenTabs();
    console.log(openTabs);
}))();
