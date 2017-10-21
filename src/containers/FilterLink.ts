import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

interface StateFromProps {
  active: boolean;
  visibilityFilter: string;
}

interface DispatchFromProps {
  onClick: () => void;
  filter: string;
}

const mapStateToProps = (state , ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: true}
)(Link);

export default FilterLink;
