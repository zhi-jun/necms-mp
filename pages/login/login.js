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
      url: '/xxx',
      data: this.data.formData,
      method: 'POST'
    },
      res => {
        wx.showToast({ title: '登录成功' })
        wx.setStorageSync("token", res.tokenId)
        setTimeout(() => {
          wx.switchTab({ url: '/pages/home/home' });
        }, 300)
      })
  }
})