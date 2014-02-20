var each = require('component-each');
var path = require('component-path');
var toArray = require('timoxley-to-array');

module.exports = BackgroundVideo;

/**
 * [BackgroundVideo Add background video from a source or sources to any element]
 * @param {DOM element} el [DOM element to apply background video to]
 * @param {string or array of strings} srcs [video sources for background video]
 */
function BackgroundVideo(el, srcs) {
  var video = document.createElement('video');
  video.loop = true;
  video.muted = true;
  video.autoplay = true;

  each(toArray(srcs), function(src) {
    var source = document.createElement('source');
    source.src = src;
    source.type = 'video/' + path.extname(src).replace('.', '');

    video.appendChild(source);
  });

  el.appendChild(video);
}
