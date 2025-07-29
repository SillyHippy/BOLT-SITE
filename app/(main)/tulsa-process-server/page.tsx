import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export default function TulsaProcessServerPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can your Broken Arrow process server or Tulsa process server deliver legal documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard delivery for a Tulsa process server is typically within 3-5 business days. However, we understand some legal matters are time-sensitive. We offer rush and same-day service for urgent deliveries in both Tulsa and Broken Arrow. Our process servers in Tulsa are committed to providing the fastest and most reliable service possible. If you need an urgent processor for Tulsa County, contact us immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a licensed and bonded process server in Tulsa County and Broken Arrow, OK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. All of our process servers are fully licensed and bonded as required by the state of Oklahoma. We are an authorized Tulsa County process server and also serve the entire Broken Arrow, OK area. You can trust our professional team to handle your legal documents with the utmost care and compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What areas and neighborhoods do your Tulsa and Broken Arrow process servers cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process servers cover all of Tulsa County and the city of Broken Arrow extensively. This includes downtown Tulsa, Midtown, South Tulsa, Brookside, Cherry Street, and all major residential and business areas. In Broken Arrow, our process servers broken arrow team covers areas like the Rose District, South Broken Arrow, and all surrounding neighborhoods. If you need a process server in Broken Arrow OK or anywhere in the Tulsa metro, we have you covered."
        }
      },
      {
        "@type": "Question",
        "name": "What legal documents can you deliver as a Broken Arrow process server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a leading Broken Arrow process server, we are experienced in serving all types of legal documents. This includes summons, complaints, subpoenas, writs, eviction notices, and family court documents like divorce papers and child support petitions. Our Broken Arrow processor team ensures that every document is served correctly according to Oklahoma law."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle urgent or after-hours jobs in Broken Arrow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in handling difficult, urgent, and after-hours service requests. Our Broken Arrow, OK process server team is available 24/7 to meet your needs. We understand that some serves require persistence and flexibility, and our process servers in Broken Arrow are trained to handle these situations professionally and effectively."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a processor for Broken Arrow or Tulsa process server cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is competitive and transparent. The cost for a processor for Broken Arrow or a Tulsa process server depends on the type of service (standard, rush, same-day) and the location of the serve. Please visit our pricing page or contact us for a specific quote. We offer affordable rates for reliable service."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get proof of service from a Broken Arrow process server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After successfully serving the documents, our Broken Arrow process servers will provide you with a notarized Affidavit of Service. This legal document serves as your proof that the papers were delivered in accordance with state law. A copy of the affidavit will be emailed to you for your records at no charge. We can also file the affidavit with the court for an additional fee."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect from a Broken Arrow processor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you hire a Broken Arrow processor from our team, you can expect professionalism, diligence, and excellent communication. We will keep you updated throughout the entire process, from the initial attempt to the final proof of service. Our goal is to make the process of serving legal documents as smooth and stress-free as possible for our clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer skip tracing services for hard-to-find individuals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we do. If you are having trouble locating an individual for service, our experienced team can provide skip tracing services. We use advanced databases and investigative techniques to locate individuals quickly and accurately, ensuring your legal documents can be served. This is a crucial service offered by our processor for Tulsa County."
        }
      }
    ]
  };

  const images = [
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-process-server.jpg",
      alt: "A professional Tulsa process server delivering documents with the Tulsa skyline in the background.",
      fileName: "tulsa-process-server-delivering-documents.jpg"
    },
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/broken-arrow-process-server-courthouse.jpg",
      alt: "The Broken Arrow Municipal Courthouse, a common location for a Broken Arrow process server.",
      fileName: "broken-arrow-oklahoma-courthouse-processor.jpg"
    },
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-county-courthouse.jpeg",
      alt: "The Tulsa County Courthouse where our Tulsa County process servers frequently file documents.",
      fileName: "tulsa-county-courthouse-process-server.jpeg"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/process-server-tulsa.webp",
        alt: "Process server in Tulsa reviewing legal documents before service.",
        fileName: "process-server-tulsa-reviewing-documents.webp"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-county-process-server.png",
        alt: "A graphic representing a Tulsa County process server and legal document delivery.",
        fileName: "tulsa-county-process-server-graphic.png"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/Tulsa_skyline_aerial%2C_April_2023.jpg",
        alt: "Aerial view of the Tulsa skyline, an area served by our process servers.",
        fileName: "tulsa-skyline-area-served-by-process-server-in-tulsa.jpg"
    }
  ];


  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Trusted Tulsa and Broken Arrow Process Server
      </h1>
      <p className="text-lg text-center mb-8">
        Reliable, fast, and professional service of process for Tulsa County and Broken Arrow, OK.
      </p>

      <Carousel className="w-full max-w-4xl mx-auto mb-12">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                      // The filename is already SEO friendly.
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Process Server in Tulsa</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              When you need a reliable <strong>process server in Tulsa</strong>, look no further. We provide prompt and professional service of process throughout Tulsa County. Our experienced team understands the local courts and regulations, ensuring your legal documents are served correctly and on time. Whether it's a routine serve or an urgent matter, our <strong>Tulsa process server</strong> team is ready to assist.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Broken Arrow Process Server</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are the premier <strong>Broken Arrow process server</strong>. Our team of <strong>process servers in Broken Arrow</strong> provides dependable and efficient service throughout the city and surrounding areas. From standard serves to rush jobs, our <strong>Broken Arrow processor</strong> team has the experience to handle any request. We are the trusted choice for law firms, businesses, and individuals in need of a <strong>process server in Broken Arrow, OK</strong>.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Neighborhoods & Areas Served</h2>
        <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Downtown Tulsa</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Midtown Tulsa</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">South Tulsa</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Rose District (Broken Arrow)</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">South Broken Arrow</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Jenks</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Bixby</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Owasso</span>
        </div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.mainEntity.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.name}</AccordionTrigger>
              <AccordionContent>{faq.acceptedAnswer.text}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
          <p className="mb-6">Our team is ready to help. Contact us for any inquiries or to get started with our services.</p>
          <Link href="/contact" className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
      </section>

    </div>
  );
}
