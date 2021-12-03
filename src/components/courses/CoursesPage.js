import React from "react";
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursePage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    debugger;
    this.props.dispatch(courseActions.createCourse(this.state.course))
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.course.title} />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}> {course.title} </div>
        ))}
      </form>
    );
  }
}

CoursePage.PropTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

// this func determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

// mapDispatchToProps lets us declare what actions to pass to our component on props
// when we omit mapDispatchToProps, our component gets a dispatch prop injected automatically

export default connect(mapStateToProps)(CoursePage);
