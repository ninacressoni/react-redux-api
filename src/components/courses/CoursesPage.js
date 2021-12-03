import React from "react";
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';

class CoursePage extends React.Component {
  render() {
    return (
      <> 
        <h2>Courses</h2>
        {this.props.courses.map(course => (
          <div key={course.title}> {course.title} </div>
        ))}
      </>
    );
  }
}

CoursePage.PropTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// this func determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// mapDispatchToProps lets us declare what actions to pass to our component on props
// when we omit mapDispatchToProps, our component gets a dispatch prop injected automatically

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
