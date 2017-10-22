import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

interface StateFromProps {
  active: boolean;
}

interface DispatchFromProps {
  onClick: () => void;
}

export interface Props extends StateFromProps, DispatchFromProps {}

const mapStateToProps = (state , ownProps): StateFromProps => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps): DispatchFromProps => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

// const FilterLink = connect<StateFromProps, DispatchFromProps>(
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: true}
)(Link);

export default FilterLink;
