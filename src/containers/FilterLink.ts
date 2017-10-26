import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

interface StateFromProps {
  active: boolean;
  // filter: string;
}

interface DispatchFromProps {
  onClick: () => void;
}

export interface Props extends StateFromProps, DispatchFromProps {}

const mapStateToProps = (state, ownProps): StateFromProps => ({
  active: ownProps.filter === state.visibilityFilter,
  // filter: state.visibilityFilter
});

// tslint:disable:no-any
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps): DispatchFromProps => ({
  onClick: () => {
    dispatch<any>(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink: any = connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: true}
)(Link);

export default FilterLink;
