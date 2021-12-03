import React from "react";
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    loadCourses().catch(error => {
      alert("Loading courses failed" + error);
    });

    loadAuthors().catch(error => {
      alert("Loading authors failed" + error);
    });
  }

  render() {
    return (
      <> 
        <h2>Manage Course</h2>
      </>
    );
  }
}

CoursePage.PropTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

// this func determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors
};

// mapDispatchToProps lets us declare what actions to pass to our component on props
// when we omit mapDispatchToProps, our component gets a dispatch prop injected automatically

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);