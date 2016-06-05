import React from 'react';
//import ons from 'onsenui';
import {Toolbar,Button,Navigator,Page,List,ListItem,ListHeader,Splitter,SplitterSide,SplitterContent} from 'react-onsenui';
import StockList from './StockList';
import About from './About';
import { connect } from 'react-redux'

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			route:{title: 'First page'}
		}
	}
	showContent(type){
		
	}
	hideMenu(){
		
	}
	renderPage(route,navigator){
		debugger;
		return (
      <Page>
        <Toolbar>
          <div className='center'>{route.title}</div>
        </Toolbar>

        <Button onClick={() => {
          navigator.pushPage({
            title: 'Another page',
            backButton: <Button onClick={() => navigator.popPage()}>
              Pop page
            </Button>

          });
        }}>
          Push page
        </Button>
        {route.backButton}
      </Page>
    );
	}
	clickMenu(){
		debugger;
		this.refs.nav.replacePage({title: 'about page'});
		this.setState({route:{title: 'about page'}});
	}
	render(){
		return (
			<Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          onClose={this.hideMenu.bind(this)}
          isSwipeable={true}>
          <Page>
            <List renderHeader={() => <ListHeader></ListHeader>}
							renderRow={menu=> <ListItem onClick={this.clickMenu.bind(this)} key={menu} tappable>{menu}</ListItem>}
          		dataSource={['自选股','涨幅榜','跌幅榜','关于']}
						/>
          </Page>
        </SplitterSide>
        <SplitterContent>
					<Navigator ref="nav"
        		initialRoute={this.state.route}
        		renderPage={this.renderPage.bind(this)}
      		/>         
        </SplitterContent>
      </Splitter>
  	)
	}
}

function mapStateToProps(state) {
  return {
    ...state
  };
};
//let App=connect(mapStateToProps)(Home);

export default connect(mapStateToProps)(Home);