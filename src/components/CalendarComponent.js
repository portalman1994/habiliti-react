import React, { Component, memo, useCallback, useEffect, useRef, useState } from "react";
import { Col, Button, Container, Progress, Row, Table } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useIndexedDB } from 'react-indexed-db';

//Get data and color 
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cmonth: new Date().getMonth(),
            cyear: new Date().getFullYear()
        };
    }
    prev = () => {
        let year = this.state.cmonth === 0 ? this.state.cyear - 1 : this.state.cyear;
        let month = this.state.cmonth === 0 ? 11 : this.state.cmonth - 1;
        this.setState({
            cmonth: month,
            cyear: year
        });
    };
    next = () => {
        let year = this.state.cmonth === 11 ? this.state.cyear + 1 : this.state.cyear;
        let month = this.state.cmonth === 11 ? 0 : this.state.cmonth + 1;
        this.setState({
            cmonth: month,
            cyear: year
        });
    };

    render() {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return (
            <Container>
                <Row>
                    <Col>
                        <Link to='/habiliti'><Button>Back</Button></Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className="btn btn-lg" id="prev" onClick={this.prev}>&#60;</a>
                    </Col>
                    <Col>
                        <a className="btn btn-lg" id="next" onClick={this.next}>&#62;</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="monthAndYear">{months[this.state.cmonth]} {this.state.cyear}</div>
                    </Col>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">Sun</th>
                                <th scope="col">Mon</th>
                                <th scope="col">Tue</th>
                                <th scope="col">Wed</th>
                                <th scope="col">Thu</th>
                                <th scope="col">Fri</th>
                                <th scope="col">Sat</th>
                            </tr>
                        </thead>
                        
                            <CreateCalendar year={this.state.cyear} month={this.state.cmonth} key={0} />
                
                    </Table>
                </Row>
            </Container>
        );
    }



}

const CreateCalendar = memo(function CreateCalendar(props) {
    
    const { add, deleteRecord, getAll } = useIndexedDB('calendar');
    let [dates, setDates] = useState([]);
    let [color, setColor] = useState([]);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = props.month;
    let year = props.year;
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let date = 1;

    useEffect(() => {
        getAll().then(datesFromDB => {
            setDates(datesFromDB);
        });
    }, [getAll]);
    let val = Object.keys(dates).map((item) => 
        dates[item].value
    );
    let data = Object.keys(dates).map((item) =>
            dates[item].date
    );
    
    const changeColor = (e, cellId) => {
        const filterDates = (arr, query) => {
            return arr.filter(d => d.date === query).map(filteredDates => filteredDates.id)
        }
        let id = e.target.id;
        let value = Number(id);
        let key = Number(filterDates(dates, cellId));
        if (color[id] !== 'green') {
            add({ date: cellId, value: value }).then(
                () => {
                    console.log(cellId);

                },
                error => {
                    console.log(error);
                }
            );
            setColor(prevColor => {
                const newColor = [...prevColor];
                newColor[id] = 'green';
                return newColor;
            });
        } else if (color[id] === 'green') {
            console.log(key);
            deleteRecord(key).then(event => {
                alert('Deleted: ' + key);
            });
            setColor(prevColor => {
                const newColor = [...prevColor];
                newColor[id] = '';
                return newColor;
            });
        }

        // change the value of cell's color
    };
    const calendar = () => {
        let tbl = [];
        let row = [];
        let key = 0;

        for (let i = 0; i < 6; i++) {
            let cell = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell.push(<td key={key - j - 1}></td>);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    let cellId = `${year}-${months[month]}-${date}`;
                    let str1 = String(data[key]);
                    let str2 = String(data[key]);
                    let currentMonth = months[month];
                    let currentYear = String(year);
                    let dataMonth =  str1.match(/[a-zA-Z]/gi).toString().replace(/[,]/gm, ``);
                    let dataYear = str2.match(/[0-9]{4}/gi)?.toString() || '';
                    if (dataMonth === currentMonth && dataYear === currentYear) {
                    color[val[key]] = 'green';
                    //style={{backgroundColor: color[key], color: color[key] === '' ? 'black' : 'white'}}
                    cell.push(<td key={key} id={key} onClick={(event) => changeColor(event, cellId)} style={{ backgroundColor: color[key], color: color[key] === 'green' ? 'white' : 'black' }}>{date}</td>);
                    } else {
                        color[val[key]] = 'white';
                        cell.push(<td key={key} id={key} onClick={(event) => changeColor(event, cellId)} style={{ backgroundColor: color[key], color: color[key] === 'green' ? 'white' : 'black' }}>{date}</td>);
                    }
                    date++;
                    key++;
                }
            }
            row.push(<tr key={i}>{cell}</tr>);
        }
        tbl.push(row);
        return tbl;
    }
    return (
        <>
        <tbody id="calendar-body">
            {calendar()}
        </tbody>
        </>
    );
});

export default memo(Calendar);