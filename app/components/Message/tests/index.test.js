/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';
import Detail from 'components/MessageDetail';
import Play from 'components/Play';

import messages from '../../../containers/DisclosurePage/messages';
import Message from '../index';
import H4 from '../H4';
const renderComponent = (props) => shallow(
  <Message header={props.header} details={props.general} src="https://s3/somebucker/someaudio.mp3">
  </Message>
);

const anotherComponent = (props) => shallow(
  <Message header={props.header} details={props.general} >
  </Message>
);
describe('Message Component', () => {
  it('should render a message article', () => {
    const renderedComponent = renderComponent(messages);
    expect(renderedComponent.find('article').length).toBe(1);
    expect(renderedComponent.find(H4).length).toBe(1);
    expect(renderedComponent.find(Detail).length).toBe(1);
    expect(renderedComponent.find(Play).length).toBe(1);
    // TODO: fix detail formatted message assertion
    // expect(renderedComponent.contains(
    //   <article>
    //     <H4>
    //       <FormattedMessage {...messages.header} />
    //     </H4>
    //     <Detail>
    //       <div style={{ display: 'flex' }}>
    //         <div style={{ flex: '1 1 auto' }}>
    //           <div style={{ fontColor: 'red', marginLeft: '-0.45rem' }}>
    //             <Play isVoiceEnabled={undefined} setCurrent={undefined} url="https://s3/somebucker/someaudio.mp3" />
    //           </div>
    //         </div>
    //         <div style={{ flex: '1 1 auto' }}>
    //           <p>
    //             <FormattedMessage />
    //           </p>
    //         </div>
    //       </div>
    //     </Detail>
    //   </article>
    // )).toBe(true);
  });
  it('should render a message article with out play', () => {
    const renderedComponent = anotherComponent(messages);
    expect(renderedComponent.find('article').length).toBe(1);
    expect(renderedComponent.find(H4).length).toBe(1);
    expect(renderedComponent.find(Detail).length).toBe(1);
    expect(renderedComponent.find(Play).length).toBe(0);
    // TODO: fix detail formatted message assertion
    // expect(renderedComponent.contains(
    //   <article>
    //     <H4>
    //       <FormattedMessage {...messages.header} />
    //     </H4>
    //     <Detail>
    //       <div style={{ display: 'flex' }}>
    //         <div style={{ flex: '1 1 auto' }}>
    //           <div style={{ fontColor: 'red', marginLeft: '-0.45rem' }}>
    //             <Play isVoiceEnabled={undefined} setCurrent={undefined} url="https://s3/somebucker/someaudio.mp3" />
    //           </div>
    //         </div>
    //         <div style={{ flex: '1 1 auto' }}>
    //           <p>
    //             <FormattedMessage />
    //           </p>
    //         </div>
    //       </div>
    //     </Detail>
    //   </article>
    // )).toBe(true);
  });
});
