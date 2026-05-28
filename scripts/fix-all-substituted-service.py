#!/usr/bin/env python3
"""Fix substituted-service language site-wide."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

SCAN_DIRS = [
    ROOT / "app",
    ROOT / "content",
    ROOT / "lib",
    ROOT / "public",
]
SCAN_FILES = [
    ROOT / "llms.txt",
    ROOT / "public" / "llms.txt",
    ROOT / "public" / ".well-known" / "llms.txt",
]

EXTENSIONS = {".tsx", ".ts", ".md", ".txt", ".jsonld"}

COUNTY_SUBSTITUTED = (
    "Under **12 O.S. § 2004(C)(1)**, residential substituted service is permitted in "
    "**some civil cases** by leaving copies at the defendant's **dwelling house or usual "
    "place of abode** with a person **15 years of age or older** who resides there, when "
    "that method is allowed by law. Title 12 does not prescribe a fixed number of prior "
    "personal attempts before that method. Subpoenas, government agencies, and corporations "
    "require personal service on specified persons—not residential sub-service."
)

# (old, new) pairs applied to every scanned file where old is found
GLOBAL_REPLACEMENTS: list[tuple[str, str]] = [
    (
        "Under 12 O.S. § 2004(C)(2), you may perform substituted service by leaving papers with a co-resident who is at least 15 years old at the defendant's dwelling house or usual place of abode.",
        "Under 12 O.S. § 2004(C)(1), residential substituted service may be used in some civil cases by leaving papers with a co-resident who is at least 15 years old at the defendant's dwelling house or usual place of abode, when that method is allowed. Subpoenas, government agencies, and corporations require personal delivery to specified persons.",
    ),
    (
        "Due diligence typically means multiple attempts at different times and days before resorting to substituted service. Courts expect to see a genuine effort to achieve personal service before approving substituted methods. Simply making one attempt and then leaving papers with a roommate or family member may not satisfy this requirement.",
        "Under 12 O.S. § 2004(C)(1), residential substituted service is permitted in some civil cases at a dwelling with a resident 15 or older when that method is allowed. Title 12 does not prescribe a fixed number of prior personal attempts before that method. Courts may scrutinize whether service was reasonable. Service by publication under § 2004(C)(3) requires proof of due diligence to the court. Subpoenas and certain government or corporate service require personal delivery only.",
    ),
    (
        "When personal service is not possible after diligent attempts, substitute service may be made by leaving copies at the person's dwelling house or usual place of abode with a person 15 years of age or older who resides there.",
        COUNTY_SUBSTITUTED.replace("**", "").replace("—", "-"),
    ),
    (
        "When personal service proves difficult, Oklahoma law permits substituted service by leaving copies at the defendant's **dwelling house or usual place of abode** with a person **15 years of age or older** who resides there.",
        COUNTY_SUBSTITUTED,
    ),
    (
        "When personal delivery is not possible, Oklahoma law permits substituted service by leaving copies at the defendant's **dwelling house or usual place of abode** with a person **15 years of age or older** residing at the location, or by delivering to an authorized agent designated to receive service.",
        COUNTY_SUBSTITUTED + " Authorized agents may accept service only where the statute allows.",
    ),
    (
        "We make multiple attempts at different times and days. If necessary, we can pursue substituted service or publication with court approval.",
        "We document every attempt with GPS logs. Where permitted under 12 O.S. § 2004(C)(1), we may use residential substituted service; subpoenas and entity or government service require personal delivery. Service by publication under § 2004(C)(3) requires court approval and proof of due diligence.",
    ),
    (
        'Standard service uses what we call "reasonable diligence" pacing. Your server makes multiple personal attempts before considering substituted service under 12 O.S. § 2004(C)(1). That statute requires reasonable diligence before leaving documents with a person 15 years or older at the defendant\'s dwelling. Standard service gives your server the breathing room to build that attempt record properly.',
        'Standard service documents each attempt with GPS logs. Under 12 O.S. § 2004(C)(1), residential substituted service is permitted in some civil cases at a dwelling with a resident 15 or older when allowed by law; Title 12 does not prescribe a fixed number of prior personal attempts before that method. Service by publication under § 2004(C)(3) requires proof of due diligence to the court.',
    ),
    (
        "This method requires that the server first make reasonable efforts to serve the defendant personally before resorting to substituted service.",
        "Title 12 does not prescribe a fixed number of prior personal attempts before residential substituted service under § 2004(C)(1)(c)(1). Subpoenas, government agencies, and corporations require personal delivery to specified persons.",
    ),
    (
        "the server must also mail a copy to the defendant's address. Our team at Just Legal Solutions follows all Oklahoma statutes precisely when executing substituted service.",
        "Additional mailing is required only where Oklahoma statutes or a court order expressly require it. Just Legal Solutions follows the service method each document type requires.",
    ),
    (
        "If you can't serve the defendant personally, Oklahoma allows substituted service on a person of suitable age and discretion (15 or older) who resides at the defendant's dwelling.",
        "Where permitted under 12 O.S. § 2004(C)(1), Oklahoma allows residential substituted service by leaving copies with a person at least 15 years old who resides at the defendant's dwelling. Subpoenas and entity or government service require personal delivery to specified persons.",
    ),
    (
        "A: Personal service means handing documents directly to the named person. Substitute service means leaving documents with another adult at the person's home or workplace when the person cannot be found after multiple attempts. Just Legal Solutions attempts personal service first and can pursue substitute service with court approval if needed.",
        "A: Personal service means handing documents directly to the named person. Under 12 O.S. § 2004(C)(1), residential substitute (abode) service is permitted in some civil cases by leaving copies with a resident 15 or older at the dwelling, when that method is allowed. Title 12 does not require a fixed number of prior personal attempts before that method. Subpoenas, government agencies, and corporations require personal delivery to specified persons. Just Legal Solutions follows the method each document type requires.",
    ),
    (
        "Description: When personal service isn't possible in Oklahoma, substitute service under 12 O.S. § 2004(C)(1) may be your answer.",
        "Description: Under 12 O.S. § 2004(C)(1), residential substitute service is permitted in some Oklahoma civil cases when allowed by law; subpoenas and certain government or corporate service require personal delivery only.",
    ),
    (
        "When personal service isn't possible in Oklahoma, substitute service under 12 O.S. § 2004(C)(1) may be your answer. Learn how it works and when courts approve it.",
        "Under 12 O.S. § 2004(C)(1), residential substitute service is permitted in some Oklahoma civil cases when allowed by law. Subpoenas and certain government or corporate service require personal delivery only.",
    ),
    (
        "Animated story-driven short explaining what substitute service means in Oklahoma and when courts allow alternatives to personal service.",
        "Animated short on Oklahoma residential substitute service under 12 O.S. § 2004(C)(1)—when abode service is allowed, and when personal delivery is required instead.",
    ),
    (
        "What substitute service means in Oklahoma and when courts may allow alternatives to personal service.",
        "What residential substitute service means under 12 O.S. § 2004(C)(1) in Oklahoma, and which documents require personal delivery only.",
    ),
    (
        "When substitute service is allowed under 12 O.S. \u00A7 2004(c), abode service, posting, and judicial approval.",
        "Residential substitute service under 12 O.S. § 2004(C)(1), document-type limits, abode service, posting, and judicial approval.",
    ),
]

FILE_REPLACEMENTS: dict[str, list[tuple[str, str]]] = {
    "app/what-happens-if-someone-refuses-service/page.tsx": [
        (
            'answer: "Hiding or refusing to answer the door is different from refusing papers face-to-face. If the person avoids answering, the process server will make multiple attempts at different times of day. If personal service proves impossible, Oklahoma law allows substitute service (leaving papers with a person 15+ at the residence, then mailing a copy) or, as a last resort, service by publication. Evasion ultimately cannot prevent service."',
            'answer: "Hiding or refusing to answer the door is different from refusing papers face-to-face. Where permitted under 12 O.S. § 2004(C)(1), residential substitute service may leave papers with a person 15+ at the dwelling when that method is allowed. Title 12 does not prescribe a fixed number of prior personal attempts before that method. Subpoenas and certain government or corporate service require personal delivery only. Service by publication under § 2004(C)(3) is a last resort requiring court approval and due diligence. Evasion ultimately cannot prevent lawful service."',
        ),
        (
            "{ tactic: '🚪 Refusing to Open the Door', result: 'Server returns at different times (evenings, weekends). After multiple attempts, substitute service or service at workplace is authorized.' }",
            "{ tactic: '🚪 Refusing to Open the Door', result: 'Server may use residential substitute service under § 2004(C)(1) where permitted, or personal service when required. Subpoenas and entity or government service need personal delivery to specified persons.' }",
        ),
        (
            '<p className="text-sm text-gray-700">Leave papers with person 15+ at the residence, then mail a copy. Valid under 12 O.S. § 2004(C)(2).</p>',
            '<p className="text-sm text-gray-700">Where permitted under 12 O.S. § 2004(C)(1), leave papers with a person 15+ who resides at the dwelling. Not available for subpoenas, government agencies, or corporations. Additional mailing only if a statute or court order requires it.</p>',
        ),
    ],
    "app/blog/common-process-serving-mistakes-oklahoma/page.tsx": [
        (
            "Oklahoma 12 O.S. 2004.1 governs substituted service, which allows service to be completed by leaving copies at the defendant's dwelling with a person of suitable age and discretion when personal service cannot be achieved. This statute exists as an alternative to personal service, but it comes with strict requirements that must be followed precisely. Attempting substituted service without first demonstrating due diligence in trying personal service is a serious mistake.",
            "12 O.S. § 2004(C)(1) governs residential substituted service in some civil cases—leaving copies at the defendant's dwelling with a person at least 15 years old who resides there, when that method is allowed. A serious mistake is using residential sub-service for document types that require personal delivery (subpoenas, government agencies, corporations) or assuming a fixed number of prior personal attempts is always required by statute.",
        ),
        (
            "Understanding Oklahoma's process server laws regarding substituted service is essential for both servers and the attorneys or litigants who hire them. An experienced, knowledgeable server will know when substituted service is appropriate and how to document the due diligence that supports it.",
            "Understanding Oklahoma's process server laws regarding substituted service is essential. An experienced server knows which documents permit residential substituted service, which require personal delivery only, and how to document service properly. See our Oklahoma Process Server Laws guide at /oklahoma-process-server-laws.",
        ),
    ],
    "app/blog/process-serving-hoa-oklahoma/page.tsx": [
        (
            "When personal service is not possible after diligent attempts, substitute service may be made by leaving copies at the person's dwelling house or usual place of abode with a person 15 years of age or older who resides there.",
            "Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave copies at the person's dwelling with a person 15 years of age or older who resides there. Title 12 does not prescribe a fixed number of prior personal attempts before that method. Subpoenas and entity or government service require personal delivery.",
        ),
        (
            "Service of process must comply with 12 O.S. §2004, requiring personal delivery or substitute service at the owner's dwelling.",
            "Service of process must comply with 12 O.S. §2004—personal delivery where required, or residential substituted service under § 2004(C)(1) only where permitted for that document type.",
        ),
        (
            "Individual homeowners require personal service or substitute service at their dwelling house.",
            "Individual homeowners may receive personal delivery or, where permitted under § 2004(C)(1), residential substituted service at their dwelling.",
        ),
    ],
    "app/blog/january-process-serving-spike-oklahoma/page.tsx": [
        (
            'answer: "If personal service fails after diligent attempts, Oklahoma law provides alternative service methods including substituted service (leaving documents with someone at the residence who is at least 15 years old), certified mail with return receipt, or posting at the residence entrance. As a last resort, the court may authorize service by publication in a newspaper. An experienced process server documents all attempts, which supports a motion for alternative service if needed."',
            'answer: "Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave documents with a resident at least 15 years old at the dwelling. Title 12 does not prescribe a fixed number of prior personal attempts before that method. Subpoenas and entity or government service require personal delivery. Certified mail, posting (where authorized), and service by publication under § 2004(C)(3) are separate methods with their own rules. An experienced process server documents every attempt and follows the method each document type requires."',
        ),
    ],
    "app/blog/can-you-avoid-being-served-oklahoma/page.tsx": [
        (
            'answer: "If you hide from a process server, they will typically make multiple attempts at different times and days. If personal service proves impossible, the plaintiff can request court authorization for alternative service methods such as substituted service (leaving papers with a co-resident) or service by publication (newspaper notice). The case proceeds regardless."',
            'answer: "If you hide from a process server, lawful service can still occur. Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave papers with a co-resident 15 or older at the dwelling. Subpoenas and certain government or corporate service require personal delivery only. Service by publication under § 2004(C)(3) requires court approval and due diligence. The case proceeds regardless."',
        ),
    ],
    "app/blog/can-you-refuse-service-process-server-oklahoma/page.tsx": [
        (
            "if a process server cannot achieve personal service after diligent attempts, the court can authorize alternative service methods such as substituted service, nail-and-mail (posting and mailing), or service by publication in a newspaper.",
            "where permitted under 12 O.S. § 2004(C)(1), residential substituted service may be used in some civil cases; nail-and-mail or posting may apply in specific contexts such as evictions when authorized; service by publication under § 2004(C)(3) requires court approval and due diligence. Subpoenas and certain government or corporate service require personal delivery only",
        ),
    ],
    "app/blog/what-happens-if-someone-wont-answer-door-process-server/page.tsx": [
        (
            'answer: "If a defendant refuses to answer the door, the process server will typically make multiple attempts at different times of day and on different days. After several unsuccessful attempts, the server can pursue alternative methods including substitute service (leaving documents with a responsible adult at the residence), nail and mail (posting and mailing), or the plaintiff can petition the court for alternative service authorization. At Just Legal Solutions, our Triple-Attempt Package (our triple-attempt rate) is specifically designed for these situations, using strategic timing and surveillance techniques to catch evasive defendants."',
            'answer: "If a defendant refuses to answer the door, the server documents each visit. Where permitted under 12 O.S. § 2004(C)(1), residential substitute service may leave documents with a resident 15+ at the dwelling—Title 12 does not prescribe a fixed number of prior personal attempts before that method. Posting or nail-and-mail may apply in specific contexts when authorized by statute. Subpoenas require personal delivery. Just Legal Solutions follows the method each document type requires and uses strategic timing to maximize lawful service."',
        ),
        (
            "If all attempts fail, we work with clients to pursue substitute service, court-authorized alternative service, or stakeout operations.",
            "If personal delivery is not accomplished, we use residential substituted service where § 2004(C)(1) permits it, pursue court-authorized publication when due diligence supports it, or continue personal service where the law requires it",
        ),
    ],
    "app/blog/questions-to-ask-before-hiring-process-server/page.tsx": [
        (
            "If personal service is unsuccessful after multiple attempts, your process server should document each attempt thoroughly. Depending on your court's approval, alternative service methods may include substituted service on a household member, service by certified mail, or in some cases, publication.",
            "Your process server should document each attempt thoroughly and follow the service method Oklahoma law requires for your document type. Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave papers with a household member 15+ at the dwelling. Subpoenas and entity or government service require personal delivery. Service by publication under § 2004(C)(3) requires court approval and due diligence",
        ),
    ],
    "app/blog/handling-evasive-defendants-oklahoma/page.tsx": [
        (
            '<strong>When a defendant avoids service in Oklahoma, you must demonstrate "due diligence" under 12 O.S. § 2004 before pursuing alternative methods.</strong> This includes multiple service attempts at various times, professional skip tracing, thorough documentation, and potentially stakeout operations. If personal service remains impossible, courts may authorize substituted service or service by publication.',
            '<strong>When a defendant avoids service in Oklahoma, document every attempt.</strong> Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may be used in some civil cases at a dwelling with a resident 15+—Title 12 does not prescribe a fixed number of prior personal attempts before that method. Service by publication under § 2004(C)(3) requires proof of due diligence to the court. Subpoenas and entity or government service require personal delivery only.',
        ),
    ],
    "app/blog/how-process-servers-handle-difficult-evasive-defendants/page.tsx": [
        (
            "If all reasonable attempts at personal service fail, the process server will provide detailed documentation of every attempt, including dates, times, locations, and descriptions of what occurred. This affidavit can be used to support a motion for alternative service methods, such as substituted service on a resident adult, service by certified mail, or in some cases, service by publication in a newspaper of general circulation. The court must approve these alternative methods before they can be used.",
            "The process server documents every attempt with dates, times, locations, and GPS evidence. Where permitted under 12 O.S. § 2004(C)(1), residential substituted service may leave papers with a resident adult 15+ at the dwelling. Subpoenas and entity or government service require personal delivery. Service by publication under § 2004(C)(3) and other alternative methods require court approval and due diligence where applicable.",
        ),
    ],
    "app/blog/how-to-serve-eviction-notices-in-oklahoma/page.tsx": [
        (
            '"Attempt personal service first. If unavailable, leave with a resident 12+ (Title 41) or 15+ (FED), then mail a copy the same day."',
            '"Use the method the document requires: Title 41 notices may allow substitute service on a family member 12+ or posting plus mailing; FED summons under Title 12 generally require personal service or substitute service on a resident 15+ at the dwelling when permitted, with posting-and-mailing only where 12 O.S. § 1148.5 or § 1148.5A authorize it."',
        ),
    ],
    "app/blog/what-if-process-server-cant-find-person-oklahoma/page.tsx": [
        (
            '"At Just Legal Solutions, we typically make three attempts at different times and days before recommending alternative service methods. Under Oklahoma law, there is no fixed statutory number of attempts required before seeking substitute service, but courts generally expect reasonable diligence—which we document meticulously with date-stamped photos, GPS logs, and detailed affidavits of every attempt."',
            '"Under Oklahoma law, Title 12 does not prescribe a fixed number of prior personal attempts before residential substituted service under § 2004(C)(1)(c)(1). Service by publication under § 2004(C)(3) requires proof of due diligence to the court. Just Legal Solutions documents every attempt with date-stamped photos, GPS logs, and detailed affidavits, and follows the service method each document type requires."',
        ),
    ],
    "app/(main)/ultimate-guide-process-serving-oklahoma/page.tsx": [
        (
            '<strong>Substituted service</strong> is used when personal service cannot be achieved after reasonable diligence. Oklahoma allows substituted service by: leaving documents with a <strong>person 15 years of age or older who resides at the defendant&apos;s dwelling or usual place of abode</strong> (per 12 O.S. § 2004), leaving papers with someone in charge at the defendant&apos;s workplace, posting in a conspicuous place if authorized by court order, service by certified mail (in specific circumstances), and publication in newspaper (last resort). <strong>Note:</strong> Oklahoma law does not require a fixed number of attempts before using residential substituted service. Multiple attempts at different times and days are a common best practice to demonstrate diligence, but not a statutory mandate for this method. Court orders can authorize alternative service methods.',
            '<strong>Residential substituted service</strong> under 12 O.S. § 2004(C)(1) is permitted in some civil cases by leaving documents with a <strong>person 15 years of age or older who resides at the defendant&apos;s dwelling or usual place of abode</strong>, when that method is allowed. <strong>Subpoenas, government agencies, and corporations require personal delivery to specified persons—not residential sub-service.</strong> Title 12 does not require a fixed number of prior personal attempts before residential substituted service. Service by certified mail, posting (when authorized), and publication under § 2004(C)(3) are separate methods with their own requirements.',
        ),
    ],
    "app/oklahoma-process-server-faq/page.tsx": [
        (
            "'ai-summary': 'Oklahoma process server FAQ for 2026: Process serving costs $35-$265 in Oklahoma depending on complexity. Servers must be 18+, licensed, and bonded ($5,000). Service includes personal delivery or substituted service on residents 15+. Just Legal Solutions serves all 77 Oklahoma counties.'",
            "'ai-summary': 'Oklahoma process server FAQ for 2026: Process serving costs $35-$265. Servers must be 18+, licensed, bonded ($5,000). Residential substituted service under § 2004(C)(1) permitted in some civil cases with resident 15+; subpoenas and entity/government service require personal delivery. Just Legal Solutions serves all 77 Oklahoma counties.'",
        ),
        (
            '"text": "Substituted service may be made at the defendant\'s dwelling house or usual place of abode with some person residing therein who is at least 15 years of age, per 12 O.S. § 2004(C)(1)(c)(i)."',
            '"text": "Under 12 O.S. § 2004(C)(1), residential substituted service may be made at the dwelling with a person at least 15 years of age who resides there, when that method is allowed. Subpoenas, government agencies, and corporations require personal delivery to specified persons. Title 12 does not prescribe a fixed number of prior personal attempts before residential substituted service."',
        ),
        (
            '"Substituted Service (12 O.S. § 2004(C)(1)(c)(i)): Service at the dwelling with a resident at least 15 years of age."',
            '"Substituted Service (12 O.S. § 2004(C)(1)): Where permitted, service at the dwelling with a resident at least 15 years of age. Not available for subpoenas, government agencies, or corporations."',
        ),
        (
            '"Substituted Service: Service on a resident member of the household at least 15 years old."',
            '"Substituted Service: Where § 2004(C)(1) permits, service on a household resident at least 15 years old. Personal delivery required for subpoenas and most entity/government service."',
        ),
    ],
    "app/resources/process-server-field-sheet-template/page.tsx": [
        (
            "Comprehensive records demonstrate the reasonable efforts required for substituted service.",
            "Comprehensive records document each attempt and support service by publication under § 2004(C)(3) when due diligence is required; Title 12 does not prescribe a fixed number of prior attempts before residential substituted service under § 2004(C)(1).",
        ),
    ],
    "app/resources/oklahoma-eviction-timeline/page.tsx": [
        (
            "solution: 'Professional servers know legal methods for substituted service when tenants evade.',",
            "solution: 'Professional servers follow the method each eviction document requires—personal, substitute residential, or posting-and-mailing only where Oklahoma statutes authorize it.',",
        ),
    ],
    "app/rush-vs-standard-vs-same-day-service/page.tsx": [
        (
            "This is especially helpful if opposing counsel questions whether diligent attempts were made before seeking substitute service or publication under Oklahoma rules.",
            "This is especially helpful if opposing counsel questions diligence for service by publication under § 2004(C)(3); Title 12 does not prescribe a fixed number of prior attempts before residential substituted service under § 2004(C)(1).",
        ),
    ],
    "content/blog-queue/app/blog/do-process-servers-call-before-serving/page.tsx": [
        (
            "If personal service cannot be completed after diligent attempts, a process server may leave the documents with a person of suitable age and discretion who resides at the same dwelling.",
            "Where permitted under 12 O.S. § 2004(C)(1), a process server may leave documents with a person at least 15 years old who resides at the dwelling",
        ),
    ],
    "content/blog-queue/app/blog/gps-tracking-revolutionizes-process-serving-accountability-oklahoma/page.tsx": [
        (
            "the attorney must demonstrate to the court that diligent efforts were made before requesting substituted service or service by publication.",
            "the attorney must demonstrate due diligence to the court before requesting service by publication under § 2004(C)(3). GPS logs also document residential substituted service where § 2004(C)(1) permits it",
        ),
    ],
    "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx": [
        (
            "Before a process server attempts substituted service — leaving papers with someone at the defendant&rsquo;s dwelling — a PI can verify who actually lives at the address.",
            "Before residential substituted service under § 2004(C)(1)—leaving papers with someone at the defendant&rsquo;s dwelling when that method is permitted—a PI can verify who actually lives at the address.",
        ),
    ],
    "content/blog-queue/app/blog/someone-avoids-being-served-oklahoma-options/page.tsx": [
        (
            "At Just Legal Solutions, our standard protocol includes at least three to five attempts at different times of day and on different days of the week before escalating to alternative methods. Oklahoma law does not specify a fixed number of attempts required before pursuing substituted service, but courts generally expect reasonable diligence.",
            "Just Legal Solutions documents every attempt with GPS logs. Oklahoma law does not specify a fixed number of prior personal attempts before residential substituted service under § 2004(C)(1). Service by publication under § 2004(C)(3) requires proof of due diligence to the court.",
        ),
    ],
    "content/blog-queue/app/blog/rush-vs-standard-vs-same-day-service-level-case-needs-oklahoma/page.tsx": [
        (
            "If you know the defendant is evasive and you'll likely need to move for substituted service, you need multiple documented attempts in a short timeframe. Rush service accelerates that attempt record, giving you the documentation you need to support a motion for substituted service well before the 180-day deadline.",
            "If you need documentation for service by publication under § 2004(C)(3), rush service accelerates the attempt record courts expect for due diligence. Residential substituted service under § 2004(C)(1) does not require a fixed number of prior attempts by statute.",
        ),
    ],
    "content/blog-queue/app/blog/how-to-serve-legal-papers-oklahoma-step-by-step/page.tsx": [
        (
            "If personal service remains impossible after diligent effort, you may petition the court for alternative service methods such as substituted service, certified mail, or publication. Oklahoma courts require documented proof of diligent attempts before granting alternative service.",
            "Where permitted under § 2004(C)(1), residential substituted service may be used in some civil cases. Service by publication under § 2004(C)(3) requires court approval and proof of due diligence. Subpoenas and entity or government service require personal delivery.",
        ),
    ],
    "content/blog-queue/app/blog/construction-litigation-process-serving-mechanics-liens-oklahoma/page.tsx": [
        (
            "before a motion for substituted service can be pursued.",
            "before a motion for alternative entity service (such as Secretary of State service) can be pursued—residential substituted service under § 2004(C)(1) is a separate method with no fixed prior-attempt requirement.",
        ),
    ],
    "content/blog-queue/app/blog/what-to-expect-hiring-process-server-client-faq-oklahoma/page.tsx": [
        (
            "you may perform substituted service by leaving papers with a co-resident who is at least 15 years old at the defendant's dwelling house or usual place of abode. Service by publication is another option",
            "residential substituted service under § 2004(C)(1) may leave papers with a co-resident at least 15 years old at the dwelling when that method is allowed; subpoenas and entity or government service require personal delivery. Service by publication under § 2004(C)(3) is another option",
        ),
    ],
}


def iter_files():
    seen: set[Path] = set()
    for d in SCAN_DIRS:
        if not d.exists():
            continue
        for p in d.rglob("*"):
            if p.suffix.lower() in EXTENSIONS and p.is_file():
                seen.add(p.resolve())
                yield p
    for p in SCAN_FILES:
        if p.exists():
            rp = p.resolve()
            if rp not in seen:
                yield p


def apply_replacements(path: Path, text: str) -> tuple[str, int]:
    count = 0
    rel = str(path.relative_to(ROOT)).replace("\\", "/")
    pairs = list(GLOBAL_REPLACEMENTS)
    if rel in FILE_REPLACEMENTS:
        pairs = FILE_REPLACEMENTS[rel] + pairs
    for old, new in pairs:
        if old in text:
            text = text.replace(old, new)
            count += 1
    return text, count


def main() -> None:
    total_files = 0
    total_repls = 0
    changed: list[str] = []

    for path in iter_files():
        try:
            original = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        updated, n = apply_replacements(path, original)
        if n:
            path.write_text(updated, encoding="utf-8")
            total_files += 1
            total_repls += n
            changed.append(str(path.relative_to(ROOT)))

    print(f"Updated {total_files} files ({total_repls} replacements)")
    for c in sorted(changed):
        print(f"  - {c}")


if __name__ == "__main__":
    main()
