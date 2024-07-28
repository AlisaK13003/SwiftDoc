import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '@/components/social-links/constants';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialLinkProps {
  link: {
    name: string;
    url: string;
    icon: IconDefinition;
  };
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
  return (
    <li>
      <a href={link.url} target='_blank' rel='noopener noreferrer' className="social-link">
        <span className="sr-only">{link.name}</span>
        <FontAwesomeIcon icon={link.icon} className="text-white" />
      </a>
    </li>
  );
};

export default SocialLink;
