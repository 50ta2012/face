import { FC, ReactElement } from "react";
// import { useNavigate } from "react-router-dom";// Route hook 先停用

//MUI Components
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { MenuOutlined, SearchOutlined, Settings } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";

// MUI Icon
import MonitorIcon from '@mui/icons-material/Monitor';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VideocamIcon from '@mui/icons-material/Videocam';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PolicyIcon from '@mui/icons-material/Policy';

//custom hooks by Wilson
import { useSidebar } from "../tools/useSidebar";
// Badge, 顯示通知數的function
import { Badge } from "./Badge";

const SideBarPage: FC = (): ReactElement => {
  const theme = useTheme();
  const { collapsed } = useProSidebar();
  const { toggle, menuItemStyles } = useSidebar(); //側邊欄折疊toogle function

  //此處設定hook(空白)

  return (
    <Sidebar
      rtl={false}
      breakPoint="sm"
      transitionDuration={200}
      style={{ height: "100vh" }}
      width="240px"
      collapsedWidth="75px"
      backgroundColor={theme.palette.primary.dark}
      rootStyles={{
        color: theme.palette.secondary.dark
      }}
    >
      <Menu>
<MenuItem
          id="side-bar-menu-item"
          style={{
            textAlign: "center",
            height: 68,
            marginTop: 0,
            backgroundColor: theme.palette.info.dark
          }}
          icon={<MenuOutlined sx={{ color: theme.palette.success.dark }} />}
          onClick={() => {
            toggle();
          }}
        >
          <Typography
            sx={{
              textAlign: "center", fontWeight: "bold", my: "1rem",
              color: theme.palette.success.dark
            }}
            variant="h6"
          >
            Twoway.com
          </Typography>
        </MenuItem>
      </Menu>
      <Box sx={{ p: '0 24px', mb: '8px', mt: '8px' }}>
      <Typography
          variant="body2"
          fontWeight={600}
          style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
        >
          General
        </Typography>
      </Box>
      <Menu menuItemStyles={menuItemStyles}>
      <MenuItem icon={<MonitorIcon sx={{ color: theme.palette.success.dark }} />}>Show Data</MenuItem>
      <SubMenu
          icon={<ManageAccountsIcon sx={{ color: theme.palette.success.dark }} />}
          label="Manage Person"
        >
          <MenuItem>Person List</MenuItem>
          <MenuItem>Group List</MenuItem>
          <MenuItem >Stranger List</MenuItem>
          <MenuItem >Batch Import</MenuItem>
      </SubMenu>
      <SubMenu
          icon={<VideocamIcon sx={{ color: theme.palette.success.dark }} />}
          label="Manage Device" suffix={<Badge variant="warning">2</Badge>}
        >
          <MenuItem>Device List</MenuItem>
          <MenuItem>Device Batch Import</MenuItem>
          <MenuItem>Device Group</MenuItem>
        </SubMenu>
      <SubMenu
          icon={<ErrorOutlineIcon sx={{ color: theme.palette.success.dark }} />}
          label="Manage Events"
        >
          <MenuItem>Live Camera Monitor</MenuItem>
          <MenuItem>Event Records</MenuItem>
        </SubMenu>
        <Box sx={{ py: '0', px: '24px', mb: '8px', mt: '32px' }}>
          <Typography
            variant="body2"
            fontWeight={600}
            style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
          >
            System
          </Typography>
        </Box>
         {/* 以下側邊攔尚未設定路由 */}
         <SubMenu
          icon={<Settings sx={{ color: theme.palette.success.dark }} />}
          label="Manage System"
          suffix={<Badge variant="warning">10+</Badge>}
        >
          <MenuItem>Account</MenuItem>
          <MenuItem>Role</MenuItem>
          <MenuItem>Department</MenuItem>
          <MenuItem>Resource Tenancy</MenuItem>
          <MenuItem>Menu</MenuItem>
          <MenuItem>Login Log</MenuItem>
          <MenuItem>Operation Log</MenuItem>
          <MenuItem>API called log</MenuItem>
          <MenuItem>Model Definition List</MenuItem>
          <MenuItem>Batch Job List</MenuItem>
          <MenuItem>Common Config</MenuItem>
          <MenuItem>Algorithm Examples</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<SettingsSuggestIcon sx={{ color: theme.palette.success.dark }} />}
          label="External System"
        >
          <MenuItem>External Account</MenuItem>
          <MenuItem>API Group</MenuItem>
          <MenuItem>Device Account</MenuItem>
        </SubMenu>
        <MenuItem disabled icon={<SearchOutlined sx={{ color: theme.palette.success.dark }} />}>
          Search Record
        </MenuItem>
        <MenuItem
          icon={<PolicyIcon sx={{ color: theme.palette.success.dark }} />}>
            Manage Policy
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SideBarPage

