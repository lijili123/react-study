/**
 * Created by Ljili on 2019/10/15.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";
function Users() {
  let {path,url}=useRouteMatch()
  // console.log(useRouteMatch())
    return <div className="user-content">
      <div className="user-left">
        <div>
          <NavLink  to={`${url}`} activeClassName='active' exact>User1</NavLink >
          {/*<NavLink  to={`${url}/user1`} activeClassName='active' exact>User1</NavLink >*/}
        </div>
        <div>
          <NavLink  to={`${url}/user2`} activeClassName='active' exact>User2</NavLink >
        </div>
        <div>
          <NavLink  to={`${url}/user3`} activeClassName='active' exact>User3</NavLink >
        </div>
      </div>
      <div className="user-right">
        <Switch>
          <Route path="/users" exact component={User1}>
          </Route>
          <Route path="/users/user2" exact component={User2}>
          </Route>
          <Route path="/users/user3" exact component={User3}>
          </Route>
        </Switch>
        {/*<Switch>*/}
          {/*<Route path={`${path}/:id`} >*/}
            {/*<UserAll/>*/}
          {/*</Route>*/}
        {/*</Switch>*/}
      </div>
    </div>
}
function UserAll() {
  let {id}=useParams()
  console.log(useParams())
  return (
    <div className="user-item">{id}</div>
  )
}
function User1() {
  return (
    <div className="user-item">user1</div>
  )
}
function User2() {
  return (
    <div className="user-item">user2</div>
  )
}
function User3() {
  return (
    <div className="user-item">user3</div>
  )
}
export default Users