import React from 'react'
import { SearchBar, Tabs, Steps } from 'antd-mobile'
var liStyle = { padding: 0, listStyle: 'none', color: '#999', paddingBottom: '0.5em' }
var vnly = { width: '100%', height: 200 }

export default class Demo extends React.Component {
	componentDidMount() {
		// this.props.changeTitle('Stage 2');
	}
	render() {
		return (
			<div style={{ marginBottom: 30 }}>
				{/* <SearchBar placeholder="搜索" /> */}

				<Tabs tabs={[{ title: '企业' }, { title: '哆啦宝' }, { title: '收单业务' }]} renderTab={tab => tab.title}>
					<ul style={{ margin: 0, paddingLeft: 20, paddingRight: 20 }}>
						<li style={liStyle}>
							<p>企业商户PC端进件流程</p>
							<video
								style={vnly}
								src="//storage.jd.com/common.org/video/%E4%BC%81%E4%B8%9A%E5%95%86%E6%88%B7PC%E7%AB%AF%E8%BF%9B%E4%BB%B6%E6%B5%81%E7%A8%8B.mp4"
								controls="controls"
							></video>
						</li>
						<li style={liStyle}>
							<p>双屏机培训0218</p>
							<video style={vnly} src="//storage.jd.com/common.org/video/%E5%8F%8C%E5%B1%8F%E6%9C%BA%E5%9F%B9%E8%AE%AD0218.mp4" controls="controls"></video>
						</li>
						<li style={liStyle}>
							<p>围餐商户进件流程.mp4</p>
							<video style={vnly} src="//storage.jd.com/common.org/video/%E5%9B%B4%E9%A4%90%E5%95%86%E6%88%B7%E8%BF%9B%E4%BB%B6%E6%B5%81%E7%A8%8B.mp4" controls="controls"></video>
						</li>
					</ul>
					<ul style={{ margin: 0, paddingLeft: 20, paddingRight: 20 }}>
						<li style={liStyle}>
							<p>哆啦宝小二APP商户进件流程</p>
							<video
								style={vnly}
								src="//storage.jd.com/common.org/video/%E5%93%86%E5%95%A6%E5%AE%9D%E5%B0%8F%E4%BA%8CAPP%E5%95%86%E6%88%B7%E8%BF%9B%E4%BB%B6%E6%B5%81%E7%A8%8B.mp4"
								controls="controls"
							></video>
						</li>
						<li style={liStyle}>
							<p>蓝海商户进件流程</p>
							<video style={vnly} src="//storage.jd.com/common.org/video/%E8%93%9D%E6%B5%B7%E5%95%86%E6%88%B7%E8%BF%9B%E4%BB%B6%E6%B5%81%E7%A8%8B.mp4" controls="controls"></video>
						</li>
					</ul>
					<ul style={{ margin: 0, paddingLeft: 20, paddingRight: 20 }}>
						<li style={liStyle}>
							<p>收单业务电销系统培训0221</p>
							<video
								style={vnly}
								src="//storage.jd.com/common.org/video/%E6%94%B6%E5%8D%95%E4%B8%9A%E5%8A%A1%E7%94%B5%E9%94%80%E7%B3%BB%E7%BB%9F%E5%9F%B9%E8%AE%AD0221.mp4"
								controls="controls"
							></video>
						</li>
					</ul>
				</Tabs>
			</div>
		)
	}
}
