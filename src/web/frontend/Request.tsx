import {Card, CardContent, FormControl, Input, InputLabel, TextField} from "@material-ui/core";
import React, {ChangeEvent, Component, CSSProperties} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
        } as CSSProperties,
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '640px',
            width: '100%',
            justifyContent: 'space-between'
        } as CSSProperties,
        block: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center'
        } as CSSProperties,
        button: {
            width: '100%'
        }
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
                <div style={this.styles.block}>
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
                    <div style={this.styles.buttons}>
                        <Button component={Link} to="/form" style={this.styles.button}>
                            <NavigateBeforeIcon /> Вернуться к форме
                        </Button>
                        <Button style={this.styles.button}>
                            Отправить
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
