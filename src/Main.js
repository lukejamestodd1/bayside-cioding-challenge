import React, {Component} from 'react';

import API from './Api';

import Hero from './Hero';
import Amenities from './Amenities';
import Gallery from './Gallery.js';
import Accordion from './Accordion.js';

function Main(){
    return (
        <section aria-label="Main content">
            <div id="block-system-main" class="block block-system">
                <div class="content">
                    <div id="node-4061" class="node node-venue-2-0 clearfix" about="/brighton-town-hall" typeof="sioc:Item foaf:Document">
                        <Hero></Hero>
                        <div class="content">
                            <div class="container">
                                <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                                    <div class="field-items">
                                        <div class="field-item even" property="content:encoded">
                                            <p>The Brighton Town Hall provides a majestic space for events like weddings, birthdays, performances, concerts, parties, functions or community and fundraising events.</p>
                                            <p>The hall&nbsp;is 650m from Middle Brighton Train Station. It includes a theatrical stage including a lift, piano, commercial kitchen and room for 200&nbsp;seated people.</p>
                                            <p>The historic architecture provides an elegant backdrop for any event.</p>
                                            <h2>Capacity</h2>
                                            <ul>
                                                <li>250 standing</li>
                                                <li>200 seated</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <Amenities></Amenities>       
                                <hr></hr>
                                <Gallery></Gallery>
                                <hr></hr>
                                {/* {API.map(heading)} */}
                                <Accordion></Accordion>
                                <hr></hr>
        
        <div class="field-collection-container clearfix">
            <div class="field field-name-field-pricing-sections field-type-field-collection field-label-above js-multi-accordion multi-accordion">
            <h2>Pricing</h2>
            <div class="field-items">
                <div class="field-item even">
                    <div class="field-collection-view clearfix view-mode-full">
                        <div class="entity entity-field-collection-item field-collection-item-field-pricing-sections clearfix closed" about="/field-collection/field-pricing-sections/2890" typeof="">
                            <div class="content">
                                
                                <div class="field field-name-field-accordion-title field-type-text field-label-hidden">
                                    <div class="field-items">
                                        <h3 class="field-item even">Main hall<i class="fa fa-angle-up" aria-hidden="true"></i></h3>
                                    </div>
                                </div>

                                <div class="field field-name-field-accordion-body field-type-text-long field-label-hidden" style={{display: 'none'}}><div class="field-items"><div class="field-item even"><h4>4 hour slot 6am to 5pm</h4>
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Days</th>
                                                <th scope="col" style={{'text-align': 'right'}}>Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mon to Thurs</td>
                                                <td style={{'text-align': 'right'}}>$483.00</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td style={{'text-align': 'right'}}>$483.00</td>
                                            </tr>
                                            <tr>
                                                <td>Weekend</td>
                                                <td style={{'text-align': 'right'}}>$703.55</td>
                                            </tr>
                                            <tr>
                                                <td>Public holiday</td>
                                                <td style={{'text-align': 'right'}}>$703.55</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>&nbsp;</h4>
                                    <h4>Evening 5pm to midnight</h4>

                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Days</th>
                                                <th scope="col" style={{'text-align': 'right'}}>Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mon to Thurs</td>
                                                <td style={{'text-align': 'right'}}>$787.50</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td style={{'text-align': 'right'}}>$1155.00</td>
                                            </tr>
                                            <tr>
                                                <td>Weekend</td>
                                                <td style={{'text-align': 'right'}}>$1155.00</td>
                                            </tr>
                                            <tr>
                                                <td>Public holiday</td>
                                                <td style={{'text-align': 'right'}}>$1155.00</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>&nbsp;</h4>
                                    <h4>Full day 6am to 5pm</h4>

                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Days</th>
                                                <th scope="col" style={{'text-align': 'right'}}>Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mon to Thurs</td>
                                                <td style={{'text-align': 'right'}}>$782.25</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td style={{'text-align': 'right'}}>$782.25</td>
                                            </tr>
                                            <tr>
                                                <td>Weekend</td>
                                                <td style={{'text-align': 'right'}}>$1076.25</td>
                                            </tr>
                                            <tr>
                                                <td>Public holiday</td>
                                                <td style={{'text-align': 'right'}}>$1076.25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="field-item odd">
            <div class="field-collection-view clearfix view-mode-full">
                <div class="entity entity-field-collection-item field-collection-item-field-pricing-sections clearfix closed" about="/field-collection/field-pricing-sections/2892" typeof="">
                    <div class="content">
                        <div class="field field-name-field-accordion-title field-type-text field-label-hidden">
                            <div class="field-items">
                                <h3 class="field-item even">Gardens<i class="fa fa-angle-up" aria-hidden="true"></i></h3>
                            </div>
                        </div>


                <div class="field field-name-field-accordion-body field-type-text-long field-label-hidden" style={{display: 'none'}}>
                    <div class="field-items">
                        <div class="field-item even">
                            <p>You can also <a href="https://www.bayside.vic.gov.au/facilities-venues/brighton-town-hall-gardens">book the beautiful Brighton Town Hall gardens</a>.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
                        <div class="field-item even"><div class="field-collection-view clearfix view-mode-full field-collection-view-final">

                <div class="entity entity-field-collection-item field-collection-item-field-pricing-sections clearfix closed" about="/field-collection/field-pricing-sections/2927" typeof="">
                <div class="content">
                    
                <div class="field field-name-field-accordion-title field-type-text field-label-hidden">
                    <div class="field-items">
                        <h3 class="field-item even">Additional pricing information<i class="fa fa-angle-up" aria-hidden="true"></i>
                </h3>
                    </div>
                </div>

                <div class="field field-name-field-accordion-body field-type-text-long field-label-hidden" style={{display: 'none'}}><div class="field-items"><div class="field-item even"><h4>&nbsp;</h4>
                <table border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                <th scope="col" style={{'text-align': 'left'}}>Type of fee</th>
                <th scope="col" style={{'text-align': 'right'}}>Cost</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Bond</td>
                <td style={{'text-align': 'right'}}>$500.00</td>
                </tr>
                <tr>
                <td>Key deposit</td>
                <td style={{'text-align': 'right'}}>$50.00</td>
                </tr>
                <tr>
                <td>Public liability insurance</td>
                <td style={{'text-align': 'right'}}>$35.20</td>
                </tr>
                </tbody>
                </table>
                <h3>&nbsp;</h3>
                <h3>Not for profit discount</h3>
                <p>Not for profit organisations can apply for a discount on their hourly rates.</p>
                </div></div></div>  </div>
                </div>

                </div></div>
                    </div>
                </div>

                </div><div class="field field-name-field-pricing field-type-text-long field-label-hidden">
                    <div class="field-items">
                        <div class="field-item even"><p><a href="/hall-booking-terms-and-conditions">Read all&nbsp;terms and conditions</a></p>
                </div>
                    </div>
                </div>
        <hr></hr>
    <div class="field-collection-container clearfix">

        <div class="field field-name-field-before-booking field-type-field-collection field-label-above js-multi-accordion multi-accordion">
            <h2>Before Booking</h2>
            <div class="field-items">
            
        <div class="entity entity-field-collection-item field-collection-item-field-before-booking clearfix closed" about="/field-collection/field-before-booking/2893" typeof="">
        <div class="content">
            
        <div class="field field-name-field-accordion-title field-type-text field-label-hidden">
            <div class="field-items">
                <h3 class="field-item even">What seating is available?<i class="fa fa-angle-up" aria-hidden="true"></i>
        </h3>
            </div>
    </div>


<div class="field field-name-field-accordion-body field-type-text-long field-label-hidden" style={{display: 'none'}}><div class="field-items"><div class="field-item even"><p>Brighton Town Hall has:</p>
<ul>
<li>Approximately 200 chairs</li>
<li>35 round tables seating 8 to 10 each</li>
<li>10 trestle tables seating 6 to 8 each</li>
</ul>
</div></div></div>  </div>
</div>


</div></div>

            </div>

      
    


<div class="field field-name-field-read-more field-type-link-field field-label-hidden">
    <div class="field-items">
          <div class="field-item even"><a href="https://www.bayside.vic.gov.au/what-hall-booking-process">Read more about booking this venue</a></div>
      </div>
</div>
        <hr></hr>
        <h2>Location</h2>
        <div class="field field-name-field-location field-type-text-long field-label-hidden">
    <div class="field-items">
          <div class="field-item even">Corner Carpenter St and Wilson St
Brighton, VIC 3186</div>
      </div>
</div>
        <div class="field field-name-field-event-location field-type-geolocation-latlng field-label-hidden">
    <div class="field-items">
          
      </div>
</div>
                          <hr></hr>
          <div class="field field-name-field-access-symbols field-type-taxonomy-term-reference field-label-above">
      <h2>Accessibility</h2>
    <div class="field-items">
          <div class="field-item even">Wheelchair accessibility</div>
      </div>
</div>
                <div class="availability">
          <hr></hr>
          <h2>Availability</h2>
          <div class="field field-name-field-telephone field-type-phone field-label-hidden">
  <div class="field-items">
          <div class="field-item even">For availability call:&nbsp;(03) 9599 4444</div>
      </div>
</div>
    
        <hr></hr>
        <div class="field field-name-field-other-spaces field-type-entityreference field-label-above">
      <h2>Other Spaces</h2>
    <div class="field-items row">
          <div class="field-item col-md-3 col-sm-6  col-xs-6 even ">
        <div id="node-4065" class="node node-venue-2-0 node-teaser contextual-links-region clearfix" about="/beaumaris-community-centre" typeof="sioc:Item foaf:Document">
      <div class="row">
            <span property="dc:title" content="Beaumaris Community Centre" class="rdf-meta element-hidden"></span><span property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span>      <div class="col-xs-12">
        <div class="field field-name-field-feature-image field-type-image field-label-hidden">
    <div class="field-items">
          <div class="field-item even"><a href="/beaumaris-community-centre"><img typeof="foaf:Image" src="https://www.bayside.vic.gov.au/sites/default/files/styles/venue_2_0_tour_image/public/facilities_and_venues/beaumaris_community_centre_hall.jpg?itok=KjeSLxVQ" width="245" height="170" alt="Main hall with stage"></img></a></div>
      </div>
</div>
      </div>
      <div class="col-xs-12">
        Beaumaris Community Centre      </div>
    </div>
  </div>
      </div>
          <div class="field-item col-md-3 col-sm-6  col-xs-6 odd ">
        <div id="node-4064" class="node node-venue-2-0 node-teaser contextual-links-region clearfix" about="/black-rock-civic-hall" typeof="sioc:Item foaf:Document">
      <div class="row">
            <span property="dc:title" content="Black Rock Civic Hall" class="rdf-meta element-hidden"></span><span property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span>      <div class="col-xs-12">
        <div class="field field-name-field-feature-image field-type-image field-label-hidden">
    <div class="field-items">
          <div class="field-item even"><a href="/black-rock-civic-hall"><img typeof="foaf:Image" src="https://www.bayside.vic.gov.au/sites/default/files/styles/venue_2_0_tour_image/public/facilities_and_venues/black_rock_main_hall_stage.jpg?itok=KNbupFqo" width="245" height="170" alt="Main hall with wooden floor and stage"></img></a></div>
      </div>
</div>
      </div>
      <div class="col-xs-12">
        Black Rock Civic Hall      </div>
    </div>
  </div>
      </div>
      </div>
</div>
      </div>
      <div class="sticky-bar">
        <h2 class="venue-title">
          Brighton Town Hall          <div class="check-availability" style={{'margin-left': '1em !important', 'font-size': '16px !important', display: 'inline !important'}}>To check availability, please call (03) 9599 4687</div>
          </h2>
        <div class="field field-name-field-booking-form field-type-entityreference field-label-hidden">
    <div class="field-items">
        <a class="field-item btn" href="/book-hall">Book this space</a>
    </div>
</div>      </div>
    </div>
  </div>
  </div>
</div>
</div>
    </section>
    );
}

export default Main;