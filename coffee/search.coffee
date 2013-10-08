
class SubmarineCable.Search
  
  @searchJsonPath = "/api/v1/search.json"
  
  constructor: () ->
    jQuery.getJSON SubmarineCable.Search.searchJsonPath, (data) =>
      jQuery("#search")
        .autocomplete
          position: { my : "right top+12", at: "right bottom" }
          source: data
          open: (event, ui) ->
            jQuery(".ui-menu-item a:contains(Connected)").addClass('country')
            jQuery(".ui-menu-item a:contains(Ready)").addClass('rfs')
          close: (event, ui) ->
            jQuery("#search").val("Search")
            jQuery("#search").blur()
          select: (event, ui) ->
            window.location.href = ui.item.url
            

    # Search Input Focus/Blur
    jQuery("#search").val("Search").focus () ->
      jQuery(this).addClass("focus")
      jQuery("#nav").addClass("focus")
      jQuery(this).val("") if jQuery(this).val() == "Search"
    .blur () ->
      jQuery(this).removeClass("focus").val("Search")
      jQuery("#nav").removeClass("focus")
