import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import imgPlaceholder from './img-placeholder-dark.jpg';
import './Miscellaneous.scss';

const Miscellaneous = ({ t }) => (
  <section id="miscellaneous">
    <div className="container">
      <div className="card-columns">
        <div className="card">
          <img src={imgPlaceholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This
                content is a little bit longer.
            </p>
          </div>
        </div>
        <div className="card p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card">
          <img src={imgPlaceholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                This card has supporting text below as a natural lead-in to additional
                content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card bg-primary text-white text-center p-3">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer className="blockquote-footer text-white">
              <small>
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{t('test')}</h5>
            <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={imgPlaceholder} className="card-img-top" alt="..." />
        </div>
        <div className="card p-3 text-right">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is another card with title and supporting text below. This card has some
              additional content to make it slightly taller overall.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Miscellaneous.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Miscellaneous);
