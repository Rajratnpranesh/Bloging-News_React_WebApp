import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';

class Privacy extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "privacyPolicyPage"}}>
                <title>{`Privacy policy - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render(){

        return (

            <div>
                {this.head()}
                <InternalTextBanner Heading="Privacy policy" wrapperClass="privacyPolicy_banner" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        Privacy policy notice
                                    </h2>
                                    <p> Please read this privacy policy before using the site or submitting any personal information. By using the site, you are accepting the practices described in this privacy policy. These practices may be changed, but any changes will be posted and changes will only apply to activities and information on a going forward, not retroactive basis. You are encouraged to review the privacy policy whenever you visit the site to make sure that you understand how any personal information you provide will be used </p>
                                    <p> Note, the privacy practices set forth in this privacy policy are for this web site only. If you link to other web sites, please review the privacy policies posted at those sites.</p>
                                    <p> We collect personally identifiable information, like names, postal addresses, email addresses, etc., when voluntarily submitted by our visitors. The information you provide is used to fulfill your specific request. This information is only used to fulfill your specific request, unless you give us permission to use it in another manner, for example to add you to one of our mailing lists.</p>
                                    <p> The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology, however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties </p>
                                    <p> If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below: </p>
                                    <p> E-mail : raj.ratm18@gmail.com </p>
                                    <p> We reserve the right to make changes to this policy. Any changes to this policy will be posted. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
      );

    }
}

export default {
  component: Privacy
};
