import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'About Us - The Fight That Forged a Business | Just Legal Solutions',
  description: "Learn how a 5-year legal battle inspired Just Legal Solutions, Oklahoma's premier process serving company. Founded by Joseph Iannazzi after experiencing systemic failure in workers' compensation.",
  keywords: 'about us, just legal solutions, joseph iannazzi, process server oklahoma, legal battle, workers compensation, tulsa process server',
  alternates: {
    canonical: 'https://justlegalsolutions.org/about'
  },
  openGraph: {
    title: 'About Us - The Fight That Forged a Business | Just Legal Solutions',
    description: "Learn how a 5-year legal battle inspired Just Legal Solutions, Oklahoma's premier process serving company. Founded by Joseph Iannazzi after experiencing systemic failure in workers' compensation.",
    url: 'https://justlegalsolutions.org/about',
    type: 'article',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/Headshot.jpg',
        width: 800,
        height: 800,
        alt: 'Joseph Iannazzi, Founder of Just Legal Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - The Fight That Forged a Business | Just Legal Solutions',
    description: "Learn how a 5-year legal battle inspired Just Legal Solutions, Oklahoma's premier process serving company. Founded by Joseph Iannazzi after experiencing systemic failure in workers' compensation.",
    images: ['https://justlegalsolutions.org/images/Headshot.jpg']
  }
};

export default function AboutPage() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        url="https://justlegalsolutions.org/about"
        title="About Us - The Fight That Forged a Business | Just Legal Solutions"
        description="Learn how a 5-year legal battle inspired Just Legal Solutions, Oklahoma's premier process serving company. Founded by Joseph Iannazzi after experiencing systemic failure in workers' compensation."
        articleDetails={{
          headline: "About Us - The Fight That Forged a Business | Just Legal Solutions",
          author: "Joseph Iannazzi",
          datePublished: "2023-05-18",
          dateModified: "2025-06-25",
          image: "https://justlegalsolutions.org/images/Headshot.jpg"
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 146
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section with Profile Layout */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/Headshot.jpg"
                    alt="Joseph Iannazzi, Founder of Just Legal Solutions"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  The Fight That Forged a Business
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                  How a 5-Year Legal Battle Inspired a New Kind of Process Server in Oklahoma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For most people, the legal system is an abstract concept. It&apos;s something seen on television dramas—a world of courtrooms, gavels, and eloquent lawyers where justice, though sometimes delayed, is ultimately served. But for Joseph Iannazzi, the founder of Glenpool-based <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link>, the legal system became a five-year crucible of pain, frustration, and systemic failure. It was a journey that nearly broke him, but ultimately forged a new purpose: to build the kind of legal support company he so desperately needed.
            </p>

            <p className="mb-8">
              This isn&apos;t just the story of a new business. It&apos;s the story of how a debilitating workplace injury and a prolonged battle with an indifferent workers&apos; compensation system inspired a mission to bring speed, transparency, and humanity to a critical corner of the legal world. It&apos;s a story that begins with a simple promise of care and ends with the launch of a company dedicated to ensuring that promise is kept for others across <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link> and northeastern Oklahoma.
            </p>

            <div className="relative w-full h-64 my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/OklahomaFlag.jpg"
                alt="Oklahoma Flag representing the state where Just Legal Solutions serves"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Injury and the Illusion of Care</h2>

            <p className="mb-6">
              The day Joseph was injured at work, he believed the hardest part was over. The initial shock and intense pain were terrifying, but as an employee of a major corporation, he had faith in the system designed to protect him. He was funneled into the workers&apos; compensation process, a path he assumed would lead to healing and recovery. He was wrong.
            </p>

            <p className="mb-6">
              What should have been a straightforward, one-year recovery devolved into a five-year nightmare. It involved five separate surgeries, countless depositions, and a demoralizing battle against a system that seemed engineered to protect its own bottom line, not the well-being of the injured worker. The real fight wasn&apos;t just healing his body; it was against the choices being made <em>for</em> him. After his injury, he was immediately sent to doctors chosen by the insurance company, not by him.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700">
              &quot;I&apos;ll never forget sitting in one of their approved clinics, and being told by a doctor to simply, &apos;be tough, you need to tough out your pain.&apos; My body was screaming that something was seriously wrong, but their reports stated I was in &apos;perfect health,&apos; even as my condition worsened. It felt like a corrupt system where company doctors would protect the insurer, and I was trapped in a web of opinions that had nothing to do with my reality.&quot;
            </blockquote>

            <div className="relative w-full h-64 my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/tulsa-process-server.jpg"
                alt="Tulsa County Courthouse where legal documents are filed"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-6">
              The core of the battle became the right to choose his own doctor. He researched highly-rated specialists, miles from the insurer&apos;s chosen clinic, with better patient outcomes and fewer lawsuits against them. His requests to see these clearly superior doctors were repeatedly denied. At one point, he begged the workers&apos; comp administrators to finish the necessary surgeries on his unstable left knee before operating on his other leg. They refused, giving him an ultimatum: have the surgery on the other leg now, or don&apos;t get it at all.
            </p>

            <p className="mb-6">
              Forced into an improperly sequenced procedure, he was sent home on crutches while his left knee was still completely unstable. The inevitable happened. His kneecap dislocated, sending him falling face-first into a wall. The scene was horrific—blood everywhere, his spouse screaming, and eventually, the humiliation of firefighters and an ambulance arriving at his home. The fall broke his nose, requiring another emergency trip to the hospital and another surgery. In a final, cruel twist, workers&apos; comp refused to pay for the facial surgery, deeming the direct consequence of their mandate to be unrelated.
            </p>

            <p className="mb-6">
              Adding to the physical and emotional trauma was a severe financial strain. As a father to three children and five pets with multiple jobs, the system only recognized a fraction of his income, paying a third of what he earned from one job while completely ignoring the others. The dramatic decrease in household income created immense pressure on his family, all while he was trying to navigate a hostile medical system. This entire ordeal left him with permanent restrictions: no bending, kneeling, stooping, climbing or lifting over 25 pounds. For a father with young kids, these restrictions were unrealistic and heartbreaking, robbing him of simple joys like getting on the floor to play with his children or taking them to the zoo.
            </p>

            <p className="mb-8">
              Today, he lives with permanent chronic pain. The nerve ablations—heated needles that burn off nerves in his skin—and the daily regimen of pain, nerve, and muscle spasm medications don&apos;t eliminate the pain; they just make it tolerable. &quot;The nerve pain feels like hot lava shooting through my leg,&quot; he says. &quot;I wish every day that I could go back to the way I was before the incident that changed my life forever.&quot;
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">From Personal Pain to a Professional Purpose</h2>

            <p className="mb-6">
              After years of fighting, Joseph finally emerged from his ordeal, not just with physical scars, but with a fiery resolve. He had been so profoundly failed by the system that he decided to learn it from the inside out. He went to work for a personal injury attorney, dedicating himself to helping people navigate the same treacherous waters he had. He thrived, seeing firsthand the difference a true advocate could make.
            </p>

            <p className="mb-6">
              When that opportunity ended, he knew his mission was just beginning. His true passion has always been helping people, and he founded <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> as a direct extension of that core belief. His philosophy is simple: people should help people. The legal system often treats individuals like a case number, but behind every document is a human being trying to make ends meet. This belief is why, in addition to running his business, he works part-time at a local nonprofit, helping people with disabilities find gainful employment and independence. It&apos;s why he builds strategic partnerships with attorneys and other <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">process servers</Link> across Oklahoma—to make every service as cost-effective as possible.
            </p>

            <blockquote className="border-l-4 border-green-500 pl-6 my-8 italic text-gray-700">
              &quot;My passion isn&apos;t just process serving; it&apos;s being a good person who helps enrich other people&apos;s lives and our community. We all need to pay our bills, but we should also be here for each other. Whether it&apos;s helping a neighbor fix a fence or giving someone a ride to the doctor, that&apos;s what it&apos;s all about. This company is my way of fighting the injustice of a system that sees people as numbers and denies them the right to make their own choices about their own care.&quot;
            </blockquote>

            <div className="relative w-full h-64 my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/Tulsa_11.webp"
                alt="Historic Tulsa Route 66 marker representing the city's heritage"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Delays are Devastating: A Shared Frustration</h2>

            <p className="mb-6">
              Joseph&apos;s personal experience with systemic delays directly mirrors the professional frustrations of attorneys and landlords. For a lawyer, a missed deadline for service isn&apos;t just an administrative error; it can lead to a case being dismissed on a technicality, jeopardizing months of work and failing a client who depends on them. For a landlord, every day a notice isn&apos;t served is another day of lost rent and an inability to reclaim their property.
            </p>

            <p className="mb-8">
              This shared understanding of the high stakes of delay is the foundation of <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link>. We know that when an attorney calls for an urgent serve, it&apos;s because a statute of limitations is looming. We know that when a property manager needs an eviction notice posted, it&apos;s because their financial stability is on the line. Our founder&apos;s fight against a slow system is now our clients&apos; greatest asset.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Modern Approach to Legal Support</h2>

            <p className="mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> was engineered to be the antithesis of the system that failed its founder. It directly addresses the most critical pain points with a modern, technology-driven approach to legal support services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Unmatched Speed with <Link href="/urgent-process-server" className="text-blue-600 hover:text-blue-800">24/7 Emergency Service</Link></h3>

            <p className="mb-6">
              Legal emergencies don&apos;t keep business hours. Recognizing this, the company operates a dedicated <Link href="/urgent-process-server" className="text-blue-600 hover:text-blue-800">24/7 emergency</Link> hotline. Whether a client needs an emergency <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">process server</Link> in <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link> for a last-minute <Link href="/urgent-process-server" className="text-blue-600 hover:text-blue-800">restraining order</Link>, same-day legal document delivery in <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:text-blue-800">Broken Arrow</Link> for an urgent court filing, or weekend service for a hard-to-reach individual in <Link href="/service-areas/sapulpa" className="text-blue-600 hover:text-blue-800">Sapulpa</Link>, the team is always ready to respond.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">AI-Powered Precision and Skip Tracing</Link></h3>

            <p className="mb-6">
              In an industry that often relies on outdated methods, <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> leverages cutting-edge technology. A proprietary AI-powered platform is used for advanced address verification and <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">skip tracing</Link>. This system cross-references multiple data sources in real-time, dramatically increasing the probability of a successful first attempt.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Core Process Serving for All Legal Matters</Link></h3>

            <p className="mb-6">
              We provide prompt, professional, and legally compliant delivery of all court documents. This includes civil summons and complaints, <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">subpoenas</Link>, divorce papers, <Link href="/urgent-process-server" className="text-blue-600 hover:text-blue-800">restraining orders</Link>, and <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">small claims documents</Link>.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. <Link href="/seo/eviction-notice-process-server" className="text-blue-600 hover:text-blue-800">Specialized Services for Landlords and Property Managers</Link></h3>

            <p className="mb-6">
              We offer fast and efficient service of <Link href="/seo/eviction-notice-process-server" className="text-blue-600 hover:text-blue-800">eviction notices (5-day and 30-day notices)</Link> and <Link href="/seo/legal-posting-process-server" className="text-blue-600 hover:text-blue-800">legal posting</Link>. Our rapid service helps landlords regain control of their properties faster, ensuring all actions are taken in strict accordance with state statutes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. <Link href="/courier-services-tulsa" className="text-blue-600 hover:text-blue-800">Secure Legal Courier Services</Link></h3>

            <p className="mb-8">
              For time-sensitive court filings, document retrievals between law offices, or deliveries to opposing counsel, our <Link href="/courier-services-tulsa" className="text-blue-600 hover:text-blue-800">legal courier service</Link> provides a secure and verifiable <Link href="/courier-services-tulsa" className="text-blue-600 hover:text-blue-800">chain of custody</Link> across the <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link> metro area and beyond.
            </p>

            <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/Tulsa_skyline_aerial,_April_2023.webp"
                alt="Aerial view of Tulsa skyline showing the city we serve"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission in Action: Stories from the Field</h2>

            <p className="mb-6">
              Our philosophy isn&apos;t just a talking point; it&apos;s how we operate every day. These anonymized stories illustrate the <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> difference:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">The Race Against the Clock</h4>
              <p className="mb-4">
                A <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link> law firm called us in a panic. They needed a crucial document served that same day, within hours, before the courthouse closed. A failure to serve would mean their client&apos;s case could be delayed for months. We immediately dropped all non-emergent tasks and focused entirely on their case. After several attempts and rapid <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">skip-tracing</Link> analysis, we located the individual, completed the service, and filed the paperwork with the court just in time. The case proceeded, saving the attorney&apos;s client from a costly and stressful delay.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">People Over Profit</h4>
              <p className="mb-4">
                A few months ago, an individual contacted us in desperation. They had spent all their money on other <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">process servers</Link> and even the Sheriff&apos;s office, all of whom had failed to serve papers for a sensitive child adoption case. They couldn&apos;t afford our cheapest package. Believing that everyone deserves access to justice, we negotiated a rate they could afford, even though it meant no profit for us. We got the job done, and because the court didn&apos;t allow e-filing, we personally filed the documents at no extra charge. Today, that client is a close friend.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">The Evasive Target</h4>
              <p className="mb-4">
                A company had tried to serve an evasive individual twelve separate times without success. They couldn&apos;t afford an expensive stakeout service. We took the case and deployed our <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">skip-tracing</Link> tools. We confirmed his address but learned he worked nights, outside of normal service hours. After observing his routine, we saw him leave his apartment near midnight. We successfully and legally served him at a nearby gas station, finally allowing the case to move forward where so many others had failed.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All of Oklahoma</h2>

            <p className="mb-6">
              While our primary focus is on <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link> and northeastern Oklahoma, <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> is a fully licensed statewide <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">process serving</Link> company. Our network of trusted partners allows us to handle serves in any of Oklahoma&apos;s 77 counties with the same level of professionalism and urgency. Our deep local knowledge is concentrated in our core service areas, but our capabilities are statewide.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Service Areas:</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3"><Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800">Tulsa County</Link>:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link></li>
                  <li><Link href="/service-areas/broken-arrow" className="text-blue-600 hover:text-blue-800">Broken Arrow</Link></li>
                  <li><Link href="/service-areas/bixby" className="text-blue-600 hover:text-blue-800">Bixby</Link></li>
                  <li><Link href="/service-areas/jenks" className="text-blue-600 hover:text-blue-800">Jenks</Link></li>
                  <li><Link href="/service-areas/owasso" className="text-blue-600 hover:text-blue-800">Owasso</Link></li>
                  <li><Link href="/service-areas/sand-springs" className="text-blue-600 hover:text-blue-800">Sand Springs</Link></li>
                  <li><Link href="/service-areas/collinsville" className="text-blue-600 hover:text-blue-800">Collinsville</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Additional Counties:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><Link href="/counties/creek-county" className="text-blue-600 hover:text-blue-800">Creek County</Link>: <Link href="/service-areas/sapulpa" className="text-blue-600 hover:text-blue-800">Sapulpa</Link>, <Link href="/service-areas/bristow" className="text-blue-600 hover:text-blue-800">Bristow</Link>, <Link href="/service-areas/kellyville" className="text-blue-600 hover:text-blue-800">Kellyville</Link></li>
                  <li><Link href="/counties/wagoner-county" className="text-blue-600 hover:text-blue-800">Wagoner County</Link>: <Link href="/service-areas/wagoner" className="text-blue-600 hover:text-blue-800">Wagoner</Link>, <Link href="/service-areas/coweta" className="text-blue-600 hover:text-blue-800">Coweta</Link></li>
                  <li><Link href="/counties/rogers-county" className="text-blue-600 hover:text-blue-800">Rogers County</Link>: <Link href="/service-areas/claremore" className="text-blue-600 hover:text-blue-800">Claremore</Link>, <Link href="/service-areas/catoosa" className="text-blue-600 hover:text-blue-800">Catoosa</Link></li>
                  <li><Link href="/counties/osage-county" className="text-blue-600 hover:text-blue-800">Osage County</Link>: <Link href="/service-areas/pawhuska" className="text-blue-600 hover:text-blue-800">Pawhuska</Link>, <Link href="/service-areas/skiatook" className="text-blue-600 hover:text-blue-800">Skiatook</Link></li>
                  <li><Link href="/counties/mayes-county" className="text-blue-600 hover:text-blue-800">Mayes County</Link>: <Link href="/service-areas/pryor" className="text-blue-600 hover:text-blue-800">Pryor</Link></li>
                  <li><Link href="/counties/washington-county" className="text-blue-600 hover:text-blue-800">Washington County</Link>: <Link href="/service-areas/bartlesville" className="text-blue-600 hover:text-blue-800">Bartlesville</Link></li>
                </ul>
              </div>
            </div>

            <p className="mb-8">
              This extensive network ensures that whether you are a downtown <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800">Tulsa</Link> law firm or an individual in a rural community, you have access to professional, urgent legal support anywhere in Oklahoma.
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-900">The Just Legal Solutions Difference</h2>
              <Image
                src="/images/jls-logo.webp"
                alt="Just Legal Solutions Logo"
                width={120}
                height={54}
                className="object-contain mt-2 md:mt-0"
              />
            </div>

            <p className="mb-6">
              What truly sets us apart is the fusion of personal experience with professional excellence. We are not just delivering papers; we are moving justice forward. Our commitment is to:
            </p>

            <ul className="list-disc list-inside space-y-3 mb-8">
              <li><strong>Eradicate Delays:</strong> We leverage technology and <Link href="/urgent-process-server" className="text-blue-600 hover:text-blue-800">24/7 availability</Link> to eliminate the bottlenecks that plague the legal process.</li>
              <li><strong>Provide Unwavering Accuracy:</strong> Our AI-driven tools and experienced servers ensure that service is done right the first time.</li>
              <li><strong>Offer Complete Transparency:</strong> Clients have access to real-time updates and clear communication throughout the entire process.</li>
              <li><strong>Operate with Empathy:</strong> We understand the stress and urgency behind every document we handle because our founder has been there.</li>
            </ul>

            <p className="mb-8">
              For too long, the essential work of legal support has been a source of frustration and delay. <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> was born from that frustration and is dedicated to being the solution. We are a company forged in a fight for fairness, and we bring that same passion to every client we serve.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Mission of Empathy and Advocacy</h2>

            <p className="mb-6">
              This whole experience has changed me. Some say it could be for the better, some say it could be for worse, but either way, I live with the consequences every day. By embedding this personal mission into every aspect of its operations, <Link href="/" className="text-blue-600 hover:text-blue-800">Just Legal Solutions</Link> offers more than just efficiency; it provides its clients with peace of mind. It is a company built on a foundation of empathy, resilience, and a profound commitment to ensuring the wheels of justice turn swiftly and fairly.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-xl">
              &quot;My experience taught me that you have to be your own biggest advocate. Now, my company can be that advocate for others. We handle the frustrating, time-consuming tasks so our clients can focus on what truly matters: their cases, their businesses, and their lives, because I would hate for anyone to go through what I went through.&quot;
            </blockquote>

            <div className="bg-blue-600 text-white p-8 rounded-lg my-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Contact <Link href="/" className="text-white hover:text-blue-200">Just Legal Solutions</Link></h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Immediate Service:</h3>
                  <p className="text-lg">Call or Text the <Link href="/urgent-process-server" className="text-white hover:text-blue-200">24/7 Emergency</Link> Hotline</p>
                  <p className="text-2xl font-bold">(539) 367-6832</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Learn More:</h3>
                  <ul className="space-y-2">
                    <li><a href="https://justlegalsolutions.org" className="text-white hover:text-blue-200 underline">Our Services</a></li>
                    <li><a href="https://justlegalsolutions.org/service-areas" className="text-white hover:text-blue-200 underline">View Our Full Service Area</a></li>
                    <li><a href="https://justlegalsolutions.org/contact" className="text-white hover:text-blue-200 underline">Request a Quote Online</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
    </>
  );
}
