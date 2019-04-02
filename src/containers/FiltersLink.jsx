import { connect } from 'react-redux';
import { setVisibilityFilter } from 'actions';
import Link from 'Components/Footer/Filters/Link';

const mapStateToprops = (state, ownProps) => ({
  active: ownProps.filter === state.VisibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
  mapStateToprops,
  mapDispatchToProps,
)(Link);
