import {Component} from "react";
import {List, ListItem} from "@material-ui/core";
import * as React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";


export class NavMenu extends Component<any> {
    constructor(props: any) {
        super(props);
    }
    displayName = NavMenu.name;



    styles = {
        list: {
            width: "250px",
            flex: 1,
            flexDirection: "column"
        } as React.CSSProperties,
        button: {
            width: "100%",
            display: "flex"
        }

    };

    handleDrawerChange = () => {
        this.props.onSelectOpenState(false);
    };

    render() {
        return (
            <List component="nav" style={this.styles.list}>
                <ListItem>
                    <Button component={Link} to="/" onClick={this.handleDrawerChange} style={this.styles.button}>
                        Home
                    </Button>
                </ListItem>
                <ListItem>
                    <Button component={Link} to="/counter" onClick={this.handleDrawerChange} style={this.styles.button}>
                        Counter
                    </Button>
                </ListItem>
                <ListItem>
                    <Button component={Link} to="/form" onClick={this.handleDrawerChange} style={this.styles.button}>
                        Form
                    </Button>
                </ListItem>
            </List>
        );
    }
}
