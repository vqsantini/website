import './Community.css'

export function Community(){
  return(
    <div className="community-content">
      <header className="community-header">
        <p id='community-header-p1'>Manage your entire community <br /> in a single system</p>
        <p id='community-header-p2'>Who is Nextcent suitable for?
        </p>
      </header>
      <main className="community-content">
        <div className="community-content-group1">
          <li className="community-li-group1">
            <div className='community-li-div-group1'>
              <img src="./Membership.svg" />
              <p className='community-li-group1-title'>Membership Organisations</p>
              <p className='community-li-group1-description'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='community-li-div-group1'>
              <img src="./National.svg" />
              <p className='community-li-group1-title'>National Associations</p>
              <p className='community-li-group1-description'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='community-li-div-group1'>
              <img src="./Clubs.svg" />
              <p className='community-li-group1-title'>Clubs<br /> And Groups</p>
              <p className='community-li-group1-description'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </li>
        </div>


          <div className="community-content-group2">
            <div className="community-content-group2-1">
              <img src="./Pixelgrade.svg" alt="pixelgrade" />
            </div>
            <div className="community-content-group2-2">
              <p className='community-content-group2-2-title'>The unseen of spending three <br />years at Pixelgrade</p>
              <p className='community-content-group2-2-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <button>Learn More</button>
            </div>
          </div>

          
      </main>
       <footer className="community-footer">
            <div className="community-footer-group1">
                <p className='community-group1-title'>Helping a local <br /><span className='green'>business reinvent itself</span></p>
                <p className='community-group1-description'>We reached here with our hard work and dedication</p>
            </div>
            <div className="community-footer-group2">
                <div className="community-footer-group2-1">
                  <img src="./Members.svg" alt="members" />
                  <div className="community-footer-group2-1-p">
                    <p className='community-group2-1-numbers'>2,245,341</p>
                    <p className='community-group2-1-description'>Members</p>
                  </div>
                </div>
                <div className="community-footer-group2-1">
                  <img src="./Clubs1.svg" alt="clubs" />
                  <div className="community-footer-group2-1-p">
                    <p className='community-group2-1-numbers'>46,328</p>
                    <p className='community-group2-1-description'>Clubs</p>
                  </div>
                </div>
                <div className="community-footer-group2-1">
                  <img src="./Bookings.svg" alt="bookings" />
                  <div className="community-footer-group2-1-p">
                    <p className='community-group2-1-numbers'>828,867</p>
                    <p className='community-group2-1-description'>Event Bookings</p>
                  </div>
                </div>
                
                <div className="community-footer-group2-1">
                  <img src="./Payments.svg" alt="payments" />
                  <div className="community-footer-group2-1-p">
                    <p className='community-group2-1-numbers'>1,926,436</p>
                    <p className='community-group2-1-description'>Payments</p>
                  </div>
                </div>
            </div>
      </footer>
    </div>
)
}