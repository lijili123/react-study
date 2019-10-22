/**
 * Created by Ljili on 2019/10/15.
 */
import React from 'react'
import { Card } from 'antd';
let aboutList=[
  {
    id:'1',
    content:'Card content1',
    name:'Card name1'
  },
  {
    id:'2',
    content:'Card content2',
    name:'Card name2'
  },
  {
    id:'3',
    content:'Card content3',
    name:'Card name3'
  },
  {
    id:'4',
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
    // this.handleClick=this.handleClick.bind(this)
  }
  handleClick=(row)=>{
    console.log(row);
    // this.setState(state=>({
    //   isShow:!state.isShow
    // }))
    let rowIndex
    aboutList.forEach((item,index)=>{
      if(item.id===row.id){
        rowIndex=index
      }
    })
    let arr=aboutList.splice(rowIndex,1)
    this.setState({
      aboutList:arr
    })
  }
  render(){
    return (
      <div className="about-con">
        <div className="about-list">
          {
            aboutList.map((item,index)=>{
              return (
                <div className="about-item" key={index} data-index={index} >
                  <Card size="small" title="Small size card" extra={<p style={{color:'red',cursor: 'pointer'}} onClick={this.handleClick.bind(this,(item))}>delete</p>} style={{ width: 260}}>
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