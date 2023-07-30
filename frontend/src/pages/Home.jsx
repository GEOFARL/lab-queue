import Card from '../components/Card';
import Hero from '../components/Hero';
import {
  HiOutlineClock,
  HiOutlineFolderOpen,
  HiRocketLaunch,
} from 'react-icons/hi2';

const cards = [
  {
    id: Math.random().toString(),
    title: 'Seamless process',
    text: 'App offfers a seamless lab submission process, streamlining the entire submission journey for students. With user-friendly features, students can easily reserve their lab submission slots',
    icon: <HiRocketLaunch size={'45px'} />,
  },
  {
    id: Math.random().toString(),
    title: 'Real-time updates',
    text: 'App provides real-time queue updates to students, keeping them informed about their position in the submission queue',
    icon: <HiOutlineClock size={'45px'} />,
  },
  {
    id: Math.random().toString(),
    title: 'enhanced organization',
    text: 'App brings a new level of organization and efficiency to lab submissions. Instructors and administrators gain clear visibility into the submission process',
    icon: <HiOutlineFolderOpen size={'45px'} />,
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
