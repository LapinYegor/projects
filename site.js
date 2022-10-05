function refreshPage(){
  window.location.reload();
}

$(document).ready(function() {
  $('#one').click(function() {
      $('#myVideoOne').css('display', 'flex');
      $('#myVideoThree').css('display', 'none');
      $('#myVideoFour').css('display', 'none');
  });
  $('#three').click(function() {
      $('#myVideoOne').css('display', 'none');
      $('#myVideoThree').css('display', 'flex');
      $('#myVideoFour').css('display', 'flex');
  });
});


$(document).ready(function() {
  $('#two').click(function() {
      $('#myVideoOne').css('display', 'none');
      $('#myVideoThree').css('display', 'flex');
      $('#myVideoFour').css('display', 'none');
  });
  $('#three').click(function() {
      $('#myVideoOne').css('display', 'none');
      $('#myVideoThree').css('display', 'flex');
      $('#myVideoFour').css('display', 'flex');
  });
});

$(document).ready(function() {
  $('#seven').click(function() {
      $('#myVideoTwo').css('display', 'flex');
      $('#myVideoSix').css('display', 'none');
      $('#myVideoFive').css('display', 'none');
  });
  $('#six').click(function() {
      $('#myVideoTwo').css('display', 'none');
      $('#myVideoSix').css('display', 'flex');
      $('#myVideoFive').css('display', 'flex');
  });
});


$(document).ready(function() {
  $('#six').click(function() {
      $('#myVideoTwo').css('display', 'none');
      $('#myVideoSix').css('display', 'flex');
      $('#myVideoFive').css('display', 'none');
  });
  $('#five').click(function() {
      $('#myVideoTwo').css('display', 'none');
      $('#myVideoSix').css('display', 'flex');
      $('#myVideoFive').css('display', 'flex');
  });
});

$(document).ready(function() {
    $('#eu-langphone').click(function() {
        $('.main-ua').css('display', 'none');
        $('.main-pl').css('display', 'none');
        $('.main-eu').css('display', 'block');
    });
    $('#ua-langphone').click(function() {
        $('.main-ua').css('display', 'block');
        $('.main-eu').css('display', 'none');
        $('.main-pl').css('display', 'block');
    });
});


$(document).ready(function() {
  $('#pl-langphone').click(function() {
      $('.main-ua').css('display', 'none');
      $('.main-eu').css('display', 'none');
      $('.main-pl').css('display', 'block');
  });
  $('#ua-langphone').click(function() {
      $('.main-ua').css('display', 'block');
      $('.main-eu').css('display', 'block');
      $('.main-pl').css('display', 'none');
  });
});

$(document).ready(function() {
  $('#eu-lang').click(function() {
      $('.main-ua').css('display', 'none');
      $('.main-pl').css('display', 'none');
      $('.main-eu').css('display', 'flex');
  });
  $('#ua-lang').click(function() {
      $('.main-ua').css('display', 'flex');
      $('.main-eu').css('display', 'none');
      $('.main-pl').css('display', 'flex');
  });
});


$(document).ready(function() {
$('#pl-lang').click(function() {
    $('.main-ua').css('display', 'none');
    $('.main-eu').css('display', 'none');
    $('.main-pl').css('display', 'flex');
});
$('#ua-lang').click(function() {
    $('.main-ua').css('display', 'flex');
    $('.main-eu').css('display', 'flex');
    $('.main-pl').css('display', 'none');
});
});


$(document).ready(function() {
    $('#eu-lang').click(function() {
        $('.port-ua').css('display', 'none');
        $('.port-pl').css('display', 'none');
        $('.port-eu').css('display', 'inline-table');
    });
    $('#ua-lang').click(function() {
        $('.port-ua').css('display', 'inline-table');
        $('.port-pl').css('display', 'inline-table');
        $('.port-eu').css('display', 'none');
    });
});


$(document).ready(function() {
  $('#pl-lang').click(function() {
      $('.port-ua').css('display', 'none');
      $('.port-pl').css('display', 'inline-table');
      $('.port-eu').css('display', 'none');
  });
  $('#ua-lang').click(function() {
      $('.port-ua').css('display', 'inline-table');
      $('.port-pl').css('display', 'none');
      $('.port-eu').css('display', 'inline-table');
  });
});

function otherbtnon() {
  document.getElementById("overlayforonor").style.display = "block";
}

function otherbtnoff() {
  document.getElementById("overlayforonor").style.display = "none";
}

function statetextonone() {
  document.getElementById("overlayone").style.display = "block";
}

function statetextoffone() {
  document.getElementById("overlayone").style.display = "none";
}

function portphoneonone() {
  document.getElementById("overlayportone").style.display = "block";
}

function portphoneoffone() {
  document.getElementById("overlayportone").style.display = "none";
}

function portphoneontwo() {
  document.getElementById("overlayporttwo").style.display = "block";
}

function portphoneofftwo() {
  document.getElementById("overlayporttwo").style.display = "none";
}

function portphoneonthree() {
  document.getElementById("overlayportthree").style.display = "block";
}

function portphoneoffthree() {
  document.getElementById("overlayportthree").style.display = "none";
}

function onone() {
  document.getElementById("overlayone").style.display = "block";
}

function offone() {
  document.getElementById("overlayone").style.display = "none";
}

function ontwo() {
  document.getElementById("overlaytwo").style.display = "block";
}

function offtwo() {
  document.getElementById("overlaytwo").style.display = "none";
}

function onthree() {
  document.getElementById("overlaythree").style.display = "block";
}

function offthree() {
  document.getElementById("overlaythree").style.display = "none";
}

function onfour() {
  document.getElementById("overlayfour").style.display = "block";
}

function offfour() {
  document.getElementById("overlayfour").style.display = "none";
}

function onfive() {
  document.getElementById("overlayfive").style.display = "block";
}

function offfive() {
  document.getElementById("overlayfive").style.display = "none";
}

function onsix() {
  document.getElementById("overlaysix").style.display = "block";
}

function offsix() {
  document.getElementById("overlaysix").style.display = "none";
}

function onseven() {
  document.getElementById("overlayseven").style.display = "block";
}

function offseven() {
  document.getElementById("overlayseven").style.display = "none";
}

function oneight() {
  document.getElementById("overlayeight").style.display = "block";
}

function offeight() {
  document.getElementById("overlayeight").style.display = "none";
}

function onnine() {
  document.getElementById("overlaynine").style.display = "block";
}

function offnine() {
  document.getElementById("overlaynine").style.display = "none";
}

function onten() {
  document.getElementById("overlayten").style.display = "block";
}

function offten() {
  document.getElementById("overlayten").style.display = "none";
}

function oneleven() {
  document.getElementById("overlayeleven").style.display = "block";
}

function offeleven() {
  document.getElementById("overlayeleven").style.display = "none";
}

function ontwelve() {
  document.getElementById("overlaytwelve").style.display = "block";
}

function offtwelve() {
  document.getElementById("overlaytwelve").style.display = "none";
}

function onthirteen() {
  document.getElementById("overlaythirteen").style.display = "block";
}

function offthirteen() {
  document.getElementById("overlaythirteen").style.display = "none";
}

function onfourteen() {
  document.getElementById("overlayfourteen").style.display = "block";
}

function offfourteen() {
  document.getElementById("overlayfourteen").style.display = "none";
}

function onfifteen() {
  document.getElementById("overlayfifteen").style.display = "block";
}

function offfifteen() {
  document.getElementById("overlayfifteen").style.display = "none";
}
function onsixteen() {
  document.getElementById("overlaysixteen").style.display = "block";
}

function offsixteen() {
  document.getElementById("overlaysixteen").style.display = "none";
}
function onseventeen() {
  document.getElementById("overlayseventeen").style.display = "block";
}

function offseventeen() {
  document.getElementById("overlayseventeen").style.display = "none";
}
function oneightteen() {
  document.getElementById("overlayeightteen").style.display = "block";
}

function offeightteen() {
  document.getElementById("overlayeightteen").style.display = "none";
}