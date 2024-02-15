export const items = [
  {
    id: "144",
    content: "$1 GONE FISHIN'",
    gameCode: "766",
    start: "2011-07-06T00:00:00Z",
    end: "2025-03-23T00:00:00Z",
    itemPart: "item",
    group: "81--100",
    subgroup: "144",
    color: "#0062B1",
    hasPredictedData: false,
  },
  {
    id: "1558",
    content: "$10 Live the Life Gold #3",
    gameCode: "2408",
    start: "2015-08-07T00:00:00Z",
    end: "2024-01-13T00:00:00Z",
    itemPart: "item",
    group: "90-5",
    subgroup: "1558",
    color: "#FB9E00",
    hasPredictedData: false,
  },
  {
    id: "1598",
    content: "$10 Mega Money 2409",
    gameCode: "2409",
    start: "2016-01-15T00:00:00Z",
    end: "2024-01-14T00:00:00Z",
    itemPart: "item",
    group: "90-9",
    subgroup: "1598",
    color: "#FE9200",
    hasPredictedData: false,
  },
  {
    id: "1601",
    content: "$4 Aztec Riches 2639",
    gameCode: "2639",
    start: "2015-10-30T00:00:00Z",
    end: "2023-12-30T00:00:00Z",
    itemPart: "item",
    group: "84-8",
    subgroup: "1601",
    color: "#653294",
    hasPredictedData: false,
  },
  {
    id: "1665",
    content: "$5 Live the Life Black #4",
    gameCode: "2855",
    start: "2015-12-11T00:00:00Z",
    end: "2024-01-08T00:00:00Z",
    itemPart: "item",
    group: "85-5",
    subgroup: "1665",
    color: "#73D8FF",
    hasPredictedData: false,
  },
  {
    id: "1675",
    content: "$5 Scratch Me Happy #3",
    gameCode: "2763",
    start: "2015-12-20T00:00:00Z",
    end: "2024-02-04T00:00:00Z",
    itemPart: "item",
    group: "85-4",
    subgroup: "1675",
    color: "#FCDC00",
    hasPredictedData: false,
  },
  {
    id: "1676",
    content: "$10 Live the Life Gold #4",
    gameCode: "2410",
    start: "2016-04-20T00:00:00Z",
    end: "2024-06-21T00:00:00Z",
    itemPart: "item",
    group: "90-5",
    subgroup: "1676",
    color: "#F44E3B",
    hasPredictedData: false,
  },
  {
    id: "1677",
    content: "$10 $250 Grand 2411",
    gameCode: "2411",
    start: "2016-12-20T00:00:00Z",
    end: "2024-11-18T00:00:00Z",
    itemPart: "item",
    group: "90-9",
    subgroup: "1677",
    color: "#FE9200",
    hasPredictedData: false,
  },
  {
    id: "1685",
    content: "$4 Riches of Giza 2641",
    gameCode: "2641",
    start: "2016-02-29T00:00:00Z",
    end: "2023-12-30T00:00:00Z",
    itemPart: "item",
    group: "84-8",
    subgroup: "1685",
    color: "#73D8FF",
    hasPredictedData: false,
  },
  {
    id: "1701",
    content: "$5 Crosswords Farm 2910",
    gameCode: "2910",
    start: "2016-04-05T00:00:00Z",
    end: "2024-01-21T00:00:00Z",
    itemPart: "item",
    group: "85-6",
    subgroup: "1701",
    color: "#FB9E00",
    hasPredictedData: false,
  },
  {
    id: "1702",
    content: "$10 Countdown to Xmas",
    gameCode: "2502",
    start: "2015-10-07T00:00:00Z",
    end: "2025-07-01T00:00:00Z",
    itemPart: "item",
    group: "90-10",
    subgroup: "1702",
    color: "#E27300",
    hasPredictedData: false,
  },
  {
    id: "1706",
    content: "$5 Emerald 7s 2764",
    gameCode: "2764",
    start: "2016-04-18T00:00:00Z",
    end: "2024-04-27T00:00:00Z",
    itemPart: "item",
    group: "85-9",
    subgroup: "1706",
    color: "#9F0500",
    hasPredictedData: false,
  },
  {
    id: "1712",
    content: "$20 GAME BOOK #3 1053",
    gameCode: "1053",
    start: "2016-01-27T00:00:00Z",
    end: "2024-03-26T00:00:00Z",
    itemPart: "item",
    group: "99-6",
    subgroup: "1712",
    color: "#7B64FF",
    hasPredictedData: false,
  },
];

export const groups = [
  {
    id: "90",
    title: "$10",
    content: "$10",
    treeLevel: 1,
    className: "group-odd",
    nestedGroups: ["90-5", "90-9", "90-10"],
  },
  {
    id: "90-5",
    title: "Live the Life",
    content: "Live the Life",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "90-9",
    title: "Thrill",
    content: "Thrill",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "90-10",
    title: "Christmas",
    content: "Christmas",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "99",
    title: "$20",
    content: "$20",
    treeLevel: 1,
    className: "group-odd",
    nestedGroups: ["99-6"],
  },
  {
    id: "99-6",
    title: "Relaxation",
    content: "Relaxation",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "81",
    title: "$1",
    content: "$1",
    treeLevel: 1,
    className: "group-even",
    nestedGroups: ["81--100"],
  },
  {
    id: "81--100",
    title: "",
    content: "",
    treeLevel: 2,
    className: "group-even subgroup",
  },
  {
    id: "84",
    title: "$4",
    content: "$4",
    treeLevel: 1,
    className: "group-even",
    nestedGroups: ["84-8"],
  },
  {
    id: "84-8",
    title: "Strategy",
    content: "Strategy",
    treeLevel: 2,
    className: "group-even subgroup",
  },
  {
    id: "85",
    title: "$5",
    content: "$5",
    treeLevel: 1,
    className: "group-odd",
    nestedGroups: ["85-9", "85-6", "85-4", "85-5"],
  },
  {
    id: "85-9",
    title: "Thrill",
    content: "Thrill",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "85-6",
    title: "Relaxation",
    content: "Relaxation",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "85-4",
    title: "Entertainment",
    content: "Entertainment",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "85-5",
    title: "Live the Life",
    content: "Live the Life",
    treeLevel: 2,
    className: "group-odd subgroup",
  },
  {
    id: "NONE",
    title: "",
    content: "",
    treeLevel: 1,
  },
];
