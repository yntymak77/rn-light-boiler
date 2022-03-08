// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import FakeView from './FakeView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(FakeView);
