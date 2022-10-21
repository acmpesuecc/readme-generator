import React from 'react'




class ContactUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
    render() {
      return(
        <div>
            <h1 style={{textAlign: "center"}}>Contact Us</h1>
            <div className="App" style={{ marginLeft: '40%', marginTop: '60px', width: '30%',borderStyle: "ridge",margin: "auto",  justifyContent:"center" ,display: "flex"}}>

<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  <div className="form-group">
  <label>Name:</label>
  <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)}  placeholder='Name'/>
  </div>
  <br />
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder='Email'/>
  </div>
  <br />
  <label>Message</label>
  <div className="form-group">
    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder='Message'/>
  </div>
  <br />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
        </div>
      );
    }
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
    handleSubmit(event) {
    }
  }
  export default ContactUs;

