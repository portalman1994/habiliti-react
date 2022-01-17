import React, { Component } from "react";
import { Col, Container, Row, Table } from "reactstrap";
<<<<<<< HEAD

=======
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c

class Demo extends Component {
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
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        return(
          <Container>
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
                <tbody id="calendar-body">
                  <CreateCalendar year={this.state.cyear} month={this.state.cmonth} />
                </tbody>
              </Table>
            </Row>
          </Container>    
        );
      }

      

} 

function CreateCalendar(props) {
    let month = props.month;
    let year = props.year;
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let date = 1;
    let [color, setColor] = React.useState([]);
    React.useEffect(() => {
      if (color[0] === undefined) {
        for (let id = 0; id < daysInMonth; id++) {
          setColor(prevColor => ([...prevColor, '']));
        }
      }
    }, [color]);
    const changeColor = (e) => {
      let id = e.target.id;
      setColor(prevColor => {
        const newColor = [...prevColor];
        newColor[id] = color[id] === '' ? 'grey': '';
        return newColor;
      });
      // change the value of cell's color
    };
  
    let calendar = () => {
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
            //style={{backgroundColor: color[key], color: color[key] === '' ? 'black' : 'white'}}
            cell.push(<td key={key} id={key} onClick={(event) => changeColor(event)} style={{backgroundColor: color[key], color: color[key] === '' ? 'black' : 'white'}}>{date}</td>);
            date++;
            key++;
          }
        }
        row.push(<tr key={i}>{cell}</tr>);
      }
      tbl.push(row);    
      return tbl;
    };
    return (
      <>
        {calendar()}
        </>
    );
}

export default Demo;