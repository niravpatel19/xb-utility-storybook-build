import{j as n,M as t}from"./DocsRenderer-CFRXHY34-eADGNmRD.js";import{useMDXComponents as r}from"./index-CKkJzyks.js";import"./iframe-yKSYOY2J.js";import"./index-DU0kJ4L0.js";import"./react-18-CCaTtm_B.js";import"./index-GS8XlyfN.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Project Structure - @xb_utility"}),`
`,n.jsx(e.h1,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"@xb/utility"})," library is designed to provide foundational utility functions, reusable logic, and configurations that can be shared across the main frontend (",n.jsx(e.code,{children:"xobito-fe"}),") and other micro-frontends like ",n.jsx(e.code,{children:"account-fe"})," and ",n.jsx(e.code,{children:"setting-fe"}),". Its modular architecture ensures reusability, scalability, and consistency in utility logic."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"purpose",children:"Purpose"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"To provide a centralized repository for commonly used utility functions and configurations."}),`
`,n.jsx(e.li,{children:"To support consistent implementation of shared functionalities across the Xobito ecosystem."}),`
`,n.jsx(e.li,{children:"To eliminate duplication of utility logic in individual micro-frontends."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"responsibilities",children:"Responsibilities"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Offers reusable utility functions for tasks like date manipulation, file handling, encryption, and URL parsing."}),`
`,n.jsx(e.li,{children:"Provides configuration management for constants, interfaces, and utility-specific settings."}),`
`,n.jsx(e.li,{children:"Simplifies the development process by acting as a helper library for repetitive tasks."}),`
`,n.jsx(e.li,{children:"Ensures consistent behavior and error handling in utility implementations across multiple services."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"project-structure",children:"Project Structure"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Folder Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`@xb/utility/\r
├── .husky/\r
├── .storybook/\r
├── dist/\r
├── node_modules/\r
├── public/\r
├── src/\r
│   ├── environment/\r
│   │   ├── index.ts\r
│   │   ├── secret/\r
│   │       ├── index.ts\r
│   ├── helper/\r
│   │   ├── debounce/\r
│   │   │   ├── index.ts\r
│   │   ├── index.ts\r
│   ├── stories/\r
│   │   ├── ProjectStructure.mdx\r
│   ├── util/\r
│   │   ├── common/\r
│   │   │   ├── config/\r
│   │   │   │   ├── constant/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── index.ts\r
│   │   ├── date/\r
│   │   │   ├── config/\r
│   │   │   │   ├── constant/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── index.ts\r
│   │   ├── encryption/\r
│   │   │   ├── config/\r
│   │   │   │   ├── interface/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── index.ts\r
│   │   ├── file/\r
│   │   │   ├── config/\r
│   │   │   │   ├── constant/\r
│   │   │   │   │   ├── index.ts\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── index.ts\r
│   │   ├── storage/\r
│   │   │   ├── index.ts\r
│   │   │   ├── local/\r
│   │   │   │   ├── index.ts\r
│   │   │   ├── session/\r
│   │   │   │   ├── index.ts\r
│   │   ├── url/\r
│   │   │   ├── index.ts\r
│   │   │   ├── query/\r
│   │   │   │   ├── index.ts\r
│   │   ├── index.ts\r
│   ├── index.ts\r
│   ├── vite-env.d.ts\r
├── .eslintrc.json\r
├── .gitignore\r
├── .npmrc\r
├── .prettierrc\r
├── commitlint.config.js\r
├── index.html\r
├── package.json\r
├── README.md\r
├── tailwind.config.js\r
├── tsconfig.json\r
├── vite.config.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-descriptions",children:"Folder Descriptions"}),`
`,n.jsx(e.h3,{id:"srcenvironment",children:n.jsx(e.code,{children:"/src/environment"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Purpose:"})," Manages environment-specific configurations and secrets."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Contains ",n.jsx(e.code,{children:"index.ts"})," for loading and managing environment variables."]}),`
`,n.jsxs(e.li,{children:["Includes a ",n.jsx(e.code,{children:"secret/"})," folder for handling sensitive data securely."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"srchelper",children:n.jsx(e.code,{children:"/src/helper"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Purpose:"})," Provides reusable helper functions for common operations."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Contains a ",n.jsx(e.code,{children:"debounce/"})," folder for handling debounce-related utilities."]}),`
`,n.jsx(e.li,{children:"Acts as a repository for logic that doesn't fit into specific utilities (e.g., generic helpers)."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"srcstories",children:n.jsx(e.code,{children:"/src/stories"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Purpose:"})," Contains documentation files in ",n.jsx(e.code,{children:".mdx"})," format for project structure and usage."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsibilities:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provides a visual reference of the project structure for developers."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"srcutil",children:n.jsx(e.code,{children:"/src/util"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Purpose:"})," Contains categorized utilities with modular configurations and constants."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Subfolders:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"common/"}),":"]})," Handles generic configurations and constants.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"config/"}),":"]})," Stores reusable constants like API endpoints."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"date/"}),":"]})," Manages utilities for date manipulation and formatting.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Includes constants, interfaces, and utility logic."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"encryption/"}),":"]})," Provides encryption and decryption utilities.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Includes configuration and interface files for encryption settings."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"file/"}),":"]})," Manages utilities for file operations, such as uploads and parsing."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"storage/"}),":"]})," Handles utilities for local and session storage management.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Subfolders for ",n.jsx(e.code,{children:"local/"})," and ",n.jsx(e.code,{children:"session/"})," storage utilities."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"url/"}),":"]})," Includes utilities for handling URL parsing and query manipulations.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Subfolders for query-related utilities."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modularity:"})," Each utility category is separated into its own folder for maintainability."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusability:"})," Functions and logic are designed to be reusable across all microservices."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistency:"})," Adhere to the defined folder structure for easier onboarding and collaboration."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation:"})," Use ",n.jsx(e.code,{children:".mdx"})," files to document the structure and usage of utilities."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"conclusion",children:"Conclusion"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"@xb/utility"})," library ensures efficient and reusable utility logic for the Xobito ecosystem. By following the standardized folder structure and practices, developers can maintain consistency and scalability across all micro-frontends and services."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{})})]})}function u(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
