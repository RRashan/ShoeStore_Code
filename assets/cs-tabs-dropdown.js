$(function() {
  $(".home-product-content").each(function() {
    var resizeTimeout   = 20;
    var $this = $(this);
    var dropdownList = $(this).find(".tabs-to-dropdown .tabs-dropdown .nav-tabs");
    var tabListItem = $(this).find(".tabs-to-dropdown .sub-tabs");
    tabListItem.clone().appendTo(dropdownList);
    var tabsToDropdown  = function() {
      var tamp = 0;
      tabListItem.each(function(index) {
        var dropdownListItem  = dropdownList.children("li").eq(index);
        $(this).removeClass("tab-hide"); 
        var tabListItemOffset = $(this).position().left + $(this).outerWidth();
        if(tabListItemOffset > tamp){
          tamp = tabListItemOffset;
          $this.find('.tabs-dropdown').removeClass('active_dropdown');
          $(this).removeClass("tab-hide"); 
          dropdownListItem.removeClass("tab-show");
        }
        else{
          $this.find('.tabs-dropdown').addClass('active_dropdown');
          $(this).addClass("tab-hide"); 
          dropdownListItem.addClass("tab-show");
        }
        
      });
    }
    tabsToDropdown();
    $(window).bind("resize", function(){
      tabsToDropdown();
    });
  }); 
});
