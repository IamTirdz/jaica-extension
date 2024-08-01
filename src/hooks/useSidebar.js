import { SidebarContext } from 'contexts/SidebarContext'
import { useContext } from 'react'

const useSidebar = () => {
    return useContext(SidebarContext);
}

export default useSidebar;
