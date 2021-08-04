import clubhouseImage from '../assets/clubhouse-image.png';
import ClubhouseEntry from './ClubhouseEntry.jsx';
import ProfileCard from './ProfileCard.jsx';
import Bullseye from '../assets/bullseye.jpg'

function Landing() {
  return (
    <div>
      <div className="bg-blue-600 text-white p-7">
        <section className="max-w-lg mx-auto mt-10 md:max-w-2xl lg:flex lg:max-w-4xl xl:max-w-5xl lg:justify-between">
          <div>
            <p className="ABeeZee font-bold text-2xl md:text-5xl">The Backlink <span className="text-yellow-400">Exchange</span> For <span className="text-yellow-400">Clubhouse</span> Entrepreneurs!</p>
            <p className="ABeeZee my-2 md:text-xl">Connect with business that have synergy with yours, and exchange website links with each other to boost your organic rank.</p>
            <img className="mx-auto max-w-xs w-2/5 py-5 md:hidden" src={clubhouseImage} alt="Clubhouse Room Example" />  
            <ClubhouseEntry />
          </div>
          <div>
            <img className="mx-auto max-w-xs w-2/5 py-5 hidden lg:block lg:w-96" src={clubhouseImage} alt="Clubhouse Room Example" />
          </div>
        </section>
      </div>
      <div className="bg-white px-5 pt-5">
        <section className="py-8 max-w-md md:max-w-2xl mx-auto lg:max-w-5xl lg:flex">
          <div className="mx-2">
            <h2 className="text-4xl">Boost Your Rank On Search Engines By Building Backlinks!</h2>
            <p className="my-3">Backlinks (also known as “inbound links”, “incoming links” or “one way links”) are links from one website to a page on another website.</p>
            <p>Google and other major search engines consider backlinks “votes” for a specific page. Pages with a high number of backlinks tend to have high organic search engine rankings.</p>
          </div>
          <div className="mx-2">
            <img className="sm:max-w-md md:max-w-lg" src={Bullseye} alt="Bullseye" />
          </div>
        </section>
        <section className="max-w-md md:max-w-4xl mx-auto">
          <h2 className="text-4xl">Backlinked.club active members.</h2>
          <p>Connect with our members good luck.</p>
          <div className="my-6 flex flex-wrap flex-auto justify-around ">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;