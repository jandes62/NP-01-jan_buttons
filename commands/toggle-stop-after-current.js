const {execSync} = require('child_process')
const FILENAME = '/stop-after-current.js'

const ids = execSync(`ps ax | grep "${FILENAME}"  | grep -v grep | awk '{print $1}'`)
  .toString()
  .split('\n')
  .filter((x) => x)

if (ids.length) {
  // already on
  ids.forEach((id) => {
    try {
      execSync(`kill ${id}`)
    } catch (e) {}
  })
  const socket = require('socket.io-client').connect('http://localhost:3000')
  socket.emit('pushToastMessage', {type: 'info', title: 'Stop after current', message: 'Off'})
  process.exit()
} else {
  // off
  execSync(`node ${__dirname}/${FILENAME}`)
}
