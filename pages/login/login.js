Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {},
    rules: [{
      name: 'username',
      rules: { required: true, message: '用户名必填' },
    }, {
      name: 'password',
      rules: { required: true, message: '密码必填' },
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submitForm() {
    wx.showToast({ title: '登录成功' })
    let userInfo = wx.setStorageSync("userInfo", '1')

    setTimeout(() => {
      wx.switchTab({ url: '/pages/index/index' });
    }, 500)


    // this.selectComponent('#form').validate((valid, errors) => {
    //   if (!valid) {
    //     const firstError = Object.keys(errors)
    //     if (firstError.length) {
    //       this.setData({
    //         error: errors[firstError[0]].message
    //       })

    //     }
    //   } else {
    //     wx.showToast({
    //       title: '校验通过'
    //     })
    //   }
    // })
  }
})