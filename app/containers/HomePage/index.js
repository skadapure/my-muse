/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H3 from 'components/H3';
import A from 'components/A';
import MainMessage from 'components/MainMessage';
import Section from './Section';
import Img from './Img';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import egglessPancakes from '../../recipes/eggless-pancakes';
// import pancake from egglessPancakes.image;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    min-height: 200px;
  }
  @media (min-width: 750px) {
    flex-direction: row;
    max-height: 150px;
  }
`;

const RecipeText = styled.div`
  flex: 1 1 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  @media (min-width: 750px) {
    margin-left: 1rem;
    margin-top: 0;
  }
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      firstRecipe: egglessPancakes,
      firstRecipePath: egglessPancakes.path,
    };
  }
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Non Eggetarian</title>
          <meta name="description" content="Eggless recipes homepage" />
        </Helmet>
        <div>
          <MainMessage header={messages.startProjectHeader} detail={messages.startProjectMessage} />
          <Section style={{ marginBottom: '1rem', marginTop: '0' }}>
            <H3 style={{ marginBottom: '1rem', marginTop: '0' }}>
              <FormattedMessage {...messages.trymeHeader} />
            </H3>
          </Section>
          <Div>
            <Img image={this.state.firstRecipe.image} />
            <RecipeText>{this.state.firstRecipe.shortDescription}<A href={this.state.firstRecipePath} style={{ marginLeft: '1rem' }}>show more...</A></RecipeText>
          </Div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
