import {Card, CardContent, FormControl, Input, InputLabel, TextField} from "@material-ui/core";
import React, {ChangeEvent, Component, CSSProperties} from "react";
import _ from "lodash";

export class Request extends Component {
    displayName = Request.name;

    state = {
        request: ''
    };

    debounced = (value: any) => {
        console.log(value);
    };

    styles = {
        card: {
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        } as CSSProperties,
        form: {
            maxWidth: '640px',
            width: '100%',
            maxHeight: '720px',
            height: '100%'
        } as CSSProperties,
        cardContent: {
            flex: '1',
            flexDirection: 'column',
            display: 'flex'
        } as CSSProperties,
        input: {
            height: '100%'
        } as CSSProperties
    };

    constructor(props: any) {
        super(props);
        this.debounced = _.debounce(this.debounced.bind(this), 250);
    }

    requestChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            request: event.target.value
        }, () => {this.debounced(this.state.request)});
    };

    render() {
        return(
            <div style={this.styles.card}>
                <Card style={this.styles.form}>
                    <CardContent style={this.styles.cardContent}>
                            <TextField style={this.styles.input}
                                       multiline={true}
                                       rows={17}
                                       id="request"
                                       variant="outlined"
                                       value={this.state.request}
                                       onChange={this.requestChange}
                            />
                    </CardContent>
                </Card>
            </div>
        );
    }
}
