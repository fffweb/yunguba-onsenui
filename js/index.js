import React from 'react';
import ReactDOM from 'react-dom';
import Details from './details';
// import ons from '../node_modules/onsenui/js/onsenui.js';
// window.ons=ons;

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
  <Home />,
  document.getElementById('wrapper')
);