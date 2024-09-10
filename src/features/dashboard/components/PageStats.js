import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'


function PageStats({}){
    return(
        <div className="stats bg-base-100 shadow">
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <HeartIcon className='mb-4 w-8 h-8'/>
    </div>
    <div className="stat-title">Expense Today</div>
    <div className="stat-value text-primary">$56.00K</div>
    <div className="text-red-500 stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <BoltIcon className='mb-4 w-8 h-8'/>
    </div>
    <div className="stat-title">Expense This Month</div>
    <div className="stat-value text-primary">$3680,20</div>
    <div className="text-red-500 stat-desc">14% more than last month</div>
  </div>
</div>
    )
}

export default PageStats