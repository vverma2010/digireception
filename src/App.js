import './App.css';
import ReactPlayer from 'react-player';
import video from './receptionist_idle.mp4';
import Webcam from 'react-webcam';
import link from './link.png';

function App() {
	const videoConstraints = {
		// width: 1280,
		// height: 720,
		facingMode: 'user',
	};
	return (
		<div className="App">
			<header>
				<div className="header-section">
					{/* <p className="logo" ></p> */}
					<img src={link} alt="logo" />
					<span> DIGITAL RECEPTIONIST </span>
				</div>
			</header>
			<div className="body">
				<div className="left-section">
					<ReactPlayer url={video} playing='true' loop={true} volume={1} height="600px" width="500px"/>
				</div>
				<div className="right-section">
					<span>Welcome!</span>
					<span>Align your face in the box</span>
					<div className="webcam">
						<Webcam
							height={230}
							width={300}
							videoConstraints={videoConstraints}
						/>
					</div>
					<div className="input-box">
						<input placeholder="Type Here" />
						{/* <img
							className="search-icon"
							src="https://www.flaticon.com/svg/vstatic/svg/736/736110.svg?token=exp=1618061082~hmac=828ed35a12d1bcd3587392cf4db5278e"
							alt="send"
						/> */}
					</div>
				</div>
			</div>
			<div className="footer">
				<marquee>
					Welcome to LitWiz, &nbsp;This is your Digital Receptionist !!.
				</marquee>
			</div>
		</div>
	);
}

export default App;
