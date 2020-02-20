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

    localFlags = {
        surname: 'surname',
        secondName: 'secondName',
        email: 'email',
        selectedDistrict: 'selectedDistrict',
        selectedCity: 'selectedCity',
        selectedStreet: 'selectedStreet',
        house: 'house',
        building: 'building',
        flat: 'flat',
        answerByEmail: 'answerByEmail',
        answerByPostmail: 'answerByPostmail',
        agreedWithPDN: 'agreedWithPDN',
        name: 'name'
    };

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
        this.checkLocalStorage();
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
        }, () => {
            this.debounced(this.state.name);
            localStorage.setItem(this.localFlags.name, this.state.name);
        });
    };
    surnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            surname: event.target.value
        }, () => {
            this.debounced(this.state.surname);
            localStorage.setItem(this.localFlags.surname, this.state.surname);
        });
    };
    secondNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            secondName: event.target.value
        }, () => {
            this.debounced(this.state.secondName);
            localStorage.setItem(this.localFlags.secondName, this.state.secondName);
        });
    };
    houseChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            house: event.target.value
        }, () => {
            this.debounced(this.state.house);
            localStorage.setItem(this.localFlags.house, String(this.state.house));
        });
    };
    buildingChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            building: event.target.value
        }, () => {
            this.debounced(this.state.building);
            localStorage.setItem(this.localFlags.building, this.state.building);
        });
    };
    flatChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            flat: event.target.value
        }, () => {
            this.debounced(this.state.flat);
            localStorage.setItem(this.localFlags.flat, String(this.state.flat));
        });
    };
    cityChange = (event: any) => {
        if (!event) return;
        this.setState({
            selectedCity: event.target.value
        }, () => {
            this.getStreets();
            localStorage.setItem(this.localFlags.selectedCity, String(this.state.selectedCity));
        });
    };
    birthDateChange = (event: any) => {
        this.setState({
            birthDate: event
        }, () => {
            this.debounced(this.state.birthDate);
            localStorage.setItem('birthDate', event);
        });
    };
    districtChange = (event: any) => {
        this.setState({
            selectedDistrict: event.target.value
        }, () => {
            this.getCities();
            localStorage.setItem(this.localFlags.selectedDistrict, String(this.state.selectedDistrict));
        });
    };
    streetChange = (event: any) => {
        this.setState({
            selectedStreet: event.target.value
        }, () => {
            this.debounced(this.state.selectedStreet);
            localStorage.setItem(this.localFlags.selectedStreet, String(this.state.selectedStreet));
        });
    };
    emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value
        }, () => {
            this.debounced(this.state.email);
            localStorage.setItem(this.localFlags.email, this.state.email);
        });
    };
    answerByEmailChange = (event: any) => {
        this.setState({
            answerByEmail: event.target.checked
        }, () => {
            this.debounced(this.state.answerByEmail);
            localStorage.setItem(this.localFlags.answerByEmail, String(this.state.answerByEmail));
        });
    };
    answerByPostmailChange = (event: any) => {
        this.setState({
            answerByPostmail: event.target.checked
        }, () => {
            this.debounced(this.state.answerByPostmail);
            localStorage.setItem(this.localFlags.answerByPostmail, String(this.state.answerByPostmail));
        });
    };
    agreedWithPDNChange = (event: any) => {
        this.setState({
            agreedWithPDN: !this.state.agreedWithPDN
        }, () => {
            this.debounced(this.state.agreedWithPDN);
            localStorage.setItem(this.localFlags.agreedWithPDN, String(this.state.agreedWithPDN));
        });
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

    private checkAvailable(): boolean {
        const emptyStrings = (this.state.name === null || this.state.name.trim() === '')
                          || (this.state.surname === null || this.state.surname.trim() === '')
                          || (!this.state.house);
        const emptySelects = (!this.state.selectedDistrict || !this.state.selectedCity || !this.state.selectedStreet);
        const emptyChecks = (this.state.answerByPostmail && emptySelects && this.state.house)
                         || (this.state.answerByEmail && (this.state.email === null || this.state.email.trim() === ''));

        return emptyStrings || emptySelects || emptyChecks || !this.state.agreedWithPDN;
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
                            <Select value={this.state.selectedDistrict ? this.state.selectedDistrict : 0} onChange={this.districtChange}>
                                <MenuItem value={0}>Не выбран</MenuItem>
                                {!!this.state.districts.length && this.state.districts.map((district: any, k) => {
                                return (<MenuItem key={k} value={district.id}>{district.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="city">Город</InputLabel>
                            <Select value={this.state.selectedCity ? this.state.selectedCity : 0} onChange={this.cityChange}>
                                <MenuItem value={0}>Не выбран</MenuItem>
                                {!!this.state.cities.length && this.state.cities.map((city: any, k) => {
                                return (<MenuItem key={k} value={city.id}>{city.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="street">Улица</InputLabel>
                            <Select value={this.state.selectedStreet ? this.state.selectedStreet : 0} onChange={this.streetChange}>
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

                        <Button component={Link}
                                to="/request"
                                style={{marginTop: '15px'}}
                                disabled={this.checkAvailable()}>
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

    checkLocalStorage = () => {
        Object.values(this.localFlags).forEach(flag => {
            console.log(flag, localStorage.getItem(flag));
            if (localStorage.getItem(flag)) {
                let value;
                switch (flag) {
                    case this.localFlags.agreedWithPDN:
                        value = localStorage.getItem(flag) === 'true';
                        this.setState({
                            agreedWithPDN: value
                        });
                        break;
                    case this.localFlags.answerByEmail:
                        value = localStorage.getItem(flag) === 'true';
                        this.setState({
                            answerByEmail: value
                        });
                        break;
                    case this.localFlags.answerByPostmail:
                        value = localStorage.getItem(flag) === 'true';
                        this.setState({
                            answerByPostmail: value
                        });
                        break;
                    case this.localFlags.building:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                building: value
                            });
                        }
                        break;
                    case this.localFlags.selectedCity:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                selectedCity: parseInt(value)
                            }, () => {
                                this.getStreets()
                            });
                        }
                        break;
                    case this.localFlags.selectedDistrict:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                selectedDistrict: parseInt(value)
                            }, () => {
                                this.getCities();
                            });
                        }
                        break;
                    case this.localFlags.email:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                email: value
                            });
                        }
                        break;
                    case this.localFlags.flat:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                flat: parseInt(value)
                            });
                        }
                        break;
                    case this.localFlags.house:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                house: parseInt(value)
                            });
                        }
                        break;
                    case this.localFlags.secondName:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                secondName: value
                            });
                        }
                        break;
                    case this.localFlags.selectedStreet:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                selectedStreet: parseInt(value)
                            });
                        }
                        break;
                    case this.localFlags.surname:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                surname: value
                            });
                        }
                        break;
                    case this.localFlags.name:
                        value = localStorage.getItem(flag);
                        if (value) {
                            this.setState({
                                name: value
                            });
                        }
                        break;
                }
            }
        });
    }
}
