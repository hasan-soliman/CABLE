
class SubmarineCable.Search
  
  @searchJsonPath = "/api/v1/search.json"
  
  constructor: () ->
    jQuery.getJSON SubmarineCable.Search.searchJsonPath, (data) =>
      jQuery("#search")
        .autocomplete
          position: { my : "right top", at: "right bottom" }
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
      jQuery(this).toggleClass("focus")
      if jQuery(this).val() == "Search"
        jQuery(this).val("")
    .blur () ->
      jQuery(this).removeClass("focus")
      jQuery(this).val("Search")
