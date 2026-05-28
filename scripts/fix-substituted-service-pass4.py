#!/usr/bin/env python3
"""Final pass: remaining substituted-service accuracy fixes."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = [
    # --- pass3 remainder ---
    (
        ROOT / "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx",
        "This evidence supports motions for substituted service under 12 O.S. § 2004(C)(1)(c)(2) or, in extreme cases, service by publication under 12 O.S. § 2004(C)(3). The PI's documentation strengthens the affidavit needed for court approval.",
        "This evidence supports residential substituted service under 12 O.S. § 2004(C)(1) where permitted, or an affidavit of due diligence for service by publication under 12 O.S. § 2004(C)(3), which requires court approval.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx",
        "substituted service on a person 15 years or older at the dwelling under 12 O.S. § 2004(C)(1)(c)(2)",
        "residential substituted service on a person 15 years or older at the dwelling under 12 O.S. § 2004(C)(1), where that method is permitted",
    ),
    (
        ROOT / "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx",
        "Under 12 O.S. § 2004(C)(1)(c)(2), Oklahoma allows substituted service on a person 15 years or older at the defendant&rsquo;s dwelling, which is one of the lowest age thresholds in the nation.",
        "Under 12 O.S. § 2004(C)(1), Oklahoma allows residential substituted service on a person 15 years or older at the defendant&rsquo;s dwelling in some civil cases, which is one of the lowest age thresholds in the nation.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx",
        "This surveillance evidence becomes the backbone of motions for alternative service methods. If you ultimately need to request service by publication or substituted service, the court will want to see that you made genuine, documented efforts to achieve personal service first. PI surveillance logs provide exactly that documentation.",
        "This surveillance evidence supports proof of residency for residential substituted service under § 2004(C)(1) where permitted, and documents due diligence for service by publication under § 2004(C)(3), which requires court approval. Title 12 does not prescribe a fixed number of prior personal attempts before residential substituted service.",
    ),
    (
        ROOT / "app/oklahoma-process-server-forms-templates/page.tsx",
        "this affidavit is required when seeking court approval for substitute service methods such as publication or service on a resident family member.",
        "this affidavit is required when seeking court approval for service by publication under § 2004(C)(3). Residential substituted service under § 2004(C)(1) at a dwelling with a resident 15+ does not require a fixed number of prior attempts, though documentation supports any challenged service.",
        True,
    ),
    (
        ROOT / "app/blog/handling-evasive-defendants-oklahoma/page.tsx",
        "When personal service proves impossible despite due diligence efforts, Oklahoma law provides alternative methods under 12 O.S. § 2004. These methods require court approval and must follow specific procedures.",
        "When personal delivery is not accomplished, residential substituted service under § 2004(C)(1) may be used where permitted. Service by publication and other court-ordered alternatives under § 2004(C)(3) require court approval and due diligence. Subpoenas and entity or government service require personal delivery.",
    ),
    (
        ROOT / "app/blog/handling-evasive-defendants-oklahoma/page.tsx",
        "              <li>Due diligence attempts at personal service must be documented first</li>",
        "              <li>Documentation of each attempt supports reasonableness if service is challenged</li>",
    ),
    (
        ROOT / "app/blog/handling-evasive-defendants-oklahoma/page.tsx",
        "Substituted service is often effective when defendants are avoiding direct contact but haven't instructed everyone to refuse documents. It's less drastic than publication and typically approved more readily by courts.",
        "Residential substituted service under § 2004(C)(1) may be effective when the defendant is not home but a qualifying resident accepts papers—where that method is permitted for the document type. It is separate from service by publication, which requires court approval and due diligence.",
    ),
    (
        ROOT / "app/blog/handling-evasive-defendants-oklahoma/page.tsx",
        "              Substituted service involves leaving documents with a responsible person at the defendant's residence or place of business. Under Oklahoma law:",
        "              Residential substituted service under § 2004(C)(1) involves leaving documents with a resident at the defendant's dwelling when that method is permitted. Subpoenas and entity or government service require personal delivery. Under Oklahoma law:",
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
    # --- HOA / refusal FAQs ---
    (
        ROOT / "app/blog/process-serving-hoa-oklahoma/page.tsx",
        "or substitute service at the dwelling with a person 15 years or older.",
        "or residential substituted service under § 2004(C)(1) at the dwelling with a person 15 years or older, when that method is permitted.",
    ),
    (
        ROOT / "app/blog/process-serving-hoa-oklahoma/page.tsx",
        "Professional process servers document all refusal attempts with dates, times, and witness information to support the validity of substituted service methods.",
        "Professional process servers document all refusal attempts with dates, times, and witness information. Where § 2004(C)(1) permits, residential substituted service may apply; service by publication requires court approval and due diligence.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/hoa-property-management-process-serving-oklahoma/page.tsx",
        "Professional process servers document all refusal attempts with dates, times, and witness information to support substituted service methods in court.",
        "Professional process servers document all refusal attempts with dates, times, and witness information. Where § 2004(C)(1) permits, residential substituted service may apply; service by publication requires court approval and due diligence.",
    ),
    # --- blog-queue ---
    (
        ROOT / "content/blog-queue/app/blog/process-serving-rural-oklahoma-challenges-solutions/page.tsx",
        "Under 12 O.S. § 2004(C)(1)(c)(2), substituted service requires leaving copies at the defendant's dwelling with a person 15 years or older residing therein.",
        "Under 12 O.S. § 2004(C)(1), residential substituted service—where permitted—requires leaving copies at the defendant's dwelling with a person 15 years or older residing therein.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/process-serving-federal-courts-oklahoma/page.tsx",
        "This means Oklahoma's substituted service methods — such as leaving copies at the defendant's dwelling with a person 15 years or older who resides there — may be used in federal court.",
        "This means Oklahoma's residential substituted service under § 2004(C)(1)—leaving copies at the defendant's dwelling with a person 15 years or older who resides there, when permitted for that document type—may be used in federal court.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/technology-reduces-process-serving-errors-oklahoma/page.tsx",
        "and this evidence is essential for supporting motions for substitute service.",
        "and this evidence supports proof of residential substituted service where § 2004(C)(1) permits it, or due diligence for service by publication under § 2004(C)(3).",
    ),
    (
        ROOT / "content/blog-queue/app/blog/technology-reduces-process-serving-errors-oklahoma/page.tsx",
        "Technology does not just document successful service; it documents diligent attempts, which supports motions for substitute service when defendants actively evade service.",
        "Technology does not just document successful service; it documents each attempt, which supports proof of service or due diligence for publication under § 2004(C)(3) when that method is needed.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/someone-avoids-being-served-oklahoma-options/page.tsx",
        "Service by publication is a last-resort method used when a defendant cannot be located through reasonable diligence, including skip tracing, multiple personal attempts, and substituted service.",
        "Service by publication is a last-resort method under § 2004(C)(3) used when a defendant cannot be located after due diligence, including skip tracing and documented attempts. Residential substituted service under § 2004(C)(1) is a separate method that may be used where permitted without court approval.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/someone-avoids-being-served-oklahoma-options/page.tsx",
        "For substituted service to be valid in Oklahoma, several conditions must be met. The server must first have made reasonable attempts to serve the defendant personally. The substituted recipient must be someone who resides at the defendant's dwelling or works at the defendant's place of employment.",
        "For residential substituted service under § 2004(C)(1) to be valid in Oklahoma, several conditions must be met where that method is permitted. Title 12 does not prescribe a fixed number of prior personal attempts before that method. The substituted recipient must be someone who resides at the defendant's dwelling and is at least 15 years old. Subpoenas and entity or government service require personal delivery—not residential sub-service.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/someone-avoids-being-served-oklahoma-options/page.tsx",
        "Serving a defendant at their workplace through a supervisor, human resources representative, or coworker is also valid under Oklahoma law, though it requires sensitivity.",
        "Workplace service generally requires personal delivery to the defendant or service on an authorized agent as the statute requires for that document type—not residential sub-service at a home address. Workplace attempts require sensitivity.",
    ),
    # --- live blog FAQs ---
    (
        ROOT / "app/blog/how-process-servers-handle-difficult-evasive-defendants/page.tsx",
        "If personal service remains impossible after diligent efforts, we document every attempt thoroughly to support a motion for substituted service or service by publication under Title 12 O.S. § 2004.",
        "If personal delivery is not accomplished, we use residential substituted service where § 2004(C)(1) permits it, document every attempt thoroughly, and pursue court-authorized publication under § 2004(C)(3) when due diligence supports it.",
    ),
    (
        ROOT / "app/blog/what-if-process-server-cant-find-person-oklahoma/page.tsx",
        "Yes. If we can demonstrate that the defendant is intentionally evading service—such as by hiding, refusing to answer the door, or having neighbors confirm they are home but refusing to come to the door—Oklahoma courts routinely grant motions for substituted service. Our affidavits document these evasion patterns, which strengthens your motion significantly.",
        "Yes. Where § 2004(C)(1) permits, residential substituted service may leave papers with a resident 15+ at the dwelling—Title 12 does not require a fixed number of prior personal attempts. Our affidavits document evasion patterns, which also supports due diligence for service by publication under § 2004(C)(3) if that method is needed.",
    ),
    (
        ROOT / "app/blog/what-if-process-server-cant-find-person-oklahoma/page.tsx",
        "The timeline varies. After completing due diligence attempts, filing a motion for substitute service typically takes 1–2 weeks for a hearing date. If the court grants the motion, publication in an approved newspaper runs for four consecutive weeks. The entire process from first attempt to completed alternative service usually ranges from 6–10 weeks, depending on court scheduling.",
        "The timeline varies by method. Residential substituted service under § 2004(C)(1) may be completed on a single visit where permitted. Service by publication under § 2004(C)(3) requires court approval, an affidavit of due diligence, and newspaper publication—often 6–10 weeks total depending on court scheduling.",
    ),
    (
        ROOT / "app/blog/what-if-process-server-cant-find-person-oklahoma/page.tsx",
        "personal service first. We view alternative service methods as\n              a safety net, not a primary strategy.",
        "the service method each document type requires under Title 12. Where substituted service is permitted, we may use it on the first attempt; where personal delivery is required, we pursue personal service only.",
    ),
    (
        ROOT / "app/blog/what-happens-if-someone-wont-answer-door-process-server/page.tsx",
        "'Nail and mail' is a colloquial term for posting service combined with mailing. Under Oklahoma law, after a process server has made diligent attempts to personally serve a defendant without success, they may be authorized to post the documents at the defendant's primary residence (typically taping or nailing to the door) and simultaneously mail a copy via first-class mail. This method requires court approval in most cases and must be followed by proper documentation. Nail and mail service is commonly used in eviction proceedings and civil cases where the defendant is actively evading service.",
        "'Nail and mail' is a colloquial term for posting service combined with mailing. In Oklahoma evictions, 12 O.S. § 1148.5 authorizes posting and mailing when personal service cannot be made with reasonable diligence. For other civil cases, posting generally requires court authorization—it is not the same as residential substituted service under § 2004(C)(1), which leaves papers with a resident 15+ at the dwelling where permitted. Subpoenas require personal delivery.",
    ),
    # --- service method wizard ---
    (
        ROOT / "app/(main)/oklahoma-tools/service-method-wizard/page.tsx",
        "Substituted Service (12 O.S. § 2004(C)(2))",
        "Substituted Service (12 O.S. § 2004(C)(1))",
    ),
    (
        ROOT / "app/(main)/oklahoma-tools/service-method-wizard/page.tsx",
        "Service by Certified Mail (12 O.S. § 2004(D))",
        "Service by Certified Mail (12 O.S. § 2004(C)(2))",
    ),
    (
        ROOT / "app/(main)/oklahoma-tools/service-method-wizard/page.tsx",
        "Secretary of State Service (12 O.S. § 2004(C)(1))",
        "Secretary of State Service (12 O.S. § 2004)",
    ),
    (
        ROOT / "app/(main)/oklahoma-tools/service-method-wizard/page.tsx",
        "Personal service is the gold standard here — substituted service or mail should only be used as fallback with court approval.",
        "Personal service is the gold standard here. Residential substituted service under § 2004(C)(1) may be used where permitted without court approval; publication and other court-ordered methods require judicial authorization.",
    ),
    (
        ROOT / "app/(main)/oklahoma-tools/service-method-wizard/page.tsx",
        "Substituted service allows delivery to a person of suitable age and\n            discretion residing at the defendant\\'s dwelling house or usual place of\n            abode. This method is useful when the defendant is not personally available\n            but someone else at their residence can accept service. It is not available\n            for all document types and has specific requirements that must be met.",
        "Residential substituted service under § 2004(C)(1) allows delivery to a person at least 15 years old who resides at the defendant\\'s dwelling house or usual place of abode, in some civil cases when that method is permitted. Title 12 does not prescribe a fixed number of prior personal attempts before that method. Subpoenas, government agencies, and corporations require personal delivery to specified persons.",
    ),
    # --- misc ---
    (
        ROOT / "app/process-serving-mistakes-guide/page.tsx",
        "When personal service proves impossible, Oklahoma law permits alternative service methods under 12 O.S. §2004(D). However, improper alternative service procedures frequently invalidate service and violate due process requirements.",
        "When personal delivery is not accomplished, residential substituted service under § 2004(C)(1) may apply where permitted. Service by publication and other court-ordered alternatives under § 2004(C)(3) require due diligence and court approval. Improper procedures frequently invalidate service.",
    ),
    (
        ROOT / "lib/video-data.ts",
        "When personal service isn't possible in Oklahoma, substitute service under 12 O.S. § 2004(C)(1) may be your answer. Learn how it works and when courts approve it.",
        "When personal delivery is not required or not possible in Oklahoma, residential substitute service under 12 O.S. § 2004(C)(1) may apply where permitted. Learn how it works and which documents require personal delivery only.",
    ),
    (
        ROOT / "app/blog/skip-tracing-oklahoma-guide/page.tsx",
        "If, despite a clean trace, the defendant truly cannot be located, the documented trace report supports a motion for substitute service or service by publication under 12 O.S. § 2004",
        "If, despite a clean trace, the defendant truly cannot be located, the documented trace report supports due diligence for service by publication under 12 O.S. § 2004(C)(3)",
    ),
    (
        ROOT / "app/blog/oklahoma-180-day-rule-service-process/page.tsx",
        "methods, or a motion for substituted service.",
        "methods, or residential substituted service under § 2004(C)(1) where permitted.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/oklahoma-180-day-rule-service-process/page.tsx",
        "methods, or a motion for substituted service.",
        "methods, or residential substituted service under § 2004(C)(1) where permitted.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/serving-papers-rural-oklahoma/page.tsx",
        "or a motion for substituted service if the recipient cannot be",
        "or residential substituted service under § 2004(C)(1) where permitted if the recipient cannot be",
    ),
]

fixed = 0
skipped = 0
for item in REPLACEMENTS:
    if len(item) == 4:
        path, old, new, replace_all = item
    else:
        path, old, new = item
        replace_all = False

    text = path.read_text(encoding="utf-8")
    if old not in text:
        print(f"MISSING: {path.relative_to(ROOT)} :: {old[:60]}...")
        skipped += 1
        continue
    if replace_all:
        text = text.replace(old, new)
    else:
        text = text.replace(old, new, 1)
    path.write_text(text, encoding="utf-8")
    print(f"Fixed {path.relative_to(ROOT)}")
    fixed += 1

print(f"\nPass 4 complete: {fixed} fixed, {skipped} missing.")
