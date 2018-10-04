import React, { Component } from 'react';
import Member from './Member';
import { MEMBERS } from '../members';
import '../styles/AboutUs.css';
class AboutUs extends Component {
  createMemberOverview = () => {
    let view = [];
    for (let member in MEMBERS) {
      view.push(<Member member={MEMBERS[member]} />);
    }
    return view;
  };
  render() {
    return (
      <div>
        <h1>Wer sind wir</h1>
        <h2>Vorstand</h2>
        <div className="MemberOverview">{this.createMemberOverview()}</div>
      </div>
    );
  }
}

export default AboutUs;
