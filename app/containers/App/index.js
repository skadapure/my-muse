/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import DisclosurePage from 'containers/DisclosurePage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Subscribe from 'components/Subscribe';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Eggless Recipies"
          defaultTitle="Eggless Recipies"
        >
          <meta name="description" content="A recipe site for eggless baking" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/recepies" component={FeaturePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/disclosure" component={DisclosurePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Subscribe />
        <Footer />
      </AppWrapper>
    </div>
  );
}
