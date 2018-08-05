import React, { Component } from 'react';

export const Main = (props) => {
    return (
      <div>
		<div className="row">
			<div className="col-xs-12">
				<h1>The Main Page</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12">
				<button 
				className="btn btn-primary"
				onClick={() => props.changeUserName('New User Name')}
				>Change User Name</button>
			</div>
		</div>
	  </div>
    );
}
