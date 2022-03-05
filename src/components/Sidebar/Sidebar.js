import React from 'react';
import { useGlobalContext } from '../../contexts/AppContext';
import './Sidebar.css';
import { FaTimes } from 'react-icons/fa';
import { links } from './data';
export default function Sidebar(id, authors, title, subtitle, img, publishedDate) {

    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <h2>Python</h2>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        
      </ul>
    </aside>
  )
}
