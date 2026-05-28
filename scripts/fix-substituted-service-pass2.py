#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = [
    (
        ROOT / "app/blog/process-serving-small-business-owners-oklahoma/page.tsx",
        "If you can&apos;t serve the defendant personally, Oklahoma allows substituted service on a person of suitable age and discretion (15 or older) who resides at the defendant&apos;s dwelling.",
        "Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave copies with a person at least 15 years old who resides at the defendant&apos;s dwelling. Subpoenas and entity or government service require personal delivery to specified persons.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/what-to-expect-hiring-process-server-client-faq-oklahoma/page.tsx",
        "Under 12 O.S. § 2004(C)(2), residential substituted service under § 2004(C)(1) may leave papers",
        "Under 12 O.S. § 2004(C)(1), residential substituted service may leave papers",
    ),
    (
        ROOT / "content/blog-queue/app/blog/gps-tracking-revolutionizes-process-serving-accountability-oklahoma/page.tsx",
        "GPS logs also document residential substituted service where § 2004(C)(1) permits it A GPS log",
        "GPS logs also document residential substituted service where § 2004(C)(1) permits it. A GPS log",
    ),
    (
        ROOT / "app/blog/questions-to-ask-before-hiring-process-server/page.tsx",
        "Service by publication under § 2004(C)(3) requires court approval and due diligence A qualified",
        "Service by publication under § 2004(C)(3) requires court approval and due diligence. A qualified",
    ),
    (
        ROOT / "content/counties/delaware-county.md",
        "- **Alternative Service Methods:** When personal service proves impossible, we assist with obtaining court orders for substituted service",
        "- **Alternative Service Methods:** Where § 2004(C)(1) permits residential substituted service, we follow that method; for publication under § 2004(C)(3) or other alternatives, we assist with court orders when due diligence is required",
    ),
    (
        ROOT / "content/counties/rogers-county.md",
        """When personal delivery isn't possible, Oklahoma law permits substituted service by:

- Leaving copies at the defendant's dwelling house or usual place of abode
- Delivering to a person of suitable age and discretion (15 years or older) residing at the location
- Service on a person authorized by appointment or law to receive service""",
        """Under 12 O.S. § 2004(C)(1), residential substituted service is permitted in some civil cases by:

- Leaving copies at the defendant's dwelling house or usual place of abode
- Delivering to a person at least 15 years old who resides at the location, when that method is allowed

Title 12 does not prescribe a fixed number of prior personal attempts before that method. Subpoenas, government agencies, and corporations require personal delivery to specified persons—not residential sub-service. Authorized agents may accept service only where the statute allows.""",
    ),
    (
        ROOT / "public/llms-full.txt",
        "- In Oklahoma: Must serve adult 15+ at residence (substitute service)",
        "- In Oklahoma: Residential substitute service under § 2004(C)(1) may use adult 15+ at residence when permitted; subpoenas and entity/government service require personal delivery",
    ),
    (
        ROOT / "public/llms-full.txt",
        "- Serve family member as substitute (with court approval)",
        "- Residential substitute service under § 2004(C)(1) where permitted (not for subpoenas or entity/government service)",
    ),
    (
        ROOT / "public/llms-full.txt",
        "- Morning service when defendant typically at work (served spouse instead via substitute service)",
        "- Morning service when defendant at work: residential substitute service under § 2004(C)(1) only where permitted for the document type",
    ),
    (
        ROOT / "lib/blog-categories.ts",
        "When substitute service is allowed under 12 O.S. \u00A7 2004(c), abode service, posting, and judicial approval.",
        "Residential substitute service under 12 O.S. § 2004(C)(1), document-type limits, abode service, posting, and judicial approval.",
    ),
    (
        ROOT / "public/video-sitemap.xml",
        "Animated story-driven short explaining what substitute service means in Oklahoma and when courts allow alternatives to personal service.",
        "Animated short on Oklahoma residential substitute service under 12 O.S. § 2004(C)(1)—when abode service is allowed and when personal delivery is required.",
    ),
    (
        ROOT / "public/video-sitemap.xml",
        "When personal service isn&apos;t possible in Oklahoma, substitute service under 12 O.S. § 2004(C)(1) may be your answer. Learn how it works and when courts approve it.",
        "Under 12 O.S. § 2004(C)(1), residential substitute service is permitted in some Oklahoma civil cases when allowed by law. Subpoenas and certain government or corporate service require personal delivery only.",
    ),
    (
        ROOT / "public/video-sitemap.xml",
        "What substitute service means in Oklahoma and when courts may allow alternatives to personal service.",
        "What residential substitute service means under 12 O.S. § 2004(C)(1) in Oklahoma, and which documents require personal delivery only.",
    ),
    (
        ROOT / "app/blog/certified-mail-vs-personal-service-oklahoma/page.tsx",
        "<p>When direct personal service isn&apos;t possible, Oklahoma law permits substituted service under <strong>12 O.S. § 2004(C)(1)</strong>. This involves leaving copies with:</p>",
        "<p>Where permitted under <strong>12 O.S. § 2004(C)(1)</strong>, Oklahoma law allows residential substituted service. This involves leaving copies with:</p>",
    ),
    (
        ROOT / "content/blog-queue/app/blog/enforcing-out-of-state-custody-orders-service-process-oklahoma/page.tsx",
        "typically personal delivery, substituted service on a person 15 or older at the respondent's dwelling, or in some cases certified mail.",
        "personal delivery where required, or residential substituted service under § 2004(C)(1) on a person 15 or older at the respondent's dwelling when that method is allowed, or certified mail where authorized.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/enforcing-out-of-state-custody-orders-service-process-oklahoma/page.tsx",
        "If the respondent or third-party custodian is not available, substituted service on a person 15 years or older at their dwelling house or usual place of abode is permitted.",
        "Where § 2004(C)(1) permits, residential substituted service may leave papers with a person 15 years or older at their dwelling. Title 12 does not prescribe a fixed number of prior personal attempts before that method.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/do-process-servers-call-before-serving/page.tsx",
        "'Yes. Under Oklahoma law, if personal service cannot be completed after diligent attempts, a process server may leave the documents with a person of suitable age and discretion who resides at the same dwelling. This is known as substituted service. The server must also mail a copy to the defendant\\'s address. Our team at Just Legal Solutions follows all Oklahoma statutes precisely when executing substituted service.'",
        "'Yes. Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave documents with a person at least 15 years old who resides at the dwelling. Title 12 does not prescribe a fixed number of prior personal attempts before that method. Subpoenas and entity or government service require personal delivery. Just Legal Solutions follows the service method each document type requires.'",
    ),
]

for path, old, new in REPLACEMENTS:
    text = path.read_text(encoding="utf-8")
    if old not in text:
        raise SystemExit(f"MISSING in {path}: {old[:60]}...")
    path.write_text(text.replace(old, new), encoding="utf-8")
    print(f"Fixed {path.relative_to(ROOT)}")

print("Pass 2 complete.")
