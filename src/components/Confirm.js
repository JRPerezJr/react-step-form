import React, { Component } from 'react';

//<--Material UI imports-->
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Process form to API, Express, FLask or Python here
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
  render() {
      const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Data"/>
            <List>
                <ListItem
                    primaryText="First Name"
                    secondaryText={ firstName }
                >
                </ListItem>
            </List>
            <List>
                <ListItem
                    primaryText="Last Name"
                    secondaryText={ lastName }
                >
                </ListItem>
            </List>
            <List>
                <ListItem
                    primaryText="Email"
                    secondaryText={ email }
                >
                </ListItem>
            </List>
            <List>
                <ListItem
                    primaryText="Occupation"
                    secondaryText={ occupation }
                >
                </ListItem>
            </List>
            <List>
                <ListItem
                    primaryText="City"
                    secondaryText={ city }
                >
                </ListItem>
            </List>
            <List>
                <ListItem
                    primaryText="Bio"
                    secondaryText={ bio }
                >
                </ListItem>
            </List>
            <RaisedButton
                label="Confirm & Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
            />
            <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
    button: {
        margin: 15
    }
}
