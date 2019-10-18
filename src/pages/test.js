/**
 * Created by Ljili on 2019/10/17.
 */
import React from 'react'
import {Button} from 'antd'
import { Menu, Icon } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

const { SubMenu } = Menu;
class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
    <Router>

      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['ug']}
        defaultOpenKeys={['ug']}
        mode="inline"
      >

        <Menu.Item key="ug">UserGreeting</Menu.Item>
        <Menu.Item key="gg">GuestGreeting</Menu.Item>
      </Menu>
      <Switch>
        <Route path="/ug" component={UserGreeting}></Route>
        <Route path="/gg" component={GuestGreeting}></Route>
      </Switch>
    </Router>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <Button type="primary" onClick={props.customClick}>登录</Button>
  )
}
function LogoutButton(props) {
  return (
    <Button type="danger" onClick={props.customClick}>退出</Button>
  )
}

class Test extends React.Component{
  constructor(props){
    super()
    this.state={
      isLoggedIn:false
    }
    this.handleLoginClick=this.handleLoginClick.bind(this)
    this.handleLogoutClick=this.handleLogoutClick.bind(this)
  }
  handleLoginClick(){
    this.setState({
      isLoggedIn:true
    })
  }
  handleLogoutClick(){
    this.setState({
      isLoggedIn:false
    })
  }
  render(){
    let isLoggedIn=this.state.isLoggedIn;
    let button;
    // if(isLoggedIn){
    //   button=<LogoutButton customClick={this.handleLogoutClick}></LogoutButton>
    // }else{
    //   button=<LoginButton customClick={this.handleLoginClick}></LoginButton>
    // }
    return (
      <div className="about-con">
        <h1>有状态组件</h1>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {
          isLoggedIn?(<LogoutButton customClick={this.handleLogoutClick}></LogoutButton>):(<LoginButton customClick={this.handleLoginClick}></LoginButton>)//三目运算
        }
        {/*{button}*/}
        <Sider></Sider>
      </div>
      )
  }
}
export default Test