import { PDFDocument } from "pdf-lib";

export async function generateBBQPdf(data) {
  const existingPdf = await fetch("/templates/bbq-template.pdf").then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdf);

  const pages = pdfDoc.getPages();
  const page = pages[0];

  page.drawText(data.projectNumber || "", {
    x: 120,
    y: 720,
    size: 10,
  });

  page.drawText(data.projectName || "", {
    x: 120,
    y: 700,
    size: 10,
  });

  page.drawText(`PK-${data.pk}`, {
    x: 200,
    y: 560,
    size: 12,
  });

  page.drawText(`BK-${data.bk}`, {
    x: 200,
    y: 470,
    size: 12,
  });

  page.drawText(`AK-${data.ak}`, {
    x: 200,
    y: 380,
    size: 12,
  });

  page.drawText(`BBQ-${data.bbq}`, {
    x: 200,
    y: 320,
    size: 14,
  });

  const pdfBytes = await pdfDoc.save();

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "BBQ-Bericht.pdf";
  link.click();
}
