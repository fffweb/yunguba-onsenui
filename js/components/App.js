import React from 'react';
import { connect } from 'react-redux'
import {Toolbar,Button,Navigator,Page,List,ListItem,ListHeader,Splitter,SplitterSide,SplitterContent} from 'react-onsenui';
import StockList from './StockList';
import About from './About';
import {buildMenu} from '../actions/menu';

class Home extends React.Component{
	constructor(props){
		super(props);
    props.dispatch(buildMenu({name:'favors',title:'自选股'}));
	}
	showContent(type){
		
	}
	hideMenu(){
		
	}
	renderPage(route,navigator){
		//debugger;
		return (
      <StockList title={route.title} />
    );
	}
	clickMenu(menuItem){
		this.refs.nav.replacePage(menuItem);
	}
	render(){
    let menu=this.props.menu;
		return (
			<Splitter>
        <SplitterSide
          side='left'
          isCollapsed={true}
          onClose={this.hideMenu.bind(this)}
          isSwipeable={true}>
          <Page>
            <List renderHeader={()=><ListHeader>主菜单</ListHeader>}
							renderRow={m=><ListItem onClick={this.clickMenu.bind(this,m)} key={m.name} tappable>{m.title}</ListItem>}
          		dataSource={menu}
						/>
          </Page>
        </SplitterSide>
        <SplitterContent>
					<Navigator ref="nav"
        		initialRoute={{name:'favors',title:'自选股'}}
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


/*
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
      */