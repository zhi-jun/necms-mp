var util = require('../../utils/util.js')

Page({
  data: {
    showCalendar: false,
    dateRange1: [],
    dateRange2: [],
    value1: 0,
    result: [
      { no: 'xxxxxsdsdsd', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'xxxxxsdsds111d', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'xxxxxsdsds111d', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'xxxxxsdsds111d', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'xxxxxsdsds111d', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'xxxxxsdsds111d', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'xxxxxsdsds111d', org: '企业+下级', group: '所属分组：', cardType: '', cardNo: '车牌号', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' }
    ]
  },
  onLoad() {
    this.setData(this.data);
  },

  onConfirm() {
    this.selectComponent('#item').toggle();
  },

  onSwitch1Change({ detail }) {
    this.setData({ switch1: detail });
  },

  onSwitch2Change({ detail }) {
    this.setData({ switch2: detail });
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    if (!this.data.value)
      return
    console.log('搜索' + this.data.value);
  },
  onCalendarShow() {
    this.setData({ showCalendar: true });
  },
  onConfirm(e) {
    this.setData({
      dateRange1: e.detail.map(date => util.formatDate(new Date(date.valueOf()))),
      showCalendar: false
    });
  },
  onClosed() {
    this.setData({ showCalendar: false });
  }
})