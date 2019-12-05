import React from 'react';

function Accordion(){
    return (
        <div classname="Accordion field-collection-container clearfix">
            <div class="field field-name-field-before-booking field-type-field-collection field-label-above js-multi-accordion multi-accordion">
                <h2>Before Booking</h2>
                <div class="field-items">
                    <div class="entity entity-field-collection-item field-collection-item-field-before-booking clearfix closed" about="/field-collection/field-before-booking/2893" typeof="">
                        <div class="content">
                            <div class="field field-name-field-accordion-title field-type-text field-label-hidden">
                                <div class="field-items">
                                    <h3 class="field-item even">What seating is available?<i class="fa fa-angle-up" aria-hidden="true"></i></h3>
                                </div>
                            </div>
                            <div class="field field-name-field-accordion-body field-type-text-long field-label-hidden" style={{display: 'none'}}>
                                <div class="field-items">
                                    <div class="field-item even">
                                        <p>Brighton Town Hall has:</p>
                                        <ul>
                                            <li>Approximately 200 chairs</li>
                                            <li>35 round tables seating 8 to 10 each</li>
                                            <li>10 trestle tables seating 6 to 8 each</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;