import{j as e,M as s}from"./DocsRenderer-CFRXHY34-CzWKJP_B.js";import{useMDXComponents as t}from"./index-CKkJzyks.js";import"./iframe-ByUCtZeX.js";import"./index-DU0kJ4L0.js";import"./react-18-CCaTtm_B.js";import"./index-GS8XlyfN.js";import"./index-DrFu-skq.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/How to Add Helper Functions"}),`
`,e.jsx(n.h1,{id:"how-to-add-a-new-helper-function",children:"How to Add a New Helper Function"}),`
`,e.jsxs(n.p,{children:["This document provides guidelines for adding a new helper function to the ",e.jsx(n.code,{children:"helper"})," folder in the ",e.jsx(n.code,{children:"xb-utility"})," project. Helper functions are utilities designed for common operations, ensuring reusability and better code organization."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plaintext",children:`└── 📁helper\r
    ├── 📁common\r
    │   ├── index.ts\r
    ├── 📁debounce\r
    │   ├── index.ts\r
    ├── index.ts
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"steps-to-add-a-new-helper-function",children:"Steps to Add a New Helper Function"}),`
`,e.jsxs(n.h3,{id:"1-decide-the-folder",children:["1. ",e.jsx(n.strong,{children:"Decide the Folder"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the function is generic and commonly used, add it to the ",e.jsx(n.code,{children:"📁common"})," folder."]}),`
`,e.jsxs(n.li,{children:["If the function serves a specific purpose (e.g., debounce functionality), create a new folder under ",e.jsx(n.code,{children:"📁helper"})," with a descriptive name."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"2-create-the-file",children:["2. ",e.jsx(n.strong,{children:"Create the File"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the folder already exists:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add the new function to the ",e.jsx(n.code,{children:"index.ts"})," file in the respective folder."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If creating a new folder:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Create a new folder inside ",e.jsx(n.code,{children:"📁helper"})," (e.g., ",e.jsx(n.code,{children:"📁new-helper"}),")."]}),`
`,e.jsxs(n.li,{children:["Add an ",e.jsx(n.code,{children:"index.ts"})," file in this folder."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"3-write-the-function",children:["3. ",e.jsx(n.strong,{children:"Write the Function"})]}),`
`,e.jsxs(n.h4,{id:"example-1-adding-a-new-function-to-common",children:["Example 1: Adding a New Function to ",e.jsx(n.code,{children:"📁common"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 📁helper/common/index.ts\r
\r
/**\r
 * Converts a string to kebab-case.\r
 * @param input - The string to be converted.\r
 * @returns The string in kebab-case format.\r
 */\r
export const toKebabCase = (input: string): string => {\r
  return input.replace(/\\s+/g, '-').toLowerCase();\r
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h4,{id:"example-2-adding-a-new-function-in-a-new-folder",children:"Example 2: Adding a New Function in a New Folder"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plaintext",children:`└── 📁helper\r
    ├── 📁capitalize\r
    │   ├── index.ts
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 📁helper/capitalize/index.ts\r
\r
/**\r
 * Capitalizes the first letter of a string.\r
 * @param input - The string to capitalize.\r
 * @returns The string with the first letter capitalized.\r
 */\r
export const capitalize = (input: string): string => {\r
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();\r
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"4-export-the-function",children:["4. ",e.jsx(n.strong,{children:"Export the Function"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure all helper functions are exported through the ",e.jsx(n.code,{children:"helper/index.ts"})," file for centralized access."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 📁helper/index.ts\r
\r
export * from './common';\r
export * from './debounce';\r
export * from './capitalize'; // Add the new helper folder here
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"5-test-the-function",children:["5. ",e.jsx(n.strong,{children:"Test the Function"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Write unit tests to verify the behavior of the helper function."}),`
`,e.jsx(n.li,{children:"Ensure it works as expected in all use cases."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use clear and descriptive names for both the folder and function."}),`
`,e.jsx(n.li,{children:"Add JSDoc comments to describe the purpose, parameters, and return values of the function."}),`
`,e.jsx(n.li,{children:"Ensure type safety by using TypeScript."}),`
`,e.jsx(n.li,{children:"Add tests for edge cases."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toKebabCase, capitalize } from '@xb/utility';\r
\r
const kebab = toKebabCase('Hello World');\r
console.log(kebab); // Output: hello-world\r
\r
const capitalized = capitalize('hello');\r
console.log(capitalized); // Output: Hello
`})})]})}function x(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};
