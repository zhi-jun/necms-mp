Page({
  data: {
    value: '',
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
  onNavigateDetail() {
    wx.navigateTo({ url: '/pages/car/car-detail/car-detail' });
  },
  onNavigateRepair() {
    wx.navigateTo({ url: '/pages/car/car-repair/car-repair' });
  },
  onNavigateDevice() {
    wx.navigateTo({ url: '/pages/car/car-device/car-device' });
  },
  onNavigateMap() {
    wx.navigateTo({ url: '/pages/map/map-track/map-track' });
  },
  noop() { },
  onReachBottom() {
    console.log('************', 111);
  }
})