import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: "The Process Server's Safety Guide: Best Practices for Okl...",
  description: "Essential safety practices for process servers in Oklahoma. Learn preparation, de-escalation techniques, and when to walk away from a dangerous situation.",
  keywords:
    'process server safety, safety tips process serving, difficult recipient service Oklahoma, process server de-escalation, server safety protocols',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "The Process Server's Safety Guide: Best Practices for Oklahoma",
    description:
      'Essential safety practices for process servers in Oklahoma. Learn preparation, de-escalation techniques, and when to walk away from a dangerous situation.',
    url: 'https://justlegalsolutions.org/blog/process-server-safety-guide-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'The Process Server',
      },
    ],
  },
  alternates: {
    canonical:
      'https://justlegalsolutions.org/blog/process-server-safety-guide-oklahoma',
  },
  other: {
    'article:published_time': '2026-04-24',
    'article:modified_time': '2026-04-24',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary': 'Oklahoma legal support guidance from Just Legal Solutions for process serving, notary, and court document needs.',
    'ai-key-facts': 'Oklahoma-specific legal process guidance; Licensed and bonded support; Service across 77 counties; Includes practical compliance steps',
  
  
  },
};

const faqs = [
  {
    question: 'What is the most important safety rule for process servers?',
    answer:
      'The single most important safety rule is to trust your instincts and be prepared to walk away. No document service is worth risking personal safety. Professional process servers must develop situational awareness that allows them to recognize early warning signs of a potentially dangerous encounter. If something feels wrong about a location, a recipient, or a situation, the correct response is to leave and attempt service at another time or location. Every other safety protocol supports this fundamental principle of self-preservation.',
  },
  {
    question: 'Should a process server ever enter a private residence?',
    answer:
      'No. Professional process servers should never enter a private residence or enclosed structure without a clear invitation and even then should exercise extreme caution. Once inside, a server loses tactical advantages, may become trapped, and could face false accusations. All service should be conducted at the threshold, in a doorway, or outside the residence. If a recipient invites you inside, politely decline and explain that you prefer to complete the service at the door. This boundary protects both the server and the integrity of the service.',
  },
  {
    question: 'When should a process server involve law enforcement?',
    answer:
      'Oklahoma law allows process servers to request law enforcement accompaniment in situations where there is a reasonable concern for personal safety. Specific circumstances that warrant law enforcement presence include: service at locations with a history of violent incidents, serving individuals with known criminal records involving violence, situations where weapons are visible or threatened, service in isolated or remote areas, and cases where the server has received explicit threats. Law enforcement presence is also advisable when serving protective orders, domestic relations cases, or any situation with heightened emotional stakes.',
  },
  {
    question: 'How can process servers de-escalate a hostile encounter?',
    answer:
      'De-escalation begins with non-threatening body language and a calm, professional tone. Maintain open hands, avoid sudden movements, and give the recipient personal space. Listen actively if they want to vent frustration, and do not argue or engage in verbal sparring. Use phrases like "I understand this is frustrating" or "I am just doing my job" to acknowledge their feelings without accepting abuse. If the recipient becomes physically threatening, leave immediately. Professional de-escalation training, such as courses offered by security professionals, provides valuable techniques for managing hostile encounters safely.',
  },
  {
    question: 'What digital safety precautions should process servers take?',
    answer:
      'Digital safety is increasingly important in modern process serving. Servers should minimize their personal digital footprint by using separate professional social media accounts and avoiding geo-tagged posts that reveal current locations. Personal contact information should never be shared with recipients. GPS tracking on company devices should be active during service attempts. Servers should regularly check their own online presence to ensure personal information is not easily discoverable by hostile individuals. Additionally, all service documentation should be secured and transmitted through encrypted channels to protect both server and recipient information.',
  },
  {
    question: 'Are there Oklahoma-specific safety considerations for process servers?',
    answer:
      'Yes. Oklahoma law permits law enforcement to accompany process servers when safety concerns exist, and servers should understand how to request this assistance in each jurisdiction they serve. Oklahoma Castle Doctrine laws mean residents have broad rights regarding their property, making it especially important for servers to remain outside residences. Weather considerations, including severe storms and extreme heat, create additional safety concerns in rural Oklahoma counties where backup may be far away. Finally, Oklahoma\'s mix of urban, suburban, and very rural service areas means safety protocols must adapt to dramatically different environments across the state\'s 77 counties.',
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/">Home</Link>{' '}
          <ChevronRight className="inline w-4 h-4" />{' '}
          <Link href="/blog">Blog</Link>{' '}
          <ChevronRight className="inline w-4 h-4" />{' '}
          <span>Process Server Safety Guide Oklahoma</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          The Process Server's Safety Guide: Best Practices for Oklahoma
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Process serving is an essential function of the legal system, but it is
          not without risks. Every day, process servers across Oklahoma knock on
          doors and approach individuals who may be angry, frightened, or
          unpredictable. At Just Legal Solutions, with over 50 years of combined
          experience serving thousands of documents across all 77 Oklahoma
          counties, we have learned that preparation, awareness, and sound
          judgment are the foundations of a safe and successful career in process
          serving. This guide shares the safety best practices that every
          Oklahoma process server should follow.
        </p>
        <p className="mb-6 text-gray-700">Clients trust Just Legal Solutions for 50+ years of combined experience, licensed and bonded service under Oklahoma Title 12 O.S. 158.1, and statewide execution across all 77 Oklahoma counties. We reference 12 O.S. 2004 and Title 49 O.S. standards to keep filings and service defensible.</p>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Pre-Visit Preparation and Research
          </h2>
          <p className="mb-4">
            Safety begins long before a process server reaches the service
            address. Thorough pre-visit preparation is the single most effective
            way to prevent dangerous encounters. Before any service attempt, our
            team at Just Legal Solutions conducts comprehensive research on the
            service location, the recipient, and any potential risk factors.
          </p>
          <p className="mb-4">
            Start with the address itself. Use mapping tools to understand the
            layout of the neighborhood, the entry and exit routes, and the
            parking situation. Identify whether the location is a single-family
            home, apartment complex, mobile home park, or commercial building.
            Each type of location presents different safety considerations.
            Apartment complexes may have multiple exits and security cameras.
            Rural properties may have dogs, gates, or long driveways with
            limited visibility from the road.
          </p>
          <p className="mb-4">
            Next, research the recipient. Criminal background checks, social
            media activity, and known associates can reveal warning signs.
            Does the individual have a history of violent offenses? Have they
            made threatening statements about legal proceedings on social media?
            Are there protective orders or domestic violence histories associated
            with the address? This intelligence allows servers to adjust their
            approach or request law enforcement accompaniment when warranted.
          </p>
          <p className="mb-4">
            Finally, plan your visit strategically. Choose the time of day with
            the best lighting and visibility. Avoid early morning or late
            evening visits to unfamiliar areas when possible. Always inform your
            dispatch team of your intended route, expected arrival time, and
            estimated completion window. At Just Legal Solutions, our{' '}
            <Link href="/process-serving" className="text-blue-600 hover:underline">
              professional process serving team
            </Link>{' '}
            maintains real-time communication protocols to ensure that every
            server in the field has backup support available.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Safety Protocols During Service Attempts
          </h2>
          <p className="mb-4">
            Every service attempt should follow a consistent safety protocol.
            These protocols may seem repetitive, but they exist because they
            work. Professional process servers treat safety procedures as
            non-negotiable standards, not optional guidelines.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Arrival and approach
          </h3>
          <p className="mb-4">
            Park your vehicle facing the exit whenever possible. This allows for
            a quick departure if a situation turns hostile. Before exiting your
            vehicle, observe the surroundings. Look for signs of agitation,
            multiple individuals gathered near the entrance, animals, or anything
            that seems unusual. Take a moment to listen for raised voices or
            sounds of conflict from inside the residence.
          </p>
          <p className="mb-4">
            When approaching the door, stay alert to your surroundings. Avoid
            standing directly in front of the door where you could be struck if
            it is opened forcefully. Stand slightly to the side where you can
            see inside when the door opens but are not in a direct line with
            it. Keep your hands visible and free of unnecessary items. Hold
            documents in a non-threatening manner, not clenched or hidden.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Identification and communication
          </h3>
          <p className="mb-4">
            Always identify yourself clearly and calmly. State your name, that
            you are a process server, and the purpose of your visit. Speak in a
            neutral, professional tone regardless of how the recipient responds.
            Never pretend to be someone you are not, such as a delivery driver
            or utility worker. Deception can escalate a situation dramatically
            when the recipient discovers the truth and may constitute legal
            fraud in certain circumstances.
          </p>
          <p className="mb-4">
            Keep interactions brief and focused. Your goal is to deliver
            documents, not to engage in extended conversation or debate. If the
            recipient has questions, answer them concisely without offering
            legal advice. If they refuse the documents, place them nearby,
            document the refusal, and leave calmly. Never force documents into
            someone's hands or throw them aggressively.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            De-Escalation Techniques for Hostile Recipients
          </h2>
          <p className="mb-4">
            Even with thorough preparation, process servers occasionally
            encounter hostile or aggressive recipients. How a server responds in
            these first critical seconds often determines whether the situation
            resolves peacefully or escalates dangerously. De-escalation is a
            skill that can be learned and improved through training and
            experience.
          </p>
          <p className="mb-4">
            The foundation of de-escalation is maintaining your own calm.
            Recipients often mirror the emotional energy they receive. If you
            approach with anxiety, defensiveness, or aggression, you will likely
            receive the same in return. A calm, steady demeanor communicates
            confidence and professionalism, which can defuse tension before it
            builds.
          </p>
          <p className="mb-4">
            <strong>Non-threatening body language</strong> is essential. Keep
            your hands open and visible. Avoid crossing your arms, pointing, or
            making sudden gestures. Maintain a respectful distance, typically
            six to eight feet, which is close enough for conversation but far
            enough to create a safety buffer. Position yourself at an angle
            rather than facing the recipient directly, which is perceived as less
            confrontational.
          </p>
          <p className="mb-4">
            <strong>Active listening</strong> can be surprisingly effective.
            Many hostile recipients are primarily frustrated with their legal
            situation, not with the server personally. Allowing them to express
            that frustration, within reason, can reduce their emotional
            intensity. Use phrases like "I understand this is difficult" or "I
            am just delivering these documents; I don't have any control over
            the case itself." Do not argue, debate, or defend the legal system.
            Your role is delivery, not adjudication.
          </p>
          <p className="mb-4">
            Professional de-escalation courses are valuable investments for
            anyone serious about process serving. These courses teach verbal
            tactics, body language strategies, and scenario-based responses
            that prepare servers for real-world confrontations.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            When to Walk Away: Recognizing Dangerous Situations
          </h2>
          <p className="mb-4">
            The most important safety skill a process server can develop is
            recognizing when a situation has become too dangerous to continue.
            Walking away is not a failure. It is a professional decision that
            prioritizes safety over immediate results. A document can be served
            another day. An injury cannot be undone.
          </p>
          <p className="mb-4">
            <strong>Immediate danger indicators include:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>
              <strong>Visible weapons:</strong> If a weapon of any kind is
              visible or mentioned, leave immediately.
            </li>
            <li>
              <strong>Physical threats:</strong> Any statement threatening
              physical harm, regardless of the recipient's apparent capability,
              warrants immediate departure.
            </li>
            <li>
              <strong>Intoxication:</strong> Individuals under the influence of
              alcohol or drugs have impaired judgment and unpredictable
              behavior.
            </li>
            <li>
              <strong>Multiple aggressors:</strong> Being outnumbered
              dramatically increases risk, even in seemingly minor
              confrontations.
            </li>
            <li>
              <strong>Trapped position:</strong> If your exit route is blocked
              or you are cornered, you are in a dangerous situation regardless
              of the recipient's apparent intent.
            </li>
            <li>
              <strong>Animals:</strong> Aggressive dogs that are not properly
              restrained represent a serious threat, especially on rural
              properties.
            </li>
          </ul>
          <p className="mb-4">
            When any of these indicators appear, the correct response is to
            leave calmly and quickly. Do not engage further, do not attempt to
            explain yourself, and do not let pride override judgment. Document
            what happened, notify your supervisor or dispatch, and plan a
            different approach for the next attempt. At Just Legal Solutions,
            we support every decision our servers make to prioritize their
            safety.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Law Enforcement Accompaniment in Oklahoma
          </h2>
          <p className="mb-4">
            Oklahoma law recognizes that process servers sometimes face
            dangerous situations and allows for law enforcement accompaniment
            when safety concerns are present. Understanding how and when to
            request this assistance is an important part of server safety
            planning.
          </p>
          <p className="mb-4">
            Law enforcement presence is appropriate when there is a documented
            reason to believe a service attempt could become dangerous. This
            includes cases involving individuals with violent criminal histories,
            situations where previous service attempts resulted in threats,
            service of certain document types such as protective orders or
            emergency custody orders, and service at locations known for
            criminal activity.
          </p>
          <p className="mb-4">
            When requesting law enforcement accompaniment, be prepared to
            explain the specific safety concerns. Have the case details,
            recipient information, and your professional credentials ready.
            Understand that law enforcement agencies have limited resources and
            may not always be able to provide immediate accompaniment. In some
            jurisdictions, you may need to schedule in advance.
          </p>
          <p className="mb-4">
            The presence of a law enforcement officer changes the dynamics of a
            service attempt. Most individuals behave more appropriately when an
            officer is present. However, servers should still follow all
            standard safety protocols and not become overconfident simply
            because law enforcement is nearby.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Vehicle and Equipment Safety
          </h2>
          <p className="mb-4">
            A process server's vehicle is their mobile office, escape route, and
            sometimes their safest refuge. Proper vehicle maintenance and
            strategic equipment choices are foundational safety measures that
            are easy to overlook.
          </p>
          <p className="mb-4">
            Keep your vehicle in excellent mechanical condition. A breakdown in
            an unfamiliar or hostile neighborhood creates an immediate safety
            risk. Maintain sufficient fuel for unexpected route changes. Keep
            the vehicle organized so that documents, equipment, and personal
            items do not slow down a quick departure.
          </p>
          <p className="mb-4">
            Consider what you carry on your person during service attempts.
            Many professional servers wear a badge or identification that
            clearly identifies them as process servers without appearing
            threatening. A small flashlight is useful for examining addresses
            and can serve as an improvised defensive tool if absolutely
            necessary. Some servers carry personal safety devices, though
            servers should understand applicable state and local laws regarding
            these items.
          </p>
          <p className="mb-4">
            Mobile phones are essential safety equipment. Ensure your phone is
            fully charged before each shift. Use GPS tracking that allows
            dispatch to monitor your location. Establish a check-in protocol
            where you contact your team after each service attempt. If a
            check-in is missed, your team should attempt contact and have a
            procedure for escalating concern.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Digital Safety and Privacy Protection
          </h2>
          <p className="mb-4">
            In the digital age, process server safety extends beyond physical
            encounters into the online realm. Hostile recipients can use
            digital tools to locate, harass, or threaten servers who they feel
            have wronged them. Protecting your digital identity is an essential
            safety practice.
          </p>
          <p className="mb-4">
            Separate your professional and personal online presence completely.
            Use a professional email address and phone number that are not
            linked to your personal accounts. Avoid posting about your work,
            routes, or locations on personal social media. Review your privacy
            settings on all platforms to minimize what strangers can learn
            about you.
          </p>
          <p className="mb-4">
            Be cautious about the information you share with recipients. Provide
            only what is necessary for identification and service. Never share
            personal details about your schedule, other service locations, or
            personal life. If a recipient becomes hostile or threatening,
            document all subsequent contact attempts and consider reporting
            serious threats to law enforcement.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Oklahoma-Specific Safety Considerations
          </h2>
          <p className="mb-4">
            Oklahoma presents unique safety challenges that process servers
            should understand. The state's diverse geography, from dense urban
            centers to extremely rural areas, requires adaptable safety
            protocols. At Just Legal Solutions,{' '}
            <Link href="/about" className="text-blue-600 hover:underline">
              our experienced team
            </Link>{' '}
            has developed strategies that work across all 77 Oklahoma counties.
          </p>
          <p className="mb-4">
            In rural areas, cell phone coverage may be unreliable, making
            communication with dispatch difficult. Servers working in remote
            locations should have backup communication plans and check in more
            frequently. Properties in rural Oklahoma often have long
            driveways with limited visibility, animals, and residents who may
            be armed. Approach slowly, stay visible, and be prepared to explain
            your presence before reaching the residence.
          </p>
          <p className="mb-4">
            Oklahoma weather also creates safety hazards. Severe thunderstorms,
            tornadoes, ice storms, and extreme heat are all conditions that can
            affect server safety. Monitor weather forecasts and have a plan
            for seeking shelter quickly if severe weather develops during your
            route. Never attempt service during a tornado warning or other
            dangerous weather event.
          </p>
          <p className="mb-4">
            Finally, Oklahoma's Stand Your Ground and Castle Doctrine laws mean
            that property owners have broad rights to defend their homes.
            Process servers must never enter a property without permission,
            even to reach a front door. If a gate is closed, a sign says "No
            Trespassing," or a dog is present, respect those boundaries and
            attempt service from a public area or schedule a different
            approach.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Training and Professional Development
          </h2>
          <p className="mb-4">
            Safety is not a one-time lesson. It is an ongoing commitment to
            professional development. The best process servers continuously
            invest in training, stay current on best practices, and learn from
            every experience in the field.
          </p>
          <p className="mb-4">
            Licensed and bonded under Oklahoma Title 12 O.S. 158.1, our team
            at Just Legal Solutions undergoes regular safety training that
            includes scenario-based exercises, legal updates, and tactical
            communication skills. We encourage all process serving
            professionals to pursue continuing education in de-escalation,
            situational awareness, and personal safety.
          </p>
          <p className="mb-4">
            Professional organizations offer valuable safety resources. Industry
            conferences, online courses, and peer networks provide
            opportunities to learn from other servers' experiences. Discussing
            challenging situations with colleagues often reveals new strategies
            and perspectives that improve safety for everyone.
          </p>
          <p className="mb-4">
            Remember that experience itself is a safety tool. The more service
            attempts you complete, the better you become at reading situations,
            recognizing warning signs, and responding appropriately. New
            servers should work under experienced supervision when possible
            and should never hesitate to ask for guidance when facing an
            unfamiliar or uncomfortable situation.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link
                href="/blog/what-does-process-server-do-day-in-life"
                className="text-blue-600 hover:underline"
              >
                What Does a Process Server Do? A Day in the Life
              </Link>
            </li>
            <li>
              <Link
                href="/blog/skip-tracing-success-story-tulsa-case-study"
                className="text-blue-600 hover:underline"
              >
                Skip Tracing Success Story: Tulsa Case Study
              </Link>
            </li>
            <li>
              <Link
                href="/blog/common-process-serving-mistakes-oklahoma"
                className="text-blue-600 hover:underline"
              >
                Common Process Serving Mistakes to Avoid in Oklahoma
              </Link>
            </li>
            <li>
              <Link
                href="/blog/process-server-vs-sheriff-oklahoma"
                className="text-blue-600 hover:underline"
              >
                Process Server vs. Sheriff: Which Is Better in Oklahoma?
              </Link>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </section>

        <section className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Safety Is Our Priority at Just Legal Solutions
          </h2>
          <p className="mb-4">
            Process serving is demanding work that requires both courage and
            caution. At Just Legal Solutions, we believe that every server
            deserves to return home safely at the end of each day. Our
            comprehensive safety protocols, ongoing training programs, and
            unwavering support for our team's professional judgment have made
            us one of Oklahoma's most trusted process serving companies.
          </p>
          <p className="mb-4">
            With over 50 years of combined experience and thousands of
            successful services across all 77 Oklahoma counties, we have the
            expertise to handle even the most challenging cases safely and
            professionally. Our GPS-verified proof of service, transparent
            pricing, and commitment to our team's wellbeing set us apart from
            the competition.
          </p>
          <p className="mb-4">
            For current pricing on all our services,{' '}
            <Link href="/pricing" className="text-blue-600 font-semibold">
              view our pricing page
            </Link>
            .
          </p>
          <p className="font-semibold">
            Call{' '}
            <a href="tel:539-367-6832" className="text-blue-600">
              (539) 367-6832
            </a>{' '}
            or{' '}
            <Link href="/" className="text-blue-600">
              request service online
            </Link>
            . We serve all 77 Oklahoma counties, including{' '}
            <Link href="/service-areas" className="text-blue-600 hover:underline">
              your service area
            </Link>
            , with professionalism, safety, and results you can count on.
          </p>
        </section>
      </main>
      <LocalPromoBanner />
      <AuthorBox />
      <Footer />
      <UnifiedSchema
        pageType="article"
        title="The Process Server's Safety Guide: Best Practices for Oklahoma"
        description="Essential safety practices for process servers in Oklahoma. Learn preparation, de-escalation techniques, and when to walk away from a dangerous situation."
        url="https://justlegalsolutions.org/blog/process-server-safety-guide-oklahoma"
        faqs={faqs}
        image="https://justlegalsolutions.org/images/jls-logo.webp"
      />
    </div>
  );
}
