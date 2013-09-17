Ember.Handlebars.helper 'rfsLink', (rfs) ->
  return new Handlebars.SafeString '<a href="/#/ready-for-service/' + rfs.replace(/Q[1-4]{1}/,"").match(/\d/g).join("") + '">' + rfs + '</a>'