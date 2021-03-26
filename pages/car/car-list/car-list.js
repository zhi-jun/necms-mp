const { request } = require('../../../utils/ajax')

Page({
  data: {
    value: '',
    pageNum: 1,
    pageSize: 6,
    size: 0,
    result: [],
    isLoading: false
  },
  onLoad() {
    this.onSearch()
  },
  onChange(e) {
    this.setData({ value: e.detail, pageNum: 1 });
  },
  onSearch() {
    this.setData({ isLoading: true });
    if (this.data.pageNum == 1)
      this.data.result = []
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
      })
  },
  onNavigateAdd() {
    this.navigate('', '/pages/car/car-add/car-add');
  },
  onNavigateDetail(e) {
    const data = this.data.result[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '/pages/car/car-detail/car-detail?current=' + JSON.stringify(data)
    })
  },
  onNavigateRepair(e) {
    this.navigate(e.currentTarget.dataset.vin, '/pages/car/car-repair/car-repair');
  },
  onNavigateDevice(e) {
    this.navigate(e.currentTarget.dataset.vin, '/pages/car/car-device/car-device');
  },
  onNavigateMap(e) {
    this.navigate(e.currentTarget.dataset.vin, '/pages/map/map-index/map-index');
  },
  onNavigateSignal(e) {
    this.navigate(e.currentTarget.dataset.vin, '/pages/car/car-signal/car-signal');
  },
  navigate(vin, url) {
    wx.setStorage({ key: "vin", data: vin })
    wx.navigateTo({ url: url });
  },
  noop() { },
  onReachBottom() {
    if (this.data.pageNum * this.data.pageSize < this.data.size) {
      this.setData({ pageNum: this.data.pageNum + 1 });
      this.onSearch()
    }
  }
})