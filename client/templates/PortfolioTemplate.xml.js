var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate>
      <banner>
        <title>Samples of my work</title>
      </banner>
      <list> 
        <section> 
          <listItemLockup> 
            <title>Group Projects</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent> 
              <grid>
                <section>
                    <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/signaturefd.mp4">
                        <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                    </lockup>  
                     <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/illegalformation.mp4">
                        <img src="${this.BASEURL}images/illegal-formation.png" width="500" height="308" />
                    </lockup>	
                    <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/stylecast.mp4">
                        <img src="${this.BASEURL}images/stylecast.png" width="500" height="308" />
                     </lockup>	
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup> 
            <title>Bootcamp Assignments</title>
            <decorationLabel>9</decorationLabel>
            <relatedContent> 
              <grid>
                <section> 
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/cheeriomongo.mp4">
                    <img src="${this.BASEURL}images/cheeriomongo.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/bamazon.mp4">
                    <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/nytreact.mp4">
                    <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/burger.mp4">
                    <img src="${this.BASEURL}images/eat-da-burger.png" width="500" height="308" />
                  </lockup> 
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/liri.mp4">
                    <img src="${this.BASEURL}images/node-liri.png" width="500" height="308" />
                      </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/flashcards.mp4">
                    <img src="${this.BASEURL}images/node-flashcards.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/advancedtrivia.mp4">
                    <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/trainschedule.mp4">
                    <img src="${this.BASEURL}images/train-schedule.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/psychicgame.mp4">
                    <img src="${this.BASEURL}images/psychic-game.png" width="500" height="308" />
                  </lockup>								
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup> 
            <title>Personal Projects</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent> 
              <grid>
                <section>
                    <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/gtdb.mp4>
                        <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                    </lockup>  
                     <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/peachpit.mp4>
                        <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                    </lockup>
                    <lockup videoURL="http://rr-portfolio-videos.s3.amazonaws.com/prp.mp4>
                        <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                    </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}