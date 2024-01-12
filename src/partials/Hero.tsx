import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mamad</GradientText> 👋
        </>
      }
      description={
        <>
          A philomath yet clinophile, continuing to strive under any condition.
          Currently an AI Research Engineer at{' '}
          <a
            className="text-red-400 hover:underline"
            href="https://delameta.com/"
          >
            Delameta Bilano
          </a>
          . Inspired to do Master in Computer Science focusing on Machine
          Learning to create breaktrough in AI.
        </>
      }
      avatar={
        <img
          className="h-100 w-80"
          src="/assets/images/Mamad.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/ahmadirfaan_">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/ahmadirfanluthfi/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UConc0_6ujCuFf18ey3GsK8A">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
