import Vue from 'vue'
import moment from 'moment';
moment.locale('es');

Vue.filter('formatDate', function (value) {
    return moment(value).format('LL');
})

Vue.filter('format_currency', function (value) {
    value = Math.round(value * 10) / 10
    const options2 = { style: 'currency', currency: 'USD' };
    const numberFormat2 = new Intl.NumberFormat('en-US', options2);
    value = numberFormat2.format(value)
    
    return value
  })