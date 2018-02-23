import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class NetlifyContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <Box>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <Heading tag='h3'>Contact Us:</Heading>
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="name" onChange={this.handleChange} placeholder='Your Name'/>
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" onChange={this.handleChange} placeholder='Your Email'/>
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" onChange={this.handleChange} placeholder='Message'/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Box>
    );
  }
}

export default NetlifyContactForm;
