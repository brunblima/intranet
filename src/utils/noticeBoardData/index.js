const getNotices = async () => {
  const notices = [
    {
      title: "Meu RH",
      content: "Acesse.",
      image: require("../../assets/MeuRH.png"),
    },
  ];

  return notices;
};

export { getNotices };
