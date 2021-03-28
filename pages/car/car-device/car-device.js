const { request } = require('../../../utils/ajax')

Page({
  data: {
    vehData:{},
    vehDescData:{}
  },
  onShow: function (options) {
    this.queryDevice()
  },
  queryDevice(){
    request({
      url: '/applets/monitor/findCarDetail',
      data: { veh:wx.getStorageSync('vin')},
      method: 'get'
    },
      res => {
        this.setData({ isLoading: false });
        if (res.code != "00000000") {
          return
        }
        this.setData({
          vehData: res.data.vehData,
          vehDescData: res.data.vehDescData
        });
      })
  }
})