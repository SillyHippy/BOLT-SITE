import React from 'react';

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Service Pricing</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">County-Based Pricing</h2>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Tulsa County:</strong> No extra charge.</li>
          <li><strong>Creek County (Sapulpa area):</strong> No extra charge for select locations. Please confirm your address with us.</li>
          <li><strong>All Other Counties:</strong> An additional surcharge applies. Contact us for a quote.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Service Packages</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded p-4">
            <h3 className="text-xl font-bold mb-2">Standard Service</h3>
            <p className="text-3xl font-bold mb-2">$60</p>
            <p className="text-sm">Ideal for routine document delivery.</p>
            <p className="text-sm">First service attempt within 7 business days (usually sooner).</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="text-xl font-bold mb-2">Rush Service</h3>
            <p className="text-3xl font-bold mb-2">$100</p>
            <p className="text-sm">For urgent demands that need immediate attention.</p>
            <p className="text-sm">A JLS Agent will attempt service within 72 hours or sooner based on availability.</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
            <p className="text-3xl font-bold mb-2">$150</p>
            <p className="text-sm">For urgent, time-critical matters.</p>
            <p className="text-sm">A JLS Agent will attempt service within 24 hours or sooner based on availability.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Additional and Optional Services</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>SAME-DAY/RUSH:</strong> This specific service, which requires prompt action, requires an additional fee. This charge is strictly applied when you or your client requests that the respondent be served on the same day we receive your court documents or, alternatively, within a specific timeframe of 24 hours (in circumstances where a Special Service is required, we will proceed to serve the respondent within a reasonable period).
          </li>
          <li>
            <strong>$60 PER SERVICE:</strong> The foundational fee for a single service starts at $60. This fee covers not only the effective service of documents in a timely manner but also includes the processing and filing of the original Return of Service Affidavit directly to you if you wish to handle the filing yourself.
          </li>
          <li>
            <strong>FILING AFFIDAVITS:</strong> If court is in Tulsa County, PPS can file at the courthouse for you for an additional $35 (other counties will be an additional charge and discussed with client beforehand). If you would like this additional service, please discuss when setting up your process service. Otherwise the original Return of Service Affidavit will be mailed to you with the invoice once completed.
          </li>
          <li>
            <strong>PRINTING OF DOCUMENTS:</strong> Should you choose to email us your documents that need serving, we offer to print the first 10 pages at no charge. Any pages exceeding this limit will incur a fee of $0.20 per page.
          </li>
          <li>
            <strong>SET TIME OF SERVICE:</strong> If you require that the service occurs at a predetermined specific time and date, this request can be treated similarly to a RUSH and may incur an additional fee. This extra charge will be implemented only if you or your client specifically mandate that the respondent MUST be served at that designated date and time. If no specific time is requested, we will execute the service within a reasonable period.
          </li>
          <li>
            <strong>EVASIVE RESPONDENT:</strong> Staking out an evasive respondent will incur a $90.00 per hour additional fee with a one hour minimum. Again this is an additional fee and will only be used at your request.
          </li>
          <li>
            <strong>MULTIPLE SERVICES AT SAME ADDRESS:</strong> If more than one person needs to be served at an address (i.e. husband and wife) then it is only $30.00 per extra person served.
          </li>
          <li>
            <strong>POSTING AFFIDAVITS:</strong> If you require us to post an affidavit and not personally serve the respondent, such as an eviction notice, then this service will cost $50.00.
          </li>
          <li>
            <strong>CERTIFIED MAILING OF AFFIDAVITS:</strong> If you require us to send the affidavit to the respondent via certified mail, then this service incurs a fee of $35.00 plus the price of the certified mail. This fee is additional to any other services we provide to you.
          </li>
          <li>
            <strong>SKIP TRACING SERVICES:</strong> Skip tracing services can be provided at an additional fee discussed beforehand.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Non-Service Policy</h2>
        <p>
          While we strive to ensure the completion of our tasks swiftly and effectively, yet there may be instances when serving a respondent proves to be impossible for various reasons beyond our control. These reasons may include incorrect addresses provided to us, the respondent having moved, or instances in which the individual is actively evading service for various reasons, to name just a few. It is important to note that if we dedicate our time and efforts to serving a respondent, but ultimately are unsuccessful, we will still charge the flat fee of $60.00 for the service attempt. We pride ourselves on our high success rates, but we feel it is important to clearly communicate this potential issue to you in advance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Due Diligence Policy</h2>
        <p>
          At Just Legal Solutions, we adhere to Oklahoma's due diligence standards to ensure proper service of process. While Oklahoma law does not specify an exact number of attempts required for due diligence, it emphasizes that service must be carried out with reasonable efforts to serve the defendant personally before considering alternative methods. Our process servers make multiple attempts at serving the individual at different times of the day and on different days of the week to demonstrate a thorough effort to effectuate personal service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">JLS Wants to Partner with You</h2>
        <p>
          <strong>If you don't see exactly what you're looking for</strong> in our service offerings, have a particularly complex or unique situation, or <strong>need more competitive pricing</strong>, we encourage you to reach out <strong>before exploring alternatives.</strong> We're happy to discuss your specific needs and create tailored solutions that work for you. Bulk and volume pricing available upon request—contact us directly to learn more!
        </p>
      </section>
    </div>
  );
}
