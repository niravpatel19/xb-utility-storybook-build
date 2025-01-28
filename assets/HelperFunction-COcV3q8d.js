import{j as e,M as t}from"./DocsRenderer-CFRXHY34-CzWKJP_B.js";import{useMDXComponents as i}from"./index-CKkJzyks.js";import"./iframe-ByUCtZeX.js";import"./index-DU0kJ4L0.js";import"./react-18-CCaTtm_B.js";import"./index-GS8XlyfN.js";import"./index-DrFu-skq.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentation/Helper Functions"}),`
`,e.jsx(n.h1,{id:"helper-functions-in-xb-utility",children:"Helper Functions in xb-utility"}),`
`,e.jsxs(n.p,{children:["This document provides an overview of the helper functions available in the ",e.jsx(n.code,{children:"helper"})," folder. It explains ",e.jsx(n.strong,{children:"how to use these functions"}),", their purpose, and provides detailed information about their parameters and return values."]}),`
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
`,e.jsx(n.h2,{id:"1-commonhelperutil",children:e.jsx(n.strong,{children:"1. CommonHelperUtil"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CommonHelperUtil"})," class provides general-purpose helper functions for string manipulations and other common operations. You can import it directly from ",e.jsx(n.code,{children:"@xb/utility"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"function-previewenumname",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"previewEnumName"})]})}),`
`,e.jsx(n.h4,{id:"description",children:e.jsx(n.strong,{children:"Description"})}),`
`,e.jsxs(n.p,{children:["Converts a string into ",e.jsx(n.code,{children:"PreviewEnumName"})," format by:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Converting all characters to lowercase."}),`
`,e.jsxs(n.li,{children:["Replacing underscores (",e.jsx(n.code,{children:"_"}),") with spaces."]}),`
`,e.jsx(n.li,{children:"Capitalizing the first letter of each word."}),`
`]}),`
`,e.jsx(n.h4,{id:"usage",children:e.jsx(n.strong,{children:"Usage"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { CommonHelperUtil } from '@xb/utility';\r
\r
const result = CommonHelperUtil.previewEnumName('ENUM_VALUE_EXAMPLE');\r
console.log(result); // Output: "Enum Value Example"
`})}),`
`,e.jsx(n.h4,{id:"parameters",children:e.jsx(n.strong,{children:"Parameters"})}),`
`,e.jsxs(n.p,{children:[`| Parameter | Type   | Required | Description                                   |\r
|-----------|--------|----------|-----------------------------------------------|\r
| `,e.jsx(n.code,{children:"str"}),"     | string | Yes      | The input string to be converted.            |"]}),`
`,e.jsx(n.h4,{id:"returns",children:e.jsx(n.strong,{children:"Returns"})}),`
`,e.jsxs(n.p,{children:[`| Type    | Description                                            |\r
|---------|--------------------------------------------------------|\r
| `,e.jsx(n.code,{children:"string"}),"| The formatted string in ",e.jsx(n.code,{children:"PreviewEnumName"})," style.       |"]}),`
`,e.jsx(n.h4,{id:"example",children:e.jsx(n.strong,{children:"Example"})}),`
`,e.jsx(n.p,{children:"Input:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { CommonHelperUtil } from '@xb/utility';\r
\r
const input = "ENUM_VALUE_EXAMPLE";\r
const output = CommonHelperUtil.previewEnumName(input);\r
console.log(output);
`})}),`
`,e.jsx(n.p,{children:"Output:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plaintext",children:`"Enum Value Example"
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-debounce-debounce",children:e.jsx(n.strong,{children:"2. Debounce (📁debounce)"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"📁debounce"})," folder is currently reserved for future utility functions related to debouncing. No implementation exists yet, but this folder serves as a placeholder to demonstrate potential modular utilities."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"best-practices",children:e.jsx(n.strong,{children:"Best Practices"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Reusable Logic"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure helper functions are generic and reusable across multiple modules."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Detailed Comments"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use JSDoc comments to describe the purpose of the function, parameters, and return values."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Strict Typing"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use TypeScript for strict type checking and better developer experience."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Unified Imports"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always import helper functions from ",e.jsx(n.code,{children:"@xb/utility"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modular Structure"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Group helper functions logically into separate folders (e.g., ",e.jsx(n.code,{children:"common"}),", ",e.jsx(n.code,{children:"debounce"}),")."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["This documentation ensures clarity and consistency when using the ",e.jsx(n.code,{children:"helper"})," functions in the ",e.jsx(n.code,{children:"xb-utility"})," project."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:"\r\nThis updated version focuses on describing and using the existing `helper` functions without mentioning how to add new ones. Let me know if further edits are needed!\n"})})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
