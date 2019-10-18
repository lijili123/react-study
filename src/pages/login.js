/**
 * Created by Ljili on 2019/10/16.
 */
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'


const FormItem =  Form.Item;
class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="content">
        <Form className="login-form">
          <FormItem>
            {
              getFieldDecorator('userName',{
                rules: [
                  {
                    required: true,
                    message: '请填写用户名！'
                  }
                ]
              })(
                <Input prefix={
                  <Icon type='user' style={{color:'rgba(0,0,0,.25)'}}/>
                } placeholder='userName'></Input>
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password',{
                rules: [{required: true, message: "请填写密码！"}]
              })(
                <Input prefix={
                  <Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/> } placeholder="password"></Input>
              )
            }
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={"btn"} onClick={this.login}>登录</Button>
          </FormItem>
        </Form>
      </div>

    )
  }

  login = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((err,values) => {
      if(!err){
        sessionStorage.setItem("isLogin","1");
      }else {
        console.log(err);
      }
    })

  }
}

export default Form.create()(Login);
