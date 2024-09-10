import TitleCard from "../../../components/Cards/TitleCard";

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Income Today</div>
                <div className="stat-value text-primary">$85,600</div>
                {/* <div className="stat-actions">
                    <button className="btn btn-xs">View Users</button> 
                </div> */}
            </div>
            
            <div className="stat bg-base-100 shadow">
                <div className="stat-title">Income This Month</div>
                <div className="stat-value text-primary">$5999,60</div>
                {/* <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div> */}
            </div>
        </div>
    )
}

export default AmountStats;
