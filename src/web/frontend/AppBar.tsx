import {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from "react";

export class AppBarComponent extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    styles = {
        root: {
            flexGrow: 1
        },
    };

    handleDrawerChange = () => {
        this.props.onSelectOpenState(true);
    };

    render() {
        return (
            <div style={this.styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={this.handleDrawerChange}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={this.styles.root}>
                            News
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
