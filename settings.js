'use strict'

const APP_DIR = __dirname
const EXIT_VU_CMD = `bash ${APP_DIR}/commands/exit_vu_meter.sh || true`
const GPIO = {
  buttons: {
    play: 17,
    shutdown: 3,
//    action: 24,
//    previous: 22,
//    next: 17,
  },
//  leds: {
//    play: 12,
//  },
}

const BUTTONS = [
  {
    pin: GPIO.buttons.play,
    clickCmd: 'volumio toggle',
    holdCmd: {
/*      ifPlay: {
        cmd: `${EXIT_VU_CMD}; node ${APP_DIR}/commands/toggle-stop-after-current.js`,
        once: true,
        async: true,
      },
      ifPause: {
        cmd: `node ${APP_DIR}/commands/play-playlist.js "$(cat ${APP_DIR}/commands/selected-playlist.txt)"`,
        once: true,
        long: true,
      },
*/      
    },
  },
  {
    pin: GPIO.buttons.shutdown,
    clickCmd: 'systemctl poweroff',
    holdCmd: {cmd: 'systemctl reboot 6', once: true},
  },
/*
  {
    pin: GPIO.buttons.action,
    clickCmd: EXIT_VU_CMD,
    holdCmd: [
      `${EXIT_VU_CMD}; volumio repeat`,
      'volumio repeat',
      'volumio repeat && volumio random',
    ],
  },
  {
    pin: GPIO.buttons.previous,
    clickCmd: 'volumio previous',
    holdCmd: {
      ifPlay: 'volumio seek minus',
      ifPause: {
        cmd: `node ${APP_DIR}/commands/select-playlist.js prev`,
        once: true,
      },
    },
  },
  {
    pin: GPIO.buttons.next,
    clickCmd: 'volumio next',
    holdCmd: {
      ifPlay: 'volumio seek plus',
      ifPause: {
        cmd: `node ${APP_DIR}/commands/select-playlist.js next`,
        once: true,
      },
    },
  },
*/
]

module.exports = {
  BUTTONS,
  GPIO,
  REPEAT_DELAY: 750,
}
