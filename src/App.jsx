import { VideoPlayer } from './components/VideoPlayer';
import video from './assets/videos/lol.mp4';

function App() {
	return (
		<div className='min-h-screen bg-black flex items-center justify-center'>
			<VideoPlayer src={video} />
		</div>
	);
}

export default App;
