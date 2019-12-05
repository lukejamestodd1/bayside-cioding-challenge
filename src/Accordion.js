import React from 'react';


const Accordion = ({title, items, match}) => (
        <div classname="Accordion field-collection-container clearfix">
            <div class="field field-name-field-before-booking field-type-field-collection field-label-above js-multi-accordion multi-accordion">
                <h2>{title}</h2>
                <div class="field-items">
                    {items.map((item, key) =>
                        <div class="entity entity-field-collection-item field-collection-item-field-before-booking clearfix closed" about="/field-collection/field-before-booking/2893" typeof="">
                            <div class="content">
                                <div class="field field-name-field-accordion-title field-type-text field-label-hidden">
                                    <div class="field-items">
                                        <h3 class="field-item even">{item}<i class="fa fa-angle-up" aria-hidden="true"></i></h3>
                                    </div>
                                </div>
                                <div class="field field-name-field-accordion-body field-type-text-long field-label-hidden" style={{display: 'none'}}>
                                    <div class="field-items">
                                        <div class="field-item even">
                                            <p>Hidden information for {item}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
)

export default Accordion;