import Subtitle from "../Typography/Subtitle"

function CardUser({ title, children, topMargin, TopSideButtonsUser }) {
    return (
      <div className="flex justify-center items-center">
        <div className={"card w-80 h-100 p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>
            {/* Title for Card */}
            <Subtitle styleClass={TopSideButtonsUser ? "inline-block" : ""}>
                {title}

                {/* Top side button, show only if present */}
                {
                    TopSideButtonsUser && <div className="inline-block float-right">{TopSideButtonsUser}</div>
                }
            </Subtitle>

            <div className="divider mt-2"></div>

            {/** Card Body */}
            <div className='h-full w-full pb-6 bg-base-100'>
                {children}
            </div>
        </div>
      </div>
    )
}

export default CardUser
