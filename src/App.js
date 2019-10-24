import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/home'
import About from './pages/about'
import Users from './pages/user'
// import Empty from './pages/empty'
import Test from './pages/test'
// import Login from './pages/login'
import List from './pages/list'
import {Button} from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <AuthButton></AuthButton>
            <div className="navList">
              <div>
                <NavLink  to="/" activeClassName='active' exact>Home</NavLink >
              </div>
              <div>
                <NavLink  to="/about" activeClassName='active' exact>About</NavLink >
              </div>
              <div>
                <NavLink  to="/list" activeClassName='active' exact>List</NavLink >
              </div>
              <div>
                <NavLink  to="/test" activeClassName='active' >Test</NavLink >
              </div>
              <div>
                <NavLink  to="/users" activeClassName='active' >Users</NavLink >
              </div>
              <div>
                <NavLink  to="/blog/:slug" activeClassName='active' >BlogPost</NavLink >
              </div>
            </div>
        </div>
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home}>{/*<Home />*/}</Route>
            <Route path="/about" component={About}>{/*<About />*/}</Route>
            {/*<Route path="/test" render={()=><div  className="about-con">Test</div>}>*/}

            {/*</Route>*/}
            <Route path="/list" component={List}></Route>
            <Route path="/test" component={Test}></Route>
            {/*<Route path="/users"><Users />*/}
            {/*</Route>*/}
            <PrivateRoute path="/users"><Users /></PrivateRoute>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            {/*<Redirect to="/">*/}
            {/*</Redirect>*/}
            <BlogPost></BlogPost>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function BlogPost() {
  //render prop 参数match的使用
  return (
    <Route path="/blog/:slug" render={({match})=>{
      console.log(match)
      //Do whatever you want with the match.
      return <div>blog</div>
    }}></Route>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div className="topbar">
      <p >
        Welcome!{" "}
        <Button type="danger" size="small"
                onClick={() => {
                  fakeAuth.signout(() => history.push("/"));
                }}
        >
          Sign out
        </Button>
      </p>
    </div>
  ) : (
    <div className="topbar">
      <p >You are not logged in.</p>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();//push(),go(),goBack(),goForward(),replace()
  let location = useLocation();//{hash:'',key:'',pathname:'',search:'',state:{from:{hash:'',key:'',pathname:'',search:''}}}// from 从哪个路由跳转的（上一个路由）
  console.log(location);
  // console.log(location);

  let { from } = location.state || { from: { pathname: "/" } };//es6对象解构
  // console.log(from);
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className="about-con">
      <h1>You must log in to view the page at {from.pathname}</h1>
      <Button type="primary" onClick={login}>Log in</Button>
    </div>
  );
}

function PrivateRoute(props) {
  let { children, ...rest }=props//解构赋值
  return (
    //Route (render func ) render 方法 有三个参数可以作为 render prop 参数分别是 match，history，location
    //render props 模式   任何被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”.
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />// 这里就是告诉你不同状态渲染不同页面
  );
}
export default App;
