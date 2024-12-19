import React from 'react'

const Claim = () => {
  return (
    <section>
      <div className='container'>

       <h2>Claim Your Prize in 3 Steps</h2>
       <div className="claim">
       <div class="steps">
            <div class="step">
              <div class="step-number">01</div>
              <div class="step-text">Stake $STAGE Tokens on <a href="">staking.stage.community</a></div>
            </div>

            <div class="step">
              <div class="step-number">02</div>
              <div class="step-text">Snapshot on the 18th of December at 2PM UTC</div>
            </div>

            <div class="step">
              <div class="step-number">03</div>
              <div class="step-text">Claim Your Prize In:</div>
              <button class="claim-button">00d 03h 40m 23s</button>
            </div>
          </div>
       </div>

      </div>
    </section>
  )
}

export default Claim