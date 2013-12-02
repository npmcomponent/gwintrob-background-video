var path = require('path'),
    toArray = require('to-array'),
    forEach = require('for-each');

module.exports = BackgroundVideo;

function BackgroundVideo(el, srcs) {
  var video = document.createElement('video');
  video.loop = true;
  video.muted = true;
  video.autoplay = true;

  forEach(toArray(srcs), function(src) {
    var source = document.createElement('source');
    source.src = src;
    source.type = 'video/' + path.extname(src).replace('.', '');

    video.appendChild(source);
  });

  el.appendChild(video);
}
