import React from 'react'
import TaskCard from './Component/TaskCard';
import { gsap } from "gsap";
import arrowIcon from './assets/arrowIcon.png'
import arrowIconWhite from './assets/arrowIconWhite.png'
import starIconBlk from './assets/starIconBlk.png'
import checkIcon from './assets/tick-circle.png'

function App(){

  const [tasks, setTaskList] = React.useState([]);
  const [taskName, setTaskName] = React.useState("");
  const cardContainRef = React.useRef(null);
  const popUpRef = React.useRef(null);

  function addTask() {
    
    if(taskName.trim() !== '') {
      setTaskList([...tasks, taskName]);
      setTaskName('');
      // console.log(taskName);

      gsap.set(popUpRef.current, { top: "-30%", opacity: 0, scale: 0.5 });

    gsap.to(popUpRef.current, {
      duration: 0.5,
      top: "15%",
      opacity: 1,
      scale: 1,
      ease: "power1.out",
    });

    setTimeout(() => {
      gsap.to(popUpRef.current, {
        top: "-30%",
        opacity: 0,
        duration: 0.6,
        scale: 0.5,
        ease: "power3.in",
      });
    }, 3000);
    }
    
  }

  function deleteTask(task) {
    setTaskList(tasks.filter((t) => t !== task));
  }

  function cardContainAnimate() {
    gsap.to(cardContainRef.current, {
      duration: 0.5,
      top: "50%",
      scale: 1,
      ease: "power1.out",
    })
  }

  function closeContain() {
    gsap.to(cardContainRef.current, {
      duration: 0.5,
      top: "-50%",
      scale: 0.5,
      ease: "power1.out",
    })
  }




  return (
    <div className='main w-full h-screen relative bg-gradient-to-b from-(--creamBg) to-(--appBg) p-5 flex flex-col justify-between items-center'>

      
      
      <div className="taskAddedPopUp w-[220px] h-[40px] rounded-md text-black bg-(--creamBg) border-2 border-[#3a6127] px-3 z-20 flex justify-between items-center gap-1 absolute top-[-30%] scale-[0.5] left-half" ref={popUpRef}>
        <p className="addedTxt text-[16px] font-[dirtyline] leading-[16px] translate-y-[1px] text-[#3a6127]">you task is added</p>
        <img src={checkIcon} alt="Check Icon" className="checkIcon w-5 h-auto" />
      </div>
      
      <div className="taskCardContain z-10 sm:w-[80%] sm:h-[80%] w-[90%] h-[90%] bg-(--creamBg) rounded-sm absolute scale-[0.5] top-[-50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto p-8" ref={cardContainRef}>
          <div className="cardContainHead w-full flex justify-between items-center">
            <p className="ttlTask font-[dirtyLine] sm:text-5xl text-3xl">{tasks.length} <span className='text-(--primaryRed)'>T</span>asks</p>
            <button className="closeBtn font-[neueBold] text-md flex items-center gap-1 cursor-pointer" onClick={closeContain}><img src={starIconBlk} alt="Soft Star Graphic Element" className='w-3 h-auto' /> CLOSE</button>
          </div>
          <div className="cardContain flex flex-wrap items-center mt-5 gap-4 pt-2">
            {tasks.map((tsk, index) => (
              <TaskCard key={index} idx={index+1} task={tsk} deleteTask={() => deleteTask(tsk)} />
            ))}
          </div> 
      </div>

      <div className="appNavbar flex justify-center items-center font-[dirtyline] gap-4">
          <div className="logoflex text-right cursor-pointer">
            <p className='text-1xl leading-none'>Motion</p>
            <p className='text-1xl leading-none text-(--primaryRed)'>Tasks</p>
          </div>
          <div className="bar w-0.5 h-10 bg-black"></div>
          <div className="taskContainBtn flex items-center gap-2 cursor-pointer" onClick={cardContainAnimate}>View all Tasks <img src={arrowIcon} alt="Arrow Icon" className='rotate-90 w-4' /></div>
      </div>
      <div className="mainCntnt w-full">
        <div className="mainCntntHead text-3xl sm:text-5xl font-[dirtyline] text-center leading-7 sm:leading-10">from To-Do to<br/>done, effortlessly</div>
        <div className="mainCntntSubHead w-[80%] sm:w-xl mx-auto leading-3 text-center text-xs font-[neueBold] mt-2 uppercase">From jotting down to-dos to celebrating completions, MotionTasks<br/>makes productivity effortless and engaging</div>
        <div className="taskInputContain flex flex-col justify-center items-center mx-auto w-full md:w-[650px] h-auto p-2 rounded-md bg-white/10 backdrop-blur-xs mt-5">
          <input type="text" placeholder='Type you task here...' className='w-full h-15 px-2 rounded-sm outline-none bg-white' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          <button className='addTaskBtn w-[200px] h-12 mt-2 rounded-md text-white bg-black flex justify-center items-center gap-2 font-[dirtyline] leading-12 cursor-pointer' onClick={addTask}>add task <img src={arrowIconWhite} alt="White Arrow Icon" className='w-5 h-auto rotate-90'/></button>
        </div>
      </div>
      <div className="appFooter">
        
      </div>
      
    </div>
  )
}

export default App