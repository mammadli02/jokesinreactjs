import React, { Component } from "react";
import { getJokes } from "../service/jokes";
import JokesList from "../feauture/jokes/JokesList";

export class JokesPage extends Component {
  constructor() {
    super();

    this.state = {
      jokes: [],
    };

    this.addVoteItem = this.addVoteItem.bind(this);
    this.rmvVoteItem = this.rmvVoteItem.bind(this);
    this.voteProcess = this.voteProcess.bind(this);
  }

  componentDidMount() {
    (async () => {
      const response = await getJokes();
      const newJokes = response.data.results.map((item) => ({
        ...item,
        vote: 0,
      }));

      this.setState({ jokes: newJokes });
    })();
  }

  voteProcess(id, newVote) {
    const newJokes = [...this.state.jokes];

    const itemIndex = newJokes.findIndex((item) => item.id === id);

    newJokes[itemIndex].vote = newVote;

    newJokes.sort((aza, coxdan) => coxdan.vote - aza.vote);

    this.setState({ jokes: newJokes });
  }

  addVoteItem(id, newVote) {
    this.voteProcess(id, newVote);
  }

  rmvVoteItem(id, newVote) {
    this.voteProcess(id, newVote);
  }

  render() {
    console.log('"state', this.state.jokes);

    return (
    <div style={{backgroundColor:"#9FC601"}}>
        <JokesList
          data={this.state.jokes}
          addVoteItem={this.addVoteItem}
          rmvVoteItem={this.rmvVoteItem}
        />
      </div>
    );
  }
}

export default JokesPage;