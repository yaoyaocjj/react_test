import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../../actions/FilterAction';


const Link = ({ active, children, onClick }) => {
  if(active) {
    return <a className="filter selected">{children}</a>
  } else {
      return (
        <a href="#" className="filter not-selected" onClick={(event) => {
          event.preventDefault();
          onClick();
        }}>{children}</a>
      )
    }
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
