Page({
  data: {
    info: {}
  },
  onLoad: function (options) {
    const object = JSON.parse(options.current);
    this.setData({ info: object });
  }
})