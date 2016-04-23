import React from 'react';

export class Details extends React.Component{
	render(){
		return (
			<ons-page>
        <ons-toolbar>
					<div className="left">
        		<ons-toolbar-button ons-if-orientation="portrait">
          		<ons-icon icon="ion-navicon"></ons-icon>
        		</ons-toolbar-button>
      		</div>
      		<div className="center">股</div>
      		<div className="right">
						<ons-toolbar-button>
          		<ons-icon icon="ion-search" />
        		</ons-toolbar-button>
      		</div>
    		</ons-toolbar>
				
			  
      </ons-page>
		)
	}
}