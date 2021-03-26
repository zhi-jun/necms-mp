const { request } = require('../../../utils/ajax')

Page({
  data: {
    dataCenterVo: {
      totalCar: 0, // 总车辆
      runDurationStr: 0, // 行驶总时长
      dayRunDurationStr: 0, // 今日总时长
      chargingCount: 0, // 充电总次数
      chargingDurationStr: 0, // 充电总时长
      dayMileage: 0, // 今日总里程
      totalDistance: 0, // 行驶总里程
      totalCarbon: 0 // 减排量
    }
  },
  onShow: function () {
    request({
      url: '/applets/data_center/findDataCenterVo',
      data: {},
      method: 'get'
    },
      res => {
        if (res.code != "00000000") {
          this.setData({ error: res.message })
          return
        }
        this.setData({ dataCenterVo: res.data })
      })
  },
  jump2Detail(e) {
    wx.setStorage({ key: "dataCenterType", data: e.currentTarget.dataset.type })
    wx.navigateTo({ url: '/pages/data-center/data-center-list/data-center-list' });
  }
})