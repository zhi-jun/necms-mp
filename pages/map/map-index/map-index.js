// pages/map/map.js
import Dialog from '@vant/weapp/dialog/dialog'
const { request } = require('../../../utils/ajax')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isDisabled: false,
    markers: [],
    mapInfo: {
      cardNo: '',
      vehicleType: '',
      lat: '',
      lng: '',
      plat: '',
      plon: '',
      status: '',
      lastTime: '',
      address: ''
    },
    orderType: '',
    password: '',
    show: false,
    errmsg: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.queryLocation()

  },
  jumpTo() {
    console.log('============')
    wx.navigateTo({
      url: '/pages/map/map-track/map-track',
    })
  },
  queryLocation() {
    request({
      url: '/applets/monitor/findNewMonitor',
      data: { veh: wx.getStorageSync('vin') },
      method: 'get'
    },
      res => {
        if (res.code != "00000000") {
          this.setData({
            isDisabled: true
          })
          Dialog.alert({
            message: res.message,
            confirmButtonText: '返回'
          }).then(() => {
            setTimeout(function () { wx.navigateBack({ delta: 1 }); }, 200);
          });
          return
        }

        const car = res.data
        this.setData({
          mapInfo: {
            cardNo: car.veh,
            vehicleType: car.vehicleType,
            lat: car.lat,
            lng: car.lng,
            plat: car.plat,
            plon: car.plon,
            status: car.gpsStatus,
            lastTime: car.gtime,
            address: car.addr
          },
          markers: [{
            id: 1,
            latitude: car.lat,
            longitude: car.lng,
            width: 25,
            height: 30,
            callout: {
              content: car.addr,
              padding: 10,
              borderRadius: 2,
              display: 'ALWAYS',
              bgColor: '#1989fa',
              color: '#fff'
            },
          }]
        })
      })
  },

  /**
   * 一键解锁车
   */
  handleBind(e) {
    const type = e.currentTarget.dataset.optype
    this.setData({
      show: true,
      orderType: type
    })
  },
  handleSubmit() {
    if (!this.data.password) {
      return false
    }

    request({
      url: '/applets/monitor/carOrderSend',
      data: { veh: 'LBVKY5103JSP0000', orderType: this.data.orderType, orderPassword: this.data.password },
      method: 'post'
    },
      res => {
        if (res.code != "00000000") {
          this.setData({
            errmsg: res.message
          })
          return
        }

        this.setData({
          password: '',
          errmsg: '',
          show: false
        })
      })
  },
  onChangePSD(event) {
    this.setData({
      password: event.detail
    })
  },
  noop() { },
  onClose() {
    this.setData({
      show: false,
      password: ''
    })
  }
})