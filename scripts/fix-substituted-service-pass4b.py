#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEC = r"(?:§|\u00a7|\ufffd)"

fixes = [
    (
        ROOT / "content/blog-queue/app/blog/private-investigators-collaborate-process-servers-oklahoma/page.tsx",
        re.compile(
            r"This evidence supports motions for substituted service under 12 O\.S\. "
            + SEC
            + r" 2004\(C\)\(1\)\(c\)\(2\) or, in extreme cases, service by publication under 12 O\.S\. "
            + SEC
            + r" 2004\(C\)\(3\)\. The PI\\'s documentation strengthens the affidavit needed for court approval\."
        ),
        "This evidence supports residential substituted service under 12 O.S. § 2004(C)(1) where permitted, or an affidavit of due diligence for service by publication under 12 O.S. § 2004(C)(3), which requires court approval.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/process-serving-debt-collection-agencies-oklahoma/page.tsx",
        re.compile(
            r"\(2\) substituted service by leaving copies at the defendant\\'s dwelling with a person 15\+ years old who resides there;"
        ),
        "(2) residential substituted service under § 2004(C)(1) by leaving copies at the defendant\\'s dwelling with a person 15+ who resides there, when that method is allowed (not for all document types);",
    ),
    (
        ROOT / "content/blog-queue/app/blog/enforcing-out-of-state-custody-orders-service-process-oklahoma/page.tsx",
        re.compile(
            r"typically personal delivery, substituted service on a person 15 or older at the respondent\\'s dwelling, or in some cases certified mail\."
        ),
        "personal delivery where required, residential substituted service under § 2004(C)(1) on a person 15 or older at the respondent\\'s dwelling when permitted, or certified mail where authorized.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/process-serving-rural-oklahoma-challenges-solutions/page.tsx",
        re.compile(
            r"Under 12 O\.S\. " + SEC + r" 2004\(C\)\(1\)\(c\)\(2\), substituted service requires leaving copies at the defendant\\'s dwelling"
        ),
        "Under 12 O.S. § 2004(C)(1), residential substituted service—where permitted—requires leaving copies at the defendant\\'s dwelling",
    ),
    (
        ROOT / "content/blog-queue/app/blog/process-serving-federal-courts-oklahoma/page.tsx",
        re.compile(
            r"This means Oklahoma\\'s substituted service methods — such as leaving copies at the defendant\\'s dwelling with a person 15 years or older who resides there — may be used in federal court\."
        ),
        "This means Oklahoma\\'s residential substituted service under § 2004(C)(1)—leaving copies at the defendant\\'s dwelling with a person 15 years or older who resides there, when permitted for that document type—may be used in federal court.",
    ),
    (
        ROOT / "lib/video-data.ts",
        re.compile(
            r"When personal service isn\\'t possible in Oklahoma, substitute service under 12 O\.S\. "
            + SEC
            + r" 2004\(C\)\(1\) may be your answer\. Learn how it works and when courts approve it\."
        ),
        "When personal delivery is not required or not possible in Oklahoma, residential substitute service under 12 O.S. § 2004(C)(1) may apply where permitted. Learn how it works and which documents require personal delivery only.",
    ),
]

for path, pattern, repl in fixes:
    text = path.read_text(encoding="utf-8")
    new_text, n = pattern.subn(repl, text, count=1)
    if n == 0:
        print(f"SKIP (already fixed or missing): {path.relative_to(ROOT)}")
        continue
    path.write_text(new_text, encoding="utf-8")
    print(f"Fixed {path.relative_to(ROOT)}")

p = ROOT / "content/blog-queue/app/blog/someone-avoids-being-served-oklahoma-options/page.tsx"
text = p.read_text(encoding="utf-8")

old1 = """            For substituted service to be valid in Oklahoma, several conditions
            must be met. The server must first have made reasonable attempts to
            serve the defendant personally. The substituted recipient must be
            someone who resides at the defendant's dwelling or works at the
            defendant's place of employment. The recipient must be of "suitable
            age and discretion," which generally means an adult who understands
            the significance of accepting legal documents."""

new1 = """            For residential substituted service under § 2004(C)(1) to be valid in Oklahoma, several conditions must be met where that method is permitted. Title 12 does not prescribe a fixed number of prior personal attempts before that method. The substituted recipient must be someone who resides at the defendant's dwelling and is at least 15 years old. Subpoenas and entity or government service require personal delivery—not residential sub-service. The recipient must understand the significance of accepting legal documents."""

old2 = """            Serving a defendant at their workplace through a supervisor, human
            resources representative, or coworker is also valid under Oklahoma
            law, though it requires sensitivity."""

new2 = """            Workplace service generally requires personal delivery to the defendant or service on an authorized agent as the statute requires for that document type—not residential sub-service at a home address. Workplace attempts require sensitivity."""

for old, new, label in [(old1, new1, "para1"), (old2, new2, "para2")]:
    if old not in text:
        print(f"SKIP someone-avoids {label}")
        continue
    text = text.replace(old, new)
    print(f"Fixed someone-avoids {label}")

p.write_text(text, encoding="utf-8")
print("Pass 4b complete.")
