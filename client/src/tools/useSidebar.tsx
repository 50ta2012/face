import { useProSidebar } from "react-pro-sidebar";
import { SideBarMenuStyles } from "../assets/SidebarTypes";
import { themes } from "../assets/ThemeStyle";

// 自定義 hook, 方便管理sidebar 狀態和樣式
export const useSidebar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      if (!(broken && !collapsed)) {
        collapseSidebar();
      }
    }
  };


  // https://github.com/azouaoui-med/react-pro-sidebar
  // https://github.com/azouaoui-med/react-pro-sidebar/commit/9eca522ba41dff3e1d69b27becac4e6af3fead9d

  // For Menu component, in addition to rootStyles you can also use menuItemStyles prop 
  // for customizing all MenuItem & SubMenu components and their children

  const menuItemStyles: SideBarMenuStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes.dark.menu.icon,
      [`&.${'ps-disabled'}`]: {
        color: themes.dark.menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      // submenu 背景顏色
      backgroundColor:
        level === 0
          ? HexstrToRGBA(themes.dark.menu.menuContent, !collapsed ? 0.6 : 0.95)
          : 'transparent',
    }),
    button: {
      [`&.${'ps-disabled'}`]: {
        color: themes.dark.menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: HexstrToRGBA(themes.dark.menu.hover.backgroundColor, 0.5),
        color: themes.dark.menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return {
    toggle,
    menuItemStyles,
  }
}

// 考慮透明度需求, for 背景, 測試添加 hex 轉 rgba
export const HexstrToRGBA = (hex: string, alpha: number) => {
  const [r, g, b] = [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

