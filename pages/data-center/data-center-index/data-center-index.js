const { request } = require('../../../utils/ajax')

Page({
  data: {
    dataCenterVo: {}
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
  jump2Detail() {
    wx.navigateTo({ url: '/pages/data-center/data-center-list/data-center-list' });
  }
})