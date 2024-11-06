import { ReactNode } from "react";

export interface IHeroContainer {
    _isClickedLogin: Boolean;
    onChangeIsClickedLogin: () => void;
}

export interface IHeroPresenter {
    _isClickedLogin: Boolean;
    onChangeIsClickedLogin: () => void;
    IconBox: ReactNode;
    containerRef: any;
}
