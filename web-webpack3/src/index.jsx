import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

// import App from './components/App'
import Stage2 from './components/Stage2'
import Stage1 from './components/Stage1'
import Stage3 from './components/Stage3'

// import './index.less';

// class Index extends React.Component {
//   render() {
//     return (
//       <div className="body">
//         <h1>Stages list</h1>
//         <ul role="nav">
//           <li><Link to="/s1">ListView + Carousel</Link></li>
//           <li><Link to="/s2">Tabs + ...</Link></li>
//           <li><Link to="/s3">Form + ...</Link></li>
//         </ul>
//       </div>
//     );
//   }
// }

ReactDOM.render(<Stage2 />, document.getElementById('example'))

// ReactDOM.render(
//   <div className="body">
//     <h1>Stages list</h1>
//     <ul role="nav">
//       <li><h3>ListView + Carousel</h3></li>
//       <li><h3>Tabs + ...</h3></li>
//       <li><h3>Form + ...</h3></li>
//     </ul>
//     <App><Stage3 /></App>
//   </div>
// , document.getElementById('example'));
