import moment from 'moment'

export default class Goal {
  constructor (params) {
    this.specific = params.specific || ''
    this.measurables = params.measurables || []
    this.achievables = params.achievables || []
    this.relevant = params.relevant || ''
    this.timebound = params.timeBound || moment().toDate()
    this.created_at = moment().toDate()
  }
}
