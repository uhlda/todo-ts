import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
import { Action, State } from '../components/types';

interface StateFromProps {
  active: boolean;
}

interface DispatchFromProps {
  onClick: () => Action;
}

export interface Props extends StateFromProps, DispatchFromProps {}

const mapStateToProps = (state, ownProps): StateFromProps => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps): DispatchFromProps => ({
  onClick: () => 
    dispatch<Action>(setVisibilityFilter(ownProps.filter))
});

// tslint:disable-next-line:no-any
const FilterLink: any = connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: true}
)(Link);

export default FilterLink;
