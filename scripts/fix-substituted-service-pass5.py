#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = [
    (
        ROOT / "app/blog/common-process-serving-mistakes-oklahoma/page.tsx",
        "if you need to demonstrate due diligence for substituted service.",
        "if service is challenged or you need due diligence for service by publication under § 2004(C)(3).",
        True,
    ),
    (
        ROOT / "app/blog/common-process-serving-mistakes-oklahoma/page.tsx",
        "When a defendant is not served on the first attempt and you need to demonstrate due diligence for substituted service or request a court extension, the quality of your documentation can make or break your position.",
        "When service is challenged or you need due diligence for service by publication under § 2004(C)(3), the quality of your documentation can make or break your position. Residential substituted service under § 2004(C)(1) may be used where permitted without a fixed number of prior attempts.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/common-process-serving-mistakes-oklahoma/page.tsx",
        "if you need to demonstrate due diligence for substituted service.",
        "if service is challenged or you need due diligence for service by publication under § 2004(C)(3).",
        True,
    ),
    (
        ROOT / "content/blog-queue/app/blog/common-process-serving-mistakes-oklahoma/page.tsx",
        "When a defendant is not served on the first attempt and you need to demonstrate due diligence for substituted service or request a court extension, the quality of your documentation can make or break your position.",
        "When service is challenged or you need due diligence for service by publication under § 2004(C)(3), the quality of your documentation can make or break your position. Residential substituted service under § 2004(C)(1) may be used where permitted without a fixed number of prior attempts.",
    ),
    (
        ROOT / "app/blog/process-serving-cost-guide-oklahoma/page.tsx",
        "the affidavit of non-service that you need to petition for substitute service or service by publication under 12 O.S. § 2004.",
        "the affidavit of non-service that you need for service by publication under 12 O.S. § 2004(C)(3), or to document residential substituted service under § 2004(C)(1) where permitted.",
    ),
    (
        ROOT / "app/blog/substitute-service-oklahoma/page.tsx",
        "In some situations, you need a judge&apos;s permission before using substitute service methods. This typically requires filing a <strong>motion for substituted service</strong> with the court.",
        "Court approval is required for posting (outside authorized contexts), publication, and other court-ordered methods—not for standard residential substituted service under § 2004(C)(1) where that method is permitted. Posting and similar methods typically require filing a <strong>motion for substituted service</strong> with the court.",
    ),
    (
        ROOT / "content/blog-queue/app/blog/someone-avoids-being-served-oklahoma-options/page.tsx",
        "Substituted service, also known as substituted service of process, allows legal documents to be served on someone other than the named defendant at the defendant's usual place of abode or business. Under Oklahoma law, the substituted recipient must be a person of suitable age and discretion who resides at or is employed at the location.",
        "Residential substituted service under § 2004(C)(1) allows legal documents to be left with a resident at the defendant's dwelling in some civil cases when that method is permitted. The substituted recipient must be at least 15 years old and reside at the dwelling. Subpoenas and entity or government service require personal delivery.",
    ),
    (
        ROOT / "app/gps-tracked-process-serving/page.tsx",
        "cases requiring substitute service or publication where multiple failed attempts must be documented",
        "cases requiring residential substituted service under § 2004(C)(1) where permitted, or publication under § 2004(C)(3) where due diligence must be documented",
    ),
]

for item in REPLACEMENTS:
    if len(item) == 4:
        path, old, new, replace_all = item
    else:
        path, old, new = item
        replace_all = False
    text = path.read_text(encoding="utf-8")
    if old not in text:
        raise SystemExit(f"MISSING in {path.relative_to(ROOT)}")
    text = text.replace(old, new) if replace_all else text.replace(old, new, 1)
    path.write_text(text, encoding="utf-8")
    print(f"Fixed {path.relative_to(ROOT)}")

print("Pass 5 complete.")
