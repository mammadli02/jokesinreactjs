import React, { Component, memo } from "react";
import { PiArrowBendLeftDownBold, PiArrowBendRightUpBold } from 'react-icons/pi'
import style from "./jokes.module.css";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export class JokesCard extends Component {
  constructor() {
    super();

    this.state = {
      vote: 0,
    };

    this.incrementVote = this.incrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
  }

  incrementVote(voteId) {
    const newVote = this.state.vote + 1;

    this.setState({ vote: newVote });
    this.props.addVoteItem(voteId, newVote);
  }

  decrementVote(voteId) {
    const newVote = this.state.vote - 1;

    this.setState({ vote: newVote });
    this.props.rmvVoteItem(voteId, newVote);
  }

  render() {
    const { joke, id, vote, index } = this.props;
    let voteColors = ""

    if (vote === 0) {
      voteColors = "red"
    } else if (vote < 5) {
      voteColors = "yellow"
    } else if(vote < 10) {
      voteColors = "orange"
    } else {
      voteColors = "green"
    }
    return (
      <div className={style.card}>
  
        <div className={style.vote_content}>
        <button onClick={() => this.decrementVote(id) } >  <PiArrowBendLeftDownBold style={{color:"red", fontSize:"20px"}}/></button>
          <span style={{textAlign:'center', fontWeight:'bolder', padding:"10px" }} className={style[voteColors]}>{vote}</span>
          <button onClick={() => this.incrementVote(id)}><PiArrowBendRightUpBold style={{color:"green", fontSize:"20px"}}/></button>
        </div>

        <div>
          <p>{joke}</p>
        </div>
        <BsFillEmojiSmileFill style={{fontSize:"50px",color:'#DFFD05' }}/>
      </div>
    );
  }
}

export default memo(JokesCard);