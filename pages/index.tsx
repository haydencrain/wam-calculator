import * as React from 'react';
import Router from 'next/router';
import '../styles/global.scss';

export default class Index extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			tableString: ''
		};
	}

	handleChange = (e: React.SyntheticEvent<any>) => {
		this.setState({ tableString: e.currentTarget.value })
	};

	handleSubmit = (e: any) => {
		if (!this.state.tableString)
			alert("Enter some data first!");
		else {
			Router.push('/result');
		}
		
		e.preventDefault();
	};
	
	render() {
		return (
			<div id="indexPage">
				<form onSubmit={this.handleSubmit}>
					<h1>WAM Calculator</h1>
					<textarea 
						value={this.state.tableString}
						onChange={this.handleChange}
					/>
					<button type="submit" value="submit">
						Get Results!
					</button>
				</form>
			</div>
		);
	}
}

type Props = {} 

type State = {
	tableString: string;
}
