import React from 'react';
import Job from "./job";
import { FormattedMessage } from 'react-intl';

export default class JobsList extends React.Component {

  state = { 
  	"offers": [
    	{
    	  "id": "0001",
        "name": "Manager",
    	  "company": "Schneider Electric", 
    	  "salary": 4.5,
    	  "city": "Bogotá, Colombia",
        "date": "2019-03-26",
        "visits":2000
      }, 
      {
        "id": "0002",
        "name": "Software Engineer",
        "company": "Google Inc.", 
        "salary": 20,
        "city": "Palo Alto, CA, USA",
        "date": "2019-03-27",
        "visits":400000
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "Clínica La Aurora", 
        "salary": 1,
        "city": "Cali, Colombia",
        "date": "2019-03-28",
        "visits":2060054
      }
    ]
  };

  getIdioma = ()=> {
    if(this.props.idm ==="es"){
      return "thead-light"
    }
    else {
      return "thead-dark";
    }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className={this.getIdioma()}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id ="Position"></FormattedMessage></th>
              <th scope="col"><FormattedMessage id ="Company"></FormattedMessage></th>
              <th scope="col"><FormattedMessage id ="Salary"></FormattedMessage></th>
              <th scope="col"><FormattedMessage id ="City"></FormattedMessage></th>
              <th scope="col"><FormattedMessage id ="PublicationDate"></FormattedMessage></th>
              <th scope="col"><FormattedMessage id ="Views"></FormattedMessage></th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}