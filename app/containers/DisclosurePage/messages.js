/*
 * AboutPage Messages
 *
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  audios: [
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/1.mp3',
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/2.mp3',
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/3.mp3',
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/4.mp3',
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/5.mp3',
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/6.mp3',
    'https://s3.amazonaws.com/noneggatarian-audio/Testing/7.mp3',
  ],
  header: {
    id: 'boilerplate.containers.DisclosurePage.header',
    defaultMessage: 'Disclosure',
  },
  general: {
    id: 'boilerplate.containers.DisclosurePage.general',
    defaultMessage: 'This Privacy Policy governs the manner in which Non-Eggetarian collects, uses, maintains and discloses information collected from users of the http://noneggetarian.com website (“Site”). This privacy policy applies to the Site and all products and services offered by the Site.',
  },
  personal: {
    id: 'boilerplate.containers.DisclosurePage.personal',
    defaultMessage: 'We may collect personal identification information from Users in a variety of ways in connection with activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_pii.mp3',
    step: 0,
  },
  personalHeader: {
    id: 'boilerplate.containers.DisclosurePage.personalHeader',
    defaultMessage: 'Personal identification information',
  },
  nonpersonal: {
    id: 'boilerplate.containers.DisclosurePage.nonpersonal',
    defaultMessage: 'We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_npii.mp3',
    step: 1,
  },
  nonpersonalHeader: {
    id: 'boilerplate.containers.DisclosurePage.nonpersonalHeader',
    defaultMessage: 'Non-personal identification information',
  },
  cookies: {
    id: 'boilerplate.containers.DisclosurePage.cookies',
    defaultMessage: 'Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_cookies.mp3',
    step: 2,
  },
  cookiesHeader: {
    id: 'boilerplate.containers.DisclosurePage.cookiesHeader',
    defaultMessage: 'Web browser cookies',
  },
  protect: {
    id: 'boilerplate.containers.DisclosurePage.collect',
    defaultMessage: 'We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_protect.mp3',
    step: 3,
  },
  protectHeader: {
    id: 'boilerplate.containers.DisclosurePage.protectHeader',
    defaultMessage: 'How we protect your information',
  },
  share: {
    id: 'boilerplate.containers.DisclosurePage.share',
    defaultMessage: 'We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_share.mp3',
    step: 4,
  },
  shareHeader: {
    id: 'boilerplate.containers.DisclosurePage.shareHeader',
    defaultMessage: 'Sharing your personal information',
  },
  thirdParty: {
    id: 'boilerplate.containers.DisclosurePage.thirdParty',
    defaultMessage: 'Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies. We use third-party advertising companies to serve ads when you visit our Web site. These companies may use aggregated information (not including your name, address, email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_tpw.mp3',
    step: 5,
  },
  thirdPartyHeader: {
    id: 'boilerplate.containers.DisclosurePage.thirdPartyHeader',
    defaultMessage: 'Third party websites',
  },
  advertise: {
    id: 'boilerplate.containers.DisclosurePage.advertise',
    defaultMessage: 'Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_adv.mp3',
    step: 6,
  },
  advertiseHeader: {
    id: 'boilerplate.containers.DisclosurePage.advertiseHeader',
    defaultMessage: 'Advertising',
  },
  notice: {
    id: 'boilerplate.containers.DisclosurePage.notice',
    defaultMessage: 'We allow third party companies to serve ads and/or collect certain anonymous information when you visit our Web site.  These companies may use non-personally identifiable information (e.g. click stream information, browser type, time and date, subject of advertisements clicked or scrolled over) during your visits to this and other Web sites in order to provide advertisements about goods and services likely to be of greater interest to you.  These companies typically use a cookie or third party web beacon to collect this information.',
    audio: 'https://s3.amazonaws.com/noneggatarian-audio/disclosure/disclosure_notice.mp3',
    step: 7,
  },
  noticeHeader: {
    id: 'boilerplate.containers.DisclosurePage.noticeHeader',
    defaultMessage: 'Notice Regarding Online behavioural Advertising',
  },
});
