import React from "react";
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import CourseList from "./CourseList";

class CoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    actions.loadCourses().catch(error => {
      alert("Loading courses failed" + error);
    });

    actions.loadAuthors().catch(error => {
      alert("Loading authors failed" + error);
    });
  }

  render() {
    return (
      <> 
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursePage.PropTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// this func determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

// mapDispatchToProps lets us declare what actions to pass to our component on props
// when we omit mapDispatchToProps, our component gets a dispatch prop injected automatically

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
