const Mock = require("mockjs");
const Random = Mock.Random;

const textTestQNC = [
  {
    id: Random.guid(),
    qnc_id: "8dsajewd8asda", //  Random.guid() 生成的ID不固定 导致统计答卷时Table无法匹配
    title: "Title",
    type: "qnTitle",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      text: "服务器标题内容",
      level: 3,
      align: "center",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "dadwdad88weqd",
    title: "Paragraph",
    type: "qnParagraph",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      content: "服务器段落内容",
      align: "center",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "jfisndaud81w3",
    title: "Info",
    type: "qnInfo",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器信息标题",
      content: "服务器信息内容",
    },
    hidden: false,
    locked: false,
  },
];

const inputTestQNC = [
  {
    id: Random.guid(),
    qnc_id: "lohdsuadjsd12",
    title: "InputNumber",
    type: "qnInputNumber",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器数字输入标题",
      placeholder: "服务器请输入",
      defaultValue: 2,
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "ofsaueqwdnsa12",
    title: "Input",
    type: "qnInput",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器单行输入标题",
      placeholder: "服务器请输入",
      size: "middle",
      defaultValue: "服务器单行输入默认值",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "bfjdabbsah212d",
    title: "TextArea",
    type: "qnTextArea",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器多行输入标题",
      placeholder: "服务器请输入",
      defaultValue: "服务器多行输入默认值",
    },
    hidden: false,
    locked: false,
  },
];

const choiceTestQNC = [
  {
    id: Random.guid(),
    qnc_id: "nhadn28n2odhq",
    title: "Radio",
    type: "qnRadio",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器单选标题",
      options: [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
      ],
      defaultValue: "A",
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "vajsdiahdw18jda",
    title: "Checkbox",
    type: "qnCheckbox",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器多选标题",
      options: [
        { value: "A", label: "A", checked: Random.boolean() },
        { value: "B", label: "B", checked: Random.boolean() },
        { value: "C", label: "C", checked: Random.boolean() },
        { value: "D", label: "D", checked: Random.boolean() },
      ],
      defaultValue: [],
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "ljdasdbsjhdd1",
    title: "Select",
    type: "qnSelect",
    props: {
      isRequire: Random.boolean(),
      title: "服务器下拉标题",
      placeholder: "请下拉选择",
      multiple: Random.boolean(),
      optionsStr: JSON.stringify([
        { value: "itemA", label: "选项A" },
        { value: "itemB", label: "选项B" },
      ]),
      optionsLink: "http://localhost:3000/api/options/xxx",
      defaultValue: null,
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "zsadhdhwdjsan2",
    title: "Cascader",
    type: "qnCascader",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器级联标题",
      placeholder: "请选择",
      optionsStr: JSON.stringify([
        {
          value: "value1",
          label: "label1",
          children: [
            { value: "value1-1", label: "label1-1" },
            { value: "value1-2", label: "label1-2" },
          ],
        },
        {
          value: "value2",
          label: "label2",
          children: [
            {
              value: "value2-1",
              label: "label2-1",
              children: [{ value: "value2-1-1", label: "value2-1-2" }],
            },
          ],
        },
      ]),
      optionsLink: "http://localhost:3000/api/options/xxx",
      defaultValue: null,
    },
    hidden: false,
    locked: false,
  },
];

const otherTestQNC = [
  {
    id: Random.guid(),
    qnc_id: "indshdwja82kds",
    title: "Rate",
    type: "qnRate",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器评分标题",
      character: "star",
      count: 5,
      defaultValue: 2,
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "btdhudwa2daojgx",
    title: "Sort",
    type: "qnSort",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器排序标题",
      options: [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
      ],
      defaultValue: ["A", "C"],
    },
    hidden: false,
    locked: false,
  },
  {
    id: Random.guid(),
    qnc_id: "fsdadndh9sa1",
    title: "NPS",
    type: "qnNPS",
    relations: [],
    props: {
      isRequired: Random.boolean(),
      title: "服务器NPS标题",
      start: "非常不满意",
      end: "非常满意",
      defaultValue: 5,
    },
    hidden: false,
    locked: false,
  },
];

const testQNC = [
  ...textTestQNC,
  ...inputTestQNC,
  ...choiceTestQNC,
  ...otherTestQNC,
];

// const statQNC = [
//   {
//     id: Random.guid(),
//     qnc_id: "jfisndaud81w3",
//     title: "Info",
//     type: "qnInfo",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "调研报告",
//       content: "家里蹲大学计算机学院24届毕业生就业方向调研报告",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "indshdwja82kds",
//     title: "Rate",
//     type: "qnRate",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "您的评分",
//       character: "heart",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "ofsaueqwdnsa12",
//     title: "Input",
//     type: "qnInput",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "您的姓名",
//       placeholder: "请输入",
//       size: "middle",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "lohdsuadjsd12",
//     title: "InputNumber",
//     type: "qnInputNumber",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "您的年龄",
//       placeholder: "请输入",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "nhadn28n2odhq",
//     title: "Radio",
//     type: "qnRadio",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "您的性别",
//       options: [
//         { value: "A", label: "男" },
//         { value: "B", label: "女" },
//         { value: "C", label: "保密" },
//       ],
//       defaultValue: "C",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "vajsdiahdw18jda",
//     title: "Checkbox",
//     type: "qnCheckbox",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "您的技术栈",
//       options: [
//         { value: "A", label: "算法", checked: false },
//         { value: "B", label: "后端", checked: false },
//         { value: "C", label: "前端", checked: false },
//         { value: "D", label: "测试", checked: false },
//         { value: "E", label: "其他", checked: false },
//       ],
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "bfjdabbsah212d",
//     title: "TextArea",
//     type: "qnTextArea",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       title: "备注",
//       placeholder: "请输入",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "dadwdad88weqd",
//     title: "Paragraph",
//     type: "qnParagraph",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       content: "谢谢您的填写",
//       align: "start",
//     },
//     hidden: false,
//     locked: false,
//   },
//   {
//     id: Random.guid(),
//     qnc_id: "8dsajewd8asda", //  Random.guid() 生成的ID不固定 导致统计答卷时Table无法匹配
//     title: "Title",
//     type: "qnTitle",
//     relations: [],
//     props: {
//       isRequired: Random.boolean(),
//       text: "祝您好运",
//       level: 4,
//       align: "start",
//     },
//     hidden: false,
//     locked: false,
//   },
// ];
function getQNCList() {
  return testQNC;
}

module.exports = getQNCList;
