import React, { Component } from "react";
import pencil from "../pencil.svg";
import uniqid from "uniqid";
import trash from "../trash.svg";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      education: [
        {
          header: 'School',
          name: "Awesome School",
          year: "(2000-2009)",
          id: uniqid()
        },
        {
          header: 'College',
          name: "Some College",
          degree: "Some degree",
          year: "(2010-2014)",
          id: uniqid()
        },
      ],
      newEd: {
        header: '',
        name: '',
        degree: '',
        year: '',
      },
      edit: false,
    };
    this.editBtn = this.editBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  editBtn() {
    this.setState({
      edit: true
    })
  }

  handleChange(event, param) {

    if(param === 'header') {
      this.setState({
        newEd: {
          ...this.state.newEd,
          header: event.target.value,
        }
      })
    }

    else if(param === 'name') {
      this.setState({
        newEd: {
          ...this.state.newEd,
          name: event.target.value,
          id: uniqid()
        }
      })
    }

    else if(param === 'year') {
      this.setState({
        newEd: {
          ...this.state.newEd,
          year: event.target.value
        }
      })
    }

    else if(param === 'degree') {
      this.setState({
        newEd: {
          ...this.state.newEd,
          degree: event.target.value
        }
      })
    }
  }

  save() {
    this.setState({
      education: this.state.education.concat(this.state.newEd),
      edit: false
    }, () => console.log(this.state.education))
  }

  delete(idVal) {
    this.setState({
      education: this.state.education.filter(x => x.id !== idVal)
    })
  }

  render() {
    const { education } = this.state;

    return (
      <div className="education">
        <h1>EDUCATION <button onClick={this.editBtn} id="edit-btn">{" "} <img alt="edit-icon" src={pencil} id="edit-icon" /></button></h1>
        <div className="academics">
          {this.state.edit ? 
          <div className="ed-form">
            <input onChange={(event) => this.handleChange(event, 'header')}  placeholder="header" type="text" />
            <input onChange={(event) => this.handleChange(event, 'name')}  placeholder="name" type="text" />
            <input onChange={(event) => this.handleChange(event, 'year')} placeholder="year" type="text" />
            <input onChange={(event) => this.handleChange(event, 'degree')} id="degree" placeholder="course" type="text" />
            <button onClick={() => this.save()} style={{ marginLeft: "3px"}}  id="save-btn"> save </button> 
          </div> :
          education.map(edu => {
            return (
              <div className="card">
                <h2>{edu.header} <button onClick={() => this.delete(edu.id)} id="edit-btn" className="delBtn"><img alt="delete-icon" id="edit-icon" src={trash}/></button></h2>
                <h3>
                  {edu.name}
                  {edu.year}
                </h3>

              </div>
            )
          })
          }
        </div>
      </div>      
    );
  }
}

export default Education;