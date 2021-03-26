const { request } = require('../../../utils/ajax')

Page({
  data: {
    value: '',
    pageNum: 0,
    pageSize: 6,
    size: 0,
    result: [],
    isLoading: false
  },
  onLoad() {
    this.onSearch()
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
    this.setData({ isLoading: true });
    request({
      url: '/applets/vehicle_info/findVehicleInfosByPage',
      data: { vin: this.data.value, currenPage: this.data.pageNum, pageSize: this.data.pageSize },
      method: 'get'
    },
      res => {
        this.setData({ isLoading: false });
        if (res.code != "00000000") {
          this.setData({ error: res.message })
          return
        }
        this.setData({
          result: this.data.result.concat(res.data.data),
          size: res.data.recordsFiltered
        });
        console.log('************1111', res);
      })
  },
  onNavigateAdd() {
    wx.navigateTo({ url: '/pages/car/car-add/car-add' });
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
  onNavigateSignal() {
    wx.navigateTo({ url: '/pages/car/car-signal/car-signal' });
  },
  noop() { },
  onReachBottom() {
    if (this.data.pageNum * this.data.pageSize < this.data.size) {
      this.setData({
        pageNum: this.data.pageNum + 1,
      });
      this.onSearch()
    }
  }
})