import { atom } from "recoil";

export const configStored = atom({
    key: "configStored",
    default: "Default",
});

export const userTokenStored = atom({
    key: "userTokenStored",
    default: "",
});

export const projectNameStored = atom({
    key: "projectNameStored",
    default: "",
});

export const requirementStored = atom({
    key: "requirementStored",
    default: "",
});

export const isClickSubmitStored = atom({
    key: "isClickSubmitStored",
    default: false,
});

export const phaseStored = atom({
    key: "phaseStored",
    default: "",
});
