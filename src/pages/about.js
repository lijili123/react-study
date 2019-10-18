/**
 * Created by Ljili on 2019/10/15.
 */
import React from 'react'
import { Card } from 'antd';
let aboutList=[
  {
    content:'Card content1',
    name:'Card name1'
  },
  {
    content:'Card content2',
    name:'Card name2'
  },
  {
    content:'Card content3',
    name:'Card name3'
  },
  {
    content:'Card content4',
    name:'Card name4'
  }
]
class About extends React.Component{
  constructor(props){
    super()
    this.state={
      isShow:false
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick=(e)=>{
    this.setState(state=>({
      isShow:!state.isShow
    }))
  }
  render(){
    return (
      <div className="about-con">
        <div className="about-list">
          {
            aboutList.map((item,index)=>{
              return (
                <div className="about-item" key={index} data-index={index} onClick={this.handleClick}>
                  <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 260 }}>
                    <p>{item.content}</p>
                    <p>{item.name}</p>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default About