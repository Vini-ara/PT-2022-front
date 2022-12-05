import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import focatia from '../assets/focatia.png';
import logocjr from '../assets/logocjr.png';
import { LoginButton } from '../components/Buttons/LoginButton';

export default function LoginPage() {
  return (
<div className="max-h-full flex w-[100vw] overflow-hidden h-[100vh]">
      <div className="w-[38%] relative h-full  bg-transparent-bg">
        <div className="font-inter z-100 text-8xl italic font-bold flex flex-col">
          <h1 className="text-dark-blue text-center translate-y-[115px]">C</h1>
          <h1 className="text-text-green text-color text-center translate-y-[130px]">
            J
          </h1>
          <h1 className="text-white text-center translate-y-[145px]">R</h1>
          <img
            className="h-[10%] w-[10%] translate-x-[20vw] translate-y-[28vh]"
            src={logocjr}
            alt=""
          />
        </div>
        <img
          className="w-full h-full absolute top-0 z-0 opacity-5"
          src={focatia}
          alt=""
        />
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col w-1/2 pt-4 m-auto pl-[5vw]">
          <div className="mt-[14vw] xl:mt-[11vw] 2xl:mt-[1vw] flex">
            <img
              className="w-[30vw] h-[16vw] translate-x-[2vw] translate-y-[0vw]"
              src={banner2}
              alt="banner2"
            />
            <img
              className="w-[30vw] h-[16vw] translate-x-[-40vw] translate-y-[12vw]"
              src={banner1}
              alt="banner1"
            />
            <img
              className=" w-[30vw] h-[16vw] translate-x-[-50vw] translate-y-[14vw]"
              src={banner3}
              alt="banner3"
            />
          </div>
          <div className="mt-[22vw] 2xl:mt-[14vw] w-[20vw] mx-auto">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
