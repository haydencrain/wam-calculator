import * as React from 'react';
import Router from 'next/router';
import SessionStorageService from '../lib/sessionStorage/SessionStorageService';
import '../styles/global.scss';

export default class Index extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			tableString: ''
		};
	}

	componentDidMount() {
		this.setState({ tableString: SessionStorageService.getTableString() });
	}

	handleChange = (e: React.SyntheticEvent<any>) => {
		this.setState({ tableString: e.currentTarget.value });
	};

	handleSubmit = (e: any) => {
		if (!this.state.tableString)
			alert("Enter some data first!");
		else {
			SessionStorageService.setTableString(this.state.tableString);
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
