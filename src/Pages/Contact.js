// eslint-disable-next-line
import React, { useState } from "react";
import "../Styles/Contact.scss";
import LeftNavbar from "../Components/LeftNavbar";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Download from "../Components/Download";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  cssLabel: {
    color: "green",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#70b4cc !important`,
    },
  },

  cssFocused: {
    color: "#556052",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#556052 !important",
  },
});

function Contact(props) {
  const { classes } = props;
  const [disabled, setDisabled] = useState(false);
  const [from_name, setfromName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone_Number, setPhoneNumber] = useState("");
  const [Message, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();
    setDisabled(true);
    if (from_name !== "" && email !== "" && Phone_Number !== "") {
      emailjs
        .send(
          "service_txt421m",
          "template_yuka4fk",
          {
            from_name: from_name,
            Email: email,
            Phone_Number: Phone_Number,
            Message: Message,
          },
          "user_TYBcHVGQM9MpDgYKH4jrT",
        )
        .then((res) => {
          alert("I have received your details, I will contact you soon");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          setfromName("");
          setDisabled(false);
        });
    } else {
      alert("Enter your details before submitting.");
      setDisabled(false);
    }
  }
  return (
    <main>
      <section className="glass">
        <LeftNavbar />
        <div className="right inContact">
          <Download />
          <div className="heading">
            <h1>Contact</h1>
          </div>
          <div className="content contact">
            <p>Drop your details in the contact form,</p>
            <p>I will reach out to you soon.</p>

            <TextField
              label="Name"
              value={from_name}
              variant="outlined"
              size="small"
              className="input_fiels"
              onChange={(e) => setfromName(e.target.value)}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric",
              }}
            />
            <TextField
              type="email"
              value={email}
              label="Email"
              variant="outlined"
              size="small"
              className="input_fiels"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric",
              }}
            />
            <TextField
              value={Phone_Number}
              label="Mobile Number"
              variant="outlined"
              size="small"
              className="input_fiels"
              onChange={(e) => setPhoneNumber(e.target.value)}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric",
              }}
            />
            <TextField
              value={Message}
              className="input_fiels"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={3}
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric",
              }}
            />
            <Button
              variant="contained"
              className="submit_btn"
              onClick={sendEmail}
              disabled={disabled}
            >
              Submit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
