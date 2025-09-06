import React from 'react'
import { gsap } from "gsap";

import editIcon from '../assets/editIcon.png'
import starIcon from '../assets/starIcon.png'
import dltIcon from '../assets/dltIcon.png'

function TaskCard({idx, task, deleteTask}) {

  // let animateRef = React.useRef(null);

  const btnAnimateIn = (e, taskId) => {
    const element = e.currentTarget.querySelector(".cmpltTxt");

    gsap.to(element, {
      duration: 0.3,
      transform: "translateY(-15px)",
    });

    setTimeout(() => {
      deleteTask(taskId);
      gsap.set(element, { y: 0 });
    }, 3000);
  }

  return (
    <div className='taskCard md:w-[320px] w-[100%] border h-[200px] rounded-md bg-white hover:scale-[1.02] duration-300 ease-in-out p-2 flex flex-col justify-between relative' >
        <div className="cardCntntContain">
            <div className="cardNav w-full flex justify-between items-center">
              <div className="cardNav-left flex gap-2 items-center">
                <div className="navImg w-4 h-auto">
                  <img src={starIcon} alt="Star Icon" />
                </div>
                <p className="dotTxt font-[dirtyline]">Task</p>
              </div>
              <div className="taskCounter font-[neueBold]">/{idx}</div>
            </div>
            <div className="cardTitle text-2xl mt-5 leading-5">{task}</div>
        </div>
        <div className="cardBtnContain w-full h-10 flex justify-between items-center gap-1">
          <div className="cardBtn-left w-full h-full bg-black relative flex justify-center items-center cursor-pointer rounded-[6px]" onClick={(e) => btnAnimateIn(e, task)}>
            <div className="cmpltbtn w-full h-[15px] inline-block text-white flex justify-center items-center overflow-hidden" >
                <div className="cmpltTxt overflow-hidden font-[dirtyline] text-[10px] sm:text-xs text-center">
                    <p className='cmpltTxt-inner'>mark as completed</p>
                    <p className='cmpltTxt-inner'>great job 🎉, auto-remove in 3s</p>
                </div>
            </div>
          </div>
          <div className="cardBtn-right w-[40%] h-full flex gap-1">
            {/* <button className='editBtn w-full h-full bg-(--lightGreen) rounded-[6px] flex justify-center items-center'>
              <img src={editIcon} alt="Edit Icon" className='w-5 h-auto'/>
            </button> */}
            <button className='dltBtn w-full h-full bg-(--lightRed) rounded-[6px] flex justify-center items-center' onClick={deleteTask}>
              <img src={dltIcon} alt="Delete Icon" className='w-5 h-auto'/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default TaskCard