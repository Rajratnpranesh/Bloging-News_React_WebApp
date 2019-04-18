import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';

class CookiesPolicy extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "cookiesPolicyPage"}}>
                <title>{`Cookies policy - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render(){

        return (

            <div>
                {this.head()}
                <InternalTextBanner Heading="Cookies Policy" wrapperClass="cookiesPolicy_banner" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        Cookies policy notice
                                    </h2>
                                    <p> The character and philosophy of the Nation Media Group’s news and information outlets are shaped by the editorial guidelines and objectives outlined below. These have been discussed and adopted by the shareholders of Nation Media Group, and comprise the broad rules governing all editorial content in our media platforms.</p>
                                    <p> Divided into four parts, they deal with broad and specific issues of policy, professional, operational and administrative guidelines as well as journalistic conduct in the sourcing and compilation of news, features, documentaries as well as editorials and commentaries.</p>
                                    <p> While placing obligations on the Group and every member of the editorial staff, they require the unmitigated personal and philosophical commitment of all editorial executives and staff.</p>
                                    <p> The Board of NMG's Editorial Committee, as well as the respective boards of the Group’s subsidiary media companies, are mandated to meet regularly to monitor progress in the achievement of these objectives and the policy guidelines as established and required by both the Group’s Board and shareholders.</p>
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
  component: CookiesPolicy
};
