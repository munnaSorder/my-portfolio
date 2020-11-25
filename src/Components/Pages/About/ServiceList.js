import React from 'react';

const ServiceList = (props) => {
    const {icon ,name, about} = props.data;
    return (
        <div class="col-sm-4 col-xs-6">
        <div class="block">
            <i class={icon}></i>
            <h4 class="text-uppercase">{name}</h4>
            <p>
                {about}
            </p>
        </div> 
        </div>
    );
};

export default ServiceList;