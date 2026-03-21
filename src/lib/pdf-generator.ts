import jsPDF from "jspdf";

const COLORS = {
  primary: [229, 9, 20] as [number, number, number],      // #e50914
  black: [16, 19, 22] as [number, number, number],         // #101316
  darkGray: [40, 44, 48] as [number, number, number],
  mediumGray: [120, 125, 132] as [number, number, number],
  lightGray: [200, 203, 207] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  bgLight: [247, 248, 249] as [number, number, number],
};

const PAGE = {
  width: 210,
  height: 297,
  marginLeft: 24,
  marginRight: 24,
  marginTop: 28,
  marginBottom: 24,
  contentWidth: 162,  // 210 - 24 - 24
};

interface ServiceData {
  id: number;
  title: string;
  description: string;
  features: string[];
}

function addHeader(doc: jsPDF) {
  // Top accent bar
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, PAGE.width, 3, "F");

  // Logo area
  doc.setFillColor(...COLORS.black);
  doc.rect(0, 3, PAGE.width, 42, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...COLORS.white);
  doc.text("DASH TECH AFRICA", PAGE.marginLeft, 22);

  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.mediumGray);
  doc.text("Digital Transformation Partner", PAGE.marginLeft, 30);

  // Contact info — right aligned
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.lightGray);
  const rightX = PAGE.width - PAGE.marginRight;
  doc.text("contact@dashtechafrica.com", rightX, 18, { align: "right" });
  doc.text("+237 6 75 89 63 89", rightX, 23, { align: "right" });
  doc.text("Douala, Cameroon", rightX, 28, { align: "right" });
  doc.text("www.dashtechafrica.com", rightX, 33, { align: "right" });
}

function addFooter(doc: jsPDF, pageNumber: number, totalPages: number) {
  const y = PAGE.height - 14;

  // Separator
  doc.setDrawColor(...COLORS.lightGray);
  doc.setLineWidth(0.3);
  doc.line(PAGE.marginLeft, y - 4, PAGE.width - PAGE.marginRight, y - 4);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  doc.setTextColor(...COLORS.mediumGray);
  doc.text(`© ${new Date().getFullYear()} Dash Tech Africa. All rights reserved. | Confidential`, PAGE.marginLeft, y);

  doc.text(`${pageNumber} / ${totalPages}`, PAGE.width - PAGE.marginRight, y, { align: "right" });
}

function drawSectionTitle(doc: jsPDF, title: string, y: number): number {
  // Primary accent line
  doc.setFillColor(...COLORS.primary);
  doc.rect(PAGE.marginLeft, y, 28, 2, "F");

  y += 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.black);
  doc.text(title, PAGE.marginLeft, y);

  return y + 8;
}

function drawLabelValue(doc: jsPDF, label: string, value: string, y: number, maxWidth: number): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.mediumGray);
  doc.text(label.toUpperCase(), PAGE.marginLeft, y);

  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.darkGray);
  const lines = doc.splitTextToSize(value, maxWidth);
  doc.text(lines, PAGE.marginLeft, y);

  return y + lines.length * 4.2 + 4;
}

function checkPageBreak(doc: jsPDF, y: number, needed: number, pageNum: { current: number }, totalPages: number): number {
  if (y + needed > PAGE.height - PAGE.marginBottom - 10) {
    addFooter(doc, pageNum.current, totalPages);
    doc.addPage();
    pageNum.current++;
    addHeader(doc);
    return 56;
  }
  return y;
}

export function generateServicePDF(service: ServiceData): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageNum = { current: 1 };
  const totalPages = 1;

  addHeader(doc);

  let y = 56;

  // Document type label
  doc.setFillColor(...COLORS.bgLight);
  doc.roundedRect(PAGE.marginLeft, y, 48, 7, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6);
  doc.setTextColor(...COLORS.primary);
  doc.text("SERVICE REFERENCE", PAGE.marginLeft + 4, y + 4.8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(6);
  doc.setTextColor(...COLORS.mediumGray);
  doc.text(`REF: DTA-SRV-${String(service.id).padStart(3, "0")}`, PAGE.marginLeft + 52, y + 4.8);

  y += 16;

  // Service title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.black);
  const titleLines = doc.splitTextToSize(service.title, PAGE.contentWidth);
  doc.text(titleLines, PAGE.marginLeft, y);
  y += titleLines.length * 8 + 8;

  // Divider
  doc.setDrawColor(...COLORS.lightGray);
  doc.setLineWidth(0.3);
  doc.line(PAGE.marginLeft, y, PAGE.width - PAGE.marginRight, y);
  y += 10;

  // Overview section
  y = drawSectionTitle(doc, "Overview", y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.darkGray);
  const descLines = doc.splitTextToSize(service.description, PAGE.contentWidth);
  doc.text(descLines, PAGE.marginLeft, y);
  y += descLines.length * 4.5 + 14;

  // Key Capabilities
  y = checkPageBreak(doc, y, 60, pageNum, totalPages);
  y = drawSectionTitle(doc, "Key Capabilities", y);

  service.features.forEach((feature, i) => {
    y = checkPageBreak(doc, y, 12, pageNum, totalPages);

    // Numbered circle
    doc.setFillColor(...COLORS.primary);
    doc.circle(PAGE.marginLeft + 4, y - 1.5, 3.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.white);
    doc.text(String(i + 1), PAGE.marginLeft + 4, y - 0.5, { align: "center" });

    // Feature text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLORS.darkGray);
    doc.text(feature, PAGE.marginLeft + 12, y);

    y += 10;
  });

  y += 8;

  // Delivery Methodology
  y = checkPageBreak(doc, y, 50, pageNum, totalPages);
  y = drawSectionTitle(doc, "Delivery Methodology", y);

  const methodology = [
    { step: "Discovery", desc: "Requirements gathering and business analysis" },
    { step: "Architecture", desc: "System design and technical planning" },
    { step: "Development", desc: "Iterative build with quality assurance" },
    { step: "Deployment", desc: "Production release and team training" },
    { step: "Support", desc: "Ongoing maintenance and evolution" },
  ];

  // Process flow
  const stepWidth = PAGE.contentWidth / methodology.length;
  methodology.forEach((item, i) => {
    const x = PAGE.marginLeft + i * stepWidth;

    // Step number bar
    doc.setFillColor(...(i === 0 ? COLORS.primary : COLORS.lightGray));
    doc.rect(x + 2, y, stepWidth - 4, 2, "F");

    // Step label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.black);
    doc.text(item.step, x + 2, y + 8);

    // Step description
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6);
    doc.setTextColor(...COLORS.mediumGray);
    const stepLines = doc.splitTextToSize(item.desc, stepWidth - 6);
    doc.text(stepLines, x + 2, y + 13);
  });

  y += 30;

  // Why Dash Tech
  y = checkPageBreak(doc, y, 50, pageNum, totalPages);
  y = drawSectionTitle(doc, "Why Dash Tech Africa", y);

  const whyUs = [
    "10+ years of experience in African digital markets",
    "50+ successful projects delivered across 6+ countries",
    "Dedicated local support with 24/7 availability",
    "Competitive pricing tailored for African businesses",
    "Proven expertise in AI, IoT, and enterprise systems",
  ];

  whyUs.forEach((item) => {
    y = checkPageBreak(doc, y, 8, pageNum, totalPages);
    doc.setFillColor(...COLORS.primary);
    doc.rect(PAGE.marginLeft, y - 2, 1.5, 1.5, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.darkGray);
    doc.text(item, PAGE.marginLeft + 6, y);
    y += 7;
  });

  y += 10;

  // CTA box
  y = checkPageBreak(doc, y, 32, pageNum, totalPages);
  doc.setFillColor(...COLORS.black);
  doc.roundedRect(PAGE.marginLeft, y, PAGE.contentWidth, 28, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.white);
  doc.text("Ready to get started?", PAGE.marginLeft + 10, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.lightGray);
  doc.text("Contact us to discuss your project requirements and receive a custom proposal.", PAGE.marginLeft + 10, y + 17);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.primary);
  doc.text("contact@dashtechafrica.com  |  +237 6 75 89 63 89", PAGE.marginLeft + 10, y + 23);

  addFooter(doc, pageNum.current, totalPages);

  const filename = `DashTech_${service.title.replace(/[^a-zA-Z0-9]/g, "_").replace(/_+/g, "_")}_Reference.pdf`;
  doc.save(filename);
}

export function generateFullProductGuide(services: ServiceData[]): void {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageNum = { current: 1 };
  const totalPages = services.length + 2; // cover + TOC + services

  // ==========================================
  // COVER PAGE
  // ==========================================
  doc.setFillColor(...COLORS.black);
  doc.rect(0, 0, PAGE.width, PAGE.height, "F");

  // Top accent
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, PAGE.width, 4, "F");

  // Company name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...COLORS.white);
  doc.text("DASH TECH", PAGE.marginLeft, 36);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(...COLORS.mediumGray);
  doc.text("AFRICA", PAGE.marginLeft + 50, 36);

  // Main title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(...COLORS.white);
  doc.text("Product &", PAGE.marginLeft, 100);
  doc.text("Services", PAGE.marginLeft, 116);
  doc.setTextColor(...COLORS.primary);
  doc.text("Guide", PAGE.marginLeft, 132);

  // Subtitle
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.mediumGray);
  const subtitle = doc.splitTextToSize(
    "Comprehensive overview of our digital transformation solutions for African businesses and organizations.",
    120
  );
  doc.text(subtitle, PAGE.marginLeft, 148);

  // Bottom info
  doc.setFillColor(...COLORS.primary);
  doc.rect(PAGE.marginLeft, PAGE.height - 52, 40, 1, "F");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.mediumGray);
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("en-US", { month: "long" });
  doc.text(`${month} ${year} Edition`, PAGE.marginLeft, PAGE.height - 44);
  doc.text("Confidential", PAGE.marginLeft, PAGE.height - 38);
  doc.text("www.dashtechafrica.com", PAGE.marginLeft, PAGE.height - 32);

  // Version badge
  doc.setFillColor(30, 33, 37);
  doc.roundedRect(PAGE.width - PAGE.marginRight - 36, PAGE.height - 50, 36, 16, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.primary);
  doc.text("VERSION", PAGE.width - PAGE.marginRight - 30, PAGE.height - 43);
  doc.setFontSize(14);
  doc.setTextColor(...COLORS.white);
  doc.text(`${year}.1`, PAGE.width - PAGE.marginRight - 30, PAGE.height - 36);

  // ==========================================
  // TABLE OF CONTENTS
  // ==========================================
  doc.addPage();
  pageNum.current++;
  addHeader(doc);

  let y = 58;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.black);
  doc.text("Table of Contents", PAGE.marginLeft, y);
  y += 16;

  doc.setFillColor(...COLORS.primary);
  doc.rect(PAGE.marginLeft, y - 4, 28, 2, "F");
  y += 8;

  services.forEach((service, i) => {
    // Number
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.primary);
    doc.text(String(i + 1).padStart(2, "0"), PAGE.marginLeft, y);

    // Title
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.darkGray);
    doc.text(service.title, PAGE.marginLeft + 14, y);

    // Dots
    doc.setDrawColor(...COLORS.lightGray);
    doc.setLineWidth(0.15);
    const titleWidth = doc.getTextWidth(service.title);
    const dotsStart = PAGE.marginLeft + 14 + titleWidth + 3;
    const dotsEnd = PAGE.width - PAGE.marginRight - 12;
    for (let dx = dotsStart; dx < dotsEnd; dx += 2) {
      doc.circle(dx, y - 1, 0.2, "F");
    }

    // Page number
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.mediumGray);
    doc.text(String(i + 3), PAGE.width - PAGE.marginRight, y, { align: "right" });

    y += 12;
  });

  // Company overview box
  y += 6;
  doc.setFillColor(...COLORS.bgLight);
  doc.roundedRect(PAGE.marginLeft, y, PAGE.contentWidth, 36, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.black);
  doc.text("About Dash Tech Africa", PAGE.marginLeft + 8, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.mediumGray);
  const aboutText = doc.splitTextToSize(
    "Dash Tech Africa is a leading digital transformation company based in Cameroon, delivering innovative technology solutions across the African continent. With 10+ years of experience, 50+ projects delivered, and a team of 15+ specialists, we empower businesses through custom software, AI, IoT, and enterprise systems.",
    PAGE.contentWidth - 16
  );
  doc.text(aboutText, PAGE.marginLeft + 8, y + 17);

  addFooter(doc, pageNum.current, totalPages);

  // ==========================================
  // SERVICE PAGES
  // ==========================================
  services.forEach((service, serviceIndex) => {
    doc.addPage();
    pageNum.current++;

    addHeader(doc);
    y = 56;

    // Service number badge
    doc.setFillColor(...COLORS.primary);
    doc.roundedRect(PAGE.marginLeft, y, 18, 9, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.white);
    doc.text(`0${serviceIndex + 1}`, PAGE.marginLeft + 5, y + 6);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(6);
    doc.setTextColor(...COLORS.mediumGray);
    doc.text(`SERVICE ${serviceIndex + 1} OF ${services.length}`, PAGE.marginLeft + 22, y + 6);

    y += 18;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...COLORS.black);
    const svcTitleLines = doc.splitTextToSize(service.title, PAGE.contentWidth);
    doc.text(svcTitleLines, PAGE.marginLeft, y);
    y += svcTitleLines.length * 7.5 + 6;

    // Divider
    doc.setDrawColor(...COLORS.lightGray);
    doc.setLineWidth(0.3);
    doc.line(PAGE.marginLeft, y, PAGE.width - PAGE.marginRight, y);
    y += 10;

    // Description
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.mediumGray);
    doc.text("OVERVIEW", PAGE.marginLeft, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.darkGray);
    const svcDescLines = doc.splitTextToSize(service.description, PAGE.contentWidth);
    doc.text(svcDescLines, PAGE.marginLeft, y);
    y += svcDescLines.length * 4.2 + 12;

    // Key Capabilities — cards layout
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.mediumGray);
    doc.text("KEY CAPABILITIES", PAGE.marginLeft, y);
    y += 8;

    const cardWidth = (PAGE.contentWidth - 6) / 2;
    const cardHeight = 18;

    service.features.forEach((feature, fi) => {
      y = checkPageBreak(doc, y, cardHeight + 4, pageNum, totalPages);

      const col = fi % 2;
      const x = PAGE.marginLeft + col * (cardWidth + 6);

      // Card background
      doc.setFillColor(...COLORS.bgLight);
      doc.roundedRect(x, y - 4, cardWidth, cardHeight, 2, 2, "F");

      // Left accent
      doc.setFillColor(...COLORS.primary);
      doc.rect(x, y - 4, 2, cardHeight, "F");

      // Number
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.setTextColor(...COLORS.primary);
      doc.text(String(fi + 1).padStart(2, "0"), x + 6, y + 2);

      // Feature text
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...COLORS.darkGray);
      const fLines = doc.splitTextToSize(feature, cardWidth - 20);
      doc.text(fLines, x + 16, y + 2);

      if (col === 1 || fi === service.features.length - 1) {
        y += cardHeight + 4;
      }
    });

    y += 8;

    // Use Cases
    y = checkPageBreak(doc, y, 35, pageNum, totalPages);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.mediumGray);
    doc.text("IDEAL FOR", PAGE.marginLeft, y);
    y += 6;

    const useCases: Record<number, string[]> = {
      1: ["Enterprise resource planning", "CRM implementation", "Business process automation", "Legacy system modernization"],
      2: ["Security & surveillance", "Quality control inspection", "Document digitization", "Traffic & crowd analysis"],
      3: ["Factory automation", "Environmental monitoring", "Predictive maintenance", "Energy management"],
      4: ["Warehouse operations", "Supply chain management", "Inventory optimization", "Loss prevention"],
      5: ["Fuel depot management", "Fleet fuel tracking", "Leak detection & prevention", "Distribution optimization"],
      6: ["Port operations", "Urban logistics", "Container tracking", "Smart city initiatives"],
      7: ["Network security", "Cloud migration", "Disaster recovery", "Compliance & governance"],
    };

    const cases = useCases[service.id] || ["Custom implementations", "Enterprise solutions", "Digital transformation", "Process optimization"];
    cases.forEach((uc) => {
      doc.setFillColor(...COLORS.primary);
      doc.rect(PAGE.marginLeft, y - 2, 1.5, 1.5, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...COLORS.darkGray);
      doc.text(uc, PAGE.marginLeft + 6, y);
      y += 6.5;
    });

    y += 8;

    // Contact CTA box
    y = checkPageBreak(doc, y, 24, pageNum, totalPages);
    doc.setFillColor(...COLORS.black);
    doc.roundedRect(PAGE.marginLeft, y, PAGE.contentWidth, 22, 3, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.white);
    doc.text("Interested in this service?", PAGE.marginLeft + 8, y + 8);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.lightGray);
    doc.text("Reach out for a detailed consultation and custom proposal.", PAGE.marginLeft + 8, y + 14);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.primary);
    doc.text("contact@dashtechafrica.com", PAGE.marginLeft + 8, y + 19);

    addFooter(doc, pageNum.current, totalPages);
  });

  const filename = `DashTech_Product_Guide_${new Date().getFullYear()}.pdf`;
  doc.save(filename);
}
