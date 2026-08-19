import type { Metadata } from 'next';
import CaseStudy, { type CaseStudyData } from '@/components/CaseStudy';

export const metadata: Metadata = { title: 'GoodReads, Reimagined — Alyse Cho' };

const data: CaseStudyData = {
  title: 'GoodReads, Reimagined',
  tagline: 'A cleaner, more social reading companion.',
  tags: [
    { label: 'Mobile', variant: 'teal' },
    { label: 'UX / UI', variant: 'orange' },
    { label: '2024', variant: 'outline' },
  ],
  meta: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Timeline', value: '6 weeks' },
    { label: 'Type', value: 'Personal project' },
    { label: 'Tools', value: 'Figma' },
  ],
  coverLabel: '// GoodReads redesign — cover, home feed',
  problem:
    'GoodReads has one of the largest book communities on the internet, but its interface hasn’t kept pace — cluttered navigation, inconsistent visual hierarchy, and buried social features make it hard for readers to enjoy the parts of the app that make reading feel social.',
  process: {
    text: 'I ran a heuristic evaluation against GoodReads’ current app and benchmarked it against modern reading and social apps. Interviews with regular readers surfaced a clear ask: fewer taps to log a book, and an easier way to see what friends are reading right now.',
    images: [
      { ratio: '4/3', label: '// heuristic evaluation notes' },
      { ratio: '4/3', label: '// navigation wireframes' },
    ],
  },
  solution: {
    text: 'The redesign simplifies the tab structure around three habits — reading, discovering, and sharing — with modernized book cards, a streamlined logging flow, and a friends’ activity feed that surfaces what people are reading in real time.',
    images: [
      { ratio: '9/16', label: '// home feed' },
      { ratio: '9/16', label: '// book logging flow' },
      { ratio: '9/16', label: '// friends activity feed' },
    ],
  },
  outcome:
    'Testing the prototype with regular GoodReads users, the redesigned logging flow was consistently rated faster and clearer than the original. It also reframed how I think about legacy products: sometimes the biggest win isn’t new features, it’s clearing a path to the ones already there.',
  nextProject: { title: 'Queer Arts Gallery', href: '/work/queer-arts-gallery' },
};

export default function Page() {
  return <CaseStudy data={data} />;
}
