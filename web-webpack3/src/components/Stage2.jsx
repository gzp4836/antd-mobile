import React from 'react';
import {
  SearchBar, Tabs, Steps,
} from 'antd-mobile';
var liStyle = {padding:0,listStyle:'none',color:'#999',paddingBottom:'0.5em'}
var vnly = {width:'100%',height:200}


export default class Demo extends React.Component {
  componentDidMount() {
    // this.props.changeTitle('Stage 2');
  }
  render() {
    return (<div style={{ marginBottom: 30 }}>

      {/* <SearchBar placeholder="搜索" /> */}

      <Tabs tabs={[{ title: '选项卡一' }, { title: '选项卡二' },{ title: '选项卡三' }]} renderTab={tab => tab.title}>
        <ul style={{margin:0,paddingLeft:20,paddingRight:20}}>
          <li style={liStyle}>
            <p>狗熊在水里嘻嘻</p>
            <video style={vnly} src="https://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
          </li>
          <li style={liStyle}>
            <p>狗熊在水里嘻嘻</p>
            <video style={vnly} src="https://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
          </li>
          <li style={liStyle}>
            <p>狗熊在水里嘻嘻</p>
            <video style={vnly} src="https://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
          </li>
        </ul>
        <ul style={{margin:0,paddingLeft:20,paddingRight:20}}>
          <li style={liStyle}>
            <p>狗熊在水里嘻嘻</p>
            <video style={vnly} src="https://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
          </li>
          <li style={liStyle}>
            <p>狗熊在水里嘻嘻</p>
            <video style={vnly} src="https://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
          </li>
        </ul>
        <ul style={{margin:0,paddingLeft:20,paddingRight:20}}>
          <li style={liStyle}>
            <p>狗熊在水里嘻嘻</p>
            <video style={vnly} src="https://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
          </li>
        </ul>
      </Tabs>
    </div>);
  }
}
