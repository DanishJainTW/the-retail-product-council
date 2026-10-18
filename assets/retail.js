// Retail base pages: case and glossary filters, region tabs.
(function(){
  function filterer(opts){
    var input=document.getElementById(opts.input),chips=document.getElementById(opts.chips);
    if(!input||!chips)return;
    var items=[].slice.call(document.querySelectorAll(opts.items)),count=document.getElementById(opts.count),empty=document.getElementById(opts.empty);
    var active="all";
    function run(){
      var terms=input.value.toLowerCase().trim().split(/\s+/).filter(Boolean),shown=0;
      items.forEach(function(el){
        var keys=(el.getAttribute(opts.attr)||"").split(" ");
        var ok=(active==="all"||keys.indexOf(active)>-1)&&terms.every(function(t){return el.dataset.text.indexOf(t)>-1;});
        el.hidden=!ok;if(ok)shown++;
      });
      if(count)count.textContent=shown+" of "+items.length+" "+opts.noun;
      if(empty)empty.style.display=shown?"none":"block";
    }
    [].forEach.call(chips.querySelectorAll(".chip"),function(b){
      b.addEventListener("click",function(){
        active=b.getAttribute(opts.chipAttr);
        [].forEach.call(chips.querySelectorAll(".chip"),function(x){x.setAttribute("aria-pressed",x===b?"true":"false");});
        run();
      });
    });
    input.addEventListener("input",run);
    run();
    // Opening a link to one case shows it even when a filter is on.
    function reveal(){var id=location.hash.slice(1),el=id&&document.getElementById(id);if(el&&el.hidden){input.value="";active="all";[].forEach.call(chips.querySelectorAll(".chip"),function(x){x.setAttribute("aria-pressed",x.getAttribute(opts.chipAttr)==="all"?"true":"false");});run();el.scrollIntoView();}}
    window.addEventListener("hashchange",reveal);
  }
  filterer({input:"cq",chips:"rchips",items:"#caseList .case",attr:"data-r",chipAttr:"data-r",count:"ccount",empty:"cempty",noun:"cases"});
  filterer({input:"gq",chips:"gchips",items:"#glossTable tbody tr",attr:"data-s",chipAttr:"data-s",count:"gcount",empty:"gempty",noun:"terms"});

  var tabs=[].slice.call(document.querySelectorAll('.rtabs [role="tab"]'));
  function select(t,focus){tabs.forEach(function(x){var on=x===t;x.setAttribute("aria-selected",on?"true":"false");x.tabIndex=on?0:-1;document.getElementById(x.getAttribute("aria-controls")).hidden=!on;});if(focus)t.focus();}
  tabs.forEach(function(t,i){
    t.addEventListener("click",function(){select(t);});
    t.addEventListener("keydown",function(e){var n=null;if(e.key==="ArrowRight"||e.key==="ArrowDown")n=tabs[(i+1)%tabs.length];if(e.key==="ArrowLeft"||e.key==="ArrowUp")n=tabs[(i-1+tabs.length)%tabs.length];if(n){e.preventDefault();select(n,true);}});
  });
})();
