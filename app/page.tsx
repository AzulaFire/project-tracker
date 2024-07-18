import Expierence from './components/Expierence';
import Header from './components/Header';
import LinkPreview from './components/LinkPreview';
import Technologies from './components/Technologies';
import { projects } from './constants';

export default function Home() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.released).getTime() - new Date(a.released).getTime()
  );

  return (
    <main className='w-full min-h-screen bg-slate-400'>
      <div>
        <div id='header' className='w-full'>
          <Header />
        </div>
      </div>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-12 pb-4'>
        <div id='leftCol' className='col-span-2 hidden lg:block'>
          <Technologies />
        </div>
        <div className='col-span-8 bg-gradient-to-b from-slate-400 to-slate-500'>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 place-items-center'>
            {sortedProjects.map((project) => (
              <div key={project.id}>
                <LinkPreview {...project} />
              </div>
            ))}
          </div>
        </div>
        <div id='rightCol' className='col-span-2 hidden lg:block'>
          <Expierence />
        </div>
      </div>
    </main>
  );
}
