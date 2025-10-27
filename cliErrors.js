export const errors = {
  notFound: "command not found.",
  add: 'The "add" command accepts one argument (the description (any) ). If the description contains spaces, wrap it in double quotes. Example:  add "learn math"',
  update:
    'The "update" command accepts two argument (the id (number) , the description (any) ). If the description contains spaces, wrap it in double quotes. Example:  add "learn math"',
  delete: `The "delete" command accepts one argument (the id (number) ). Example:  delete 1234 `,
  "mark-done":
    'The "mark" command accepts one argument (the id (number) ). Example:  mark-in-progress 1234 or mark-done 1234',
  "mark-in-progress":
    'The "mark" command accepts one argument (the id (number) ). Example:  mark-in-progress 1234 or mark-done 1234',
  list: 'The "list" command accepts one argument (the status (done || todo || in-progress) ). Example:  "list done" or "list todo" or "list in-progress"',
};
