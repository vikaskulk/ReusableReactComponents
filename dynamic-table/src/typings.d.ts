declare module "jspdf-autotable" {
    import jsPDF from "jspdf";
  
    export interface AutoTableOptions {
      head: Array<Array<string>>;
      body: Array<Array<string>>;
    }
  
    export function autoTable(doc: jsPDF, options: AutoTableOptions): void;
  
    export default function (options: AutoTableOptions): void;
  }
  
  declare module "jspdf" {
    interface jsPDF {
      autoTable: (options: {
        head: Array<Array<string>>;
        body: Array<Array<string>>;
      }) => void;
    }
  }
  