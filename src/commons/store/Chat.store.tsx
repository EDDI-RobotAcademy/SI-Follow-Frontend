import { atom } from "recoil";

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

export const phaseStored = atom({
    key: "phaseStored",
    default: "",
});
