// React 15.0.1

import React from 'react';
import ReactDOM from 'react-dom';
// Getting error "jQuery is not defined" when I put jQuery and Bootstrap at the same time even if I did like this:
// import jQuery from 'jquery';
// const $ = jQuery;
// Since I don't really use jQuery and Bootstrap's JavaScript plugins, leaving it commented out for now.
// More info: https://github.com/twbs/bootstrap/issues/17201
//
// import $ from 'jquery';
// import Bootstrap from 'bootstrap';
import Highlight from 'highlight.js';

Highlight.initHighlightingOnLoad();
