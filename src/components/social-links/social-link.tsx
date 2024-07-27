import { SOCIAL_LINKS } from '@/components/social-links/constants'

function SocialLink({ link }: { link: (typeof SOCIAL_LINKS)[number] }) {
  return (
    <li>
      <a href={link.url} target='_blank' rel='noopener noreferrer'>
        <span className="sr-only">{link.name}</span>
        <div dangerouslySetInnerHTML={{ __html: link.svg }} />
      </a>
    </li>
  )
}

export default SocialLink
