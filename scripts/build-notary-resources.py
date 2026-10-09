#!/usr/bin/env python3
"""Build optional brand-free Oklahoma short-form examples from the SOS guide."""
from pathlib import Path
import fitz
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from docx import Document
from docx.shared import Inches, Pt

BASE = Path(__file__).resolve().parents[1]
GUIDE = "https://sos.ok.gov/forms/notary/NotaryPublicGuide.pdf"
OUT = BASE / "public" / "downloads"
# Exact substantive example wording in the Secretary of State's 12/2025 guide.
CERTS = [
 ("Acknowledgment — Individual Capacity", "This instrument was acknowledged before me on (date) by (name(s) of person(s))."),
 ("Acknowledgment — Representative Capacity", "This instrument was acknowledged before me on (date) by (name(s) of person(s)) as (type of authority, e.g., officer, trustee, etc.) of (name of party on behalf of whom instrument was executed)."),
 ("Verification Upon Oath or Affirmation", "Signed and sworn to (or affirmed) before me on (date) by name(s) of person(s) making statement)."),
 ("Witnessing or Attesting a Signature", "Signed or attested before me on (date) by (name(s) of (person(s))."),
 ("Attestation of a Copy", "I certify that this is a true and correct copy of a document in the possession of __________.\nDated __________"),
]
# Refuse to regenerate if the SOS source text drifts. The state's PDF is the authority.
source_pdf=Path('/root/.hermes/cache/scratch/oknotaryguide.pdf')
if source_pdf.exists():
    t=' '.join(' '.join(page.get_text().split()) for page in fitz.open(source_pdf))
    for phrase in ("This instrument was acknowledged before me on", "Signed and sworn to (or affirmed) before me on", "Signed or attested before me on", "I certify that this is a true and correct copy"):
        assert phrase in t, phrase

pdf=OUT/"JLS-OK-Notary-Short-Form-Certificates-v1.0.pdf"
c=canvas.Canvas(str(pdf),pagesize=letter);c.setTitle("Oklahoma short-form notarial certificate examples")
c.setFont('Helvetica-Bold',13);c.drawString(40,744,'Oklahoma Short-Form Notarial Certificate Examples')
c.setFont('Helvetica',9);c.drawString(40,725,'Source: Oklahoma Secretary of State Notary Public Guide (12/2025). Confirm current requirements before use.')
y=695
for title,text in CERTS:
    if y<175:c.showPage();y=747
    c.setFont('Helvetica-Bold',10);c.drawString(40,y,title);y-=19
    c.setFont('Helvetica',9);c.drawString(40,y,'State of __________     County of __________');y-=17
    # Wrap only, don't change any certificate wording.
    for paragraph in text.split('\n'):
        words=paragraph.split();line=''
        for word in words:
            candidate=(line+' '+word).strip()
            if c.stringWidth(candidate,'Helvetica',9)>515 and line:
                c.drawString(40,y,line);y-=15;line=word
            else:line=candidate
        if line:c.drawString(40,y,line);y-=15
    for entry in ['Signature of notarial officer: ___________________________________',
                  'Seal (if any): ___________   Title (and Rank): ___________________',
                  'My commission expires: ___________   My commission #: ___________']:
        c.drawString(40,y,entry);y-=15
    y-=23
c.save()
doc=Document();sec=doc.sections[0];sec.top_margin=sec.bottom_margin=Inches(.5);sec.left_margin=sec.right_margin=Inches(.65)
normal=doc.styles['Normal'];normal.font.name='Times New Roman';normal.font.size=Pt(10)
doc.add_heading('Oklahoma Short-Form Notarial Certificate Examples',0)
doc.add_paragraph('Source: Oklahoma Secretary of State Notary Public Guide (12/2025). Confirm current requirements before use. '+GUIDE)
for title,text in CERTS:
    doc.add_heading(title,level=2)
    doc.add_paragraph('State of __________     County of __________')
    doc.add_paragraph(text)
    doc.add_paragraph('Signature of notarial officer: ________________________________\nSeal (if any): _______    Title (and Rank): ______________\nMy commission expires: __________   My commission #: __________')
doc.save(OUT/"JLS-OK-Notary-Short-Form-Certificates-v1.0.docx")

journal=OUT/"JLS-OK-Recommended-Notary-Journal-Page-v1.0.pdf"
c=canvas.Canvas(str(journal),pagesize=letter);c.setTitle('Oklahoma Recommended Notary Journal Page')
c.setFont('Helvetica-Bold',13);c.drawString(40,749,'Oklahoma Recommended Notary Journal Page')
c.setFont('Helvetica',9);c.drawString(40,730,'Traditional acts: journal recommended by SOS; remote online notarizations: electronic journal required.')
c.drawString(40,715,'Source: SOS Notary Public Guide (12/2025). This blank page is not a RON recording system.')
y=683
for idx in range(2):
    c.setFont('Helvetica-Bold',10);c.drawString(40,y,f'Notarial Act {idx+1}');y-=20
    for field in ['Date & time:','Type of act:','Document description:','Signer printed name and address:','Signer signature:','ID method / personally known:','Location (city and county):','Fee charged, if any:','Personal notes:']:
        c.setFont('Helvetica',9);c.drawString(40,y,field)
        start=max(230,48+c.stringWidth(field,'Helvetica',9));c.line(start,y-2,564,y-2);y-=22
    y-=20
c.save()
d=Document();sec=d.sections[0];sec.top_margin=sec.bottom_margin=Inches(.5)
d.add_heading('Oklahoma Recommended Notary Journal Page',0)
d.add_paragraph('Traditional acts: journal recommended by SOS; RON requires a permanent tamper-evident electronic journal and audiovisual records. Source: '+GUIDE)
for idx in range(2):
    d.add_heading(f'Notarial Act {idx+1}',level=2)
    for label in ['Date & time','Type of act','Document description','Signer printed name and address','Signer signature','ID method / personally known','Location (city and county)','Fee charged, if any','Personal notes']:
        d.add_paragraph(label+': '+ '_'*42)
d.save(OUT/"JLS-OK-Recommended-Notary-Journal-Page-v1.0.docx")
print('Created 4 Oklahoma resources')
