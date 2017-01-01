// React 15.0.1

// Getting error "jQuery is not defined" when I put jQuery and Bootstrap at the same time even if I did like this:
// import jQuery from 'jquery';
// const $ = jQuery;
// Since I don't really use jQuery and Bootstrap's JavaScript plugins, leaving it commented out for now.
// More info: https://github.com/twbs/bootstrap/issues/17201
//
import $ from 'jquery';
// import Bootstrap from 'bootstrap';
import Highlight from 'highlight.js';

Highlight.initHighlightingOnLoad();

var path = "fixture.jp" + $(".hb-button.http a").attr("href")
var hb_url = "http://b.hatena.ne.jp/entry/" + path
var hb_count_img = "http://b.hatena.ne.jp/entry/image/http://" + path
$(".hb-button.http small a").attr("href", hb_url)
$(".hb-button.http small a").append('<img src="' + hb_count_img + '" />')
