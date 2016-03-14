HomeLayout = React.createClass({
	componentDidMount() {
		this.consoleText(['Hey there.', "I'm Serg.", 'I am a developer from Toronto.'], 'text',['tomato','rebeccapurple','lightblue']);
		$('.open-overlay').click(function() {
     $('.open-overlay').css('pointer-events', 'none');
     var overlay_navigation = $('.overlay-navigation'),
       top_bar = $('.bar-top'),
       middle_bar = $('.bar-middle'),
       bottom_bar = $('.bar-bottom');

     overlay_navigation.toggleClass('overlay-active');
     if (overlay_navigation.hasClass('overlay-active')) {

       top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
       middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
       bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
       overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
       overlay_navigation.velocity('transition.slideLeftIn', {
         duration: 300,
         delay: 0,
         begin: function() {
           $('nav ul li').velocity('transition.perspectiveLeftIn', {
             stagger: 150,
             delay: 0,
             complete: function() {
               $('nav ul li a').velocity({
                 opacity: [1, 0],
               }, {
                 delay: 10,
                 duration: 140
               });
               $('.open-overlay').css('pointer-events', 'auto');
             }
           })
         }
       })

     } else {
       $('.open-overlay').css('pointer-events', 'none');
       top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
       middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
       bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
       overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
       $('nav ul li').velocity('transition.perspectiveRightOut', {
         stagger: 150,
         delay: 0,
         complete: function() {
           overlay_navigation.velocity('transition.fadeOut', {
             delay: 0,
             duration: 300,
             complete: function() {
               $('nav ul li a').velocity({
                 opacity: [0, 1],
               }, {
                 delay: 0,
                 duration: 50
               });
               $('.open-overlay').css('pointer-events', 'auto');
             }
           });
         }
       })
     }
   })
	},
	render() {
		return (
			<div>
				<div className="overlay-navigation">
				  <nav role="navigation">
				    <ul>
				      <li><a href="/" data-content="The beginning">Home</a></li>
				      <li><a href="/about" data-content="Curious?">About</a></li>
				      <li><a href="/skills" data-content="I got game">Skills</a></li>
				      <li><a href="/work" data-content="Only the finest">Works</a></li>
				      <li><a href="http://416serg.me" target="_blank" data-content="I write stuff">Blog</a></li>
				    </ul>
				  </nav>
				</div>
			  <div className="open-overlay">
			    <span className="bar-top"></span>
			    <span className="bar-middle"></span>
			    <span className="bar-bottom"></span>
			  </div>
				<div className="console-container">
					<span id="text"></span>
					<div className="console-underscore" id="console">&#95;</div>
				</div>
			</div>
		)
	},
	consoleText(words, id, colors) {
	if (colors === undefined) colors = ['#fff'];
	  var visible = true;
	  var con = document.getElementById('console');
	  var letterCount = 1;
	  var x = 1;
	  var waiting = false;
	  var target = document.getElementById(id)
	  target.setAttribute('style', 'color:' + colors[0])
	  window.setInterval(function() {

	    if (letterCount === 0 && waiting === false) {
	      waiting = true;
	      target.innerHTML = words[0].substring(0, letterCount)
	      window.setTimeout(function() {
	        var usedColor = colors.shift();
	        colors.push(usedColor);
	        var usedWord = words.shift();
	        words.push(usedWord);
	        x = 1;
	        target.setAttribute('style', 'color:' + colors[0])
	        letterCount += x;
	        waiting = false;
	      }, 1000)
	    } else if (letterCount === words[0].length + 1 && waiting === false) {
	      waiting = true;
	      window.setTimeout(function() {
	        x = -1;
	        letterCount += x;
	        waiting = false;
	      }, 1000)
	    } else if (waiting === false) {
	      target.innerHTML = words[0].substring(0, letterCount)
	      letterCount += x;
	    }
	  }, 120)
	  window.setInterval(function() {
	    if (visible === true) {
	      con.className = 'console-underscore hidden'
	      visible = false;

	    } else {
	      con.className = 'console-underscore'

	      visible = true;
	    }
	  }, 400)
	}
})