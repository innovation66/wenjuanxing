const Mock = require("mockjs");
const { SuccessRes } = require("../response/index");
const getQNCList = require("../data/getQNCList");
const getQNList = require("../data/getQNList");
// const eInfo = require("./res/error");

module.exports = [
  {
    url: "/question/create",
    method: "post",
    response() {
      return new SuccessRes({
        id: Mock.mock("@guid"),
      });
    },
  },
  {
    url: "/question/detail/:id",
    method: "get",
    response() {
      return new SuccessRes({
        id: Mock.mock("@guid"),
        isPublished: true,
        link: Mock.mock("@url"),
        qrCode: Mock.mock("@url"),
        schema: {
          title: Mock.mock("@ctitle(5, 10)"),
          description: Mock.mock("@cparagraph(1, 3)"),
          css: null,
          scripts: null,
          componentList: getQNCList(),
        },
      });
    },
  },
  // qn list
  {
    url: "/question/list",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=1") >= 0 ? 1 : 0;
      const isStar = url.indexOf("isStar=true") >= 0 ? true : undefined;
      const pageSize = query.pageSize ? +query.pageSize : 10;
      return new SuccessRes(getQNList({ count: pageSize, isDeleted, isStar }), {
        total: 40,
      });
    },
  },
  // 单个删除 收藏等
  {
    url: "/question/patch",
    method: "post",
    response() {
      return new SuccessRes({
        id: Mock.mock("@guid"),
        title: Mock.mock("@ctitle(5, 10)"),
        isPublished: Mock.mock("@boolean"),
        isStar: true,
        answerCount: Mock.mock("@integer(0, 100)"),
        createAt: Mock.mock("@datetime"),
        isDeleted: 0,
      });
    },
  },

  // 单个删除
  // {
  //   url: "/question/delete",
  //   method: "post",
  //   response() {
  //     return new SuccessRes(null, { msg: "删除成功" });
  //   },
  // },

  // 批量删除
  {
    url: "/question/delete",
    method: "post",
    response() {
      return new SuccessRes(null, { msg: "删除成功" });
    },
  },
  // 单个复制
  {
    url: "/question/copy",
    method: "post",
    response() {
      return new SuccessRes({
        id: Mock.mock("@guid"),
      });
    },
  },
];
