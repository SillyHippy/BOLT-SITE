"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import {
  FileText,
  FileUp,
  FileDown,
  Merge,
  Scissors,
  Minimize2,
  Layers,
  Image as ImageIcon,
  ImageDown,
  Lock,
  Unlock,
  RotateCw,
  ArrowUpDown,
  FileOutput,
  FileMinus,
  Phone,
  Mail,
  Shield,
  Stamp,
  Scale,
  ExternalLink,
  ChevronDown,
  ScanSearch,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PDF24 widget slug → container ID mapping                          */
/*  The widget JS uses pdf24.loadWidget(slug, { containerId, ... })   */
/* ------------------------------------------------------------------ */
const tools = [
  {
    id: "compress-pdf",
    widgetSlug: "compress-pdf",
    name: "Compress PDF",
    description:
      "Reduce PDF file sizes for easier emailing and electronic court filing systems.",
    icon: Minimize2,
    useCase: "Shrink large scanned documents to meet e-filing size limits.",
    color: "orange",
  },
  {
    id: "merge-pdf",
    widgetSlug: "merge-pdf",
    name: "Merge PDF",
    description:
      "Combine multiple legal documents, affidavits, or proof of service forms into a single PDF.",
    icon: Merge,
    useCase:
      "Combine affidavits with proof of service documents for court filing.",
    color: "blue",
  },
  {
    id: "split-pdf",
    widgetSlug: "split-pdf",
    name: "Split PDF",
    description:
      "Split multi-page documents into individual pages or sections for separate filings.",
    icon: Scissors,
    useCase:
      "Separate a multi-defendant service packet into individual documents.",
    color: "teal",
  },
  {
    id: "convert-to-pdf",
    widgetSlug: "convert-to-pdf",
    name: "Convert To PDF",
    description:
      "Convert Word, Excel, images, or other files to PDF format for professional legal submissions.",
    icon: FileUp,
    useCase:
      "Convert Word affidavits or Excel logs into PDF for court submission.",
    color: "green",
  },
  {
    id: "convert-pdf-to",
    widgetSlug: "convert-pdf-to",
    name: "Convert PDF To",
    description:
      "Convert PDF files into Word, Excel, images, or other formats for easy editing.",
    icon: FileDown,
    useCase:
      "Convert a PDF court order to Word for drafting a response document.",
    color: "red",
  },
  {
    id: "flatten-pdf",
    widgetSlug: "flatten-pdf",
    name: "Flatten PDF",
    description:
      "Flatten form fields and annotations into a fixed PDF for secure, permanent filing.",
    icon: Layers,
    useCase:
      "Lock in filled form data so fields can't be altered after submission.",
    color: "purple",
  },
  {
    id: "unlock-pdf",
    widgetSlug: "unlock-pdf",
    name: "Unlock PDF",
    description:
      "Remove password protection from PDFs you have authorization to access.",
    icon: Unlock,
    useCase: "Access password-protected documents received from attorneys.",
    color: "gray",
  },
  {
    id: "lock-pdf",
    widgetSlug: "lock-pdf",
    name: "Protect PDF",
    description:
      "Password-protect sensitive legal documents containing personal information.",
    icon: Lock,
    useCase: "Secure confidential client documents or sealed court records.",
    color: "yellow",
  },
  {
    id: "extract-pdf-pages",
    widgetSlug: "extract-pdf-pages",
    name: "Extract PDF Pages",
    description:
      "Pull specific pages from a PDF document for individual filing or review.",
    icon: FileOutput,
    useCase:
      "Extract a single affidavit page from a large multi-document filing.",
    color: "cyan",
  },
  {
    id: "remove-pdf-pages",
    widgetSlug: "remove-pdf-pages",
    name: "Remove PDF Pages",
    description:
      "Delete unwanted pages from a PDF without affecting the rest of the document.",
    icon: FileMinus,
    useCase:
      "Remove blank or duplicate pages from scanned court documents.",
    color: "rose",
  },
  {
    id: "rotate-pdf-pages",
    widgetSlug: "rotate-pdf-pages",
    name: "Rotate PDF Pages",
    description:
      "Fix page orientation on scanned documents that came through sideways or upside-down.",
    icon: RotateCw,
    useCase: "Correct orientation on scanned affidavits or court orders.",
    color: "pink",
  },
  {
    id: "sort-pdf-pages",
    widgetSlug: "sort-pdf-pages",
    name: "Rearrange PDF Pages",
    description:
      "Reorder pages within a PDF to organize documents in the correct sequence.",
    icon: ArrowUpDown,
    useCase:
      "Put court filing pages in the correct order before submission.",
    color: "indigo",
  },
  {
    id: "images-to-pdf",
    widgetSlug: "images-to-pdf",
    name: "Images to PDF",
    description:
      "Convert photos of served documents, door postings, or GPS screenshots into PDF.",
    icon: ImageIcon,
    useCase:
      "Turn photos of door-posted documents or locations into professional PDFs.",
    color: "emerald",
  },
  {
    id: "extract-pdf-images",
    widgetSlug: "extract-pdf-images",
    name: "Extract PDF Images",
    description:
      "Pull all images out of a PDF document for separate use or documentation.",
    icon: ImageDown,
    useCase:
      "Extract photos or signatures embedded in court documents for records.",
    color: "violet",
  },
];

const colorMap: Record<
  string,
  { bg: string; border: string; text: string; icon: string; hoverBg: string; ring: string }
> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    text: "text-blue-700",    icon: "text-blue-600",    hoverBg: "hover:bg-blue-100",    ring: "ring-blue-300" },
  green:   { bg: "bg-green-50",   border: "border-green-200",   text: "text-green-700",   icon: "text-green-600",   hoverBg: "hover:bg-green-100",   ring: "ring-green-300" },
  purple:  { bg: "bg-purple-50",  border: "border-purple-200",  text: "text-purple-700",  icon: "text-purple-600",  hoverBg: "hover:bg-purple-100",  ring: "ring-purple-300" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200",  text: "text-orange-700",  icon: "text-orange-600",  hoverBg: "hover:bg-orange-100",  ring: "ring-orange-300" },
  red:     { bg: "bg-red-50",     border: "border-red-200",     text: "text-red-700",     icon: "text-red-600",     hoverBg: "hover:bg-red-100",     ring: "ring-red-300" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",    text: "text-teal-700",    icon: "text-teal-600",    hoverBg: "hover:bg-teal-100",    ring: "ring-teal-300" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200",  text: "text-indigo-700",  icon: "text-indigo-600",  hoverBg: "hover:bg-indigo-100",  ring: "ring-indigo-300" },
  yellow:  { bg: "bg-yellow-50",  border: "border-yellow-200",  text: "text-yellow-700",  icon: "text-yellow-600",  hoverBg: "hover:bg-yellow-100",  ring: "ring-yellow-300" },
  gray:    { bg: "bg-gray-50",    border: "border-gray-200",    text: "text-gray-700",    icon: "text-gray-600",    hoverBg: "hover:bg-gray-100",    ring: "ring-gray-300" },
  pink:    { bg: "bg-pink-50",    border: "border-pink-200",    text: "text-pink-700",    icon: "text-pink-600",    hoverBg: "hover:bg-pink-100",    ring: "ring-pink-300" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",    text: "text-cyan-700",    icon: "text-cyan-600",    hoverBg: "hover:bg-cyan-100",    ring: "ring-cyan-300" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", icon: "text-emerald-600", hoverBg: "hover:bg-emerald-100", ring: "ring-emerald-300" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200",  text: "text-violet-700",  icon: "text-violet-600",  hoverBg: "hover:bg-violet-100",  ring: "ring-violet-300" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",    text: "text-rose-700",    icon: "text-rose-600",    hoverBg: "hover:bg-rose-100",    ring: "ring-rose-300" },
};

/* Helper: build container ID from widget slug, e.g. "merge-pdf" → "mergePdfWidgetContainer" */
function toContainerId(slug: string): string {
  const camel = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return camel + "WidgetContainer";
}

declare global {
  interface Window {
    pdf24: {
      loadWidget: (
        slug: string,
        opts: {
          containerId: string;
          langCode?: string;
          readyCallback?: () => void;
          widgetConfig?: Record<string, string>;
        }
      ) => void;
    };
  }
}

export default function PDFToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const loadedWidgets = useRef<Set<string>>(new Set());

  const activeToolData = tools.find((t) => t.id === activeTool);

  /* Load the selected widget once the PDF24 script is ready */
  const loadWidget = useCallback(
    (slug: string) => {
      if (!scriptLoaded || !window.pdf24) return;
      const containerId = toContainerId(slug);
      // Clear previous content so PDF24 re-initializes cleanly
      const el = document.getElementById(containerId);
      if (el) el.innerHTML = "";
      loadedWidgets.current.add(slug);
      window.pdf24.loadWidget(slug, {
        containerId,
        langCode: "en",
        readyCallback: () => {
          console.log(`${slug} widget ready`);
        },
        widgetConfig: {
          theme: "lightTheme",
        },
      });
    },
    [scriptLoaded]
  );

  /* When user picks a tool or script finishes loading, init the widget */
  useEffect(() => {
    if (activeTool && scriptLoaded) {
      const tool = tools.find((t) => t.id === activeTool);
      if (tool) {
        // Tiny delay to ensure the container div is rendered
        requestAnimationFrame(() => loadWidget(tool.widgetSlug));
      }
    }
  }, [activeTool, scriptLoaded, loadWidget]);

  const handleSelectTool = (toolId: string) => {
    setActiveTool((prev) => (prev === toolId ? null : toolId));
    // Scroll the widget area into view
    setTimeout(() => {
      document
        .getElementById("widget-area")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <Navbar />

      {/* PDF24 Widget Script — loaded once */}
      <Script
        src="https://tools.pdf24.org/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-28 pb-16">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Shield className="w-4 h-4 text-blue-300" />
            <span>Free PDF Tools for Legal Professionals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PDF Tools for Process Servers & Notaries
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            Free, secure online PDF tools powered by PDF24 — merge affidavits,
            compress files for e-filing, convert images to PDF, protect
            sensitive documents, and more. Use them right here on this page.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Scale className="w-4 h-4" />
              <span>Built for Legal Work</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Lock className="w-4 h-4" />
              <span>Encrypted & Secure</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Stamp className="w-4 h-4" />
              <span>No Account Required</span>
            </div>
          </div>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-blue-300" />
          </div>
        </div>
      </section>

      {/* Quick-jump sticky nav */}
      <nav className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tools.map((tool) => {
              const colors = colorMap[tool.color];
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleSelectTool(tool.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeTool === tool.id
                      ? `${colors.bg} ${colors.border} ${colors.text}`
                      : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tool.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="bg-gray-50 min-h-screen">
        {/* Active Widget Area */}
        <div id="widget-area" className="scroll-mt-16">
          {activeTool && activeToolData && (
            <section className="max-w-6xl mx-auto px-4 pt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                {/* Header bar */}
                <div
                  className={`flex items-center justify-between px-6 py-4 ${
                    colorMap[activeToolData.color].bg
                  } border-b ${colorMap[activeToolData.color].border}`}
                >
                  <div className="flex items-center gap-3">
                    <activeToolData.icon
                      className={`w-6 h-6 ${
                        colorMap[activeToolData.color].icon
                      }`}
                    />
                    <div>
                      <h2
                        className={`text-xl font-bold ${
                          colorMap[activeToolData.color].text
                        }`}
                      >
                        {activeToolData.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {activeToolData.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://tools.pdf24.org/en/${activeToolData.widgetSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Open on PDF24</span>
                    </a>
                    <button
                      onClick={() => setActiveTool(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                      aria-label="Close tool"
                    >
                      &times;
                    </button>
                  </div>
                </div>

                {/* PDF24 Widget Container */}
                <div className="p-6 min-h-[400px]">
                  <div
                    id={toContainerId(activeToolData.widgetSlug)}
                    className="pdf24WidgetContainer"
                  />
                  {!scriptLoaded && (
                    <div className="flex items-center justify-center h-64 text-gray-400">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3" />
                        <p>Loading PDF tool...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pro tip footer */}
                <div
                  className={`px-6 py-3 ${
                    colorMap[activeToolData.color].bg
                  } border-t ${colorMap[activeToolData.color].border}`}
                >
                  <p className="text-sm text-gray-600">
                    <strong>Pro Tip:</strong> {activeToolData.useCase}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Tool Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {!activeTool && (
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Choose a Tool to Get Started
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click any tool below to load it directly on this page. All tools
                are free, require no account, and process files securely via
                PDF24.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const colors = colorMap[tool.color];
              const Icon = tool.icon;
              const isActive = activeTool === tool.id;

              return (
                <button
                  key={tool.id}
                  onClick={() => handleSelectTool(tool.id)}
                  className={`text-left rounded-xl border-2 p-6 transition-all ${
                    isActive
                      ? `${colors.bg} ${colors.border} ring-2 ring-offset-2 ${colors.ring}`
                      : `bg-white border-gray-200 ${colors.hoverBg} hover:shadow-md`
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}
                    >
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {tool.description}
                      </p>
                      <div
                        className={`inline-flex items-center gap-1 text-xs font-medium ${colors.text} ${colors.bg} px-2 py-1 rounded-full`}
                      >
                        <Scale className="w-3 h-3" />
                        {tool.useCase.split(".")[0]}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* OCR PDF — External Link (no widget available) */}
          <div className="mt-6">
            <a
              href="https://tools.pdf24.org/en/ocr-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-6 hover:bg-amber-100 hover:border-amber-400 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <ScanSearch className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      PDF OCR (Text Recognition)
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full">
                      <ExternalLink className="w-3 h-3" />
                      Opens on PDF24
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Recognize text in scanned documents via OCR to create searchable,
                    copy-able PDFs. Supports 100+ languages with deskew and cleanup options.
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                    <Scale className="w-3 h-3" />
                    Make scanned court orders and affidavits searchable and copyable
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors mt-1 flex-shrink-0" />
              </div>
            </a>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-xl border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How Legal Professionals Use These Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Scale className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Process Servers</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Merge</strong> affidavits of service with proof
                      photos into one court-ready PDF
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Convert</strong> field photos (door postings, GPS
                      screenshots) into professional PDFs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Compress</strong> large scanned documents to meet
                      e-filing size requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Extract pages</strong> from multi-defendant
                      packets into individual service documents
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Split</strong> multi-defendant packets into
                      individual service documents
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Stamp className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Notaries</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Protect</strong> sensitive client documents with
                      password encryption before sending
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Merge</strong> notary journals, acknowledgments,
                      and jurats into complete packages
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Flatten</strong> filled PDF forms to lock in data
                      so fields can&apos;t be altered after notarization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Convert</strong> Word templates (acknowledgments,
                      oaths) to polished PDFs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">&#10003;</span>
                    <span>
                      <strong>Extract images</strong> like signatures embedded in
                      documents for notary records
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Need Professional Process Serving in Oklahoma?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Just Legal Solutions provides fast, reliable process serving and
              notary services across Oklahoma. Contact us today for a free
              consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
              <a
                href="tel:+19187098060"
                className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/50 transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                (918) 709-8060
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
