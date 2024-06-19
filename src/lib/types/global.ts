import type { RightProps } from '@Components/layout/right-column';
import Search from '@Components/search';
import { ReactNode, SyntheticEvent } from 'react';

export type LogosType = {
    expanded: {
        light: string | ReactNode,
        dark: string | ReactNode
    },
    collapsed: {
        light: string | ReactNode,
        dark: string | ReactNode
    }
};

export type ApplicationType = {
    key: string,
    onChange: ()=> void,
    component: ReactNode
};

export type MenuType = {
    items: Array<MenuItem>,
    onSelect: (item: MenuItem) => void,
    selectedItem?: number | string,
    openMenuItem?: number,
    search?: typeof Search
};

export type MenuItem = {
    isLimitedToPremium?: boolean,
    icon?: string,
    title: string,
    position: number,
    key: string,
    className?: string,
    disabled?: boolean,
    iconRotate?: number,
    link?: string | ReactNode,
    children?: Array<MenuItem>
};

export type LayoutProps = {
    bottomDrawerContent?: ReactNode | null,
    bottomDrawerTitle?: string | null,
    hasHeaderContentDark?: boolean | null,
    hasHeaderLeftContentDark?: boolean | null,
    hasHeaderRightContentDark?: boolean | null,
    hasHeaderSecondaryContentDark?: boolean | null,
    hasLeftColumn?: boolean | null,
    hasLeftColumnCollapsed: boolean | null,
    hasLeftContentDark?: boolean | null,
    hasMainColumn?: boolean | null,
    hasMainContentDark?: boolean | null,
    hasRightColumn?: boolean | null,
    hasRightColumnCollapsed: boolean | null,
    hasRightContentDark?: boolean | null,
    hasSecondaryColumn?: boolean | null,
    hasSecondaryColumnCollapsed: boolean | null,
    hasSecondaryContentDark?: boolean | null,
    headerContent: ReactNode | null,
    headerLeftContent?: ReactNode | null,
    leftColumnHeaderAltContent: ReactNode,
    leftContent: ReactNode | null,
    logoutButton: string,
    logoutCallback: (event: SyntheticEvent<HTMLButtonElement>) => void,
    mainContent: ReactNode | null,
    mainMenu: MenuType,
    onLeftColumnCollapse?: (collapsed: boolean) => void,
    onRightColumnCollapse?: (collapsed: boolean) => void,
    onSecondaryColumnCollapse?: (collapsed: boolean) => void,
    profileButton: string,
    profileCallback: (event: SyntheticEvent<HTMLButtonElement>) => void,
    rightColumnHeaderAltContent: ReactNode,
    rightColumnListBox: RightProps,
    rightContent: ReactNode | null,
    secondaryColumnBreadcrumbs: Array<string | ReactNode>,
    secondaryColumnTitle: string,
    secondaryLogoCallback?: () => void,
    secondaryLogos: LogosType,
    secondaryMenu?: MenuType,
    showBottomDrawerOnHover?: boolean | null,
    sidebarCounterActiveIndex: number,
    title: string,
    userAbbreviation: string,
    userAvatarPath: string,
    userClassification: string,
    userName: string
};
