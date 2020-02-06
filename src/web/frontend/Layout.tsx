import {Component} from "react";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {AppBarComponent} from "./AppBar";
import Drawer from "@material-ui/core/Drawer";
import {NavMenu} from "./NavMenu";

export class Layout extends Component {
    displayName = Layout.name;

    constructor(props: any) {
        super(props);
        this.handleDrawer = this.handleDrawer.bind(this);
    }

    styles = {
        root: {
            padding: '10px'
        },
    };

    state = {
        isMenuOpen: false
    };

    public handleDrawer = (open: boolean) => {
        this.setState({
            isMenuOpen: open
        });
        return this.state;
    }

    render() {
        return(
            <Grid container>
                <Grid item xs={3}>
                    <Drawer open={this.state.isMenuOpen} onClose={() => this.handleDrawer(false)}>
                        <NavMenu onSelectOpenState={this.handleDrawer}/>
                    </Drawer>
                </Grid>
                <Grid item xs={12}>
                    <AppBarComponent onSelectOpenState={this.handleDrawer}/>
                </Grid>
                <Grid item xs={12} style={this.styles.root}>
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
}
