module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "component_name",
        message: "Имя компонента",
      },
      {
        type: "input",
        name: "dir",
        message: "Nested directory? (Optional) (by default)",
      },
      {
        type: "input",
        name: "test",
        message: "THis is test input first (by default)",
      },
      {
        type: "input",
        name: "inputtest",
        message: "THis is test input two (by default)",
      },
      {
        type: "select",
        name: "category",
        message: "What is test category",
        choices: [
          "makes",
          "done",
          "atoms",
          "molecules",
          "organisms",
          "templates",
          "pages",
        ],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { component_name, dir } = answers;
      const { test, inputtest, category } = answers;
      console.log("answers: ", answers);
      const lower_name = component_name.toString().toLowerCase();
      console.log("lower_name: ", lower_name);
      const path = `${dir ? `${dir}/` : ""}${component_name}`;
      console.log("path: ", path);
      const absPath = `src/components/${path}`;
      console.log("absPath: ", absPath);
      return { ...answers, path, absPath, lower_name, test, inputtest, category };
    });
  },
};
