import React from 'react';
import ItemUser from './../ItemUser/ItemUser.js'

export default function HeaderSpecial() {
    return (
        <div className="header-special" >
            <div className="container">
                <div className="header-special__logo">
                    soy un logo
                </div>
                <ItemUser user={{ name: 'sebastian', img: '#333' }} />
            </div>
        </div>
    )
}