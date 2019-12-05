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
                                <Accordion title={'Pricing'} items={API['Pricing']}></Accordion>
                                <hr></hr>
                                <Accordion title={'Before Booking'} items={API['Before Booking']}></Accordion>
                                <hr></hr>
                                <h2>Location</h2>
                                <div class="field field-name-field-location field-type-text-long field-label-hidden">
                                    <div class="field-items">
                                        <div class="field-item even">Corner Carpenter St and Wilson St Brighton, VIC 3186</div>
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
                                                        <span property="dc:title" content="Beaumaris Community Centre" class="rdf-meta element-hidden"></span><span property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span> 
                                                        <div class="col-xs-12">
                                                            <div class="field field-name-field-feature-image field-type-image field-label-hidden">
                                                                <div class="field-items">
                                                                    <div class="field-item even"><a href="/beaumaris-community-centre"><img typeof="foaf:Image" src="https://www.bayside.vic.gov.au/sites/default/files/styles/venue_2_0_tour_image/public/facilities_and_venues/beaumaris_community_centre_hall.jpg?itok=KjeSLxVQ" width="245" height="170" alt="Main hall with stage"></img></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <div class="col-xs-12"> Beaumaris Community Centre      </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field-item col-md-3 col-sm-6  col-xs-6 odd ">
                                            <div id="node-4064" class="node node-venue-2-0 node-teaser contextual-links-region clearfix" about="/black-rock-civic-hall" typeof="sioc:Item foaf:Document">
                                                <div class="row">
                                                        <span property="dc:title" content="Black Rock Civic Hall" class="rdf-meta element-hidden"></span>
                                                        <span property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span>      
                                                        <div class="col-xs-12">
                                                        <div class="field field-name-field-feature-image field-type-image field-label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="/black-rock-civic-hall"><img typeof="foaf:Image" src="https://www.bayside.vic.gov.au/sites/default/files/styles/venue_2_0_tour_image/public/facilities_and_venues/black_rock_main_hall_stage.jpg?itok=KNbupFqo" width="245" height="170" alt="Main hall with wooden floor and stage"></img></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div class="col-xs-12">Black Rock Civic Hall      </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sticky-bar">
                            <h2 class="venue-title">Brighton Town Hall<div class="check-availability" style={{'margin-left': '1em !important', 'font-size': '16px !important', display: 'inline !important'}}>To check availability, please call (03) 9599 4687</div></h2>
                                <div class="field field-name-field-booking-form field-type-entityreference field-label-hidden">
                                    <div class="field-items">
                                            <a class="field-item btn" href="/book-hall">Book this space</a>
                                        </div>
                                    </div>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;