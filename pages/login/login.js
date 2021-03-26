const { request } = require('../../utils/ajax')

Page({
  data: {
    formData: { userName: '', userPassword: '' }
  },
  onLoad: function (options) {
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  submitForm() {
    if (!this.data.formData.userName) {
      this.setData({ error: '用户名必填' })
      return
    }

    if (!this.data.formData.userPassword) {
      this.setData({ error: '密码必填' })
      return
    }

    request({
      url: '/applets/sys_user/login',
      data: this.data.formData,
      method: 'POST'
    },
      res => {
        if (res.code != "00000000") {
          this.setData({ error: res.message })
          return
        }
        wx.showToast({ title: '登录成功' })
        // wx.setStorageSync("tokenId", res.data.tokenId)
        wx.setStorage({ key: "tokenId", data: res.data.tokenId })
        wx.setStorage({ key: "groupCode", data: res.data.groupCode })
        setTimeout(() => {
          // wx.switchTab({ url: '/pages/home/home' });
          wx.switchTab({ url: '/pages/car/car-list/car-list' });
        }, 300)
      }, this)
  }
})