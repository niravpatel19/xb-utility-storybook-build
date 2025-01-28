import{j as n,M as s}from"./DocsRenderer-CFRXHY34-CzWKJP_B.js";import{useMDXComponents as t}from"./index-CKkJzyks.js";import"./iframe-ByUCtZeX.js";import"./index-DU0kJ4L0.js";import"./react-18-CCaTtm_B.js";import"./index-GS8XlyfN.js";import"./index-DrFu-skq.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/How to Add Util Functions"}),`
`,n.jsx(e.h1,{id:"how-to-add-a-new-util-function",children:"How to Add a New Util Function"}),`
`,n.jsxs(e.p,{children:["This document provides guidelines for adding new utility functions to the ",n.jsx(e.code,{children:"util"})," folder in the ",n.jsx(e.code,{children:"xb-utility"})," project. Utility functions handle specialized operations like date manipulation, encryption, and query parameter management."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`└── 📁util\r
    ├── 📁common\r
    │   ├── 📁config\r
    │   │   ├── 📁constant\r
    │   │   │   ├── index.ts\r
    │   │   ├── index.ts\r
    │   ├── index.ts\r
    ├── 📁date\r
    │   ├── 📁config\r
    │   │   ├── 📁constant\r
    │   │   │   ├── index.ts\r
    │   │   ├── 📁interface\r
    │   │   │   ├── index.ts\r
    │   │   ├── index.ts\r
    │   ├── index.ts\r
    ├── 📁encryption\r
    │   ├── 📁config\r
    │   │   ├── 📁interface\r
    │   │   │   ├── index.ts\r
    │   │   ├── index.ts\r
    │   ├── index.ts\r
    ├── index.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"steps-to-add-a-new-util-function",children:"Steps to Add a New Util Function"}),`
`,n.jsxs(e.h3,{id:"1-decide-the-folder",children:["1. ",n.jsx(e.strong,{children:"Decide the Folder"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Common Utility"}),": Add the function to the ",n.jsx(e.code,{children:"📁common"})," folder."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Specialized Utility"}),": If the function belongs to a specific category (e.g., date manipulation or encryption), add it to the relevant folder (e.g., ",n.jsx(e.code,{children:"📁date"}),", ",n.jsx(e.code,{children:"📁encryption"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"New Category"}),": Create a new folder under ",n.jsx(e.code,{children:"📁util"})," for the new category (e.g., ",n.jsx(e.code,{children:"📁image"}),")."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"2-create-the-file",children:["2. ",n.jsx(e.strong,{children:"Create the File"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Add the function to the ",n.jsx(e.code,{children:"index.ts"})," file in the respective folder."]}),`
`,n.jsxs(e.li,{children:["For new folders, create the following:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"index.ts"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"📁config"})," (optional, for constants and interfaces)"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"3-write-the-function",children:["3. ",n.jsx(e.strong,{children:"Write the Function"})]}),`
`,n.jsxs(e.h4,{id:"example-1-adding-a-new-function-in-common",children:["Example 1: Adding a New Function in ",n.jsx(e.code,{children:"📁common"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 📁util/common/index.ts\r
\r
/**\r
 * Converts an object to a query string.\r
 * @param obj - The object to convert.\r
 * @returns The query string.\r
 */\r
export const objectToQueryString = (obj: Record<string, any>): string => {\r
  return Object.entries(obj)\r
    .map(([key, value]) => \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`)\r
    .join('&');\r
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h4,{id:"example-2-adding-a-new-function-in-a-new-folder",children:"Example 2: Adding a New Function in a New Folder"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`└── 📁util\r
    ├── 📁image\r
    │   ├── index.ts
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 📁util/image/index.ts\r
\r
/**\r
 * Compresses an image file.\r
 * @param file - The image file to compress.\r
 * @param quality - The quality of compression (0 to 1).\r
 * @returns A promise that resolves with the compressed image file.\r
 */\r
export const compressImage = async (file: File, quality: number): Promise<File> => {\r
  // Compression logic here\r
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"4-export-the-function",children:["4. ",n.jsx(e.strong,{children:"Export the Function"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Update the ",n.jsx(e.code,{children:"util/index.ts"})," file to export the new utility function."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 📁util/index.ts\r
\r
export * from './common';\r
export * from './date';\r
export * from './encryption';\r
export * from './image'; // Add the new folder here
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"5-test-the-function",children:["5. ",n.jsx(e.strong,{children:"Test the Function"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Write unit tests for all scenarios, including edge cases."}),`
`,n.jsx(e.li,{children:"Ensure compatibility with the rest of the project."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use descriptive names for the function and folder."}),`
`,n.jsx(e.li,{children:"Group similar utilities into their own folder."}),`
`,n.jsx(e.li,{children:"Use TypeScript interfaces and constants to ensure type safety."}),`
`,n.jsx(e.li,{children:"Document all functions with JSDoc comments."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"example-usage",children:"Example Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { objectToQueryString } from '@xb/utility';\r
\r
const query = objectToQueryString({ name: 'John', age: 30 });\r
console.log(query); // Output: "name=John&age=30"
`})})]})}function u(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{u as default};
