//接口地址host
const baseUrl = "https://xny.leadu.com.cn"

var isLoading = false //防止重复提交

function loading(isShow) {
  isLoading = isShow
  if (isShow)
    wx.showLoading({ title: '加载中' })
  else
    wx.hideLoading()
}

// 封装request请求
const request = (options, cb) => {
  if (isLoading)
    return

  let isShowLoading = options.method.toLowerCase() == 'post'
  loading(isShowLoading)

  //url
  if (options.url.indexOf('http') != 0) {
    options.url = baseUrl + options.url;
  }

  //执行微信的请求
  wx.request(
    {
      ...options,
      header: {
        'tokenId': wx.getStorageSync('tokenId')
      },
      success(res) {
        loading(false)
        if (res.statusCode === 401) {
          wx.redirectTo({ url: '/pages/login/login' });
          return
        }
        // console.log('************1', res.data.data);
        // if (res.data.data) {
        //   for (const key in res.data.data) {
        //     console.log('************2', res.data.data[key]);
        //     if (res.data.data[key] == null) {
        //       res.data.data[key] = ''
        //     }
        //   }
        // }
        setEmpty(res.data)
        if (cb)
          cb(res.data)
      },
      fail(res) {
        loading(false)
        wx.showToast({ icon: 'error', title: '请求失败' })
        if (cb)
          cb(res)
      }
    }
  );
}

//null => ''
function setEmpty(data) {
  if (data == null)
    return
  if (data.length > 0) //列表不处理
    return
  for (const k in data) {
    if (data[k] == null) {
      data[k] = ''
    }
    else if (typeof (data[k] == 'object'))
      setEmpty(data[k])
  }
}

module.exports = {
  request
}