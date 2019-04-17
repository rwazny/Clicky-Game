import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import FriendCard from './components/FriendCard';
import friends from './friends.json';
import Footer from './components/Footer';
// import Jumbotron from './components/Jumbotron';
// import Score from './components/score';
// import './App.css';
import Wrapper from './components/Wrapper';

class App extends Component {
  // Setting this.state.RB to 0 or empty
  state = {
    friends,
    clickedFriend: [],
    score: 0,
    restart: false
  };

  //when you click on a card ... the RB is taken out of the array
  imageClick = event => {
    const currentFriend = event.target.alt;
    const clickedFriend = this.state.clickedFriend;

    var RB = this.state.clickedFriend.indexOf(currentFriend) > -1;
    if (RB === false) {
      clickedFriend.push(currentFriend);
    } else {
      this.setState({
        friends: this.state.friends.sort(function(a, b) {
          return Math.random() - 0.5;
        }),
        clickedFriend: [],
        score: 0
      });
      alert('You Got Juked!!');
      return;
      //if you click on an available RB, your score is increased and cards reordered
    }
    this.setState({
      friends: this.state.friends.sort(function(a, b) {
        return Math.random() - 0.5;
      }),
      clickedFriend,
      score: this.state.score + 1
    });

    if (this.state.score === 25) {
      alert('TOUCHDOWN!!! Go For Two?');
      this.setState({
        friend: this.state.friend.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriend: [],
        score: 0
      });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Title />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              imageClick={this.imageClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
