Page({
  data: {
    showTopTips: false,
    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
    formData: {},
    rules: [{
      name: 'qq',
      rules: { required: true, message: 'qq必填' },
    }, {
      name: 'mobile',
      rules: [{ required: true, message: 'mobile必填' }, { mobile: true, message: 'mobile格式不对' }],
    }, {
      name: 'idcard',
      rules: {
        validator: function (rule, value, param, modeels) {
          if (!value || value.length !== 18) {
            return 'idcard格式不正确'
          }
        }
      },
    }]
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  submitForm() {
    wx.showToast({ title: '添加成功' })

    setTimeout(() => {
      wx.redirectTo({ url: '/pages/car-list/car-list' });
    }, 500)

    // this.selectComponent('#form').validate((valid, errors) => {
    //   console.log('valid', valid, errors)
    //   if (!valid) {
    //     const firstError = Object.keys(errors)
    //     if (firstError.length) {
    //       this.setData({
    //         error: errors[firstError[0]].message
    //       })

    //     }
    //   } 
    // })
  }
});