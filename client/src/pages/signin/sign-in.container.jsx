import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsUserLoading } from '../../redux/user/user.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SignInPage from './sign-in-page.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsUserLoading(state)
});

const SignInPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SignInPage);

export default SignInPageContainer;