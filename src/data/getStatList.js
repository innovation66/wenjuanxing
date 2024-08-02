const Mock = require("mockjs");
const getQNCList = require("./getQNCList");
const Random = Mock.Random;

function getStatList({ len = 10 }) {
  const qncList = getQNCList();
  const res = [];
  for (let i = 0; i < len; i++) {
    const stat = {
      id: Random.id(),
    };
    qncList.forEach((item, idx) => {
      const { qnc_id, type, props } = item;
      if (type === "qnInputNumber") {
        stat[qnc_id] = Random.integer(0, 100);
      } else if (type === "qnInput") {
        stat[qnc_id] = Random.ctitle();
      } else if (type === "qnTextArea") {
        stat[qnc_id] = Random.ctitle();
      } else if (type === "qnRadio") {
        stat[qnc_id] = props.options[0].label;
      } else if (type === "qnCheckbox") {
        stat[qnc_id] = `${props.options[0].label},${props.options[1].label}`;
      } else {
        // qnTitle | qnParagraph |qnInfo  纯文字提示 没有回答
      }
    });
    res.push(stat);
  }
  return res;
}

module.exports = getStatList;
