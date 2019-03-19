import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
// import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";



class App extends Component {
  // Setting this.state.RB to 0 or empty
  state = {
    friends,
     clickedFriend: [],
    score: 0
  };

//when you click on a card ... the RB is taken out of the array
imageClick = event => {
  const currentFriend = event.target.alt;
  const friendAlreadyClicked =
    this.state.clickedFriend.indexOf(currentFriend) > -1;

//if you click on a RB that has already been selected, the game is reset and cards reordered
if (friendAlreadyClicked) {
  this.setState({
    friend: this.state.friend.sort(function(a, b) {
      return 0.5 - Math.random();
    }),
    clickedFriend: [],
    score: 0
  });
    alert("You Got Juked!! Play again?");

    //if you click on an available RB, your score is increased and cards reordered
  } else {
    this.setState(
      {
        friend: this.state.friend.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriend: this.state.clickedFriend.concat(
          currentFriend
        ),
        score: this.state.score + 1
      },
     
      //if you get all 16 RBs correct you get a congrats message and the game resets        
      () => {
        if (this.state.score === 16) {
          alert("TOUCHDOWN! You Win!");
          this.setState({
            friend: this.state.friend.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedFriend: [],
            score: 0
          });
        }
      }
    );
  }
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
       /> 
       <Wrapper>
       {/* <Jumbotron /> */}
      < div className="wrapper">
        <Title>Running Wild</Title>
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
        </div>
      <Footer />
      </Wrapper>
      </div>
      
    );
  }
}

export default App;
