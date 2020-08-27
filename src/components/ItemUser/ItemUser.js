import React from 'react';

export default function ItemUser(props) {
    const { user } = props
    return (
        <div className="item-user">
            <div className="img"></div>
            <span className="title">{user.name}</span>
        </div>
    )
}