import SidebarContainer from './container';
import SidebarMain from './main';

const Sidebar = Object.assign(SidebarMain, {
  Container: SidebarContainer
});

export default Sidebar;
