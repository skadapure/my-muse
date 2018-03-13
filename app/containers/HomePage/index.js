/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H3 from 'components/H3';
import RecipeBrief from 'components/RecipeBrief';
import MainMessage from 'components/MainMessage';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import egglessPancakes from '../../recipes/eggless-pancakes';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <RecipeBrief recipeDetails={egglessPancakes} />
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

export default HomePage;
