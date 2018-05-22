import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

export default {
  goals: new Datastore({
    autoload: true,
    filename: path.join(remote.app.getPath('userData'), '/goals.db')
  }),
  settings: new Datastore({
    autoload: true,
    filename: path.join(remote.app.getPath('userData'), '/settings.db')
  })
}
