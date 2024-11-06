export interface IChatPresenter {
    theme: any;
    _phaseStored: string;
    _open: Boolean;
    _status: string;
    setStatus: any;
    _menuItem: Array<string>;
    AppBar: any;
    Drawer: any;
    DrawerHeader: any;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
    handleClickMenuItem: (item: string) => void;
}
