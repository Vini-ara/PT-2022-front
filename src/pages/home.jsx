import '../components/cjr.css';
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import focatia from '../assets/focatia.png'
import logocjr from '../assets/logocjr.png'
import Button from '../components/button';

export function Home() {
    return (
      <div className='max-h-full flex w-[100vw] overflow-hidden h-[100vh]'>
        <div className='w-[38%] relative h-full  bg-transparent-bg'>
          <div className='font-inter z-100 text-8xl italic first-letter font-bold flex flex-col justify-center w-full'>
            
              <h1 className='text-dark-blue text-center translate-y-[115px]'>C</h1>
          

          
              <h1 className='text-text-green text-color text-center translate-y-[130px]'>J</h1>

            
              <h1 className='text-white text-center translate-y-[145px]'>R</h1>
          
          </div>
          <img className=' h-[140px] mx-[374px] my-[140px] ' src={logocjr} alt="" />
          <img className='w-[600px] h-[800px] absolute top-0 z-0 opacity-5' src={focatia} alt="" />

        </div>

        <div className='bg-w-bg relative w-full h-full'>
          <div>
            <img className="w-[435px] h-[240px] mx-[125px] my-[40px] translate-x-[80px]"src={banner2} alt="banner2"/>
            <img className="w-[430px] h-[210px] translate-x-[40px] -translate-y-[90px]" src={banner1} alt="banner1"/> 
            <img className="w-[430px] h-[210px] mx-[200px] my-[0px] translate-x-[100px] -translate-y-[280px]" src={banner3} alt="banner3"/>
            
          </div>
          <Button styles="bg-primary ">
            Entrar com o Google
          </Button>
        </div>
          
    </div>
      
  )
}

