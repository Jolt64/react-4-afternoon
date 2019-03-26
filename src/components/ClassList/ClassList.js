import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })

    })
  }

  render() {
    let holder = this.state.students.map((student, i) => {
      return (
        <Link to={`/student/${student.id}`} key={i} ><h3 >{student.first_name} {student.last_name}</h3></Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {holder}
        <Link to={`/`}>Back</Link>
      </div>
    )
  }
}