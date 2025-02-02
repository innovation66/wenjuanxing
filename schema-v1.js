const schema = {
  title: "起人具争义全制他员",
  relations: [],
  description: "做不所空传然就族强走民史然难。",
  styles: null,
  scripts: null,
  isPublished: true,
  componentList: [
    {
      id: "beE4bDAB-Acdc-f6bf-B4A8-26BC4D90292E",
      qnc_id: "8dsajewd8asda",
      title: "Title",
      type: "qnTitle",
      relations: [],
      props: {
        isRequired: false,
        text: "服务器标题内容",
        level: 3,
        align: "center",
      },
      hidden: false,
      locked: false,
    },
    {
      id: "6116c8Ef-82e1-Cc73-7Ce1-99b66BAC3DeB",
      qnc_id: "dadwdad88weqd",
      title: "Paragraph",
      type: "qnParagraph",
      relations: [],
      props: {
        isRequired: false,
        content: "服务器段落内容",
        align: "center",
      },
      hidden: false,
      locked: false,
    },
    {
      id: "aCf799d8-91Db-B8E6-BA3c-f34A6BbE258a",
      qnc_id: "jfisndaud81w3",
      title: "Info",
      type: "qnInfo",
      relations: [],
      props: {
        isRequired: false,
        title: "服务器信息标题",
        content: "服务器信息内容",
      },
      hidden: false,
      locked: false,
    },
    {
      id: "d636D323-58b1-61a9-AE5C-858f42fC385B",
      qnc_id: "lohdsuadjsd12",
      title: "InputNumber",
      type: "qnInputNumber",
      relations: [],
      props: {
        isRequired: true,
        title: "服务器数字输入标题",
        placeholder: "服务器请输入",
        defaultValue: 2,
      },
      hidden: false,
      locked: false,
    },
    {
      id: "D4a0FC4A-83fa-4EfB-eF74-4F8b6bA01bB7",
      qnc_id: "ofsaueqwdnsa12",
      title: "Input",
      type: "qnInput",
      relations: [],
      props: {
        isRequired: true,
        title: "服务器单行输入标题",
        placeholder: "服务器请输入",
        size: "middle",
        defaultValue: "服务器单行输入默认值",
      },
      hidden: false,
      locked: false,
      // id 为 relation 的唯一标识
      // 有value 表示选择，没有value表示填写
      // condition为条件， yes 表示做了， no 表示未做
      // action 为动作， show 表示显示， 暂时只有 show
      // current 为当前题的 qnc_id,
      // next 为下一题的 qnc_id
      // 以下关系为：当前题 (current) 填写了 (condition: yes) 时，显示 (action: show) 下一题 (next), 此处没有value，表示填写
      relations: [
        {
          id: "JewZwcjQGQ6z4dtv2yYsw",
          condition: "yes",
          action: "show",
          next: "bfjdabbsah212d",
          current: "ofsaueqwdnsa12",
        },
      ],
    },
    {
      id: "FCEe0D80-f896-A2AD-4CcD-f9Efc8cdde21",
      qnc_id: "bfjdabbsah212d",
      title: "TextArea",
      type: "qnTextArea",
      relations: [],
      props: {
        isRequired: false,
        title: "服务器多行输入标题",
        placeholder: "服务器请输入",
        defaultValue: "服务器多行输入默认值",
      },
      hidden: false,
      locked: false,
    },
    {
      id: "BE7b48cA-Fc12-9eD2-31EE-FecC7fD806A1",
      qnc_id: "nhadn28n2odhq",
      title: "Radio",
      type: "qnRadio",
      relations: [],
      props: {
        isRequired: false,
        title: "服务器单选标题",
        options: [
          {
            value: "A",
            label: "A",
          },
          {
            value: "B",
            label: "B",
          },
          {
            value: "C",
            label: "C",
          },
          {
            value: "D",
            label: "D",
          },
        ],
        defaultValue: "A",
      },
      hidden: false,
      locked: false,
      // 有value 表示选择，没有value表示填写
      // 当前题 (current) 选中了 (condition: yes) 值 (value)时，显示 (action: show) 下一题 (next)
      // 当前题 (current) 未选中了 (condition: no) 值 (value)时，显示 (action: show) 下一题 (next)
      relations: [
        {
          id: "oujeUY7Ak_lxWnbAbi8OB",
          condition: "yes",
          value: "B",
          action: "show",
          next: "bfjdabbsah212d",
          current: "nhadn28n2odhq",
        },
      ],
    },
    {
      id: "B36cd6a8-f6Fe-BB7e-c10E-5E41d82AEf9B",
      qnc_id: "vajsdiahdw18jda",
      title: "Checkbox",
      type: "qnCheckbox",
      relations: [],
      props: {
        isRequired: false,
        title: "服务器多选标题",
        options: [
          {
            value: "A",
            label: "A",
            checked: true,
          },
          {
            value: "B",
            label: "B",
            checked: true,
          },
          {
            value: "C",
            label: "C",
            checked: true,
          },
          {
            value: "D",
            label: "D",
            checked: true,
          },
        ],
        defaultValue: [],
      },
      hidden: false,
      locked: false,
    },
    {
      id: "dd69DC6e-D938-6ee4-45Bf-961fdddeFe3f",
      qnc_id: "ljdasdbsjhdd1",
      title: "Select",
      type: "qnSelect",
      props: {
        isRequire: false,
        title: "服务器下拉标题",
        placeholder: "请下拉选择",
        multiple: true,
        optionsStr:
          '[{"value":"itemA","label":"选项A"},{"value":"itemB","label":"选项B"}]',
        optionsLink: "http://localhost:3000/api/options/xxx",
        defaultValue: null,
      },
      hidden: false,
      locked: false,
    },
    {
      id: "9AbBf7C4-d3e9-daEC-cA1f-Ad2DF952119d",
      qnc_id: "zsadhdhwdjsan2",
      title: "Cascader",
      type: "qnCascader",
      relations: [],
      props: {
        isRequired: true,
        title: "服务器级联标题",
        placeholder: "请选择",
        optionsStr:
          '[{"value":"value1","label":"label1","children":[{"value":"value1-1","label":"label1-1"},{"value":"value1-2","label":"label1-2"}]},{"value":"value2","label":"label2","children":[{"value":"value2-1","label":"label2-1","children":[{"value":"value2-1-1","label":"value2-1-2"}]}]}]',
        optionsLink: "http://localhost:3000/api/options/xxx",
        defaultValue: null,
      },
      hidden: false,
      locked: false,
    },
    {
      id: "ECC47BAB-95dB-Fffa-1Ee6-fAbdFFb9Ac08",
      qnc_id: "indshdwja82kds",
      title: "Rate",
      type: "qnRate",
      relations: [],
      props: {
        isRequired: true,
        title: "服务器评分标题",
        character: "star",
        count: 5,
        defaultValue: 2,
      },
      hidden: false,
      locked: false,
      // 有value 表示选择，有value和value2 表示选择值是一个区间
      // 当前题 (current) 选中了 (condition: yes) 值在区间 [value， value2]时，显示 (action: show) 下一题 (next)
      // 当前题 (current) 未选中了 (condition: no) 值在区间 [value， value2]时，显示 (action: show) 下一题 (next)
      relations: [
        {
          id: "KOpiMLfsALAn9HK4b3WsD",
          condition: "yes",
          value: "2",
          value2: "3",
          action: "show",
          next: "fsdadndh9sa1",
          current: "indshdwja82kds",
        },
      ],
    },
    {
      id: "6Fe1DC6b-ED63-22B8-bB53-d8bE93FD9BDa",
      qnc_id: "btdhudwa2daojgx",
      title: "Sort",
      type: "qnSort",
      relations: [],
      props: {
        isRequired: true,
        title: "服务器排序标题",
        options: [
          {
            value: "A",
            label: "A",
          },
          {
            value: "B",
            label: "B",
          },
          {
            value: "C",
            label: "C",
          },
          {
            value: "D",
            label: "D",
          },
        ],
        defaultValue: ["A", "C"],
      },
      hidden: false,
      locked: false,
    },
    {
      id: "1BBF94Ff-2EC2-cB5C-9fd1-881d3Fb1a9ba",
      qnc_id: "fsdadndh9sa1",
      title: "NPS",
      type: "qnNPS",
      relations: [],
      props: {
        isRequired: true,
        title: "服务器NPS标题",
        start: "非常不满意",
        end: "非常满意",
        defaultValue: 5,
      },
      hidden: false,
      locked: false,
    },
  ],
};
