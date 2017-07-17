var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate>
      <banner>
        <title>Samples of my work</title>
      </banner>
      <list> 
        <section> 
          <listItemLockup> 
            <title>Projects</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent> 
              <grid>
                <section> 
                     <lockup videoURL="http://www.rwdevcon.com/videos/Matthijs-Hollemans-Math-Isnt-Scary.mp4">
                        <img src="${this.BASEURL}images/illegal-formation.png" width="500" height="308" />
                  </lockup>	
                    <lockup videoURL="http://www.rwdevcon.com/videos/Chris-Wagner-Craftsmanship.mp4">
                        <img src="${this.BASEURL}images/stylecast.png" width="500" height="308" />
                     </lockup>	
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup> 
            <title>Homeworks</title>
            <decorationLabel>10</decorationLabel>
            <relatedContent> 
              <grid>
                <section> 
                  <lockup videoURL="http://ryanrodwell.com/videos/advancedtrivia">
                    <img src="${this.BASEURL}images/advanced-trivia.png" width="500" height="308" />
                  </lockup>
                  <lockup videoURL="http://ryanrodwell.com/videos/burger_demo">
                    <img src="${this.BASEURL}images/eat-da-burger.png" width="500" height="308" />
                  </lockup>								
                  <lockup videoURL="http://www.rwdevcon.com/videos/Vicki-Wenderlich-Identity.mp4">
                    <img src="${this.BASEURL}images/node-flashcards.png" width="500" height="308" />
                  </lockup>									
                      <lockup videoURL="http://www.rwdevcon.com/videos/Alexis-Gallagher-Identity.mp4">
                    <img src="${this.BASEURL}images/node-liri.png" width="500" height="308" />
                      </lockup>									
                  <lockup videoURL="http://www.rwdevcon.com/videos/Marin-Todorov-RW-Folklore.mp4">
                    <img src="${this.BASEURL}images/psychic-game.png" width="500" height="308" />
                  </lockup>									
                  <lockup videoURL="http://www.rwdevcon.com/videos/Cesare-Rocchi-Cognition.mp4">
                    <img src="${this.BASEURL}images/train-schedule.png" width="500" height="308" />
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