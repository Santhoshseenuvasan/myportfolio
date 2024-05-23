import resume from  '../Assets/resume.jpg';
function Resume(){
    const config={
        link:"https://drive.google.com/file/d/1js-_GGBXST2E3njqNg7AEryPl4yTh_sO/view?usp=drivesdk"
    }
    return(<>
    <section className='flex flex-col md:flex-row bg-secondary' id='resume'>
        <div className='md:w-1/2 flex  md:justify-end py-5'>
            <img className='w-[300px] h-[300px]' src={resume}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[145px] font-bold border-primary'>RESUME</h1>
            <p className='pb-5'>You can view my resume<a href={config.link} className='btn'>Download</a></p>

            </div>
        </div>
    </section>
    </>)
}
export default Resume;