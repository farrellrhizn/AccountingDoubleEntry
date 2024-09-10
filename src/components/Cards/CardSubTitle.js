import Subtitle from "../Typography/Subtitle"

  
  function SubTitleCard({title, children, topMargin, TopSideButtons}){
      return(
          <div className={"card w-full p-6 bg-base-100 shadow-xl "}>

            {/* Title for Card */}
              <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
                {title}

                {/* Top side button, show only if present */}
                {
                    TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>
                }
              </Subtitle>
              
              <div className="divider mt-2"></div>
          
              {/** Card Body */}
              <div className='h-full w-full bg-base-100'>
                  {children}
              </div>
          </div>
          
      )
  }
  
  
  export default SubTitleCard