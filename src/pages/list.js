/**
 * Created by Ljili on 2019/10/18.
 */
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
class Test extends React.Component{
  constructor(props) {
    super()
    this.state = {
      posts:[],
      comments:[]
    }
  }
  componentDidMount(){
    let arr=[1,2,3]
    let arr2=[4,5,6]
    this.setState({
      posts:arr
    })
    this.setState({
      comments:arr2
    })
  }
  render(){
    return <div>
      <ul>
        {this.state.posts.map(item=>{
          return <li key={item}>{item}</li>
        })}
      </ul>
      <ul>
        {this.state.comments.map(item=>{
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  }
}
class FormTest extends React.Component{
  constructor(props){
    super(props)
    this.input=React.createRef()
  }
  handleSubmit(e){
    console.log(this.input.current)
    console.log(this.input.current.value)
    e.preventDefault()
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input
            defaultValue="Bob"
            type="text"
            ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      )
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    // console.log(this.textInput.current);
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    // console.log(this.textInput.current);
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
function ListItemLink({to,...rest}) {
  return (
    <Route path={to} children={({match})=>(
      <li className={match?'active':''}>
        <Link to={to} {...rest}>{to}</Link>
      </li>
    )}>
    </Route>
  )
}
function ListItemTo() {
  return (
    <Router>
      <ul>
        <ListItemLink to="/somewhere" />
        <ListItemLink to="/somewhere-else" />
      </ul>
    </Router>
  )
  
}
class List extends Component{
  render(){
    return <div className="about-con">
            <h1>list</h1>
            <Test></Test>
      <ListItemTo></ListItemTo>
            <FormTest></FormTest>
      <AutoFocusTextInput></AutoFocusTextInput>
           </div>
  }
}
export default List