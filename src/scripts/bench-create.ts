// // // // import fs from 'fs';
// // // // import path from 'path';

// // // // // Get the component name from the command-line arguments
// // // // const componentName = process.argv[2];

// // // // if (!componentName) {
// // // //   console.error('Please provide a component name.');
// // // //   process.exit(1);
// // // // }

// // // // // Convert to PascalCase (e.g., "card" -> "Card")
// // // // const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// // // // // Define paths for the new component folder and its files
// // // // const componentDir = path.join(__dirname, `../src/components/${componentName}`);
// // // // const tsFile = path.join(componentDir, `${componentName}.ts`);
// // // // const scssFile = path.join(componentDir, `${componentName}.scss`);
// // // // const storiesFile = path.join(componentDir, `${componentName}.stories.ts`);
// // // // const mdxFile = path.join(componentDir, `${componentName}.mdx`);
// // // // const testFile = path.join(componentDir, `${componentName}.test.ts`);

// // // // // Template for the TypeScript component file
// // // // const tsTemplate = `class ${pascalCaseName} extends HTMLElement {
// // // //   constructor() {
// // // //     super();
// // // //     const shadow = this.attachShadow({ mode: 'open' });
// // // //     const wrapper = document.createElement('div');
// // // //     wrapper.classList.add('${componentName}');
// // // //     shadow.appendChild(wrapper);
// // // //   }
// // // // }

// // // // customElements.define('${componentName}', ${pascalCaseName});
// // // // `;

// // // // // Template for the SCSS file
// // // // const scssTemplate = `.${componentName} {
// // // //   display: block;
// // // // }
// // // // `;

// // // // // Template for the Storybook stories file
// // // // const storiesTemplate = `import './${componentName}';

// // // // export default {
// // // //   title: 'Components/${pascalCaseName}',
// // // // };

// // // // export const Default = () => {
// // // //   const element = document.createElement('${componentName}');
// // // //   return element;
// // // // };
// // // // `;

// // // // // Template for the MDX file
// // // // const mdxTemplate = `import { Meta, Story, Canvas } from '@storybook/addon-docs';
// // // // import { ${pascalCaseName} } from './${componentName}';

// // // // <Meta title="Components/${pascalCaseName}" component={${pascalCaseName}} />

// // // // # ${pascalCaseName} Component

// // // // This is the ${pascalCaseName} component.

// // // // <Canvas>
// // // //   <Story name="Default">
// // // //     <${componentName} />
// // // //   </Story>
// // // // </Canvas>
// // // // `;

// // // // // Template for the Jest test file
// // // // const testTemplate = `import './${componentName}';

// // // // describe('${pascalCaseName}', () => {
// // // //   let element: HTMLElement;

// // // //   beforeEach(() => {
// // // //     element = document.createElement('${componentName}');
// // // //     document.body.appendChild(element);
// // // //   });

// // // //   afterEach(() => {
// // // //     document.body.innerHTML = '';
// // // //   });

// // // //   it('should be defined', () => {
// // // //     expect(customElements.get('${componentName}')).toBeDefined();
// // // //   });
// // // // });
// // // // `;

// // // // // Create the component directory
// // // // fs.mkdirSync(componentDir, { recursive: true });

// // // // // Write each file using the templates
// // // // fs.writeFileSync(tsFile, tsTemplate);
// // // // fs.writeFileSync(scssFile, scssTemplate);
// // // // fs.writeFileSync(storiesFile, storiesTemplate);
// // // // fs.writeFileSync(mdxFile, mdxTemplate);
// // // // fs.writeFileSync(testFile, testTemplate);

// // // // console.log(`Component ${pascalCaseName} created successfully!`);
// // // import { fileURLToPath } from 'url';
// // // import { dirname, join } from 'path';
// // // import * as fs from 'fs';

// // // // Get the directory name in ES module context
// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = dirname(__filename);

// // // // Get the component name from the command-line arguments
// // // const componentName = process.argv[2];

// // // if (!componentName) {
// // //   console.error('Please provide a component name.');
// // //   process.exit(1);
// // // }

// // // // Convert to PascalCase (e.g., "card" -> "Card")
// // // const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// // // // Define paths for the new component folder and its files
// // // const componentDir = join(__dirname, `../src/components/${componentName}`);
// // // const tsFile = join(componentDir, `${componentName}.ts`);
// // // const scssFile = join(componentDir, `${componentName}.scss`);
// // // const storiesFile = join(componentDir, `${componentName}.stories.ts`);
// // // const mdxFile = join(componentDir, `${componentName}.mdx`);
// // // const testFile = join(componentDir, `${componentName}.test.ts`);

// // // // Templates for different files
// // // const tsTemplate = `class ${pascalCaseName} extends HTMLElement {
// // //   constructor() {
// // //     super();
// // //     const shadow = this.attachShadow({ mode: 'open' });
// // //     const wrapper = document.createElement('div');
// // //     wrapper.classList.add('${componentName}');
// // //     shadow.appendChild(wrapper);
// // //   }
// // // }

// // // customElements.define('${componentName}', ${pascalCaseName});
// // // `;

// // // const scssTemplate = `.${componentName} {
// // //   display: block;
// // // }
// // // `;

// // // const storiesTemplate = `import './${componentName}';

// // // export default {
// // //   title: 'Components/${pascalCaseName}',
// // // };

// // // export const Default = () => {
// // //   const element = document.createElement('${componentName}');
// // //   return element;
// // // };
// // // `;

// // // const mdxTemplate = `import { Meta, Story, Canvas } from '@storybook/addon-docs';
// // // import { ${pascalCaseName} } from './${componentName}';

// // // <Meta title="Components/${pascalCaseName}" component={${pascalCaseName}} />

// // // # ${pascalCaseName} Component

// // // This is the ${pascalCaseName} component.

// // // <Canvas>
// // //   <Story name="Default">
// // //     <${componentName} />
// // //   </Story>
// // // </Canvas>
// // // `;

// // // const testTemplate = `import './${componentName}';

// // // describe('${pascalCaseName}', () => {
// // //   let element: HTMLElement;

// // //   beforeEach(() => {
// // //     element = document.createElement('${componentName}');
// // //     document.body.appendChild(element);
// // //   });

// // //   afterEach(() => {
// // //     document.body.innerHTML = '';
// // //   });

// // //   it('should be defined', () => {
// // //     expect(customElements.get('${componentName}')).toBeDefined();
// // //   });
// // // });
// // // `;

// // // // Create the component directory
// // // fs.mkdirSync(componentDir, { recursive: true });

// // // // Write each file using the templates
// // // fs.writeFileSync(tsFile, tsTemplate);
// // // fs.writeFileSync(scssFile, scssTemplate);
// // // fs.writeFileSync(storiesFile, storiesTemplate);
// // // fs.writeFileSync(mdxFile, mdxTemplate);
// // // fs.writeFileSync(testFile, testTemplate);

// // // console.log(`Component ${pascalCaseName} created successfully!`);
// // import { fileURLToPath } from 'url';
// // import { dirname, join } from 'path';
// // import * as fs from 'fs';

// // // Get the directory name in ES module context
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);

// // // Get the component name from the command-line arguments
// // const componentName = process.argv[2];

// // if (!componentName) {
// //   console.error('Please provide a component name.');
// //   process.exit(1);
// // }

// // // Convert to PascalCase (e.g., "card" -> "Card")
// // const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// // // Define the path for the `src/components` directory
// // const componentsDir = join(__dirname, '../src/components');

// // // Check if the `src/components` folder exists
// // if (!fs.existsSync(componentsDir)) {
// //   console.error('Error: The src/components directory does not exist.');
// //   process.exit(1);
// // }

// // // Define the path for the new component folder
// // const componentDir = join(componentsDir, componentName);

// // // Check if the component folder already exists
// // if (fs.existsSync(componentDir)) {
// //   console.error(`Error: The component "${componentName}" already exists.`);
// //   process.exit(1);
// // }

// // // Create the new component folder
// // fs.mkdirSync(componentDir);

// // // Define the paths for the component files
// // const tsFile = join(componentDir, `${componentName}.ts`);
// // const scssFile = join(componentDir, `${componentName}.scss`);
// // const storiesFile = join(componentDir, `${componentName}.stories.ts`);
// // const mdxFile = join(componentDir, `${componentName}.mdx`);
// // const testFile = join(componentDir, `${componentName}.test.ts`);

// // // Templates for different files
// // const tsTemplate = `class ${pascalCaseName} extends HTMLElement {
// //   constructor() {
// //     super();
// //     const shadow = this.attachShadow({ mode: 'open' });
// //     const wrapper = document.createElement('div');
// //     wrapper.classList.add('${componentName}');
// //     shadow.appendChild(wrapper);
// //   }
// // }

// // customElements.define('${componentName}', ${pascalCaseName});
// // `;

// // const scssTemplate = `.${componentName} {
// //   display: block;
// // }
// // `;

// // const storiesTemplate = `import './${componentName}';

// // export default {
// //   title: 'Components/${pascalCaseName}',
// // };

// // export const Default = () => {
// //   const element = document.createElement('${componentName}');
// //   return element;
// // };
// // `;

// // const mdxTemplate = `import { Meta, Story, Canvas } from '@storybook/addon-docs';
// // import { ${pascalCaseName} } from './${componentName}';

// // <Meta title="Components/${pascalCaseName}" component={${pascalCaseName}} />

// // # ${pascalCaseName} Component

// // This is the ${pascalCaseName} component.

// // <Canvas>
// //   <Story name="Default">
// //     <${componentName} />
// //   </Story>
// // </Canvas>
// // `;

// // const testTemplate = `import './${componentName}';

// // describe('${pascalCaseName}', () => {
// //   let element: HTMLElement;

// //   beforeEach(() => {
// //     element = document.createElement('${componentName}');
// //     document.body.appendChild(element);
// //   });

// //   afterEach(() => {
// //     document.body.innerHTML = '';
// //   });

// //   it('should be defined', () => {
// //     expect(customElements.get('${componentName}')).toBeDefined();
// //   });
// // });
// // `;

// // // Write each file using the templates
// // fs.writeFileSync(tsFile, tsTemplate);
// // fs.writeFileSync(scssFile, scssTemplate);
// // fs.writeFileSync(storiesFile, storiesTemplate);
// // fs.writeFileSync(mdxFile, mdxTemplate);
// // fs.writeFileSync(testFile, testTemplate);

// // console.log(`Component "${pascalCaseName}" created successfully in src/components/${componentName}`);


// import { join } from 'path';
// import * as fs from 'fs';

// // Get the current working directory (project root)
// const projectRoot = process.cwd();

// // Get the component name from the command-line arguments
// const componentName = process.argv[2];

// if (!componentName) {
//   console.error('Please provide a component name.');
//   process.exit(1);
// }

// // Convert to PascalCase (e.g., "card" -> "Card")
// const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// // Define the path for the `src/components` directory relative to the project root
// const componentsDir = join(projectRoot, 'src', 'components');

// // Check if the `src/components` folder exists
// if (!fs.existsSync(componentsDir)) {
//   console.error('Error: The src/components directory does not exist.');
//   process.exit(1);
// }

// // Define the path for the new component folder
// const componentDir = join(componentsDir, componentName);

// // Check if the component folder already exists
// if (fs.existsSync(componentDir)) {
//   console.error(`Error: The component "${componentName}" already exists.`);
//   process.exit(1);
// }

// // Create the new component folder
// fs.mkdirSync(componentDir, { recursive: true });

// // Define the paths for the component files
// const tsFile = join(componentDir, `${componentName}.ts`);
// const scssFile = join(componentDir, `${componentName}.scss`);
// const storiesFile = join(componentDir, `${componentName}.stories.ts`);
// const mdxFile = join(componentDir, `${componentName}.mdx`);
// const testFile = join(componentDir, `${componentName}.test.ts`);

// // Templates for different files
// const tsTemplate = `class ${pascalCaseName} extends HTMLElement {
//   constructor() {
//     super();
//     const shadow = this.attachShadow({ mode: 'open' });
//     const wrapper = document.createElement('div');
//     wrapper.classList.add('${componentName}');
//     shadow.appendChild(wrapper);
//   }
// }

// customElements.define('${componentName}', ${pascalCaseName});
// `;

// const scssTemplate = `.${componentName} {
//   display: block;
// }
// `;

// const storiesTemplate = `import './${componentName}';

// export default {
//   title: 'Components/${pascalCaseName}',
// };

// export const Default = () => {
//   const element = document.createElement('${componentName}');
//   return element;
// };
// `;

// const mdxTemplate = `import { Meta, Story, Canvas } from '@storybook/addon-docs';
// import { ${pascalCaseName} } from './${componentName}';

// <Meta title="Components/${pascalCaseName}" component={${pascalCaseName}} />

// # ${pascalCaseName} Component

// This is the ${pascalCaseName} component.

// <Canvas>
//   <Story name="Default">
//     <${componentName} />
//   </Story>
// </Canvas>
// `;

// const testTemplate = `import './${componentName}';

// describe('${pascalCaseName}', () => {
//   let element: HTMLElement;

//   beforeEach(() => {
//     element = document.createElement('${componentName}');
//     document.body.appendChild(element);
//   });

//   afterEach(() => {
//     document.body.innerHTML = '';
//   });

//   it('should be defined', () => {
//     expect(customElements.get('${componentName}')).toBeDefined();
//   });
// });
// `;

// // Write each file using the templates
// fs.writeFileSync(tsFile, tsTemplate);
// fs.writeFileSync(scssFile, scssTemplate);
// fs.writeFileSync(storiesFile, storiesTemplate);
// fs.writeFileSync(mdxFile, mdxTemplate);
// fs.writeFileSync(testFile, testTemplate);

// console.log(`Component "${pascalCaseName}" created successfully in src/components/${componentName}`);
import { join } from 'path';
import * as fs from 'fs';

// Get the current working directory (project root)
const projectRoot = process.cwd();

// Get the component path or name from the command-line arguments (e.g., "forms/input" or "aaa/bbb/ccc/text")
const componentPath = process.argv[2];

if (!componentPath) {
  console.error('Please provide a component path or name, e.g., "button" or "forms/input".');
  process.exit(1);
}

// Get the last part of the component path for naming the component (e.g., "input" or "text")
const componentName = componentPath.split('/').pop();

if (!componentName) {
  console.error('Invalid component name. Please provide a valid name or path, e.g., "button" or "forms/input".');
  process.exit(1);
}

// Convert the component name to PascalCase (e.g., "input" -> "Input")
const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Define the path for the `src/components` directory relative to the project root
const componentsDir = join(projectRoot, 'src', 'components');

// Ensure the `src/components` folder exists
if (!fs.existsSync(componentsDir)) {
  console.error('Error: The src/components directory does not exist.');
  process.exit(1);
}

// Define the full path to the component's folder inside `src/components` (including any parent folders)
const componentDir = join(componentsDir, componentPath);

// Check if the component folder already exists
if (fs.existsSync(componentDir)) {
  console.error(`Error: The component "${componentPath}" already exists.`);
  process.exit(1);
}

// Create the new component folder (including any necessary parent folders)
fs.mkdirSync(componentDir, { recursive: true });

// Define the paths for the component files
const tsFile = join(componentDir, `${componentName}.ts`);
const scssFile = join(componentDir, `${componentName}.scss`);
const storiesFile = join(componentDir, `${componentName}.stories.ts`);
const mdxFile = join(componentDir, `${componentName}.mdx`);
const testFile = join(componentDir, `${componentName}.test.ts`);

// Templates for different files
const tsTemplate = `class ${pascalCaseName} extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('${componentName}');
    shadow.appendChild(wrapper);
  }
}

customElements.define('${componentName}', ${pascalCaseName});
`;

const scssTemplate = `.${componentName} {
  display: block;
}
`;

const storiesTemplate = `import './${componentName}';

export default {
  title: 'Components/${pascalCaseName}',
};

export const Default = () => {
  const element = document.createElement('${componentName}');
  return element;
};
`;

const mdxTemplate = `import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { ${pascalCaseName} } from './${componentName}';

<Meta title="Components/${pascalCaseName}" component={${pascalCaseName}} />

# ${pascalCaseName} Component

This is the ${pascalCaseName} component.

<Canvas>
  <Story name="Default">
    <${componentName} />
  </Story>
</Canvas>
`;

const testTemplate = `import './${componentName}';

describe('${pascalCaseName}', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('${componentName}');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined', () => {
    expect(customElements.get('${componentName}')).toBeDefined();
  });
});
`;

// Write each file using the templates
fs.writeFileSync(tsFile, tsTemplate);
fs.writeFileSync(scssFile, scssTemplate);
fs.writeFileSync(storiesFile, storiesTemplate);
fs.writeFileSync(mdxFile, mdxTemplate);
fs.writeFileSync(testFile, testTemplate);

console.log(`Component "${pascalCaseName}" created successfully in src/components/${componentPath}`);
