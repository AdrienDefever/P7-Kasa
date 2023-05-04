import "./Main.css"

import React from 'react'

function Main(props) {
   
    const children = props.children;
    return <div className="main">{children}</div>
}

export default Main