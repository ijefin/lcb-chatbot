"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmptyDescription = exports.verifyEmptyName = void 0;
const verifyEmptyName = async (name) => {
    const nameIsValid = name.length < 1;
    return nameIsValid;
};
exports.verifyEmptyName = verifyEmptyName;
const verifyEmptyDescription = async (description) => {
    const descriptionIsvalid = description.length < 1;
    return descriptionIsvalid;
};
exports.verifyEmptyDescription = verifyEmptyDescription;
