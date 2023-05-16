import React, { PureComponent } from 'react';

class State extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            second: false
        }
    }

    showFn = () => {
        this.setState({ show: true })
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                <button onClick={this.showFn}>Show</button>
            </div>
        );
    }
}

export default State;