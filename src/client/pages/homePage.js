import React, {Component} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends Component {

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - React Starter Kit`}</title>
        </Helmet>
      );
    }

    render() {
      return (
        <section className="homePage_wrap">
          {this.head()}
          <div className="hero">
            <div className="content_wrap">
              <h1>
                WELCOME TO NATION MEDIA
              </h1>
              <span className="msg">
                Nation Media is a news WebApp that selects latest and best news from multiple national and international sources and summaries them to present in a short and crisp format. All summarized stories contain only headlines and facts, no opinions, to help you stay informed of the current affairs. Whether it’s the latest government policies or shakeups in Bollywood, we get them covered and delivered super fast! Get updated with the latest news and current affairs in a jiffy!
              </span>
              <Link to="/about">
                <span>Learn more</span>
              </Link>
            </div>
            <div className="pageScroll">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="main">
            <div className="spotlights">
              <div className="grid">
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB10ZW8jPZPTPBpX2uyPKkkXTc4TG4e9SxTdRVXK410VppykY_4Q" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsXtR7h3ALfssinIg4nMKpZqluA48kP8zhz4bdvycad9j-7pJ" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFvwtklq3uYP3ObwKf04kT1O7GW-1SoYeTrSCp-vQf-tWRYar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default {
  component: HomePage
};
