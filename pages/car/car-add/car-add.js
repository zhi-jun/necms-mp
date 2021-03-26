const { request } = require('../../../utils/ajax')

Page({
  data: {
    showTopTips: false,
    belongGroups: ["常规车", "工程车"],
    vehicleTypes: ["乘用车", "工程车", "矿卡", "LCV"],
    useTypes: ["出租车辆", "私家车", "公交车"],
    formData: {
      groupCode: 0,
      companyCode: '',
      belongGroup: 0,
      vehicleType: 0,
      vin: '',
      licenseNo: '',
      useType: 0,
      name: '',
      mobileNo: '',
      spName: ''
    },
    treeModel: [],
    treeProps: {
      value: 'nodeId',
      label: 'nodeName',
      children: 'children'
    },
    treeSelected: '',
    showTree: false
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  bindvehicleTypeChange: function (e) {
    this.data.formData.vehicleType = e.detail.value
    this.setData({
      formData: this.data.formData
    })
  },
  bindbelongGroupChange: function (e) {
    this.data.formData.belongGroup = e.detail.value
    this.setData({
      formData: this.data.formData
    })
  },
  binduseTypeChange: function (e) {
    this.data.formData.useType = e.detail.value
    this.setData({
      formData: this.data.formData
    })
  },
  submitForm() {
    if (!this.data.formData.vin) {
      this.setData({ error: '车架号必填' })
      return
    }
    if (!this.data.formData.licenseNo) {
      this.setData({ error: '车牌号必填' })
      return
    }

    console.log('************', {
      ...this.data.formData,
      groupCode: this.data.formData.vehicleType + 1
    });

    request({
      url: '/applets/vehicle_info/saveVehicleInfo',
      data: {
        ...this.data.formData,
        groupCode: this.data.formData.vehicleType + 1
      },
      method: 'POST'
    },
      res => {
        wx.showToast({ title: '添加成功' })
        setTimeout(() => {
          wx.redirectTo({ url: '/pages/car/car-list/car-list' });
        }, 300)
      })
  },
  findSysGroupByTree() {
    let list = [{
      "nodeId": 20,
      "nodeName": "一级分类",
      "parentId": 0,
    }, {
      "nodeId": 21,
      "nodeName": "二级分类",
      "parentId": 20,
    }, {
      "nodeId": 22,
      "nodeName": "二级分类1",
      "parentId": 20,
    }, {
      "nodeId": 23,
      "nodeName": "三级分类",
      "parentId": 21,
    }];
    // 删除 所有 children,以防止多次调用
    list.forEach(function (item) {
      delete item.children;
    });
    let map = {};
    list.forEach(function (item) {
      map[item.nodeId] = item;
    });
    let treedata = [];
    list.forEach(function (item) {
      let parent = map[item.parentId];
      if (parent) {
        (parent.children || (parent.children = [])).push(item);
      } else {
        treedata.push(item);
      }
    });
    treedata.forEach(res => {
      //必须个第一级添加属性  first：true
      res.first = true
    })
    this.setData({
      treeModel: treedata,
      showTree: true
    })
  },
  onTapTreeItem: function (e) {
    this.data.formData.groupCode = e.detail.nodeId
    this.setData({
      showTree: false,
      treeSelected: e.detail.nodeName,
      formData: this.data.formData
    })
  },
});