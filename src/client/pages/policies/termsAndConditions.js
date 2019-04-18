import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';

class TermsAndConditions extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "termsAndConditionsPage"}}>
                <title>{`Terms and conditions - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render(){

        return (

            <div>
                {this.head()}
                <InternalTextBanner Heading="Terms and conditions" wrapperClass="termsAndConditions_banner" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        Terms and Conditions of Use
                                    </h2>
                                    <p> Introduction: document governs website use; consent to website document: implied; consent to website terms and conditions: express; website user minimum age; cookie consent </p>
                                    <p> Copyright notice: UCC copyright notice; ownership of rights in website. </p>
                                    <p> Licence to use website: licence to use website; no downloading; website use: permitted purposes; no modification of website content; limitations on licence to use website; redistributable content; restriction of access to website. </p>
                                    <p> News: articles may not reflect publisher views. </p>
                                    <p> RSS feed: access to RSS feed; accessing RSS and acceptance of document; RSS licence; RSS licence condition; revocation of RSS licence. </p>
                                    <p> Registration and accounts: account eligibility; account registration process; no other person permitted to use account; notify on misuse of account; use of another's account. </p>
                                    <p> Third party rights: third party rights: benefit; third party rights: exercise of rights. </p>
                                    <p> Statutory and regulatory disclosures: ecommerce regulations: trade register; ecommerce regulations: authorisation scheme; ecommerce regulations: professionals; ecommerce regulations: code of conduct; value added tax number </p>
                                    <p> Our details: website operator name; company registration details; place of business; contact information. </p>
                                    <p> Limited warranties: no warranties for information; right to discontinue website publication; no implied warranties or representations relating to website. </p>
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
  component: TermsAndConditions
};
