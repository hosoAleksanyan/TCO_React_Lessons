import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "John",
            age: "20",
            country: "Armenia"
        };
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>
                <h2>{this.state.country}</h2>
            </div>
        );
    }
}

export default Home;
