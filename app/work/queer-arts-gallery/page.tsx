import type { Metadata } from 'next';
import CaseStudy, { type CaseStudyData } from '@/components/CaseStudy';

export const metadata: Metadata = { title: 'Queer Arts Gallery — Alyse Cho' };

const data: CaseStudyData = {
  title: 'Queer Arts Gallery',
  tagline: 'A visual identity as vibrant as the community it serves.',
  tags: [
    { label: 'Branding', variant: 'orange' },
    { label: 'Web', variant: 'teal' },
    { label: '2024', variant: 'outline' },
  ],
  meta: [
    { label: 'Role', value: 'Product & Brand Designer' },
    { label: 'Timeline', value: '8 weeks' },
    { label: 'Client', value: 'Queer Arts Collective' },
    { label: 'Tools', value: 'Figma, Illustrator' },
  ],
  coverLabel: '// Queer Arts Gallery — cover, homepage + identity',
  problem:
    'The Queer Arts Collective’s website didn’t reflect the energy of its community — a dated visual identity, inaccessible color contrast, and a site structure that buried the artists it was meant to celebrate.',
  process: {
    text: 'I started with a brand exploration phase — moodboarding color, type, and imagery that felt bold without sacrificing accessibility. From there, wireframes prioritized artist spotlights and event listings as the site’s core content, rather than an afterthought.',
    images: [
      { ratio: '4/3', label: '// brand moodboard' },
      { ratio: '4/3', label: '// site wireframes' },
    ],
  },
  solution: {
    text: 'The redesign pairs a new type system and expanded, accessible color palette with a site structure built around artists and events: spotlight pages give each artist real presence, and an always-current calendar makes it easy to find the next show.',
    images: [
      { ratio: '9/16', label: '// artist spotlight page' },
      { ratio: '9/16', label: '// event calendar' },
      { ratio: '9/16', label: '// brand type + color system' },
    ],
  },
  outcome:
    'The Collective’s team said the new identity finally felt like "us" — proof that accessible design and bold, expressive branding aren’t at odds. It’s one of my favorite reminders that constraints, like contrast ratios, can push a visual identity to be more creative, not less.',
  nextProject: { title: 'DI Circle', href: '/work/di-circle' },
};

export default function Page() {
  return <CaseStudy data={data} />;
}
