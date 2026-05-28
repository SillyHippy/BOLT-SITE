#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = [
    (
        ROOT / "app/what-happens-if-someone-refuses-service/page.tsx",
        'answer: "Oklahoma gives plaintiffs 180 days to complete service after filing (12 O.S. § 2004). If the defendant successfully avoids all service attempts, the plaintiff can request court approval for alternative service methods: substitute service at the residence, service at the defendant\'s workplace, or service by publication. The case does not go away — it just takes longer and may use alternative methods."',
        'answer: "Oklahoma gives plaintiffs 180 days to complete service after filing (12 O.S. § 2004). Where permitted under § 2004(C)(1), residential substitute service may be used at the dwelling without a fixed number of prior personal attempts. Service by publication under § 2004(C)(3) requires court approval and due diligence. Subpoenas and entity or government service require personal delivery. The case does not go away."',
    ),
    (
        ROOT / "app/blog/can-you-refuse-service-process-server-oklahoma/page.tsx",
        "Subpoenas and certain government or corporate service require personal delivery only Refusing service",
        "Subpoenas and certain government or corporate service require personal delivery only. Refusing service",
    ),
    (
        ROOT / "content/blog-queue/app/blog/what-to-expect-hiring-process-server-client-faq-oklahoma/page.tsx",
        "You can then petition the court for alternative service methods such as substituted service (leaving papers with a co-resident 15 years or older who resides at the defendant's dwelling) or service by publication in an approved newspaper.",
        "Where permitted under § 2004(C)(1), residential substituted service may leave papers with a co-resident 15 years or older at the dwelling. Service by publication under § 2004(C)(3) requires court approval and an affidavit of due diligence.",
    ),
    (
        ROOT / "app/process-serving-for-property-managers/page.tsx",
        "'If personal service fails, substituted service or posting rules apply (requires court approval in some cases)'",
        "'If personal service fails, residential substituted service under § 2004(C)(1) may apply where permitted; posting or nail-and-mail in evictions requires statutory authorization (e.g., 12 O.S. § 1148.5); publication requires court approval'",
    ),
    (
        ROOT / "content/blog-queue/app/blog/hoa-property-management-process-serving-oklahoma/page.tsx",
        "When we simply cannot gain access to a gated community after multiple diligent attempts, Oklahoma law gives us options — but they require court approval and meticulous documentation. Under 12 O.S. §2004(C)(1), we can use substitute service at the dwelling with any person 15 years of age or older who resides there.",
        "When we cannot gain access to a gated community, we document every attempt. Under 12 O.S. §2004(C)(1), residential substituted service at the dwelling with a person 15 years of age or older who resides there may be used where that method is permitted—Title 12 does not prescribe a fixed number of prior personal attempts before that method.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx",
        "This evidence supports motions for substituted service under 12 O.S. § 2004(C)(1)(c)(2) or, in extreme cases, service by publication under 12 O.S. § 2004(C)(3). The PI's documentation strengthens the affidavit needed for court approval.",
        "This evidence supports residential substituted service under 12 O.S. § 2004(C)(1) where permitted, or an affidavit of due diligence for service by publication under 12 O.S. § 2004(C)(3), which requires court approval.",
    ),
    (
        ROOT / "app/oklahoma-process-server-forms-templates/page.tsx",
        "this affidavit is required when seeking court approval for substitute service methods such as publication or service on a resident family member.",
        "this affidavit is required when seeking court approval for service by publication under § 2004(C)(3). Residential substituted service under § 2004(C)(1) at a dwelling with a resident 15+ does not require a fixed number of prior attempts, though documentation supports any challenged service.",
    ),
    (
        ROOT / "app/blog/handling-evasive-defendants-oklahoma/page.tsx",
        "When personal service proves impossible despite due diligence efforts, Oklahoma law provides alternative methods under 12 O.S. § 2004. These methods require court approval and must follow specific procedures.",
        "When personal delivery is not accomplished, residential substituted service under § 2004(C)(1) may be used where permitted. Service by publication and other court-ordered alternatives under § 2004(C)(3) require court approval and due diligence. Subpoenas and entity or government service require personal delivery.",
    ),
    (
        ROOT / "app/blog/can-you-avoid-being-served-oklahoma/page.tsx",
        "<li><strong>Substituted service</strong> (leaving papers with a co-resident age 15+)</li>",
        "<li><strong>Residential substituted service</strong> under § 2004(C)(1) where permitted (co-resident age 15+ at dwelling—not for subpoenas or entity/government service)</li>",
    ),
    (
        ROOT / "app/blog/proof-of-service-oklahoma-guide/page.tsx",
        "whether personal delivery to the defendant, substituted service on a household member, nail-and-mail service, service on an agent, or another authorized method.",
        "whether personal delivery to the defendant, residential substituted service under § 2004(C)(1) where permitted, nail-and-mail or posting where authorized, service on a designated agent or registered agent, or another method the statute requires for that document type.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/process-serving-debt-collection-agencies-oklahoma/page.tsx",
        "(2) substituted service by leaving copies at the defendant's dwelling with a person 15+ years old who resides there;",
        "(2) residential substituted service under § 2004(C)(1) by leaving copies at the defendant's dwelling with a person 15+ who resides there, when that method is allowed (not for all document types);",
    ),
    (
        ROOT / "content/blog-queue/app/blog/enforcing-out-of-state-custody-orders-service-process-oklahoma/page.tsx",
        "typically personal delivery, substituted service on a person 15 or older at the respondent's dwelling, or in some cases certified mail.",
        "personal delivery where required, residential substituted service under § 2004(C)(1) on a person 15 or older at the respondent's dwelling when permitted, or certified mail where authorized.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/enforcing-out-of-state-custody-orders-service-process-oklahoma/page.tsx",
        "If the respondent or third-party custodian is not available, substituted service on a person 15 years or older at their dwelling house or usual place of abode is permitted.",
        "Where § 2004(C)(1) permits, residential substituted service may leave papers with a person 15 years or older at their dwelling. Title 12 does not prescribe a fixed number of prior personal attempts before that method.",
    ),
]

for path, old, new in REPLACEMENTS:
    text = path.read_text(encoding="utf-8")
    if old not in text:
        raise SystemExit(f"MISSING in {path.relative_to(ROOT)}: {old[:70]}...")
    path.write_text(text.replace(old, new), encoding="utf-8")
    print(f"Fixed {path.relative_to(ROOT)}")

print("Pass 3 complete.")
