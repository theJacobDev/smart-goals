export default function (link) {
  const shell = require('electron').shell
  shell.openExternal(link)
}
