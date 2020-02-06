import {Component} from "react";
import React from "react";
import {Button} from "@material-ui/core";


interface Dogs {
    ID: number,
    Name: string
}

export class Counter extends Component {
    displayName = Counter.name;

    styles = {

    }

    state = {
        count: 0,
        dogs: [],
        page: 1
    };

    componentDidMount(): void {
        this.getCount();
        this.updateItems();
    }

    updateItems = () => {
        fetch(`api/dogs?page=${this.state.page}&skip=3`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dogs: []
                });
                res.forEach( (d: Dogs) => this.setState({
                    dogs: [...this.state.dogs, {ID: d.ID, Name: d.Name}]
                }));
            })
            .catch(error => console.log(error));
    };

    increment = () => {
        const page = this.state.page + 1;
        this.setState({
            page: page
        }, () => this.updateItems());
    };

    decrement = () => {
        const page = this.state.page - 1;
        this.setState({
            page: page
        }, () => this.updateItems());
    };

    render () {
        return (
            <div>
                <div>
                    <Button onClick={this.increment} disabled={(this.state.page * 3) > this.state.count}>Increment</Button>
                    <Button onClick={this.decrement} disabled={this.state.page === 1}>Decrement</Button>
                </div>
                <div>
                    {this.state.dogs.map((dog: Dogs, k) => {
                        return (<h2 key={k}>{dog.ID} - {dog.Name}</h2>)
                    })}
                </div>
            </div>
        );
    }


    getCount() {
        fetch(`api/dogs/count`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    count: parseInt(res)
                });
            })
            .catch(error => console.log(error));
    }
}
