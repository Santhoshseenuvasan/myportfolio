import download from  '../Assets/download.jpg';
function About(){
    return(<>
    <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='md:w-1/2 '>
            <img className='w-[400px] h-[250px]' src={download}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold border-primary'>About Me</h1>
            <p className='pb-5'>I am proficient in frontend skills like React.js, html, css, javascript and tailwind css.</p>
            <p className='pb-5'>In backend i know core java, spring, spring boot, sql(database).</p>

            </div>
        </div>
    </section>
    </>)
}
export default About;