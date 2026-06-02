import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Navbar,
  AuthorBox,
  Footer,
  LocalPromoBanner,
  UnifiedSchema,
} from "../components";
import AeoProcessServingHubLinks from "@/components/seo/aeo-process-serving-hub-links";

export const metadata: Metadata = {
  openGraph: {
    title: '25 Questions to Ask Before Hiring a Process Server | Just...',
    description: 'The complete checklist of 25 essential questions to ask before hiring a process server. Covering licensing, pricing, methods, proof of service, and timelines fo',
    url: 'https://justlegalsolutions.org/blog/questions-to-ask-before-hiring-process-server',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.png',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions blog — Oklahoma process serving and legal support',
    }],
  },
  title: "25 Questions to Ask Before Hiring a Process Server | Just...",
  description: "The complete checklist of 25 essential questions to ask before hiring a process server. Covering licensing, pricing, methods, proof of service, and timelines fo",
  keywords:
    "questions to ask process server, interview process server, hire process server checklist, Oklahoma process server hiring, process server qualifications",
  twitter: {
    card: 'summary_large_image',
    title: '25 Questions to Ask Before Hiring a Process Server | Just...',
    description: 'The complete checklist of 25 essential questions to ask before hiring a process server. Covering licensing, pricing, methods, proof of service, and timelines fo',
    images: ['https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.png'],
  },
  alternates: {
    canonical:
      "https://justlegalsolutions.org/blog/questions-to-ask-before-hiring-process-server",
  },
  other: {
    'ai-content-type': 'article',
    'ai-summary': 'The complete checklist of 25 essential questions to ask before hiring a process server. Covering licensing, pricing, methods, proof of service, and timelines fo Includes Oklahoma service-of-process compliance context and practical filing guidance.',
    'ai-key-facts': 'Oklahoma-specific legal process guidance; Licensed and bonded support; Service across 77 counties; Includes practical compliance steps',
  
  },
};

const faqs = [
  {
    question: "What is the most important question to ask a process server?",
    answer:
      "The most important question is whether they are licensed, bonded, and registered in Oklahoma. Under Title 12 O.S. § 158.1, process servers must meet specific requirements to serve legal papers in our state. Without proper licensing, any service they perform could be invalid, jeopardizing your entire case.",
  },
  {
    question:
      "How much should I expect to pay for process serving in Oklahoma?",
    answer:
      "Pricing varies based on urgency and complexity. At Just Legal Solutions, our transparent pricing starts at our base rate for a single attempt, our standard rate for standard service, our rush rate for rush service, our same-day rate for same-day service, our triple-attempt rate for triple-attempt service, and our after-hours rate for after-hours service. Always ask for a detailed quote upfront to avoid hidden fees.",
  },
  {
    question: "Should I hire a process server or use the sheriff's office?",
    answer:
      "While sheriff's offices can serve papers, professional process servers typically offer faster service, better communication, more flexible hours, and higher success rates with difficult defendants. Process servers also provide detailed affidavits and often use technology like GPS tracking and photo verification that sheriff's offices may not offer.",
  },
  {
    question:
      "What proof should I receive after service is completed?",
    answer:
      "You should receive a signed Return of Service or Affidavit of Service that details when, where, and how service was made, along with a description of the person served. At Just Legal Solutions, we provide GPS-verified timestamps, photographic evidence when possible, and digital copies of all documentation for your records.",
  },
  {
    question: "How long does process serving typically take?",
    answer:
      "Standard service typically takes 1-3 business days, depending on the defendant's availability and location. Rush service can often be completed within 24 hours, and same-day service is available for urgent matters. Ask about each server's specific timeframes and whether they offer expedited options.",
  },
  {
    question: "What happens if the defendant cannot be found?",
    answer:
      "Your process server should document each attempt thoroughly and follow the service method Oklahoma law requires for your document type. Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave papers with a household member 15+ at the dwelling. Subpoenas and entity or government service require personal delivery. Service by publication under § 2004(C)(3) requires court approval and due diligence. A qualified process server will guide you through these options.",
  },
];

export default function QuestionsToAskProcessServerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <link
          rel="canonical"
          href="https://justlegalsolutions.org/blog/questions-to-ask-before-hiring-process-server"
        />
        <meta
          property="og:title"
          content="25 Questions to Ask Before Hiring a Process Server | Just Legal Solutions"
        />
        <meta
          property="og:description"
          content="The complete checklist of 25 essential questions to ask before hiring a process server. Covering licensing, pricing, methods, proof of service, and timelines for Oklahoma."
        />
      </Head>

      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <header className="mb-10 border-b border-gray-100 pb-8">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
              <Link
                href="https://justlegalsolutions.org/blog"
                className="hover:underline"
              >
                Blog
              </Link>
              <span className="mx-2 text-gray-300">/</span>
              <span>Process Serving</span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              25 Questions to Ask Before Hiring a Process Server
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              The essential hiring checklist covering licensing, pricing,
              methods, proof, and timelines — so you choose the right Oklahoma
              process server the first time.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Published: June 2025 | By Just Legal Solutions Editorial Team
            </div>
          </header>

          <UnifiedSchema
            type="BlogPosting"
            name="25 Questions to Ask Before Hiring a Process Server"
            description="The essential hiring checklist covering licensing, pricing, methods, proof, and timelines — so you choose the right Oklahoma process server the first time."
            url="https://justlegalsolutions.org/blog/questions-to-ask-before-hiring-process-server"
            datePublished="2026-05-23"
        articleDetails={{
          headline: '25 Questions to Ask Before Hiring a Process Server | Just...',
          datePublished: '2026-05-23',
          dateModified: '2026-05-23',
          author: 'Just Legal Solutions Team',
          image: 'https://justlegalsolutions.org/images/questions-to-ask-process-server.webp',
        }}
            image="https://justlegalsolutions.org/images/questions-to-ask-process-server.webp"
          />

          <AuthorBox />

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Hiring a process server is one of the most important decisions you
              will make during litigation. If service of process is done
              incorrectly, your entire case can be delayed, dismissed, or
              jeopardized. At{" "}
              <a
                href="https://justlegalsolutions.org"
                className="text-blue-600 hover:underline font-medium"
              >
                Just Legal Solutions
              </a>
              , we have served thousands of legal documents across all 77
              Oklahoma counties since 2020. We know exactly what clients should
              ask before entrusting someone with this critical task.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This comprehensive guide provides 25 essential questions organized
              into five key categories: licensing and credentials, pricing and
              fees, service methods and coverage, proof and documentation, and
              communication and timelines. Print this list, use it during your
              interviews, and never hire a process server without getting
              satisfactory answers to every question.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Category 1: Licensing, Credentials & Legal Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The first category of questions ensures the process server is
              legally qualified to serve papers in Oklahoma. Under{" "}
              <strong>Title 12 O.S. § 158.1</strong>, process servers must meet
              specific statutory requirements. Any service performed by an
              unqualified individual risks being invalidated by the court.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 1: Are you licensed, bonded, and registered to serve
              process in Oklahoma?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This is the most critical question. Oklahoma law requires process
              servers to be licensed and bonded. A legitimate server will
              provide their license number without hesitation. At Just Legal
              Solutions, we are fully licensed, bonded, and insured, and we
              gladly provide our credentials to every client upon request.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 2: How long have you been serving process in Oklahoma?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Experience matters significantly in process serving. An experienced
              server has encountered every type of difficult situation and knows
              how to navigate Oklahoma's diverse counties, from urban Tulsa and
              Oklahoma City to rural areas in the panhandle. Our team at Just
              Legal Solutions brings over 50 years of combined experience to
              every serve.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 3: Are you familiar with the specific service
              requirements under Title 12 O.S. § 2004?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <strong>Title 12 O.S. § 2004</strong> governs service of process
              in Oklahoma civil proceedings. Your process server should be able
              to explain the various methods of service permitted, including
              personal service, substituted service, and service by mail. They
              should also understand the specific requirements for serving
              different types of legal documents.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 4: Do you carry errors and omissions (E&O) insurance?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Professional liability insurance protects both you and the process
              server if something goes wrong. Ask for proof of insurance and the
              coverage limits. Reputable process servers carry E&O insurance
              specifically designed for the process serving industry.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 5: Have you ever had a service challenged or invalidated
              in court?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This question reveals the process server's track record. While even
              the best servers may face occasional challenges, a pattern of
              invalidated services is a major red flag. Ask how the challenge was
              resolved and what was learned from the experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Category 2: Pricing, Fees & Payment Structure
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Transparent pricing prevents surprises and helps you budget
              appropriately for your case. Be wary of process servers who are
              vague about costs or reluctant to provide written quotes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 6: What is your base fee for standard service?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Standard service typically includes a certain number of attempts
              within a specified timeframe. At{" "}
              <a
                href="https://justlegalsolutions.org/pricing"
                className="text-blue-600 hover:underline font-medium"
              >
                Just Legal Solutions
              </a>
              , our standard service is our standard rate, which includes professional
              attempts with detailed documentation. Always ask what is included
              in the base fee.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 7: Do you charge per attempt or per successful service?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Some process servers charge for every attempt, while others charge
              a flat fee regardless of the number of attempts needed.
              Understanding the pricing structure helps you evaluate the true
              cost. Our triple-attempt package at our triple-attempt rate provides excellent value
              for difficult serves.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 8: Are there additional charges for mileage, rush
              service, or after-hours attempts?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Hidden fees can significantly increase your costs. Ask about
              mileage charges (especially for rural Oklahoma counties), rush
              service premiums, after-hours fees, and any other potential
              add-ons. Our pricing is fully transparent: rush service is our rush rate,
              same-day is our same-day rate, and after-hours service is our after-hours rate.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 9: What is your refund policy if service cannot be
              completed?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Sometimes, despite best efforts, a defendant cannot be located or
              served. Understand what happens to your payment in these
              situations. Do you receive a partial refund, credit toward future
              service, or detailed documentation of attempts for substituted
              service proceedings?
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 10: Do you offer volume discounts for law firms or
              multiple cases?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              If you are a law firm or have multiple cases, volume pricing can
              provide significant savings. Ask about retainer arrangements,
              monthly billing options, and discounted rates for bulk service
              requests.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Category 3: Service Methods, Coverage & Capabilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Different cases require different approaches. Ensure your process
              server has the capabilities and geographic coverage your case
              demands.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 11: What counties in Oklahoma do you cover?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Oklahoma has 77 counties spanning diverse terrain from urban
              centers to rural plains. Confirm the server covers the specific
              county where your defendant is located. At Just Legal Solutions,
              we proudly serve{" "}
              <a
                href="https://justlegalsolutions.org/coverage"
                className="text-blue-600 hover:underline font-medium"
              >
                all 77 Oklahoma counties
              </a>{" "}
              from our Tulsa headquarters, with established networks and
              experienced servers in even the most remote areas.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 12: What service methods do you use?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Professional process servers should employ multiple methods:
              personal service at home or work, substituted service on a
              co-resident or authorized agent, service by certified mail with
              return receipt, and in some cases, publication. Ask about their
              approach to each method and when they determine a different
              strategy is needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 13: How do you handle difficult or evasive defendants?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Evasive defendants require specialized techniques: stakeouts at
              optimal times, database research for updated addresses, workplace
              service, and persistent strategic planning. An experienced server
              will describe their approach to difficult serves without revealing
              tactics that could compromise effectiveness.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 14: Do you serve businesses, government agencies, and
              registered agents?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Serving corporate entities requires different procedures than
              serving individuals. The process server should understand how to
              serve registered agents, corporate officers, and how to handle
              service on Oklahoma Secretary of State-registered entities. Ask
              about their experience with corporate service specifically.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 15: Do you offer stakeout or surveillance services for
              elusive defendants?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Some cases require extended surveillance or stakeout operations to
              locate and serve a defendant. Confirm whether your process server
              offers these specialized services, what they cost, and how they
              conduct them within legal boundaries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Category 4: Proof, Documentation & Technology
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Proper documentation is essential for court acceptance. Modern
              technology has significantly improved the quality and reliability
              of proof of service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 16: What type of proof of service do you provide?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Every successful serve should be documented with a Return of
              Service or Affidavit of Service. This document must include the
              date, time, location, method of service, description of the person
              served, and the server's signature. Ask to see a sample before
              hiring.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 17: Do you use GPS tracking and timestamp verification?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              GPS verification provides irrefutable proof of when and where
              service attempts occurred. At Just Legal Solutions, we use
              GPS-enabled technology to timestamp and geolocate every attempt,
              providing an additional layer of verification that courts
              appreciate and defendants cannot challenge.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 18: Do you provide photographic or video evidence of
              service?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Photo documentation of the service location and, where legally
              permissible, the service itself, can provide powerful evidence if
              service is challenged. Ask about the server's policy and
              capabilities regarding photographic evidence.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 19: How quickly do you file the Return of Service with
              the court?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Timely filing is critical for case progression. Delays in filing
              can postpone hearings and deadlines. Professional process servers
              should file within 24-48 hours of successful service and provide
              you with a filed copy for your records.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 20: Do you provide real-time status updates?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Waiting blindly for service updates is frustrating. Modern process
              servers offer online portals, text updates, or email notifications
              for each attempt. Ask how you will be informed of progress
              throughout the service process.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Category 5: Communication, Timelines & Professionalism
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The final category addresses the working relationship you can
              expect. Professionalism, communication, and reliability are
              essential qualities in a process server.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 21: What is your typical turnaround time for standard
              service?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Understanding timelines helps you manage case deadlines
              effectively. Standard service should typically be completed within
              1-3 business days. Ask about their average completion time and
              what factors might cause delays.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 22: Do you offer same-day or rush service for emergency
              situations?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Legal emergencies happen. Temporary restraining orders, emergency
              custody motions, and time-sensitive subpoenas require immediate
              service. Confirm that rush and same-day options are available and
              understand the associated costs. Our same-day service at{" "}
              <a
                href="https://justlegalsolutions.org/services"
                className="text-blue-600 hover:underline font-medium"
              >
                Just Legal Solutions
              </a>{" "}
              is available for these critical situations.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 23: How do you handle weekends, holidays, and
              after-hours service?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Defendants are often home during evenings and weekends when
              traditional servers are off duty. Ask about availability outside
              normal business hours. Our after-hours service ensures you can
              reach defendants when they are actually available.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 24: Can you provide references from attorneys or clients
              you have served?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              A reputable process server should have satisfied clients willing
              to vouch for their professionalism. Ask for references from
              attorneys in your area of practice, and do not hesitate to contact
              them. Online reviews on Google and other platforms also provide
              valuable insights.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Question 25: What makes your process serving service different
              from competitors?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This open-ended question reveals the server's professionalism,
              values, and unique strengths. Listen for mentions of technology,
              experience, communication, success rates, and customer service. At
              Just Legal Solutions, we differentiate ourselves through our 4.9
              star rating, 50+ years of combined team experience, GPS-verified
              service, statewide coverage of all 77 Oklahoma counties, and
              transparent, competitive pricing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Red Flags to Watch For When Hiring a Process Server
            </h2>

            <p className="text-gray-700 leading-relaxed">
              In addition to asking the right questions, be alert for these
              warning signs that indicate a process server may not be qualified
              or trustworthy:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                <strong>Refusal to provide license information</strong> — This is
                non-negotiable. Any legitimate server will provide credentials
                immediately.
              </li>
              <li>
                <strong>Vague or evasive pricing</strong> — Hidden fees and
                unclear costs suggest unprofessional business practices.
              </li>
              <li>
                <strong>No physical business address</strong> — Fly-by-night
                operators often lack a real office or established presence.
              </li>
              <li>
                <strong>Guaranteed success claims</strong> — No ethical process
                server can guarantee service. Be wary of unrealistic promises.
              </li>
              <li>
                <strong>No insurance or bonding</strong> — This leaves you
                unprotected if service is challenged or done incorrectly.
              </li>
              <li>
                <strong>Poor communication</strong> — If they are slow to
                respond before you hire them, expect worse service afterward.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Proper Vetting Matters Under Oklahoma Law
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Oklahoma courts take service of process seriously. Under{" "}
              <strong>Title 12 O.S. § 2004</strong>, service must be performed
              in a specific manner to be legally valid. If service is
              improper — whether due to an unqualified server, incorrect method,
              or inadequate documentation — the consequences can be severe:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                The court may quash service, requiring the entire process to
                restart
              </li>
              <li>
                Critical deadlines may be missed, affecting statute of
                limitations
              </li>
              <li>
                Temporary orders may expire before proper service is achieved
              </li>
              <li>
                The opposing party may use improper service as grounds for
                dismissal
              </li>
              <li>
                Additional legal fees and court costs accrue while resolving the
                issue
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              At{" "}
              <a
                href="https://justlegalsolutions.org"
                className="text-blue-600 hover:underline font-medium"
              >
                Just Legal Solutions
              </a>
              , we have built our reputation on getting service right the first
              time. Our clients — from solo practitioners to major Oklahoma law
              firms — trust us because we understand the stakes and deliver
              professional, court-ready service every time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Conclusion: Your Checklist for Confidence
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Hiring a process server should never be a guessing game. With
              these 25 questions, you have a comprehensive framework for
              evaluating any process serving professional in Oklahoma. The right
              server will welcome your questions, provide clear answers, and
              demonstrate the expertise that gives you confidence in your case.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Just Legal Solutions, we are licensed and bonded Oklahoma
              process servers with a 4.9-star client rating, over 50 years of
              combined experience, and coverage across all 77 Oklahoma counties.
              Our transparent pricing, GPS-verified service, and commitment to
              professionalism have made us one of Oklahoma's most trusted
              process serving companies since 2020.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-lg cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 pb-4 px-4 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Hire a Professional Oklahoma Process Server?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Just Legal Solutions has served thousands of legal documents
              across all 77 Oklahoma counties. Call us today for fast,
              professional, court-ready service of process.
            </p>
            <a
              href="tel:539-367-6832"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Call (539) 367-6832
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Same-day service available | Licensed & Bonded | Free quotes
            </p>
          </div>
        </article>
      </main>

            <p className="mb-8 text-gray-700">At Just Legal Solutions, with 50+ years of combined experience, we are licensed and bonded under Oklahoma Title 12 O.S. 158.1 and have served thousands of documents across all 77 Oklahoma counties.</p>
        <AeoProcessServingHubLinks />
      <LocalPromoBanner />
      <Footer />
    </div>
  );
}
