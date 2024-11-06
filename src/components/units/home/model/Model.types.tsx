export interface IModelContainer {
    _pressedKey: string | null;
}

export interface IModelPresenter {
    _pressedKey: string | null;
    _group: any;
    nodes: any;
    materials: any;
    _keyboardKeys: Array<string>;
    _pressedColor: any;
    _isClickedLogin: Boolean;
    onChangeIsClickedLogin: () => void;
}
