const { request } = require('../../../utils/ajax')

Page({
  data: {
    showTopTips: false,
    belongGroups: ["常规车", "工程车"],
    vehicleTypes: ["乘用车", "工程车", "矿卡", "LCV"],
    useTypes: ["出租车辆", "私家车", "公交车"],
    formData: {
      groupCode: wx.getStorageSync("groupCode"),
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
    if (!this.data.formData.groupCode) {
      this.setData({ error: '组织机构必填' })
      return
    }
    if (!this.data.formData.vin) {
      this.setData({ error: '车架号必填' })
      return
    }
    if (!this.data.formData.licenseNo) {
      this.setData({ error: '车牌号必填' })
      return
    }

    request({
      url: '/applets/vehicle_info/saveVehicleInfo',
      data: {
        ...this.data.formData,
        vehicleType: this.data.formData.vehicleType + 1
      },
      method: 'POST'
    },
      res => {
        wx.showToast({ title: '添加成功' })
        setTimeout(() => {
          wx.switchTab({ url: '/pages/car/car-list/car-list' });
        }, 300)
      })
  },
  findSysGroupByTree() {
    request({
      url: '/applets/vehicle_info/findSysGroupByTree',
      data: { groupCode: wx.getStorageSync("groupCode") },
      method: 'get'
    },
      res => {
        let list = []
        this.loadTree(res.data, list)
        this.bindTree(list)
      })
  },
  loadTree(nodes, list) {
    nodes.forEach(p => {
      list.push({
        "nodeId": p.id,
        "nodeName": p.text,
        "parentId": p.parentId,
      })
      if (p.nodes)
        this.loadTree(p.nodes, list)
    })
  },
  bindTree(list) {
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