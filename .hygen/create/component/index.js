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
        message: "What is the type of the category of the component",
        choices: [
          "functional",
          "class",
          "pages (not)",
          "template (not)",
        ],
      },
    ];

    return inquirer
      .prompt(questions)
      .then((answers) => {
        const { component_name, dir } = answers;
        const { category } = answers;
        const lower_name = component_name.toString().toLowerCase();
        const upper_name = component_name.toString().toUpperCase();
        const path = `${dir ? `${dir}/` : ""}${component_name}`;
        const absPath = `./src/components/${path}`;

        const isFunctional = category === 'functional';
        const isClass = category === 'class';
      
        console.log('\nisFunctional: ', isFunctional);
        console.log('isClass: ', isClass);
        
        // console.log("lower_name: ", lower_name);
        // console.log('upper_name: ', upper_name);
        // console.log("component loc path:", path);
        console.log("component abs Path:", absPath);
        console.log("\nall other answers: ", answers);
        
        const ans = {
          ...answers,
          path,
          absPath,
          component_name,
          lower_name,
          upper_name,
          category,
          isFunctional,
          isClass,
        };

        console.log(`
  => The ${isFunctional ? 'Functional Component' : 'Class Component'} "${component_name}" just has been made`);

        return ans;
    });
  },
};
