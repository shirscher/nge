export interface IGetMenusResponse {
    menus: IMenu[];
}

export interface IMenu {
    key: string;
    name: string;
    menuItems: IMenuItem[];
}

export interface IMenuItem {
    key: string;
    name: string;
    menuItems: IMenuItem[];
}
