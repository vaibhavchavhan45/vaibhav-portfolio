import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks, SiGmail, SiLeetcode } from 'react-icons/si';
import { SOCIAL_LINKS } from '../../data/config';


const ICONS = [
  { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: FaLinkedin, color: '#0A66C2' },
  { name: 'GitHub', href: SOCIAL_LINKS.github, Icon: FaGithub, color: '#FFFFFF' },
  { name: 'Email', href: SOCIAL_LINKS.email, Icon: SiGmail, color: '#EA4335' },
  { name: 'LeetCode', href: SOCIAL_LINKS.leetcode, Icon: SiLeetcode, color: '#FFA116' },
  { name: 'GeeksforGeeks', href: SOCIAL_LINKS.geeksforgeeks, Icon: SiGeeksforgeeks, color: '#2F8D46' },
];


// Props (all optional): exclude (names to hide), size (px), className (wrapper styles).
export default function SocialIcons({
  exclude = [],
  size = 32,
  className = 'mt-10 justify-center gap-7',
}) {
  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      {ICONS.filter(({ name }) => !exclude.includes(name)).map(
        ({ name, href, Icon, color }) => {
          const isMail = href.startsWith('mailto:');
          return (
            <a
              key={name}
              href={href}
              aria-label={name}
              title={name}
              {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="transition hover:-translate-y-1 hover:scale-110"
            >
              <Icon size={size} color={color} />
            </a>
          );
        }
      )}
    </div>
  );
}
