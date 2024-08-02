const schema = {
  title: "具处系查五感即",
  description: "得行样采战温世样力海军具更养就。却系和专法得传此结务由受。",
  styles: null,
  scripts: null,
  isPublished: true,
  componentList: [
    {
      props: {
        text: "标题",
        level: 1,
        align: "start",
      },
      title: "标题",
      type: "qnTitle",
      qnc_id: "12EpVlIv9xMKBQJ2-hLvI",
    },
    {
      props: {
        content: "段落默认值",
        align: "start",
      },
      title: "段落",
      type: "qnParagraph",
      qnc_id: "-qHJOtgbXtRL0LBrn7Ps_",
    },
    {
      props: {
        title: "标题",
        content: "内容",
      },
      title: "信息",
      type: "qnInfo",
      qnc_id: "MpvrHma2k4yHuYToFB0d8",
    },
    {
      props: {
        title: "数字",
        placeholder: "请输入数字",
        defaultValue: 1,
      },
      title: "数字",
      type: "qnInputNumber",
      qnc_id: "ke3uclpXVaB6u_aRkwgyF",
    },
    {
      props: {
        title: "单行输入",
        placeholder: "请输入",
        size: "middle",
        defaultValue: "默认值",
      },
      title: "单行",
      type: "qnInput",
      qnc_id: "NJqXdN0bV4f45HObj74mo",
    },
    {
      props: {
        title: "多行输入",
        placeholder: "请输入",
        defaultValue: "",
      },
      title: "多行",
      type: "qnTextArea",
      qnc_id: "aDPQGErzpMVfXShcT0LHv",
    },
    {
      props: {
        title: "下拉选择",
        optionsArrStr:
          '[{"value":"itemA","label":"选项A"},{"value":"itemB","label":"选项B"}]',
        optionsLink: "http://www.xxx.com",
        placeholder: "请选择",
        multiple: false,
        defaultValue: null,
      },
      title: "下拉",
      type: "qnSelect",
      qnc_id: "wnAkuvIGs33fbqKElar7b",
    },
    {
      props: {
        title: "单选",
        options: [
          {
            value: "A",
            label: "选项A",
          },
          {
            value: "B",
            label: "选项B",
          },
          {
            value: "C",
            label: "选项C",
          },
        ],
        defaultValue: "A",
        vertical: false,
      },
      title: "单选",
      type: "qnRadio",
      qnc_id: "LJlsHvSYbfKDyoSqot4Mi",
    },
    {
      props: {
        title: "多选",
        options: [
          {
            value: "itemA",
            label: "选项A",
            checked: false,
          },
          {
            value: "itemB",
            label: "选项B",
            checked: false,
          },
          {
            value: "itemC",
            label: "选项C",
            checked: false,
          },
        ],
        vertical: false,
      },
      title: "多选",
      type: "qnCheckbox",
      qnc_id: "XIK99-iGjuTjfkA4-PZMU",
    },
    {
      props: {
        title: "级联选择",
        optionsArrStr:
          '[{"value":"value1","label":"label1","children":[{"value":"value1-1","label":"label1-1"},{"value":"value1-2","label":"label1-2"}]},{"value":"value2","label":"label2","children":[{"value":"value2-1","label":"label2-1","children":[{"value":"value2-1-1","label":"value2-1-2"}]}]}]',
        placeholder: "请选择",
      },
      title: "级联",
      type: "qnCascader",
      qnc_id: "6O6QIvlgRzW-PUB9jvfV0",
    },
    {
      props: {
        title: "打分题",
        count: 5,
        character: "star",
      },
      title: "评分",
      type: "qnRate",
      qnc_id: "MuqKqa4j2XxLUYIu7UyP-",
    },
    {
      props: {
        title: "排序",
        options: [
          {
            value: "itemA",
            label: "选项A",
          },
          {
            value: "itemB",
            label: "选项B",
          },
          {
            value: "itemC",
            label: "选项C",
          },
        ],
      },
      title: "排序",
      type: "qnSort",
      qnc_id: "a1KKk1jnNKoVnxgGlMlTO",
    },
    {
      props: {
        title: "NPS",
        start: "非常不满意",
        end: "非常满意",
      },
      title: "NPS",
      type: "qnNPS",
      qnc_id: "7DASaQAs0jZAc95WLEyvs",
    },
  ],
};
