import { jsPDF } from "jspdf";

export const generateResumePDF = () => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(24);
  doc.setTextColor(33, 150, 243);
  doc.text("GOWTHAM V", 105, 20, { align: "center" });
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text("ARTIFICIAL INTELLIGENCE AND DATA SCIENCE", 105, 28, { align: "center" });
  
  // Contact Details
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("Email: varatharajgowtham2004@gmail.com | Phone: +91 8072503157", 105, 35, { align: "center" });
  doc.text("LinkedIn: linkedin.com/in/gowthamv142004 | GitHub: github.com/gowthamv2004", 105, 40, { align: "center" });
  
  // Career Objective
  let yPos = 50;
  doc.setFontSize(14);
  doc.setTextColor(33, 150, 243);
  doc.text("CAREER OBJECTIVE", 20, yPos);
  
  yPos += 7;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const objective = "Seeking a role which allows consistent learning and perfecting my skills to secure my dream job and create my dream project in a better environment.";
  doc.text(objective, 20, yPos, { maxWidth: 170 });
  
  // Education
  yPos += 15;
  doc.setFontSize(14);
  doc.setTextColor(33, 150, 243);
  doc.text("EDUCATION", 20, yPos);
  
  yPos += 7;
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("Bachelor of Technology - AI & Data Science", 20, yPos);
  yPos += 5;
  doc.setFontSize(10);
  doc.text("Bannari Amman Institute of Technology, Sathyamangalam", 20, yPos);
  yPos += 5;
  doc.text("CGPA: 7.84 (up to 6th sem) | Batch: 2022-2026", 20, yPos);
  
  yPos += 8;
  doc.setFontSize(11);
  doc.text("HSC - 79% | Sri Vidya Mandir Matric HSS, Gurusamipalayam", 20, yPos);
  yPos += 5;
  doc.setFontSize(11);
  doc.text("SSLC - 92% | Sri Vidya Mandir Matric HSS, Gurusamipalayam", 20, yPos);
  
  // Skills
  yPos += 15;
  doc.setFontSize(14);
  doc.setTextColor(33, 150, 243);
  doc.text("CORE SKILLS", 20, yPos);
  
  yPos += 7;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("Technical: Python, React.js, C, Flask, OpenCV, MediaPipe, Machine Learning", 20, yPos);
  yPos += 5;
  doc.text("Soft Skills: Quick Learner, Leadership, Teamwork, Time Management, Critical Thinking", 20, yPos);
  
  // Projects
  yPos += 15;
  doc.setFontSize(14);
  doc.setTextColor(33, 150, 243);
  doc.text("KEY PROJECTS", 20, yPos);
  
  yPos += 7;
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("1. Vulnerability Scanning Tool", 20, yPos);
  yPos += 5;
  doc.setFontSize(9);
  doc.text("   Role: Team Leader | Developed tool for scanning website vulnerabilities using Flask and VirusTotal API", 20, yPos);
  yPos += 4;
  doc.text("   Published in 'From Concept to Creation: The Journey of Innovation Book'", 20, yPos);
  
  yPos += 8;
  doc.setFontSize(11);
  doc.text("2. Network Traffic Analysis Tool", 20, yPos);
  yPos += 5;
  doc.setFontSize(9);
  doc.text("   Role: Team Leader | Python tool for analyzing Wireshark traffic with GeoIP visualization", 20, yPos);
  
  yPos += 8;
  doc.setFontSize(11);
  doc.text("3. Vision-Based Smart Interface Using AI", 20, yPos);
  yPos += 5;
  doc.setFontSize(9);
  doc.text("   Role: Team Leader | AI interface with hand gesture, pose detection using OpenCV and MediaPipe", 20, yPos);
  
  // Add new page if needed
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  } else {
    yPos += 15;
  }
  
  // Publication
  doc.setFontSize(14);
  doc.setTextColor(33, 150, 243);
  doc.text("JOURNAL PUBLICATION", 20, yPos);
  
  yPos += 7;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("Vulnerability Scanning - Published in 'From Concept to Creation: The Journey of Innovation Book'", 20, yPos, { maxWidth: 170 });
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("Generated from portfolio website", 105, 285, { align: "center" });
  
  // Save the PDF
  doc.save("Gowtham_V_Resume.pdf");
};
