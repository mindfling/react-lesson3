module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "component_name",
        message: "Name this component",
      },
      {
        type: "input",
        name: "dir",
        message: "Nested directory? (Optional) (by default)",
      },
      {
        type: "select",
        name: "category",
        message: "Is this Functional component (by default)",
        choices: [
          "functional (by default)",
          "class",
        ],
      },
    ];

    return inquirer
      .prompt(questions)
      .then((answers) => {
        const { component_name, dir } = answers;
        // const { category } = answers;
        const lower_name = component_name.toLowerCase();
        const path = `${dir ? `${dir}/` : ""}${component_name}`;
        const absPath = `./src/components/${path}`;
        
        console.log("component abs Path:", absPath);
        console.log("\nall other answers: ", answers);
        
        const ans = {
          ...answers,
          path,
          absPath,
          component_name,
          lower_name,
        };

        console.log(`=> The Functional Component "${component_name}" just has been made`);
        return ans;
    });
  },
};
