import React,{useState} from 'react';
import GoogleMeetWidget from './GoogleMeet';
import Voice from './Voice';

const Navbar = () => {
  // Example state and handler for the GoogleMeetWidget
  const [meetLink, setMeetLink] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setMeetLink(e.target.value);
    setError('');
  };

  const joinMeeting = () => {
    if (!meetLink) {
      setError('Please enter a valid Google Meet link.');
      return;
    }
    // Redirect to the Google Meet link
    window.location.href = meetLink;
  };

  return (
    <nav className="bg-[#22333B] px-12 pt-4 flex justify-between items-center">
      <div className='flex py-1 text-5xl font-bold text-white mx-6 hover:animate-pulse'>
      CollabBoard📝
      </div>
      <div className='flex gap-5 items-center'>
        <Voice/>
        <GoogleMeetWidget
          meetLink={meetLink}
          handleInputChange={handleInputChange}
          joinMeeting={joinMeeting}
          error={error}
        />
        <a href='https://chromewebstore.google.com/category/extensions?utm_source=ext_sidebar&hl=en-US' target='_blank'>
          <button className='text-yellow-300 font-semibold text-[15px] py-3 text-bold ring-2 ring-yellow-400 rounded-full px-6 hover:bg-yellow-200 hover:text-black'>
            Explore🔎
          </button>
        </a>
        <a href='#'>
          <button className='text-yellow-300 font-semibold text-[15px] text-bold ring-2 py-3 ring-yellow-400 rounded-full px-6 hover:bg-yellow-200 hover:text-black'>
            Sign-in 🗝️
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
