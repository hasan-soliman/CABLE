/* global SubmarineCable */
import $ from 'jquery';

export function initialize(application) {

  application.set('apiPath', "api/v2");
  application.set('map', null);
  application.set('search', null);
  application.set('getSlug', function(model){
    let slug = null;
    if(!model.slug){
      slug = model;
    }else{
      slug = model.slug;
    }
    return slug;
  });

  application.deferReadiness();
  $.getJSON(`/${application.apiPath}/config.json`, function(data) {
    application.set('mapConfig', data);
    application.set('search', new SubmarineCable.Search());
    application.advanceReadiness();
  });

}

export default {
  initialize
};
