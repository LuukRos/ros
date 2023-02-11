import { Command } from '~/components/command';
import { List } from '~/components/list';

const Home = async () => {
  return (
    <main>
      <Command command={'cat links.md'} />
      <List
        type="ul"
        title="You can find me on:"
        items={[
          {
            label: 'GitHub',
            href: 'https://github.com/luukros',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/rosnotbob',
          },
        ]}
      />

      <section className="mb-8">
        <p className="mb-4">
          My field of expertise, or more so passion, is front-end development,
          in which I thoroughly enjoy solving complex problems in a practical
          yet creative way, all while maintaining high code quality standards,
          writing clear documentation, working closely with (Agile / Scrum) team
          members such as Product Owners, Scrum Masters and Quality Assurance
          specialists and, most importantly, adding value to my clients&apos;
          clients&apos; lives. My work currently focuses on working with the
          Next.js React framework, TypeScript, styled components, CSS modules
          and Tailwind CSS, creating a blazing fast and maintainable
          applications. Aside from designing, implementing and documenting new
          features and squashing bugs, I also like to help my team members to
          become a better version of themselves each day by taking part in
          activities such as pair programming.
        </p>

        <p className="mb-4">
          Colleagues, family and friends have, throughout the years,
          consistently used one word to describe one of my character traits:
          &lsquo;perfectionism&rsquo;. I, too, recognise this as one of my key
          trademarks as I enjoy pushing myself to my limits and getting down to
          the nitty gritty. Colleagues often praise me for my eagerness to learn
          new things and the drive to continuously improve myself. I strongly
          believe that it is necessary, and a great characteristic feature, to
          want to keep on learning and improving yourself through new challenges
          and opportunities. Other keywords that others and I would use to
          describe me include &lsquo;consistent&rsquo;, &lsquo;open&rsquo;,
          &lsquo;sensitive&rsquo;, &lsquo;loyal&rsquo;,
          &lsquo;hardworking&rsquo; and &lsquo;dedicated&rsquo;.
        </p>

        <p className="mb-4">
          When winding down I like to get active with some of my other passions
          like cooking and eating Italian or Asian cuisine, playing video or
          board games or going for walks, be it strolls through my hometown or
          hikes through nature.
        </p>
      </section>

      <Command command={'cat interests.md'} />
      <List
        type="ul"
        title="Some of my interests include"
        items={[
          { label: 'coding' },
          { label: 'keyboard shortcuts' },
          { label: 'LEGO' },
          { label: 'music' },
        ]}
      />
    </main>
  );
};

export default Home;
