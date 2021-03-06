import React, { Component } from 'React';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.text}
            onChangeText={ text => this.setState({ text: text })}
          />
        </CardSection>
        
        <CardSection />
        
        <CardSection>
            <Button>
              Login
            </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;