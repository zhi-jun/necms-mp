
Page({
  data: {
    showCalendar: false,
    minDate: new Date(2021, 0, 1).getTime(),
    maxDate: new Date().getTime(),
    dateRange1: [new Date(new Date() - 7 * 24 * 3600 * 1000).getTime(), new Date().getTime()],
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
      dateRange1: e.detail.map(date => new Date(date.valueOf()).getTime()),
      showCalendar: false
    });
  },
  onClosed() {
    this.setData({ showCalendar: false });
  }
})