type Child = {
  inputName: string;
  id: string;
  type: "text" | "number";
};

export type Row = {
  inputName: string;
  inputSize: "full" | "hasChildren" | "textArea";
  defaultValue?: string | number;
  id: string;
  children?: Child[];
  type?: "text" | "number" | "date";
};
