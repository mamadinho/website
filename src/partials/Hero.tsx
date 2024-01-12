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
        // <>
        //   Hi there, I'm <GradientText>Mamad</GradientText> 👋
        // </>
        <>
        <div class="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"> 
        your lovely{' '}
          <span class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul class="block animate-text-slide-2 text-left leading-tight [&_li]:block">
                <li>nerd 🤓</li>
                <li>ai engineer 🤖</li>
                <li aria-hidden="true">nerd 🤓</li>
            </ul>
          </span>
        </div>
        </>
      }
      description={
        <>
          a philomath yet clinophile, continuing to strive under any condition.
          currently an <b>ai</b> research engineer at{' '}
          <a
            className="text-red-400 hover:underline"
            href="https://delameta.com/"
          >
            delameta bilano
          </a>
          . inspired to do master in computer science focusing on machine
          learning to create breaktrough in <b>ai</b>, previously studied 
          at faculty of computer science <span class="text-yellow-500">universitas indonesia</span>.
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
