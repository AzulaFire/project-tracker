import { technologies } from '../constants';

const Technologies = () => {
  return (
    <div>
      <h2 className='mx-4 font-extrabold mb-2'>スキル</h2>
      <ul>
        {technologies.map((item) => (
          <li
            key={item.id}
            className='flex flex-row items-center justify-between gap-4 mx-4 text-sm font-mono text-zinc-900'
          >
            {item.level === 'Expert' && (
              <>
                <div className='font-extrabold'>{item.name}</div>
                <span className='text-zinc-600 ml-2 text-xs'>
                  &#9632; &#9632; &#9632; &#9632;
                </span>
              </>
            )}
            {item.level === 'High' && (
              <>
                <div className='font-bold'>{item.name}</div>
                <span className='text-zinc-600 ml-2 text-xs'>
                  &#9632; &#9632; &#9632;
                </span>
              </>
            )}
            {item.level === 'Mid' && (
              <>
                <div className='font-medium'>{item.name}</div>
                <span className='text-zinc-600 ml-2 text-xs'>
                  &#9632; &#9632;
                </span>
              </>
            )}
            {item.level === 'Low' && (
              <>
                <div className='font-thin'>{item.name}</div>
                <span className='text-zinc-600 ml-2 text-xs'>&#9632;</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Technologies;
