import React, { Component } from "react";
import pencil from "../pencil.svg";
import uniqid from "uniqid";
import trash from "../trash.svg"

class Experience extends Component {
  constructor() {
    super() 
    this.state = {
      companies: [
        {
          name: "Company1",
          year: "2000-2010",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: uniqid()
        },
        {
          name: "Company2",
          year: "2010-2015",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: uniqid()
        },
      ],
      newExp: {
        name: '',
        year: '',
        details: '',
      }
    }

    this.editBtn = this.editBtn.bind(this)
    this.save = this.save.bind(this)
    this.delete = this.delete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  editBtn() {
    this.setState({
      edit: true
    })
  }

  delete(idVal) {
    this.setState({
      companies: this.state.companies.filter(x => x.id !== idVal)
    })
  }

  save() {
    this.setState({
      companies: this.state.companies.concat(this.state.newExp),
      edit: false
    }, () => console.log(this.state.companies));
  }
  
  

  handleChange(event, para) {
    if(para === 'name') {
      this.setState({
        newExp: {
          ...this.state.newExp,
          name: event.target.value,
          id: uniqid()
        }
      })
    }
    else if(para === 'year') {
      this.setState({
        newExp: {
          ...this.state.newExp,
          year: event.target.value
        }
      })
    }
    else if(para === 'details') {
      this.setState({
        newExp: {
          ...this.state.newExp,
          details: event.target.value
        }
      })
    }

  }

  render() {
    const { companies } = this.state
     return (
      <div className="experience">
        <h1>Experience <button onClick={() => this.editBtn()} id="edit-btn">{" "} <img alt="edit-icon" id="edit-icon" src={pencil} /></button></h1>
        {this.state.edit ? 
          <div className="inputs">
          <input onChange={(event) => this.handleChange(event, 'name')} type="text" placeholder="company" />
          <textarea onChange={(event) => this.handleChange(event, 'details')} style={{marginLeft: "7px"}} placeholder="details"></textarea>
          <input onChange={(event) => this.handleChange(event, 'year')} type="text" placeholder="term" />  
          <button onClick={() => this.save()} style={{ marginLeft: "3px"}}  id="save-btn"> save </button> 
          </div> :
          <div className="prev-jobs">
          {companies.map(company => {
            return (
            <div key={company.id} className="cmp">
              <div className="headers">
                <h2>{company.name} <button onClick={() => this.delete(company.id)} id="edit-btn" className="delBtn"><img alt="delete-icon" id="edit-icon" src={trash}/></button> </h2>
                <h2>{company.year}</h2>
              </div>
                  <p>
                    {company.details}
                  </p>
            </div>)
            })}
          </div>
        }
      </div>
    )
  }
}

export default Experience
