import '../components/cjr.css';
import banner from '../assets/banner.png';
import focatia from '../assets/focatia.png';
import logocjr from '../assets/logocjr.png';
import { LoginButton } from '../components/Buttons/LoginButton';
import Checkboxes from '../components/checkbox';

export function Home() {
  return (
    <div className="max-h-full flex w-[100vw] overflow-hidden h-[100vh]">
      <div className="w-[38%] relative h-full  bg-transparent-bg">
        <div className="font-inter z-100 text-8xl italic first-letter font-bold flex flex-col justify-center w-full">
          
          <h1 className="text-dark-blue text-center translate-y-[115px]">C</h1>

          <h1 className="text-text-green text-color text-center translate-y-[130px]">J</h1>

          <h1 className="text-white text-center translate-y-[145px]">R</h1>
        </div>
        <img className="h-[20%] mx-[90%] -translate-x-[100%] my-[140px]" src={logocjr} alt="" />
        <img
          className="w-[100%] h-full absolute top-0 z-0 opacity-5"
          src={focatia}
          alt="focatia"
        />
      </div>

      <div className="bg-w-bg overflow-hidden w-full h-full">
        <div>
          <img
            className=" w-[40vw] shrink-0 mx-auto -translate-x-[5%] h-[70vh] justify-center"
            src={banner}
            alt="banner"
          />
        </div>
        <LoginButton />
      </div>
    </div>
  );
}
