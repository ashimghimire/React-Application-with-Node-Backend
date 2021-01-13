import React from 'react';
import {Link} from 'react-router-dom';

const Sidenav = (props)=>{

  const calculatePath=(path)=>{
    if(props.history.location.pathname === path){
      return ' active'
    }
  }
  return (
    <div className="col-sm-0 col-md-3 col-xl-2 col-xs-0 sideNav">
      <ul className="list-group">
        <Link to="/dashboard/chinese">
          <li className={"list-group-item "+calculatePath("/dashboard/chinese")}>Chinese</li>
          </Link>
          <Link to="/dashboard/italian">
          <li className={"list-group-item "+calculatePath("/dashboard/italian")}>Italian</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "+calculatePath("/dashboard/baked")}>Baked Goods</li>
          </Link>
      </ul>
    </div>
  )
}

export default Sidenav;