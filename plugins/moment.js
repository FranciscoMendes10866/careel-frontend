import Vue from 'vue'
import VueMoment from 'vue-moment'
import MomentTimezone from 'moment-timezone'
import moment from 'moment'
require('moment/locale/pt')

Vue.use(VueMoment, {
  MomentTimezone,
  moment,
})
