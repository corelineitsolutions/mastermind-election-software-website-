import React from 'react';
import { Mail, ExternalLink, ShieldCheck, User } from 'lucide-react';

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.66.72-1.66 1.63 0 .88.71 1.6 1.63 1.6.94 0 1.66-.72 1.66-1.6 0-.91-.72-1.63-1.63-1.63z" />
  </svg>
);

export const TeamGallery = () => {
  // Configurable team roster - easy to update with real photographs & designations
  const teamMembers = [
    {
      id: 1,
      name: "Campaign Technology Lead",
      role: "Director of Election Technology",
      department: "Software & War Room Architecture",
      bio: "Over a decade of experience designing booth management platforms, voter roll indexing, and real-time polling turnout trackers across Maharashtra.",
      linkedIn: "https://www.linkedin.com/",
      avatarInitials: "CT"
    },
    {
      id: 2,
      name: "Political Data & GIS Strategist",
      role: "Lead Election Data Analyst",
      department: "Voter Roll Analytics & Demographics",
      bio: "Specializes in polling-part demographic segmentation, booth profiling, margin analysis, and target voter cluster identification.",
      linkedIn: "https://www.linkedin.com/",
      avatarInitials: "PD"
    },
    {
      id: 3,
      name: "Field Operations & Logistics Head",
      role: "Ground Operations Director",
      department: "Voter Slip & Volunteer Coordination",
      bio: "Coordinates constituency-wide karyakarta deployment, thermal printer logistics, voter slip distribution, and war room desk coordination.",
      linkedIn: "https://www.linkedin.com/",
      avatarInitials: "FO"
    },
    {
      id: 4,
      name: "Digital War Room Director",
      role: "Head of Digital Communications",
      department: "Social Media & Video Production",
      bio: "Manages narrative communication, documentary creative direction, LED campaign routing, and digital advertising compliance.",
      linkedIn: "https://www.linkedin.com/",
      avatarInitials: "DW"
    },
    {
      id: 5,
      name: "Full-Stack Software Architect",
      role: "Principal Mobile & Cloud Engineer",
      department: "Core Platform Development",
      bio: "Architect behind the high-concurrency offline-first Android/iOS voter slip app and encrypted enterprise server architecture.",
      linkedIn: "https://www.linkedin.com/",
      avatarInitials: "FS"
    },
    {
      id: 6,
      name: "Constituency Onboarding Specialist",
      role: "Client Support & Training Manager",
      department: "Implementation & Karyakarta Training",
      bio: "Delivers hands-on bilingual (Marathi/Hindi/English) training sessions for candidate offices, assembly managers, and booth karyakartas.",
      linkedIn: "https://www.linkedin.com/",
      avatarInitials: "CO"
    }
  ];

  return (
    <section className="team-gallery-section section-padding" id="team">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            LEADERSHIP & EXPERTISE
          </span>
          <h2 className="section-title">
            Meet Our Team
          </h2>
          <p className="section-description">
            A dedicated team of election technology specialists, software professionals, designers, digital marketers, and campaign management experts.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-gallery-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-profile-card">
              <div className="team-portrait-frame">
                <div className="team-portrait-placeholder">
                  <div className="avatar-circle">
                    <User size={38} className="avatar-icon" />
                  </div>
                  <span className="avatar-department-tag">{member.department}</span>
                </div>
              </div>

              <div className="team-profile-body">
                <div className="team-name-row">
                  <h3 className="team-member-name">{member.name}</h3>
                  {member.linkedIn && (
                    <a 
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-link"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <LinkedInIcon size={16} />
                    </a>
                  )}
                </div>

                <div className="team-member-role">{member.role}</div>

                <p className="team-member-bio">
                  {member.bio}
                </p>

                <div className="team-card-tag">
                  <ShieldCheck size={13} className="text-royal" />
                  <span>Mastermind Media Verified Specialist</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
