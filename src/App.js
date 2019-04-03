import React, { Component } from 'react';
import './App.css';
import Hand from './Hand'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      left: '',
      right: '',
      count: 0,
      winner: 'You are born to win budd!!'
     }
    this.option = ['Rock','Paper','Scissors']
  }


  GameResult = () =>{
    const {left,right} = this.state
    if(left === right){
     return 'It is a draw mate !! You can do better'
    }
    if(left ==='scissors' && right==='paper' ||
       left ==='rock' && right==='scissor' || 
       left ==='paper' && right==='rock' ){
         return 'It is a win. You just got lucky this time!! '
       }
    else{
      return 'Take that "L" looosser'
    }   

  }
  handleButtonClick = (e) =>{
    e.preventDefault();
   const content = setInterval(() => {
      this.setState(prev =>{
        return ({
          left: this.option[Math.floor(Math.random()*3)],
          right: this.option[Math.floor(Math.random()*3)],
          count: prev.count+1,
          winner: ''
        })
      })
      if(this.state.count > 15){
        clearInterval(content);
        this.setState({count:0, winner:this.GameResult()})
      }
    }, 100);    
  }

  render() {
    return (
      <div className="App">
        <div className="game-wrapper">
          <Hand  color='#FF847C' option={this.state.left}/>
          <Hand  color='#FECEA8' option={this.state.right}/>
          <button onClick={this.handleButtonClick}> Hit it!</button>
          <p>{this.state.winner}</p>
        </div>  
      </div>
    );
  }
}

export default App;
