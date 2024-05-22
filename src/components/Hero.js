import heroo from '../Assets/heroo.jpg';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

function Hero(){
    return(<>
    <section className='flex flex-col md:flex-row px-5 py-20 bg-primary justify center'> 
    <div className='md:w-1/2 flex-col'>
        <h1 className='text-white text-6xl '>Hi,<br/> I am Santhosh
        <p className='text-2xl'>I am a full stack developer</p></h1>
        <div className='flex py-5'>
            <a href="" className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href="" className='pr-5 hover:text-white' ><AiOutlineFacebook size={40}/></a>

            <a href="" className='hover:text-white'><AiOutlineLinkedin size={40}/></a>

        </div>
        </div>
        <img className='md:w-1/5 h-[300px] rounded' src={heroo} />
       
    </section>
    </>)
}
export default Hero;
