import React from 'react';
import Exit from './pages/exit';
import Goals from './pages/goals';
import Notifs from './pages/notifs';
import Question from './pages/question';
import Result from './pages/result';
import Welcome from './pages/Welcome';

class Controller extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        page: 'welcome',
        animal: 'tiger'
    }
  }

  changeScreen = (screen) => {
    this.setState({page: screen})
  }

  changeAnimal = (persona) =>{
    this.setState({animal: persona})
  }

  getAnimal = () => {
    return this.state.animal
  }
  
  render = () => {
    if (this.state.page == 'welcome'){
      return (
        <Welcome changeScreen={this.changeScreen} />
      );
    }
    else if (this.state.page == 'goals'){
      return (
        <Goals changeScreen={this.changeScreen} />
      );
    }
    else if (this.state.page == 'notifs'){
      return (
        <Notifs changeScreen={this.changeScreen} />
      );
    }
    else if (this.state.page == 'question'){
        return (
          <Question changeScreen={this.changeScreen} changeAnimal={this.changeAnimal}/>
        );
    }
    else if (this.state.page == 'result'){
        return (
          <Result changeScreen={this.changeScreen} changeAnimal={this.changeAnimal} getAnimal={this.getAnimal}/>
        );
    }
    else if (this.state.page == 'exit'){
      return(
        <Exit changeScreen={this.changeScreen} getAnimal={this.getAnimal}/>
      );
    }
  }
}

export default Controller