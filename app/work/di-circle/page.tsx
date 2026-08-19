import type { Metadata } from 'next';
import CaseStudy, { type CaseStudyData } from '@/components/CaseStudy';

export const metadata: Metadata = { title: 'DI Circle — Alyse Cho' };

const data: CaseStudyData = {
  title: 'DI Circle',
  tagline: 'Making professional networking feel human again.',
  tags: [
    { label: 'Web', variant: 'teal' },
    { label: 'Product Design', variant: 'orange' },
    { label: '2025', variant: 'outline' },
  ],
  meta: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Timeline', value: '10 weeks' },
    { label: 'Team', value: '4 designers' },
    { label: 'Tools', value: 'Figma, UserTesting' },
  ],
  coverLabel: '// DI Circle — cover image, desktop homepage',
  problem:
    'Design Interactive (DI) members told us the same thing over and over: professional networking events felt cold, transactional, and intimidating — especially for people just starting out. Without an easy way to find common ground before showing up, most members avoided events altogether.',
  process: {
    text: 'We ran interviews and surveys with DI members across experience levels to understand what made networking feel unapproachable. A recurring theme emerged: people wanted to know who they’d be talking to, and why it mattered, before ever walking into a room. From there we sketched flows for a lightweight, community-first platform and tested early wireframes with members to validate direction.',
    images: [
      { ratio: '4/3', label: '// research synthesis board' },
      { ratio: '4/3', label: '// early wireframes' },
    ],
  },
  solution: {
    text: 'DI Circle pairs a member directory with shared-interest prompts and event RSVPs, so people can find common ground before they ever say hello. A community feed keeps the conversation going between events, turning one-off meetups into an ongoing network.',
    images: [
      { ratio: '9/16', label: '// member profile' },
      { ratio: '9/16', label: '// event RSVP + prompts' },
      { ratio: '9/16', label: '// community feed' },
    ],
  },
  outcome:
    'Usability testing with DI members showed the icebreaker prompts measurably lowered the anxiety of approaching strangers — several testers said they’d actually look forward to the next event. This project reinforced how much of good networking design is really about reducing social risk, not just organizing logistics.',
  nextProject: { title: 'GoodReads, Reimagined', href: '/work/goodreads-redesign' },
};

export default function Page() {
  return <CaseStudy data={data} />;
}
