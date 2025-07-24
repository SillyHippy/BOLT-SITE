'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLd from '../JsonLd'; 
import defaultFaqs from '@/data/default-faqs.json';
// Import useState and useEffect from React to control client-side rendering
import { useState, useEffect } from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface EnhancedFaqSchemaProps {
  faqs?: Faq[];
  pageTitle?: string; 
}

export default function EnhancedFaqSchema