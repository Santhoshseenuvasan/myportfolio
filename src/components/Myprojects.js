import firstproject from '../Assets/firstproject.jpg'
function Myprojects(){
    return(<>
    <section className="flex flex-col py-10 px-5 justify-center  bg-primary text-white" id='myprojects'>
    <div className="w-full">
        <div className="flex flex-col px-10 py-10">
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold border-secondary'>Projects</h1>
        <p>This is my college final year project. I have build these with J2EE,Jsp and backend as Mysql.</p>
        </div>
    </div>
    <div className=" flex flex-col md:flex-row w-full">
        <div className='flex px-10'>
            <div className='relative'>
        <img className='h-[300px]' src={firstproject}/>
        <div className='absolute left-0 right-0 bottem-0 top-0 bg-secondary opacity-0 h-full duration-500 hover:opacity-100'>
            <p className='text-center px-10 py-20 font-bold text-xl '>Construction of File Tracking System And College Student Data Information Governence System
</p>
        </div>
            </div>
        </div>
    </div>
    </section>
    </>)
}
export default Myprojects;