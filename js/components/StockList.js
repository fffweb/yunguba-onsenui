import React from 'react';
import {Page,List,ListItem,ListHeader,Toolbar, Button} from 'react-onsenui';

export default class StockList extends React.Component {
  
  render() {
    return (
			
	    <Page renderToolbar={()=>
				<Toolbar>
      		<div className='center'>Title</div>
    		</Toolbar>
  		}>
      content  
      </Page>
			
    );
  }
}
