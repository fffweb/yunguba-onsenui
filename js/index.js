import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
//import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import ons from 'onsenui';
import App from './components/App';
import {loadStorage} from './actions/storage';

let store=configureStore();
store.dispatch(loadStorage());


ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('wrapper')
);

// ReactDOM.render(
// 	<Router history={hashHistory}>
//     <Route path="/" component={App}>
// 			<IndexRoute component={Home}/>
//       <Route path="page1" component={Home} />
//     </Route>
//   </Router>,
//   document.getElementById('wrapper')
// );

// class TabItem extends React.Component{
// 	render(){
// 		return (
// 			<label className="tab-bar__item">
//     		<input type="radio" name="tab-bar-a" />
//     		<button className="tab-bar__button">
//       		<i className="tab-bar__icon ion-stop"></i>
//       		<div className="tab-bar__label">New</div>
//     		</button>
//   		</label>
// 		)
// 	}
// }
// class TabBar extends React.Component{
// 	render(){
// 		return (
// 			<div className="tab-bar">
//   			<label className="tab-bar__item">
//     			<input type="radio" name="tab-bar-a" />
//     			<button className="tab-bar__button">
//       			<i className="tab-bar__icon ion-stop"></i>
//       			<div className="tab-bar__label">New</div>
//     			</button>
//   			</label>
// 				<label className="tab-bar__item">
//     			<input type="radio" name="tab-bar-a" />
//     			<button className="tab-bar__button">
//       			<i className="tab-bar__icon ion-stop"></i>
//       			<div className="tab-bar__label">Star</div>
//     			</button>
//   			</label>
// 			</div>
// 		)
// 	}
// }
// class ListItem extends React.Component{
// 	render(){
// 		return (
// 			<li className="list__item">
// 			{
// 				React.Children.map(this.props.children,(child)=>child)	
// 			}
// 			</li>
// 		)
// 	}
// }
// class List extends React.Component{
// 	render(){
// 		return (
// 			<ul className="list">
// 			{
// 				React.Children.map(this.props.children,(child)=>child)
// 			}
// 			</ul>
// 		)
// 	}
// }
// class Page extends React.Component{
// 	render(){
// 		return (
// 			<div className="page">
// 			{
// 				React.Children.map(this.props.children,(child)=>child)
// 			}
// 			</div>)
// 	}
// }
// class Toolbar extends React.Component{
// 	render(){
// 		return (
// 			<div className="navigation-bar navigation-bar--android">
//   		{
// 				React.Children.map(this.props.children,(child)=>{
// 					let className=child.props.className||'';
// 					if(child.props.left){
// 						className+='navigation-bar__left';
// 					}
// 					if(child.props.center){
// 						className+='navigation-bar__center';
// 					}
// 					if(child.props.right){
// 						className+='navigation-bar__right';
// 					}
// 					return React.cloneElement(child,{className});
// 				})
// 			}
// 			</div>
// 		)
// 	}
// }