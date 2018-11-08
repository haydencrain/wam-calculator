
import * as React from 'react'
import Router from 'next/router';
import SessionStorageService from '../lib/sessionStorage/SessionStorageService';
import Loading from '../components/Loading';
import { convertTable, calculateWam } from '../lib/resultsService/ResultsHelpers';
import SubjectResult from '../lib/resultsService/SubjectResult';
import uuidv4 from 'uuid/v4';
import '../styles/global.scss';

export default class Result extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			loading: true,
			subjectResults: [],
			wam: 0
		};
	}

	static async getInitialProps() {
		return {}
	}

	async componentDidMount() {
		const tableString = SessionStorageService.getTableString();
		if (!tableString) 
			Router.push('/');
		else {
			await new Promise((resolve) => {
				setTimeout(resolve, 2000);
			});

			const subjectResults = convertTable(tableString);
			const wam = calculateWam(subjectResults);
			
			this.setState({ 
				loading: false,
				subjectResults,
				wam
			});
		}
	}

	renderTableRows = () => {
		return this.state.subjectResults.map(result => ((
			<tr key={uuidv4()}>
				<td>{result.year}</td>
				<td>{result.session}</td>
				<td>{result.subjectId}</td>
				<td>{result.title}</td>
				<td>{result.ver}</td>
				<td>{result.mark}</td>
				<td>{result.grade}</td>
				<td>{result.creditPoints}</td>
			</tr>
		)));
	}

  render () {
		return this.state.loading ? <Loading /> : (
				<div id="resultsPage">
					<div>Your WAM is: {this.state.wam}</div>
					<table>
						<thead>
							<tr>
								<th>Year</th>
								<th>Session</th>
								<th>Subject No.</th>
								<th>Title</th>
								<th>Ver</th>
								<th>Mark</th>
								<th>Grade</th>
								<th>Credit Points</th>
							</tr>
						</thead>
						<tbody>
							{this.renderTableRows()}
						</tbody>
					</table>
				</div>
			);
  }
}

type Props = {
	success: boolean;
}

type State = {
	loading: boolean;
	subjectResults: SubjectResult[];
	wam: number;
}