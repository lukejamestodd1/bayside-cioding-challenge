import React from 'react';

function Hero(){
    return (
        <div class="row hero-section">
        <div class="col-md-8 col-md-push-4">
            <div class="hero-section--image">
                <div class="field field-name-field-feature-image field-type-image field-label-hidden">
                    <div class="field-items">
                        <div class="field-item even"><img typeof="foaf:Image" src="https://www.bayside.vic.gov.au/sites/default/files/styles/venue_2_0_hero_image/public/facilities_and_venues/dsc_3326.jpg?itok=OWA-XaKH" width="1240" height="675" alt="External view of Brighton Town Hall"></img></div>
                    </div>
                </div>
                <div class="field field-name-field-feature-image-mobile- field-type-image field-label-hidden">
                    <div class="field-items">
                        <div class="field-item even"><img typeof="foaf:Image" src="https://www.bayside.vic.gov.au/sites/default/files/styles/venue_2_0_hero_image__mobile_/public/facilities_and_venues/dsc_3326.jpg?itok=ZQHA-UJS" width="425" height="425" alt="External view of Brighton Town Hall"></img></div>
                    </div>
                </div>
                <a href="#view-this-space-gallery" class="hero-section--gallery-link toc-filter-processed"><i class="fa fa-th"></i>View this space</a>
            </div>
        </div>
        <div class="col-md-4 col-md-pull-8">
            <div class="hero-section--details">
                <div class="field field-name-field-location field-type-text-long field-label-hidden">
                    <div class="field-items">
                    <div class="field-item even">Corner Carpenter St and Wilson St Brighton, VIC 3186</div>
                </div>
            </div>
            <h1>Brighton Town Hall</h1>
            <div class="bookable-spacesfield field-name-field-available-spaces field-type-text field-label-above">
            <div class="field-label">Bookable spaces</div>
            <ul class="field-items">
                <li class="field-item even">Town hall</li>
            </ul>
        </div>
        <span property="dc:title" content="Brighton Town Hall" class="rdf-meta element-hidden"></span><span property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span>        </div>
      </div>
    </div>
    );
}

export default Hero;