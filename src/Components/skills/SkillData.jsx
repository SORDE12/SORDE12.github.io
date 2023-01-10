const Skilldata = [
  {
    id: 1,
    imgsrc: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    title: "HTML",
  },
  {
    id: 2,
    imgsrc: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    title: "CSS",
  },
  {
    id: 3,
    imgsrc: " https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    title: "JavaScript",
  },
  {
    id: 4,
    imgsrc: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    title: "React.Js",
  },
  {
    id: 5,
    imgsrc: " https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    title: "TypeScript",
  },
  {
    id: 6,
    imgsrc:
      "data:image/png;base64,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",
    title: "Redux",
  },
  {
    id: 7,
    imgsrc:
      "https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png",
    title: "Chakra UI",
  },
  {
    id: 8,
    imgsrc: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
    title: "Node.Js",
  },
  {
    id: 9,
    imgsrc: "https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png",
    title: "Express.Js",
  },
  {
    id: 10,
    imgsrc:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    title: "MongoDb",
  },
  {
    id: 11,
    imgsrc: "https://oymakyazilim.com/assets/images/client/vector_icon_8.png",
    title: "Git",
  },
  {
    id: 12,
    imgsrc: "https://www.netlify.com/v3/img/components/logomark.png",
    title: "Netlify",
  },
];

export default Skilldata;
