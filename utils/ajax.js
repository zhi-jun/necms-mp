const baseUrl = "http://0.0.0.0"

// 封装request请求
const request = (options, cb) => {
  //url
  if (options.url.indexOf('http') != 0) {
    options.url = baseUrl + options.url;
  }

  //执行微信的请求
  wx.request(
    {
      ...options,
      header: {
        'token': wx.getStorageSync('token')
      },
      success(res) {
        if (res.statusCode === 401)
          wx.redirectTo({ url: '/pages/login/login' });
        let dataStr = JSON.stringify(options.data);
        if (cb)
          cb(res)
      },
      fail(res) {
        wx.showToast({ icon: 'error', title: '请求失败' })
      }
    }
  );
}

module.exports = {
  request
}