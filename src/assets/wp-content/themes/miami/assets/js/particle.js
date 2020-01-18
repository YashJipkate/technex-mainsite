var init = function(){
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;
    
    var ps = new ParticleSlider({
      //ptlGap: isMobile || isSmall ? 3 : 0,
      //ptlSize: isMobile || isSmall ? 3 : 1,
                                ptlGap: 5,
                                ptlSize: 1,
      width: 1e20,
      height: 1e20
    
    });
      
    /*var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(0).max(10).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(1).max(10).step(1).onChange(function(){
      ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function(value){
      ps.monochrome = true;
      ps.setColor(value);
        ps.init(true);
    });*/
    
    
    (window.addEventListener
     ? window.addEventListener('click', function(){ps.init(true)}, false)
     : window.onclick = function(){ps.init(true)});
  }
  
  var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = 'assets/wp-content/themes/miami/assets/js/index01.js';
      psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }
      
  (window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);