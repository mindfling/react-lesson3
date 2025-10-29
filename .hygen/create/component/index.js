module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "component_name",
        message: "THis component name",
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
        message: "What is test options category",
        choices: [
          "makes",
          "done",
          "atoms",
          "molecules",
          "templates",
          "pages",
        ],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { component_name, dir } = answers;
      const { test, inputtest, category } = answers;
      const lower_name = component_name.toString().toLowerCase();
      const path = `${dir ? `${dir}/` : ""}${component_name}`;
      const absPath = `src/components/${path}`;

      console.log("answers: ", answers);
      console.log("lower_name: ", lower_name);
      console.log("path: ", path);
      console.log("absPath: ", absPath);
      
      const ans = {
        ...answers,
        path,
        absPath,
        lower_name,
        test,
        inputtest,
        category,
      };

      console.log('ans of answers: ', ans);
      return ans;
    });
  },
};
