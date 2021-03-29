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
    this.setData({ value: e.detail });
  },
  onSearch() {
    this.setData({ isLoading: true });
    if (this.data.pageNum == 1)
      this.data.result = []
    request({
      url: '/applets/vehicle_device_order_log/findVehicleDeviceOrderLogsByPage',
      data: { vinNo: wx.getStorageSync("vin"), currenPage: this.data.pageNum, pageSize: this.data.pageSize },
      method: 'get'
    },
      res => {
        this.setData({ isLoading: false });
        if (!res || res.code != "00000000") {
          this.setData({ error: res.message })
          return
        }
        this.setData({
          result: this.data.result.concat(res.data.data),
          size: res.data.recordsFiltered
        });
      })
  },
  onReachBottom() {
    if (this.data.pageNum * this.data.pageSize < this.data.size) {
      this.setData({ pageNum: this.data.pageNum + 1 });
      this.onSearch()
    }
  }
})