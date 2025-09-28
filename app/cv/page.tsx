"use client";

import React from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import CVSection from "@/components/sections/CVSection";
import { useLanguage } from "@/app/providers/language-provider";
import { useTheme } from "next-themes";

// TODO: make pdf ats system

export default function CvPage() {
  const cvRef = React.useRef<HTMLDivElement | null>(null);
  const [downloading, setDownloading] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { dict } = useLanguage();
  const { theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  async function handleDownloadPng() {
    if (!cvRef.current || !mounted) return;
    try {
      setDownloading(true);

      // Use resolvedTheme to get the actual theme being used
      const currentTheme = resolvedTheme || theme;
      const isDarkTheme = currentTheme === 'dark';

      const dataUrl = await toPng(cvRef.current, {
        cacheBust: true,
        pixelRatio: Math.min(2, window.devicePixelRatio || 1),
        skipFonts: true, // Skip web fonts to prevent normalizeFontFamily errors
        backgroundColor: isDarkTheme ? '#0a0a0a' : '#ffffff',
        filter: () => {
          // Don't override existing styles, let the component's theme styles be preserved
          return true;
        },
      });

      const link = document.createElement("a");
      const themeLabel = isDarkTheme ? '-Dark' : '-Light';
      link.download = dict.cv.fileName.png.replace('.png', themeLabel + '.png');
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export CV as PNG:", err);
    } finally {
      setDownloading(false);
    }
  }

  async function handleDownloadPdf() {
    if (!cvRef.current || !mounted) return;
    try {
      setDownloading(true);

      // Force white background for PDF to avoid printing black pages
      const dataUrl = await toPng(cvRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        skipFonts: true, // Skip web fonts to prevent normalizeFontFamily errors
        backgroundColor: '#ffffff', // Always use white background for PDF
        filter: (node) => {
          // Force white background and dark text for all elements
          if (node instanceof HTMLElement) {
            const style = node.style;
            const computedStyle = window.getComputedStyle(node);

            // Override background colors to white/transparent
            if (computedStyle.backgroundColor && computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
              style.backgroundColor = '#ffffff';
            }

            // Override text colors to dark for readability
            if (computedStyle.color) {
              style.color = '#000000';
            }

            // Override border colors to dark
            if (computedStyle.borderColor) {
              style.borderColor = '#000000';
            }
          }
          return true;
        },
      });

      // Convert data URL to canvas for PDF processing
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        const imgData = dataUrl; // Use the original data URL directly
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        // Calculate proper dimensions to fit content
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Scale to fill the entire page height
        const scaledHeight = pdfHeight;
        const scaledWidth = (canvas.width * pdfHeight) / canvas.height;

        // Center horizontally if content is narrower than page
        const xPosition = scaledWidth < pdfWidth ? (pdfWidth - scaledWidth) / 2 : 0;
        const finalWidth = scaledWidth > pdfWidth ? pdfWidth : scaledWidth;

        // First page
        if (scaledWidth <= pdfWidth) {
          // Content fits on one page
          pdf.addImage(imgData, 'PNG', xPosition, 0, finalWidth, scaledHeight);
        } else {
          // Content is wider than page - scale to fit width instead
          const widthScaledHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, widthScaledHeight);

          if (widthScaledHeight > pdfHeight) {
            // Still needs multiple pages
            let heightLeft = widthScaledHeight - pdfHeight;
            while (heightLeft > 0) {
              const yPosition = -(widthScaledHeight - heightLeft);
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, yPosition, pdfWidth, widthScaledHeight);
              heightLeft -= pdfHeight;
            }
          }
        }

        const themeLabel = '-Print'; // Always use print-friendly label
        pdf.save(dict.cv.fileName.pdf.replace('.pdf', themeLabel + '.pdf'));
      };

      img.src = dataUrl;
    } catch (err) {
      console.error("Failed to export CV as PDF:", err);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-8 space-y-4">
      <section>
        <div className="border-l-4 border-black dark:border-white pl-4 mb-2">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            {dict.cv.title}
          </h1>
        </div>
      </section>

      <div className="flex items-center justify-end gap-2">
        <Button onClick={handleDownloadPng} disabled={downloading} className="whitespace-nowrap">
          {downloading ? dict.cv.exporting : dict.cv.downloadPng}
        </Button>
        <Button onClick={handleDownloadPdf} disabled={downloading} className="whitespace-nowrap" variant="outline">
          {downloading ? dict.cv.exporting : dict.cv.downloadPdf}
        </Button>
      </div>

      <CVSection ref={cvRef} />
    </div>
  );
}
