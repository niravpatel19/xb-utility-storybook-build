import{j as e,M as s}from"./DocsRenderer-CFRXHY34-CzWKJP_B.js";import{useMDXComponents as i}from"./index-CKkJzyks.js";import"./iframe-ByUCtZeX.js";import"./index-DU0kJ4L0.js";import"./react-18-CCaTtm_B.js";import"./index-GS8XlyfN.js";import"./index-DrFu-skq.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Utility Functions"}),`
`,e.jsx(n.h1,{id:"utility-functions-in-xb-utility",children:"Utility Functions in xb-utility"}),`
`,e.jsxs(n.p,{children:["This document provides a comprehensive overview of the utility functions available in the ",e.jsx(n.code,{children:"util"})," folder. Each utility is explained in detail, including its purpose, parameters, return values, and usage examples."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"folder-structure",children:"Folder Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-plaintext",children:`└── 📁util\r
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
    ├── 📁file\r
    │   ├── 📁config\r
    │   │   ├── 📁constant\r
    │   │   │   ├── index.ts\r
    │   │   ├── index.ts\r
    │   ├── index.ts\r
    ├── 📁query-param\r
    │   ├── index.ts\r
    ├── 📁storage\r
    │   ├── 📁local\r
    │   │   ├── index.ts\r
    │   ├── 📁session\r
    │   │   ├── index.ts\r
    │   ├── index.ts\r
    ├── 📁url\r
    │   ├── 📁query\r
    │   │   ├── index.ts\r
    │   ├── index.ts\r
    ├── index.ts
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-common-utilities",children:e.jsx(n.strong,{children:"1. Common Utilities"})}),`
`,e.jsx(n.h3,{id:"exported-constant-randomtext",children:e.jsxs(n.strong,{children:["Exported Constant: ",e.jsx(n.code,{children:"RandomText"})]})}),`
`,e.jsx(n.h4,{id:"description",children:e.jsx(n.strong,{children:"Description"})}),`
`,e.jsx(n.p,{children:"Provides a string containing all uppercase and lowercase letters and digits."}),`
`,e.jsx(n.h4,{id:"usage",children:e.jsx(n.strong,{children:"Usage"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RandomText } from '@xb/utility';\r
\r
console.log(RandomText.ALPHABET_AND_DIGITS);\r
// Output: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
`})}),`
`,e.jsxs(n.p,{children:[`| Constant              | Type     | Description                                                         |\r
| --------------------- | -------- | ------------------------------------------------------------------- |\r
| `,e.jsx(n.code,{children:"ALPHABET_AND_DIGITS"})," | ",e.jsx(n.code,{children:"string"})," | A string containing all uppercase and lowercase letters and digits. |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-date-utilities-dateutil",children:e.jsxs(n.strong,{children:["2. Date Utilities (",e.jsx(n.code,{children:"DateUtil"}),")"]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DateUtil"})," class provides multiple utility functions for date and time manipulations."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"function-add",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"add"})]})}),`
`,e.jsxs(n.p,{children:[`| Parameter        | Type             | Required | Description                                     |\r
| ---------------- | ---------------- | -------- | ----------------------------------------------- | -------------------------------- |\r
| `,e.jsx(n.code,{children:"options.date"}),"   | ",e.jsx(n.code,{children:"Date            | string"}),`  | No                                              | The base date for the operation. |\r
| `,e.jsx(n.code,{children:"options.amount"})," | ",e.jsx(n.code,{children:"number"}),`         | Yes      | The amount of time to add.                      |\r
| `,e.jsx(n.code,{children:"options.unit"}),"   | ",e.jsx(n.code,{children:"ManipulateType"})," | Yes      | The unit of time to add (e.g., ",e.jsx(n.code,{children:"day"}),", ",e.jsx(n.code,{children:"month"}),"). |"]}),`
`,e.jsxs(n.p,{children:[`| Returns      | Type    | Description                                 |\r
| ------------ | ------- | ------------------------------------------- |\r
| Updated Date | `,e.jsx(n.code,{children:"Dayjs"})," | A ",e.jsx(n.code,{children:"Dayjs"})," object representing the new date. |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DateUtil } from '@xb/utility';\r
\r
const newDate = DateUtil.add({ date: '2023-06-25', amount: 3, unit: 'days' });\r
console.log(newDate.format()); // Output: "2023-06-28"
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"function-format",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"format"})]})}),`
`,e.jsxs(n.p,{children:[`| Parameter        | Type    | Required | Description |\r
| ---------------- | ------- | -------- | ----------- | ------------------------------- |\r
| `,e.jsx(n.code,{children:"options.date"}),"   | ",e.jsx(n.code,{children:"Date   | string"}),`  | Yes         | The date to format.             |\r
| `,e.jsx(n.code,{children:"options.format"})," | ",e.jsx(n.code,{children:"string | boolean"})," | No          | The format to use for the date. |"]}),`
`,e.jsxs(n.p,{children:[`| Returns        | Type     | Description                |\r
| -------------- | -------- | -------------------------- |\r
| Formatted Date | `,e.jsx(n.code,{children:"string"})," | The formatted date string. |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DateUtil } from '@xb/utility';\r
\r
const formattedDate = DateUtil.format({ date: '2023-06-25', format: 'DD-MM-YYYY' });\r
console.log(formattedDate); // Output: "25-06-2023"
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"other-functions",children:e.jsx(n.strong,{children:"Other Functions"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sub"}),": Subtracts a specified amount of time from a date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"diff"}),": Calculates the difference between two dates in the specified unit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isValid"}),": Validates a given date based on a format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isBefore"}),": Checks if one date is before another."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isAfter"}),": Checks if one date is after another."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fromNow"}),": Returns a relative time string for a given date."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-encryption-utilities-encryptionutil",children:e.jsxs(n.strong,{children:["3. Encryption Utilities (",e.jsx(n.code,{children:"EncryptionUtil"}),")"]})}),`
`,e.jsxs(n.p,{children:["Provides AES encryption and decryption using the ",e.jsx(n.code,{children:"crypto-js"})," library."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"function-encrypt",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"encrypt"})]})}),`
`,e.jsxs(n.p,{children:[`| Parameter           | Type     | Required | Description                    |\r
| ------------------- | -------- | -------- | ------------------------------ |\r
| `,e.jsx(n.code,{children:"option.secret_key"})," | ",e.jsx(n.code,{children:"string"}),` | Yes      | The secret key for encryption. |\r
| `,e.jsx(n.code,{children:"option.text"}),"       | ",e.jsx(n.code,{children:"string"})," | Yes      | The plaintext to encrypt.      |"]}),`
`,e.jsxs(n.p,{children:[`| Returns        | Type     | Description                  |\r
| -------------- | -------- | ---------------------------- |\r
| Encrypted Text | `,e.jsx(n.code,{children:"string"})," | The encrypted text (base64). |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EncryptionUtil } from '@xb/utility';\r
\r
const encryptedText = EncryptionUtil.encrypt({ text: 'Hello', secret_key: 'mySecretKey' });\r
console.log(encryptedText);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"function-decrypt",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"decrypt"})]})}),`
`,e.jsxs(n.p,{children:[`| Parameter           | Type     | Required | Description                    |\r
| ------------------- | -------- | -------- | ------------------------------ |\r
| `,e.jsx(n.code,{children:"option.secret_key"})," | ",e.jsx(n.code,{children:"string"}),` | Yes      | The secret key for decryption. |\r
| `,e.jsx(n.code,{children:"option.text"}),"       | ",e.jsx(n.code,{children:"string"})," | Yes      | The text to decrypt.           |"]}),`
`,e.jsxs(n.p,{children:[`| Returns        | Type     | Description              |\r
| -------------- | -------- | ------------------------ |\r
| Decrypted Text | `,e.jsx(n.code,{children:"string"})," | The decrypted plaintext. |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EncryptionUtil } from '@xb/utility';\r
\r
const decryptedText = EncryptionUtil.decrypt({ text: encryptedText, secret_key: 'mySecretKey' });\r
console.log(decryptedText);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-storage-utilities",children:e.jsx(n.strong,{children:"4. Storage Utilities"})}),`
`,e.jsx(n.h3,{id:"localstorageutil",children:e.jsx(n.strong,{children:"LocalStorageUtil"})}),`
`,e.jsx(n.h4,{id:"function-set",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"set"})]})}),`
`,e.jsxs(n.p,{children:["Stores data in ",e.jsx(n.code,{children:"localStorage"}),"."]}),`
`,e.jsxs(n.p,{children:[`| Parameter | Type      | Required             | Description                                |\r
| --------- | --------- | -------------------- | ------------------------------------------ | ------------------------------------------------------------------- |\r
| `,e.jsx(n.code,{children:"key"}),"     | ",e.jsx(n.code,{children:"string   | Record<string, any>"}),` | Yes                                        | The key to store the value under or an object with key-value pairs. |\r
| `,e.jsx(n.code,{children:"value"}),"   | ",e.jsx(n.code,{children:"any"}),`     | No                   | The value to store if the key is a string. |\r
| `,e.jsx(n.code,{children:"json"}),"    | ",e.jsx(n.code,{children:"boolean"})," | No                   | Whether to store the value as JSON.        |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"sessionstorageutil",children:e.jsx(n.strong,{children:"SessionStorageUtil"})}),`
`,e.jsxs(n.p,{children:["Handles operations for ",e.jsx(n.code,{children:"sessionStorage"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"5-queryparam-utilities",children:e.jsx(n.strong,{children:"5. QueryParam Utilities"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"QueryParamUtil"})," and ",e.jsx(n.code,{children:"QueryUtil"})," classes provide methods for working with query parameters in URLs."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"function-addmany",children:e.jsxs(n.strong,{children:["Function: ",e.jsx(n.code,{children:"addMany"})]})}),`
`,e.jsx(n.p,{children:"Adds multiple values to a query parameter, ensuring no duplicates."}),`
`,e.jsxs(n.p,{children:[`| Parameter | Type       | Required | Description                     |\r
| --------- | ---------- | -------- | ------------------------------- |\r
| `,e.jsx(n.code,{children:"values"}),"  | ",e.jsx(n.code,{children:"string[]"}),` | Yes      | The values to add to the query. |\r
| `,e.jsx(n.code,{children:"key"}),"     | ",e.jsx(n.code,{children:"string"}),"   | Yes      | The query parameter key.        |"]}),`
`,e.jsxs(n.p,{children:[`| Returns              | Type     | Description               |\r
| -------------------- | -------- | ------------------------- |\r
| Updated Query String | `,e.jsx(n.code,{children:"string"})," | The updated query string. |"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { QueryUtil } from '@xb/utility';\r
\r
const updatedQuery = QueryUtil.addMany(['value1', 'value2'], 'key');\r
console.log(updatedQuery);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["This documentation now includes ",e.jsx(n.strong,{children:"all utility functions"})," from your ",e.jsx(n.code,{children:"util"})," folder with detailed descriptions, parameters, return values, and usage examples. Let me know if you need further refinements!"]})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{p as default};
