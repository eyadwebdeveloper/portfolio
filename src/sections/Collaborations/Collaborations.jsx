import { useState } from 'react';
import { organizations } from '@/data/organizations';
import Section from '@/components/ui/Section/Section';
import VideoModal from '@/components/ui/VideoModal/VideoModal';
import OrganizationCard from './OrganizationCard';
import './Collaborations.css';

export default function Collaborations() {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <Section
      id="collab"
      title="Two organizations, two seasons each"
      subtitle="Beyond one-off sites, I built and maintained the internal systems these teams run on every admissions cycle."
    >
      <div className="org-list">
        {organizations.map((organization) => (
          <OrganizationCard key={organization.id} organization={organization} onWatchDemo={setActiveDemo} />
        ))}
      </div>
      <VideoModal isOpen={Boolean(activeDemo)} onClose={() => setActiveDemo(null)} {...activeDemo} />
    </Section>
  );
}
