import{j as n,M as t}from"./DocsRenderer-CFRXHY34-CzWKJP_B.js";import{useMDXComponents as s}from"./index-CKkJzyks.js";import"./iframe-ByUCtZeX.js";import"./index-DU0kJ4L0.js";import"./react-18-CCaTtm_B.js";import"./index-GS8XlyfN.js";import"./index-DrFu-skq.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Folder Structure"}),`
`,n.jsx(e.h1,{id:"folder-structure-for-xb-utility",children:"Folder Structure for xb-utility"}),`
`,n.jsxs(e.p,{children:["This document provides a comprehensive overview of the folder structure for the ",n.jsx(e.code,{children:"xb-utility"})," project. It outlines the purpose of each folder and includes best practices for maintaining and expanding the project."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-structure",children:n.jsx(e.strong,{children:"Folder Structure"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`└── 📁src\r
    ├── index.ts\r
    ├── vite-env.d.ts\r
    ├── 📁environment\r
    │   ├── index.ts\r
    │   ├── 📁secret\r
    │       ├── index.ts\r
    ├── 📁helper\r
    │   ├── index.ts\r
    │   ├── 📁common\r
    │       ├── index.ts\r
    │   ├── 📁debounce\r
    │       ├── index.ts\r
    ├── 📁util\r
        ├── index.ts\r
        ├── 📁common\r
        │   ├── index.ts\r
        │   ├── 📁config\r
        │       ├── index.ts\r
        │       ├── 📁constant\r
        │           ├── index.ts\r
        ├── 📁date\r
        │   ├── index.ts\r
        │   ├── 📁config\r
        │       ├── index.ts\r
        │       ├── 📁constant\r
        │           ├── index.ts\r
        │       ├── 📁interface\r
        │           ├── index.ts\r
        ├── 📁encryption\r
        │   ├── index.ts\r
        │   ├── 📁config\r
        │       ├── index.ts\r
        │       ├── 📁interface\r
        │           ├── index.ts\r
        ├── 📁file\r
        │   ├── index.ts\r
        │   ├── 📁config\r
        │       ├── index.ts\r
        │       ├── 📁constant\r
        │           ├── index.ts\r
        ├── 📁query-param\r
        │   ├── index.ts\r
        ├── 📁storage\r
        │   ├── index.ts\r
        │   ├── 📁local\r
        │       ├── index.ts\r
        │   ├── 📁session\r
        │       ├── index.ts\r
        ├── 📁url\r
        │   ├── index.ts\r
        │   ├── 📁query\r
        │       ├── index.ts
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"folder-descriptions",children:n.jsx(e.strong,{children:"Folder Descriptions"})}),`
`,n.jsxs(e.h3,{id:"1-src",children:["1. ",n.jsx(e.code,{children:"src/"})]}),`
`,n.jsx(e.p,{children:"The root folder of the project that contains all the essential files and subdirectories."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Files:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Main entry point for exporting utilities."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"vite-env.d.ts"}),": TypeScript environment configuration."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"2-environment",children:["2. ",n.jsx(e.code,{children:"environment/"})]}),`
`,n.jsx(e.p,{children:"This folder contains environment-specific configurations."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`📁environment\r
├── index.ts\r
├── 📁secret\r
    ├── index.ts
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": General environment-related variables and logic."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"secret/"}),": Encapsulates secret-related configurations or utilities."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"3-helper",children:["3. ",n.jsx(e.code,{children:"helper/"})]}),`
`,n.jsx(e.p,{children:"This folder provides utility helpers for common operations."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`📁helper\r
├── index.ts\r
├── 📁common\r
    ├── index.ts\r
├── 📁debounce\r
    ├── index.ts
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"common/"}),": Includes general-purpose helper functions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debounce/"}),": Contains debounce-related utilities."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.h3,{id:"4-util",children:["4. ",n.jsx(e.code,{children:"util/"})]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"util"})," folder is the core of the utility functions in the project. It contains modular and reusable utilities for various operations."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-plaintext",children:`📁util\r
├── index.ts\r
├── 📁common\r
│   ├── index.ts\r
│   ├── 📁config\r
│       ├── index.ts\r
│       ├── 📁constant\r
│           ├── index.ts\r
├── 📁date\r
│   ├── index.ts\r
│   ├── 📁config\r
│       ├── index.ts\r
│       ├── 📁constant\r
│           ├── index.ts\r
│       ├── 📁interface\r
│           ├── index.ts\r
├── 📁encryption\r
│   ├── index.ts\r
│   ├── 📁config\r
│       ├── index.ts\r
│       ├── 📁interface\r
│           ├── index.ts\r
├── 📁file\r
│   ├── index.ts\r
│   ├── 📁config\r
│       ├── index.ts\r
│       ├── 📁constant\r
│           ├── index.ts\r
├── 📁query-param\r
│   ├── index.ts\r
├── 📁storage\r
│   ├── index.ts\r
│   ├── 📁local\r
│       ├── index.ts\r
│   ├── 📁session\r
│       ├── index.ts\r
├── 📁url\r
    ├── index.ts\r
    ├── 📁query\r
        ├── index.ts
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"common/"}),": General-purpose utilities with constants and configurations."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date/"}),": Utilities for date manipulation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"encryption/"}),": Functions for encrypting/decrypting data."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"file/"}),": Utilities for file operations."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"query-param/"}),": Utilities for working with URL query parameters."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"storage/"}),": Utilities for managing local and session storage."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"url/"}),": Utilities for URL and query handling."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"best-practices",children:n.jsx(e.strong,{children:"Best Practices"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Separation of Concerns:"})," Group related logic and utilities together into modular folders."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusability:"})," Design utilities to be reusable and flexible across different parts of the application."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent Naming:"})," Follow a consistent naming convention for files and folders."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation:"})," Include comments or documentation for complex utility functions to enhance clarity and maintainability."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["This folder structure ensures scalability, maintainability, and consistency across the project. Use this structure as a reference for organizing and expanding the ",n.jsx(e.code,{children:"xb-utility"})," project effectively."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{})})]})}function j(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
