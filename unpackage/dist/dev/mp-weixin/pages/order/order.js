"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "order",
  setup(__props) {
    const order_data = common_vendor.reactive({
      svgArr: [
        {
          svg: "../../static/svg/photo.svg",
          name: "横幅管理"
        },
        {
          svg: "../../static/svg/spike.svg",
          name: "秒杀管理"
        },
        {
          svg: "../../static/svg/commodity.svg",
          name: "商品管理"
        },
        {
          svg: "../../static/svg/order.svg",
          name: "订单管理"
        },
        {
          svg: "../../static/svg/collect.svg",
          name: "分类管理"
        },
        {
          svg: "../../static/svg/shop.svg",
          name: "店铺管理"
        },
        {
          svg: "../../static/svg/footprint.svg",
          name: "足迹管理"
        },
        {
          svg: "../../static/svg/wallet.svg",
          name: "钱包管理"
        }
      ]
    });
    const Top = common_vendor.index.getMenuButtonBoundingClientRect();
    const hei = Top.top + Top.height;
    const pro_top = hei + 25;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s("height:" + common_vendor.unref(Top).top + "px"),
        b: common_vendor.s("height:" + common_vendor.unref(Top).height + "px;"),
        c: common_vendor.s("line-height:" + common_vendor.unref(Top).height + "px;"),
        d: common_vendor.s("height:" + hei + "px;"),
        e: common_vendor.f(order_data.svgArr, (item, index, i0) => {
          return {
            a: item.svg,
            b: common_vendor.t(item.name),
            c: index
          };
        }),
        f: common_vendor.s("top:" + pro_top + "px")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/SnackMall-admin/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
