import React from 'react';
import ReactDOM from 'react-dom';
import Details from './details';
// import ons from '../node_modules/onsenui/js/onsenui.js';
// window.ons=ons;

class Test extends React.Component{
	alert(){
		alert('ik');
	}
	render(){
		return <Page>
			<Toolbar title="自选股">
				<div left>
    			<span className="toolbar-button--quiet navigation-bar__line-height">
      			<i className="ion-navicon"></i>
    			</span>
  			</div>
				<div center>
					<div className="button-bar" style={{width:'280px'}}>
  <div className="button-bar__item">
    <input type="radio" name="segment-a" />
    <button className="button-bar__button">One</button>
  </div>

  <div className="button-bar__item">
    <input type="radio" name="segment-a" />
    <button className="button-bar__button">Two</button>
  </div>

</div>
				</div> 
  			<div right></div> 
			</Toolbar>
			<div className="tab-bar tab-bar--top tab-bar--top-border">
  			<label className="tab-bar__item tab-bar--top-border__item">
    			<input type="radio" name="top-tab-bar-b" />
    				<button className="tab-bar__button tab-bar--top-border__button">
      Home
    </button>
  </label>
			<label className="tab-bar__item tab-bar--top-border__item">
    			<input type="radio" name="top-tab-bar-b" />
    				<button className="tab-bar__button tab-bar--top-border__button">
      Home2
    </button>
  </label>
</div>
			<List>
				<ListItem><div onClick={this.alert.bind(this)} className="list__item__center">Item1</div></ListItem>
				<ListItem><div className="list__item__center">Item2</div></ListItem>
			</List>
		</Page>
	}
}
class ListItem extends React.Component{
	render(){
		return (
			<li className="list__item">
			{
				React.Children.map(this.props.children,(child)=>child)	
			}
			</li>
		)
	}
}
class List extends React.Component{
	render(){
		return (
			<ul className="list">
			{
				React.Children.map(this.props.children,(child)=>child)
			}
			</ul>
		)
	}
}

class Page extends React.Component{
	render(){
		return (
			<div className="page">
			{
				React.Children.map(this.props.children,(child)=>child)
			}
			</div>)
	}
}
class Toolbar extends React.Component{
	render(){
		return (
			<div className="navigation-bar navigation-bar--android">
  		{
				React.Children.map(this.props.children,(child)=>{
					let className=child.props.className||'';
					if(child.props.left){
						className+='navigation-bar__left';
					}
					if(child.props.center){
						className+='navigation-bar__center';
					}
					if(child.props.right){
						className+='navigation-bar__right';
					}
					return React.cloneElement(child,{className});
				})
			}
			</div>
		)
	}
}

class StockList extends React.Component {
  gotoDetails() {
		document.getElementById('navigator').pushPage('details');
  }

  render() {
    return (
	    <ons-page>
        <ons-toolbar>
					<div className="left">
        		<ons-toolbar-button ons-if-orientation="portrait">
          		<ons-icon icon="ion-navicon"></ons-icon>
        		</ons-toolbar-button>
      		</div>
      		<div className="center">自选股</div>
      		<div className="right">
						<ons-toolbar-button>
          		<ons-icon icon="ion-settings" />
        		</ons-toolbar-button>
        		<ons-toolbar-button>
          		<ons-icon icon="ion-search" />
        		</ons-toolbar-button>
      		</div>
    		</ons-toolbar>
				<ons-list>
        	<ons-list-item modifier="tappable" onClick={this.gotoDetails.bind(this,'favors')}>
          	自选股
        	</ons-list-item>
  				<ons-list-item modifier="tappable" onClick={this.gotoDetails.bind(this,'up')}>
          		涨幅榜
        	</ons-list-item>
      	</ons-list>
			  
      </ons-page>
			
    );
  }
}

class Home extends React.Component{
	showContent(type){
		
	}
	render(){
		return (
			<div>
			<ons-splitter>
  			<ons-splitter-side side="left" collapse="portrait" swipeable width="250px">
    			<ons-page>
      			<ons-toolbar>
        			<div className="center">菜单</div>
      			</ons-toolbar>
      			<ons-list>
        			<ons-list-item modifier="tappable" onClick={this.showContent.bind(this,'favors')}>
          		自选股
        			</ons-list-item>
  						<ons-list-item modifier="tappable" onClick={this.showContent.bind(this,'up')}>
          		涨幅榜
        			</ons-list-item>
      			</ons-list>
    			</ons-page>
  			</ons-splitter-side>
  			<ons-splitter-content>
					<ons-navigator id="navigator">
						<StockList type="favors" />
					</ons-navigator>
  			</ons-splitter-content>
			</ons-splitter>
				<ons-template id="details">
					<ons-page>
						
					</ons-page>
				</ons-template>
			</div>
		)
	}
}

ReactDOM.render(
  <Test />,
  document.getElementById('wrapper')
);