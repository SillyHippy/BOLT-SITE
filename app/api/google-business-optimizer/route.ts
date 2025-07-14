import { NextRequest, NextResponse } from 'next/server';

// Google Business Profile optimization system
const businessData = {
  name: 'Just Legal Solutions',
  category: 'Process Server',
  secondaryCategories: ['Legal Services', 'Courier Service', 'Business Administration Service'],
  phone: '(539) 367-6832',
  website: 'https://justlegalsolutions.org',
  address: {
    street: 'Tulsa, OK',
    city: 'Tulsa',
    state: 'OK',
    zip: '74101'
  },
  description: 'Founded in 2025, Just Legal Solutions is a licensed process server serving Tulsa County with 24/7 emergency availability. We deliver legal documents with unmatched precision and same-day service throughout Tulsa, Broken Arrow, Owasso, and surrounding areas. Specializing in both individual and business solutions, we provide comprehensive document delivery, corporate process serving, and business administration services. Our dedication to providing exceptional service distinguishes us in the industry. For all your process serving and business solution needs, trust Just Legal Solutions to handle every case with utmost professionalism and discretion. Available 24/7 for emergency service - call (539) 367-6832.',
  services: [
    // Process Server Services
    'Process Serving',
    'Emergency Process Serving',
    'Same-Day Process Serving',
    'Subpoena Service',
    'Eviction Service',
    'Divorce Paper Service',
    
    // Legal Services
    'Legal Document Delivery',
    'Court Filing Services',
    'Legal Research Assistance',
    'Document Preparation',
    'Notary Services',
    'Legal Consultation',
    
    // Courier Services
    '24/7 Document Delivery',
    'Same-Day Document Delivery',
    'Rush Document Service',
    'Express Document Service',
    'Urgent Legal Documents',
    'Confidential Document Delivery',
    
    // Business Administration Services (aligned with Business Solutions page)
    'Business Document Filing',
    'Corporate Document Delivery',
    'Contract Delivery',
    'Business Registration Services',
    'Commercial Document Service',
    'Administrative Support',
    'Business Solutions Consulting',
    'Corporate Process Serving',
    'Business Compliance Services',
    'Executive Document Service',
    'Professional Document Management',
    'Corporate Legal Support'
  ],
  attributes: [
    'Licensed',
    'Bonded', 
    'Insured',
    'Same-day service',
    'Weekend availability',
    'Emergency service',
    'Free consultation',
    '24/7 availability',
    'Veteran-owned',
    'Locally owned',
    'Serves Tulsa County',
    'Mobile service',
    'Contactless service',
    'Accepts credit cards'
  ],
  hours: {
    monday: '00:00-23:59',
    tuesday: '00:00-23:59',
    wednesday: '00:00-23:59',
    thursday: '00:00-23:59',
    friday: '00:00-23:59',
    saturday: '00:00-23:59',
    sunday: '00:00-23:59'
  }
};

// Photo optimization recommendations
const photoStrategy = {
  required: [
    'Logo/Profile photo',
    'Cover photo showing Tulsa skyline or courthouse',
    'Team photo in professional attire',
    'Service area map highlighting Tulsa County'
  ],
  recommended: [
    'Vehicle with company branding',
    'Professional headshots',
    'Office or workspace photos',
    'Before/after document delivery photos',
    'Customer testimonial graphics',
    'Service process infographics'
  ],
  competitive: [
    'Photos showing 24/7 availability (night photos)',
    'Same-day service timeline graphics',
    'Local Tulsa landmarks in background',
    'Emergency service vehicle photos',
    'Customer service interaction photos'
  ]
};

// Review generation templates
const reviewTemplates = {
  sms: `Hi [Name], thank you for choosing Just Legal Solutions for your process serving needs! If you were satisfied with our service, would you mind leaving a quick review on Google? It helps other people in Tulsa find reliable process servers. Here's the link: [Google Review Link]

Thanks again!
Just Legal Solutions Team`,
  
  email: `Subject: Quick favor - Google review?

Hi [Name],

Thank you for choosing Just Legal Solutions for your legal document delivery needs. We hope our same-day service exceeded your expectations!

If you have a moment, we'd greatly appreciate a quick Google review. It helps other attorneys and individuals in Tulsa find reliable process servers like us.

[Leave Review Button]

Best regards,
Just Legal Solutions Team
(539) 367-6832`,

  followUp: `Hi [Name], just following up on our recent service. We'd love to hear your feedback on Google to help other legal professionals in Tulsa find quality process servers. Link: [Google Review Link]`
};

// Local SEO post templates
const postTemplates = [
  {
    type: 'offer',
    title: 'Same-Day Process Serving Available',
    description: 'Need urgent legal document delivery? We provide same-day process serving throughout Tulsa County. Call (539) 367-6832 for immediate service.',
    cta: 'Call Now'
  },
  {
    type: 'update',
    title: '24/7 Emergency Service Now Available',
    description: 'Unlike our competitors, we offer true 24/7 emergency process serving. Available weekends and holidays when others are closed.',
    cta: 'Learn More'
  },
  {
    type: 'service',
    title: 'Business Solutions for Tulsa Companies',
    description: 'Complete business administration services including corporate document delivery, contract service, and business compliance support.',
    cta: 'Get Quote'
  },
  {
    type: 'competitive',
    title: 'Why Choose Just Legal Solutions?',
    description: 'Local Tulsa business with 24/7 availability, same-day service, and personal attention. Licensed, bonded, and insured.',
    cta: 'Contact Us'
  },
  {
    type: 'tip',
    title: 'Legal Document Delivery Tips',
    description: 'Ensure your legal documents are served properly. Our licensed process servers guarantee compliant delivery.',
    cta: 'Contact Us'
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action') || 'optimize';

  if (action === 'optimize') {
    return NextResponse.json({
      businessProfile: businessData,
      photoStrategy: photoStrategy,
      reviewStrategy: {
        templates: reviewTemplates,
        targetReviews: 5,
        frequency: 'weekly',
        incentives: ['Thank you card', 'Small discount on next service']
      },
      contentStrategy: {
        posts: postTemplates,
        frequency: 'weekly',
        keywords: ['process server tulsa', 'legal document delivery', 'court papers']
      },
      localSeoTips: [
        'Post weekly updates about services',
        'Respond to all reviews within 24 hours',
        'Upload new photos monthly',
        'Use local keywords in posts',
        'Share legal tips and updates'
      ],
      competitorAnalysis: {
        yourserved: {
          strengths: ['Brand recognition', 'Multiple locations'],
          weaknesses: ['Generic service', 'Higher pricing', 'Slower response', 'Limited local focus', 'No 24/7 availability'],
          opportunities: ['Better local focus', 'Faster service', 'More personal touch', '24/7 availability advantage', 'Lower pricing'],
          attackStrategy: [
            'Emphasize 24/7 availability vs their business hours',
            'Highlight local Tulsa focus vs national chain',
            'Promote same-day service guarantee',
            'Showcase personal customer service',
            'Leverage business solutions category they likely don\'t have'
          ]
        }
      },
      keywordTargeting: {
        primary: ['process server tulsa', 'tulsa process server', 'legal document delivery tulsa'],
        secondary: ['process serving tulsa county', 'court papers served tulsa', 'subpoena service tulsa'],
        business: ['business process serving tulsa', 'corporate document delivery', 'business solutions tulsa'],
        competitive: ['yourserved alternative tulsa', 'better than yourserved', 'local process server tulsa']
      }
    });
  }

  if (action === 'posts') {
    // Generate dynamic posts
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const postIndex = dayOfWeek % postTemplates.length;
    
    return NextResponse.json({
      todaysPost: postTemplates[postIndex],
      scheduledPosts: postTemplates.map((post, index) => ({
        ...post,
        scheduledDate: new Date(currentDate.getTime() + (index * 7 * 24 * 60 * 60 * 1000)).toISOString()
      }))
    });
  }

  if (action === 'reviews') {
    return NextResponse.json({
      templates: reviewTemplates,
      strategy: {
        timing: 'Send request 2-3 days after service completion',
        followUp: 'Follow up after 1 week if no response',
        incentive: 'Offer small discount for next service',
        response: 'Respond to all reviews within 24 hours'
      },
      responseTemplates: {
        fiveStar: 'Thank you [Name]! We\'re thrilled we could help with your legal document needs. We appreciate you taking the time to share your experience!',
        fourStar: 'Thank you [Name] for your feedback! We\'re glad we could assist you. If there\'s anything we can improve, please let us know!',
        threeStar: 'Thank you for your feedback [Name]. We take all reviews seriously and would love to discuss how we can improve. Please call us at (539) 367-6832.'
      }
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { action, clientName, clientEmail, serviceType } = data;

    if (action === 'generateReview') {
      // Generate personalized review request
      const template = reviewTemplates.sms
        .replace('[Name]', clientName)
        .replace('[Google Review Link]', 'https://g.page/r/[YOUR_GOOGLE_REVIEW_ID]/review');

      return NextResponse.json({
        success: true,
        reviewRequest: template,
        followUpScheduled: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        clientData: {
          name: clientName,
          email: clientEmail,
          service: serviceType,
          requestSent: new Date().toISOString()
        }
      });
    }

    if (action === 'createPost') {
      const { postType, customContent } = data;
      const template = postTemplates.find(p => p.type === postType) || postTemplates[0];
      
      return NextResponse.json({
        success: true,
        post: {
          ...template,
          content: customContent || template.description,
          createdAt: new Date().toISOString(),
          scheduledFor: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        }
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' }, 
      { status: 500 }
    );
  }
}
