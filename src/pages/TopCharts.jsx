import {data} from '../assets/api'
import { useSelector } from 'react-redux';
import { SongCard } from '../components';


const TopCharts = () =>{
    // console.log('data', data)
    
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    return (
        <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>
  
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
      </div>

    )
}

export default TopCharts;
