(function() {
  const toggleSideBar = () => {
    var element = document.getElementById('sidebar');
    var body = document.getElementsByTagName('body')[0];

    if(element.classList.contains("show-sidebar")) {
      element.classList.remove("show-sidebar");
      body.classList.remove("sidebar-open");
      return
    }

    element.classList.add("show-sidebar");
    body.classList.add("sidebar-open");
  }

  document.getElementById('menu-burger').addEventListener('click', toggleSideBar)

  $.scrollify({
    section : ".section-scroll"
  });
})();