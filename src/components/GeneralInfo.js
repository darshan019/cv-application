import React, { Component } from "react";
import pencil from "../pencil.svg";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      userName: { name: "Name" },
      contact: {
        mail: "abcd10@efgh.com",
        phoneNumber: "000-000-0000",
      },
      social: {
        insta: "instaProfile",
        linkedIn: "linkedinProfile",
      },
      editName: "",
      editMail: "",
      editNum: "",
      editInsta: "",
      editLinkedin: "",
    };

    this.editContact = this.editContact.bind(this);
    this.editSocial = this.editSocial.bind(this);
    this.editName = this.editName.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editContact() {
    this.setState({
      contact: {
        ...this.state.contact,
        edit: true,
      },
    });
  }

  editName() {
    this.setState({
      userName: {
        ...this.state.userName,
        edit: true,
      },
    });
  }

  editSocial() {
    this.setState({
      social: {
        ...this.state.social,
        edit: true,
      },
    });
  }

  handleChange(event, param) {
    if (param === "name") {
      this.setState({
        editName: event.target.value,
      });
    } else if (param === "mail") {
      this.setState({
        editMail: event.target.value,
      });
    } else if (param === "num") {
      this.setState({
        editNum: event.target.value,
      });
    } else if (param === "insta") {
      this.setState({
        editInsta: event.target.value,
      });
    } else if (param === "linkedin") {
      this.setState({
        editLinkedin: event.target.value,
      });
    }
  }

  save(parameter) {
    if (parameter === "name") {
      this.setState({
        userName: {
          name: this.state.editName,
          edit: false,
        },
      });
    } else if (parameter === "contact") {
      this.setState({
        contact: {
          mail: this.state.editMail,
          phoneNumber: this.state.editNum,
        },
      });
    } else if (parameter === "social") {
      this.setState({
        social: {
          insta: this.state.editInsta,
          linkedIn: this.state.editLinkedin,
        },
      });
    }
  }

  render() {
    const { userName, contact, social } = this.state;

    return (
      <div className="general-info">
        {userName.edit ? (
          <span>
            <input
              value={this.state.editName}
              onChange={(event) => this.handleChange(event, "name")}
              type="text"
              id="edit-name"
            />
            <button onClick={() => this.save("name")} id="save-btn">
              save
            </button>
          </span>
        ) : (
          <h1>
            {userName.name}{" "}
            <button onClick={this.editName} id="edit-btn">
              <img id="edit-icon" alt="edit-icon" src={pencil}></img>
            </button>
          </h1>
        )}
        <div className="abt1">
          {contact.edit ? (
            <>
              <h2>Contact</h2>
              <div>
                <h3>Mail</h3>
                <input
                  value={this.state.editMail}
                  onChange={(event) => this.handleChange(event, "mail")}
                  type="text"
                  id="edit-mail"
                />
              </div>
              <div>
                <h3>Number</h3>
                <input
                  value={this.state.editNum}
                  onChange={(event) => this.handleChange(event, "num")}
                  type="text"
                  id="edit-num"
                />
              </div>
              <button onClick={() => this.save("contact")} id="save-btn">
                save
              </button>
            </>
          ) : (
            <>
              <h2>
                Contact{" "}
                <button onClick={this.editContact} id="edit-btn">
                  <img id="edit-icon" alt="edit-icon" src={pencil}></img>
                </button>
              </h2>
              <div>
                <h3>Mail</h3>
                <p>{contact.mail}</p>
              </div>
              <div>
                <h3>Number</h3>
                <p>{contact.phoneNumber}</p>
              </div>
            </>
          )}
        </div>
        <div className="abt2">
          {social.edit ? (
            <>
              <h2>Social</h2>
              <div>
                <h3>Instagram</h3>
                <input
                  value={this.state.editInsta}
                  onChange={(event) => this.handleChange(event, "insta")}
                  type="text"
                  id="edit-ista"
                />
              </div>
              <div>
                <h3>Linkedin</h3>
                <input
                  value={this.state.editLinkedin}
                  onChange={(event) => this.handleChange(event, "linkedin")}
                  type="text"
                  id="edit-linkedin"
                />
              </div>
              <button onClick={() => this.save("social")} id="save-btn">
                save
              </button>
            </>
          ) : (
            <>
              <h2>
                Social{" "}
                <button onClick={this.editSocial} id="edit-btn">
                  <img id="edit-icon" alt="edit-icon" src={pencil}></img>
                </button>
              </h2>
              <div>
                <h3>Instagram</h3>
                <p>{social.insta}</p>
              </div>
              <div>
                <h3>Linkedin</h3>
                <p>{social.linkedIn}</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
