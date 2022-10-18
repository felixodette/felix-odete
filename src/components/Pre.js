import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */

function Pre(props) {
  return <div id={props.load ? 'preloader' : 'preloader-none'} />;
}

Pre.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Pre;
