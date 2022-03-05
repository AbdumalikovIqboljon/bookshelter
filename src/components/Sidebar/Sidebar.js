import React from 'react';
import { useGlobalContext } from '../../contexts/AppContext';
import './Sidebar.css';
export default function Sidebar() {

    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'} `}>
        <div className="sidebar-header">
            <h2>Python</h2>
            <button className="close-btn" onClick={closeSidebar}>
                toggle
            </button>
        </div>
        <ul className="info">
            hello
        </ul>
    </aside>
  )
}
