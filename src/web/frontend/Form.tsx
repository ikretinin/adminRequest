import React, {Component, CSSProperties, ChangeEvent} from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Select,
    MenuItem,
    Card,
    CardContent,
    FormControlLabel,
    Checkbox, Modal, Backdrop, Fade
} from "@material-ui/core";
import _ from 'lodash';
import "luxon";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Theme} from "@material-ui/core/styles";
const styles = require('./style.module.css');

export class Form extends Component {
    displayName = Form.name;

    style = {
        card: {
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'
        } as CSSProperties,
        form: {
            maxWidth: '640px',
            width: '100%'
        } as CSSProperties,
        cardContent: {
            flex: '1',
            flexDirection: 'column',
            display: 'flex'
        } as CSSProperties,
        house: {
            flex: '1',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between'
        } as CSSProperties,
        policy: {
            display: 'inline-flex',
            alignItems: 'center'
        },
        policyText: {
            fontSize: '1rem',
            fontFamily: 'sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
            marginLeft: '-16px',
            cursor: 'pointer'
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: 'white',
            border: '1px solid #000',
            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
        },
    };

    constructor(props: any) {
        super(props);
        this.debounced = _.debounce(this.debounced.bind(this), 250);
    }

    state = {
        name: '',
        surname: '',
        secondName: '',
        selectedCity: null,
        cities: [],
        districts: [],
        streets: [],
        selectedDistrict: null,
        birthDate: null,
        email: '',
        selectedStreet: null,
        house: null,
        building: '',
        flat: null,
        answerByEmail: false,
        answerByPostmail: false,
        agreedWithPDN: false,
        openModal: false
    };

    componentDidMount(): void {
        this.getDistricts();
    }

    debounced = (value: any) => {
        // console.log(value);
    };

    modalOpen = () => {
        this.setState({
            openModal: true
        });
    };
    modalClose = () => {
        this.setState({
            openModal: false
        });
    };

    nameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.target.value
        }, () => {this.debounced(this.state.name)});     
    };
    surnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            surname: event.target.value
        }, () => {this.debounced(this.state.surname)});     
    };
    secondNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            secondName: event.target.value
        }, () => {this.debounced(this.state.secondName)});     
    };
    houseChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            house: event.target.value
        }, () => {this.debounced(this.state.house)});
    };
    buildingChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            building: event.target.value
        }, () => {this.debounced(this.state.building)});
    };
    flatChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            flat: event.target.value
        }, () => {this.debounced(this.state.flat)});
    };
    cityChange = (event: any) => {
        this.setState({
            selectedCity: event.target.value
        }, () => {this.getStreets()});
    };
    birthDateChange = (event: any) => {
        this.setState({
            birthDate: event
        }, () => {this.debounced(this.state.birthDate)});
    };
    districtChange = (event: any) => {
        this.setState({
            selectedDistrict: event.target.value
        }, () => {
            this.getCities();
        });
    };
    streetChange = (event: any) => {
        this.setState({
            selectedStreet: event.target.value
        }, () => {
            this.debounced(this.state.selectedStreet)
        });
    };
    emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value
        }, () => {this.debounced(this.state.email)});
    };
    answerByEmailChange = (event: any) => {
        this.setState({
            answerByEmail: event.target.checked
        }, () => {this.debounced(this.state.answerByEmail)});
    };
    answerByPostmailChange = (event: any) => {
        this.setState({
            answerByPostmail: event.target.checked
        }, () => {this.debounced(this.state.answerByPostmail)});
    };
    agreedWithPDNChange = (event: any) => {
        this.setState({
            agreedWithPDN: !this.state.agreedWithPDN
        }, () => {this.debounced(this.state.agreedWithPDN)});
    };
    getDistricts = () => {
        fetch(`api/district`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    districts: [...res]
                });
            })
            .catch(error => console.log(error));
    };
    getCities = () => {
        fetch(`api/city?districtId=${this.state.selectedDistrict}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cities: [...res]
                });
            })
            .catch(error => console.log(error));
    };
    getStreets = () => {
        fetch(`api/street?cityId=${this.state.selectedCity}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    streets: [...res]
                });
            })
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div style={this.style.card}>
                <Card style={this.style.form}>
                    <CardContent style={this.style.cardContent}>
                        <FormControl>
                            <InputLabel htmlFor="name">Имя</InputLabel>
                            <Input value={this.state.name} id="name" onChange={this.nameChange} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="surname">Фамилия</InputLabel>
                            <Input value={this.state.surname} id="surname" onChange={this.surnameChange} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="secondName">Отчество</InputLabel>
                            <Input value={this.state.secondName} id="secondName" onChange={this.secondNameChange} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="email">Электронная почта</InputLabel>
                            <Input value={this.state.email} id="email" onChange={this.emailChange} />
                        </FormControl>
                        {/*<MuiPickersUtilsProvider utils={LuxonUtils}>*/}
                        {/*    <DatePicker value={this.state.birthDate}*/}
                        {/*                onChange={this.birthDateChange}*/}
                        {/*                format="dd-MM-yyyy"*/}
                        {/*                label="Дата рождения"/>*/}
                        {/*</MuiPickersUtilsProvider>*/}
                        <FormControl>
                            <InputLabel id="district">Район</InputLabel>
                            <Select value={this.state.selectedDistrict} onChange={this.districtChange}>
                                <MenuItem value={0}>Не выбран</MenuItem>
                                {!!this.state.districts.length && this.state.districts.map((district: any, k) => {
                                return (<MenuItem key={k} value={district.id}>{district.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="city">Город</InputLabel>
                            <Select value={this.state.selectedCity} onChange={this.cityChange}>
                                <MenuItem value={0}>Не выбран</MenuItem>
                                {!!this.state.cities.length && this.state.cities.map((city: any, k) => {
                                return (<MenuItem key={k} value={city.id}>{city.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="street">Улица</InputLabel>
                            <Select value={this.state.selectedStreet} onChange={this.streetChange}>
                                <MenuItem value={0}>Не выбрана</MenuItem>
                                {!!this.state.streets.length && this.state.streets.map((street: any, k) => {
                                    return (<MenuItem key={k} value={street.id}>{street.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <div style={this.style.house}>
                            <FormControl>
                                <InputLabel htmlFor="house">Дом</InputLabel>
                                <Input value={this.state.house} id="house" onChange={this.houseChange} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="building">Корпус</InputLabel>
                                <Input value={this.state.building} id="building" onChange={this.buildingChange} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="flat">Квартира</InputLabel>
                                <Input value={this.state.flat} id="flat" onChange={this.flatChange} />
                            </FormControl>
                        </div>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.answerByEmail}
                                          onChange={this.answerByEmailChange}
                                          value={this.state.answerByEmail}
                                          style={{
                                              color: "#3f51b5"
                                          }}
                                />
                            }
                            label="Прислать ответ на обращение по адресу электронной почты"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.answerByPostmail}
                                          onChange={this.answerByPostmailChange}
                                          value={this.state.answerByPostmail}
                                          style={{
                                              color: "#3f51b5"
                                          }}
                                />
                            }
                            label="Прислать ответ на обращение по почтовому адресу"
                        />
                        <div style={this.style.policy}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.agreedWithPDN}
                                              onChange={this.agreedWithPDNChange}
                                              value={this.state.agreedWithPDN}
                                              style={{
                                                  color: "#3f51b5"
                                              }}
                                    />
                                }
                                label=''
                            />
                            <span style={this.style.policyText}>
                                <a onClick={this.agreedWithPDNChange}>Я подтверждаю, что ознакомлен с</a> <a onClick={this.modalOpen} className={styles.policy}>Политикой обработки персональных данных</a>
                            </span>
                        </div>

                        <Button component={Link} to="/request" style={{marginTop: '15px'}}>
                            Перейти к обращению <NavigateNextIcon style={{marginBottom: '2px'}}/>
                        </Button>
                    </CardContent>
                </Card>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.state.openModal}
                    onClose={this.modalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    style={this.style.modal}
                >
                    <Fade in={this.state.openModal}>
                        <div style={this.style.paper}>
                            <h2 id="transition-modal-title">Политика обработки персональных данных</h2>
                            <p id="transition-modal-description">Здесь описана какая-то политика</p>
                        </div>
                    </Fade>
                </Modal>
            </div>
            
        );
    }
}
