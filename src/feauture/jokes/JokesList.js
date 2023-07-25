import React, { Component } from "react";
import JokesCard from "./JokesCard";
import style from "./jokes.module.css";

export class JokesList extends Component {
  render() {
    const { data, rmvVoteItem, addVoteItem } = this.props;

    const content = data?.map((item, index) => (
        <JokesCard
          index={index}
          rmvVoteItem={rmvVoteItem}
          addVoteItem={addVoteItem}
          {...item}
        />
    ));

    return (
      <div>
      
        <div className={style.list}>{content}</div>
      </div>
    );
  }
}

export default JokesList;