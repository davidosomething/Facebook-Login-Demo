(function(window, $, undefined) {
  var my = window.interested = {
    fb : {
      appId : 209400265792528,

      userId : null,
      accessToken : null,

      loginButton : $('#custom-login-options-login'),
      logoutButton : $('#custom-login-options-logout'),

      showLogin : function() {
        FB.getLoginStatus(function(response) {
          if (response.authResponse) {
            // logged in and connected user, someone you know

            // TODO: should move these out for performance...
            my.fb.userId = response.authResponse.userID;
            my.fb.accessToken = response.authResponse.accessToken;

            my.fb.loginButton.hide();
            my.fb.logoutButton.show();
            $('body').removeClass('logged-out').addClass('logged-in'); // TODO: just do a toggle
          } else {
            // no user session available, someone you dont know

            // TODO: should move these out for performance...
            my.fb.userId = null;
            my.fb.accessToken = null;

            my.fb.logoutButton.hide();
            my.fb.loginButton.show();
            $('body').removeClass('logged-in').addClass('logged-out'); // TODO: just do a toggle
          }
        });
      },

      initLogin : function() {
        // bind stuff
        my.fb.loginButton.click(FB.login);
        my.fb.logoutButton.click(FB.logout);
        FB.Event.subscribe('auth.authResponseChange', my.fb.showLogin);

        // do stuff
        my.fb.showLogin();
      }
    },

    init : function() {
      var my = window.interested;
      my.fb.initLogin();
    }
  };

  window.fbAsyncInit = function() {
    FB.init({
      appId      : interested.fb.appId,
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true,  // parse XFBML
      channelUrl : 'http://examples.davidosomething.com/interested/channel.html', // Custom Channel URL
      oauth      : true //enables OAuth 2.0
    });
    $(interested.init); // run only after fb async loaded and document ready
  };
})(window, jQuery);

