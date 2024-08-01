import React from "react";

const MenuItem = ({ id, icon, label, isActive, onClick }) => {
    return (
        <div className={`menu-item ${isActive ? 'active' : ''}`}  
            onClick={onClick}>
            <img className={`icon ${isActive ? 'active' : ''}`}
                src={icon} 
                alt={label}/>
            <span className="label">{label}</span>
        </div>
    )
};

export default MenuItem;