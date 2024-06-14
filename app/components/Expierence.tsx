import { jobs } from '../constants';
import Profile from './Profile';

const Expierence = () => {
  return (
    <>
      <div>
        <Profile otherClasses='bg-slate-400' />
      </div>
      <div className='text-left'>
        <h2 className='mx-4 font-extrabold mb-2'>30年以上の経験</h2>
        <ul>
          {jobs.map((item) => (
            <li
              key={item.id}
              className='flex flex-row items-center gap-4 mx-4 my-3 text-xs font-mono text-zinc-900'
            >
              {item.name === 'ソフトウェア エンジニア' ? (
                <span className='font-extrabold'>{item.name}</span>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Expierence;
