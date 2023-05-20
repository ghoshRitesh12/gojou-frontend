import Hls from "hls.js";
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';

artplayerPluginHlsQuality()

export const getPlyrOptions = (hlsRef) => {
  const availableQualities = hlsRef.levels.map(l => l.height)

  const plyrOptions = {
    controls: [
      'rewind', 'play', 'play-large', 'fast-forward', 'progress',
      'current-time', 'duration', 'mute', 'volume',
      'captions', 'settings', 'pip', 'airplay', 'fullscreen',
    ],
    settings: ['captions', 'quality', 'speed'],
    invertTime: true,
    toggleInvert: false,
    keyboard: {
      focused: true, global: true,
    },
    ratio: '16:9',
    speed: {
      selected: 1,
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
    },
    storage: { enabled: true, key: 'gojou-preferences' },
    tooltips: { controls: true, seek: true },
    captions: {
      active: true,
      language: 'auto',
      update: true
    },
    quality: {
      default: availableQualities[0],
      options: availableQualities,
      forced: true,
      onChange: (newQuality) => {
        for (const [levelIndex, level] of hlsRef.levels.entries()) {
          if (level.height === newQuality)
            hlsRef.currentLevel = levelIndex;
        }
      }
    },
    debug: false

  };

  return plyrOptions;

}


export const artPlayerOptions = {
  cssVar: {
    "--art-border-radius": ".5rem",
    "--art-progress-height": ".38rem"
  },
  moreVideoAttr: {
		crossOrigin: 'anonymous',
	},
  plugins: [
    artplayerPluginHlsQuality({

      // Show quality in setting
      setting: true,

      // Get the resolution text from level
      getResolution: (level) => level.height + 'p',

      // I18n
      title: 'Quality',
      auto: 'Auto',
    }),
  ],
  customType: {
    m3u8: function playM3u8(video, url, art) {
      if (Hls.isSupported()) {
        if (art.hls) art.hls.destroy();
        
        const hls = new Hls();
        hls.subtitleDisplay = true;
        hls.recoverMediaError();
        hls.loadSource(url);
        hls.attachMedia(video);

        art.hls = hls;
        art.on('destroy', () => hls.destroy());

      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
      } else {
        art.notice.show = 'Unsupported playback format: m3u8';
      }
    }
  },
}

