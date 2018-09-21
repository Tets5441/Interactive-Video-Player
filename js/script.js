// video controls

$('video').mediaelementplayer({
    features: ['playpause', 'tracks', 'progress', 'fullscreen', 'volume']
});

// highlight transcript to match video 

const vid = document.getElementsByTagName('video')[0];
let caps = document.getElementsByTagName('span');

vid.ontimeupdate = () => {
  for (let i = 0; i <= caps.length; i ++) {
    const sync = vid.currentTime;
    if (sync > caps[i].getAttribute("data-start")
    && sync < caps[i].getAttribute("data-end")) {
      caps[i].style.background = "#f4ee42";
    }
    else {
      caps[i].style.background = "";
    }
  }
};



 