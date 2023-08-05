// src/data.js

export const reportData1 = {
  header: [
    {
      id: "project_name",
      type: "string",
      caption: "Project name",
      align: "left",
    },
    {
      id: "total_by_project",
      type: "float",
      caption: "Total by project",
      align: "right",
    },
    {
      id: "project_type",
      type: "string",
      caption: "Project type",
      align: "center",
    },
    { id: "jan", type: "float", caption: "Jan", align: "right" },
    { id: "feb", type: "float", caption: "Feb", align: "right" },
    // ... другие заголовки ...
  ],
  data: [
    ["Mimesis", 1024.3, "commercial", 2048.2, 4096.0],
    ["Mako", 2345.1, "internal", 3465.3, { d: 12.5, color: "selected" }],
    ["Edelweiss", 54.4, "commercial", 564.8, 4652.3],
    // ... другие строки ...
  ],
};

export const reportData2 = {
  header: [
    {
      id: "project_name",
      type: "string",
      caption: "Project name",
      align: "left",
    },
    { id: "total", type: "float", caption: "Total", align: "right" },
    { id: "completed", type: "boolean", caption: "Completed", align: "center" },
    // ... другие заголовки ...
  ],
  data: [
    ["Project A", 1024.3, true],
    ["Project B", 2345.1, false],
    ["Project C", 54.4, true],
    // ... другие строки ...
  ],
};

export const reportData3 = {
  header: [
    { id: "name", type: "string", caption: "Name", align: "left" },
    { id: "age", type: "integer", caption: "Age", align: "right" },
    { id: "score", type: "float", caption: "Score", align: "center" },
    { id: "active", type: "boolean", caption: "Active", align: "center" },
    // ... другие заголовки ...
  ],
  data: [
    ["Alice", 28, 85.5, true],
    ["Bob", 35, 72.3, false],
    ["Eve", 22, 94.8, true],
    // ... другие строки ...
  ],
};

// ... другие данные для отчетов ...
