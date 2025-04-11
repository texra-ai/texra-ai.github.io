import{_ as l,c as r,o as p,a2 as a,j as i,a as e,t}from"./chunks/framework.D30IVGRC.js";const f=JSON.parse('{"title":"Custom Agents","description":"","frontmatter":{},"headers":[],"relativePath":"guide/custom-agents.md","filePath":"guide/custom-agents.md"}'),o={name:"guide/custom-agents.md"};function h(n,s,d,u,g,k){return p(),r("div",null,[s[38]||(s[38]=a("",14)),i("p",null,[s[0]||(s[0]=e("Prompts are processed using the Jinja2 templating engine, allowing you to insert dynamic information using ")),i("code",null,t(n.variable_name),1),s[1]||(s[1]=e(" syntax. TeXRA provides several built-in variables based on the files and instructions you select in the UI:"))]),s[39]||(s[39]=i("p",null,[i("strong",null,"Common Variables:")],-1)),i("ul",null,[i("li",null,[i("code",null,t(n.INSTRUCTION),1),s[2]||(s[2]=e(': The text entered into the "Instruction" box in the UI.'))]),i("li",null,[i("code",null,t(n.INPUT_FILE),1),s[3]||(s[3]=e(": The path of the primary input file."))]),i("li",null,[i("code",null,t(n.INPUT_CONTENT),1),s[4]||(s[4]=e(": The full text content of the primary input file."))]),i("li",null,[i("code",null,t(n.REFERENCE_FILE),1),s[5]||(s[5]=e(": Path of the primary reference file."))]),i("li",null,[i("code",null,t(n.REFERENCE_CONTENT),1),s[6]||(s[6]=e(": Content of the primary reference file."))]),i("li",null,[i("code",null,t(n.AUXILIARY_FILE),1),s[7]||(s[7]=e(": Path of the primary auxiliary file."))]),i("li",null,[i("code",null,t(n.AUXILIARY_CONTENT),1),s[8]||(s[8]=e(": Content of the primary auxiliary file."))]),i("li",null,[i("code",null,t(n.EDITED_FILE),1),s[9]||(s[9]=e(": Path of the edited file (used in ")),s[10]||(s[10]=i("code",null,"merge",-1)),s[11]||(s[11]=e(")."))]),i("li",null,[i("code",null,t(n.EDITED_CONTENT),1),s[12]||(s[12]=e(": Content of the edited file."))]),i("li",null,[i("code",null,t(n.MEDIA_FILE),1),s[13]||(s[13]=e(": Path of the primary media file. ")),s[14]||(s[14]=i("em",null,[e("Note: Media content itself isn't directly inserted as text; it's handled separately for multimodal models. See "),i("a",{href:"./working-with-figures.html"},"Working with Figures"),e(".")],-1))])]),s[40]||(s[40]=i("p",null,[i("strong",null,"Multiple File Variables:")],-1)),i("ul",null,[i("li",null,[i("code",null,t(n.ALL_INPUTS),1),s[15]||(s[15]=e(": XML string containing all selected input files (primary + multiple) wrapped in ")),s[16]||(s[16]=i("code",null,'<document name="...">...</document>',-1)),s[17]||(s[17]=e(" tags."))]),i("li",null,[i("code",null,t(n.ALL_REFERENCES),1),s[18]||(s[18]=e(": Similar XML string for all reference files."))]),i("li",null,[i("code",null,t(n.ALL_AUXILIARYS),1),s[19]||(s[19]=e(": Similar XML string for all auxiliary files."))]),i("li",null,[i("code",null,t(n.LIST_OF_ALL_INPUTS),1),s[20]||(s[20]=e(": Simple comma-separated string listing all input file paths."))]),i("li",null,[i("code",null,t(n.LIST_OF_ALL_REFERENCES),1),s[21]||(s[21]=e(": Similar comma-separated list for reference files."))]),i("li",null,[i("code",null,t(n.LIST_OF_ALL_AUXILIARYS),1),s[22]||(s[22]=e(": Similar comma-separated list for auxiliary files."))])]),s[41]||(s[41]=i("p",null,[i("strong",null,"Multiple Output Variable:")],-1)),i("ul",null,[i("li",null,[i("code",null,t(n.OUTPUT_FILES_ORDER),1),s[23]||(s[23]=e(": Comma-separated string listing the output filenames specified in the UI. Crucial for agents generating multiple files. See ")),s[24]||(s[24]=i("a",{href:"./multiple-output.html"},"Handling Multiple Files",-1)),s[25]||(s[25]=e("."))])]),s[42]||(s[42]=i("p",null,[i("strong",null,[e("Custom Variables (from "),i("code",null,"settings"),e("):")])],-1)),i("ul",null,[i("li",null,[s[26]||(s[26]=e("Files specified in ")),s[27]||(s[27]=i("code",null,"requiredFiles",-1)),s[28]||(s[28]=e(" or ")),s[29]||(s[29]=i("code",null,"requiredFilesInternal",-1)),s[30]||(s[30]=e(" are available as ")),i("code",null,t(n.VARNAME_CONTENT),1),s[31]||(s[31]=e(" (e.g., ")),i("code",null,t(n.TEMPLATE_CONTENT),1),s[32]||(s[32]=e(")."))]),i("li",null,[s[33]||(s[33]=e("Files matched by ")),s[34]||(s[34]=i("code",null,"filePatternsContain",-1)),s[35]||(s[35]=e(" are available as ")),i("code",null,t(n.VARNAME_CONTENT),1),s[36]||(s[36]=e(" (e.g., ")),i("code",null,t(n.BIBLIOGRAPHY_CONTENT),1),s[37]||(s[37]=e(")."))])]),s[43]||(s[43]=a("",7))])}const y=l(o,[["render",h]]);export{f as __pageData,y as default};
