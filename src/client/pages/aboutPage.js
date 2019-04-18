import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import classNames from 'classnames';
import MeetTheTeamSlider from './../components/banners/meetTheTeam';
import { Helmet } from 'react-helmet';

class About extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "aboutPage"}}>
              <title>{`About - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render() {

        return (
            <div>
                {this.head()}
                <InternalTextBanner Heading="About" wrapperClass="about" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                <div className="main anim-appear">
                    <div className="aboutPage_wrapper">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        NATION MEDIA
                                    </h2>
                                    <p>Nation Media is a news WebApp that selects latest and best news from multiple national and international sources and summaries them to present in a short and crisp format.</p>
                                    <p> All summarized stories contain only headlines and facts, no opinions, to help you stay informed of the current affairs.</p>
                                    <p> Whether it’s the latest government policies or shakeups in Bollywood, we get them covered and delivered super fast! </p>
                                    <p>  Get updated with the latest news and current affairs in a jiffy! </p>
                                </div>
                                <MeetTheTeamSlider />
                            </div>
                        </div>
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }

};

export default {
  component: About
};
