import React from 'react';
import {Page,Toolbar, Button} from 'react-onsenui';

export default class About extends React.Component {
  
  render() {
    return (
	    <Page renderToolbar={()=>
				<Toolbar>
      		<div className='center'>关于</div>
    		</Toolbar>
  		}>
      content  
      </Page>
    );
  }
}
