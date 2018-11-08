
import * as React from 'react'
import Router from 'next/router';

export default class Result extends React.Component<Props, State> {
  // Add some delay
  static async getInitialProps () {

    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
		})
		
    return { success: true }
	}
	
	componentDidMount() {
		if (!this.props.success) {
			Router.push('/');
		}
	}

  render () {
		console.log(this.props.success);
    return this.props.success && (
			<p>This page was rendered for a while!</p>
		);
  }
}

type Props = {
	success: boolean;
}

type State = {

}