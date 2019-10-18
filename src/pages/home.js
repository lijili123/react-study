/**
 * Created by Ljili on 2019/10/15.
 */
import React from 'react'
import slide1 from './../images/slide1.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";

class Home extends React.Component{
  render(){
    return <div className="about-con">
      {/*<img src={slide1} alt=""/>*/}
      <Router>
        {/*<ul>*/}
          {/*<li><Link to="/netflix">Netflix</Link></li>*/}
          {/*<li><Link to="/zillow-group">Zillow Group</Link></li>*/}
          {/*<li><Link to="/yahoo">Yahoo</Link></li>*/}
          {/*<li><Link to="/modus-create">Modus Create</Link></li>*/}
        {/*</ul>*/}
        <Switch>
          {/*<Route path="/:id" children={<Child/>}></Route>*/}

          <Animate></Animate>
        </Switch>
      </Router>
    </div>
  }
}
function Child() {
  console.log(useHistory())
  console.log(useLocation())
  console.log(useParams())
  console.log(useRouteMatch())
  let {id}=useParams();
  return <div>
    <h3>ID: {id}</h3>
  </div>
}
function Animate() {
  return (
    <div className="ani-contain">

      <div className='ani-con'>
        <div className="box">
          <div className="box-content">
            box1
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            box2
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            box3
          </div>
        </div>
      </div>
      <div className="ani-con">
        <div className="box2">
          <img src={slide1} alt=""/>
        </div>
        <div className="box2">
          <img src={slide1} alt=""/>
        </div>
        <div className="box2">
          <img src={slide1} alt=""/>
        </div>
      </div>
      <div className="ani-con">
        <div className="box3">
          <div className="box-content1">
            <img src={slide1} alt=""/>
          </div>
        </div>
        <div className="box3">
          <div className="box-content1">
            <img src={slide1} alt=""/>
          </div>
        </div>
        <div className="box3">
          <div className="box-content1">
            <img src={slide1} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home