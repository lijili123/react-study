/**
 * Created by Ljili on 2019/10/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'antd'
import { Menu } from 'antd';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  // useHistory
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
LoginButton.propTypes={
  customClick:PropTypes.func
}
LogoutButton.propTypes={
  name:PropTypes.string,
  customClick:PropTypes.func
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
    // let button;
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
        <UlItem></UlItem>
      </div>
      )
  }
}


class LiItem extends React.Component{
  handleDel=()=>{
    this.props.deleteItem(this.props.index)
  //子组件向父组件传值 （自定义事件作为一个props）
  }
  render(){
    //子组件向父组件传值
    return  <li style={{padding:'10px 0px',fontSize:'16px',fontWeight:'700'}} index={this.props.index} onClick={this.handleDel}>{this.props.name}</li>
  }
}
let ulData=[
  {id:'1',name:'11111'},
  {id:'2',name:'22222'},
  {id:'3',name:'33333'},
  {id:'4',name:'44444'},
  {id:'5',name:'55555'},
]
class UlItem extends React.Component {
  constructor(props) {
    super(props)
  }
  handleDel=(index)=>{
    console.log(index);
  }
  handleDelLi=(index)=>{
    console.log(index);
  }
  render() {
    return (
      <div>
        <h1>子组件向父组件传值</h1>
        <ul>
          {ulData.map((item,index)=>{
            {/*deleteItem 自定义事件*/}
            return <LiItem name={item.name} index={index} key={item.id} deleteItem={this.handleDel}></LiItem>
            {/*return <li name={item.name} key={item.id} onClick={this.handleDelLi.bind(this,index)}>{item.name}</li>*/}
          })}
        </ul>
      </div>
    )

  }
}
export default Test