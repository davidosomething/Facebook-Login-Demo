(function(window, $, undefined) {
  var my = window.interested = {
    fb : {
      graphUrl : 'http://graph.facebook.com/',
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
            my.fb.showUser();
            my.fb.showUserStatus();
          } else {
            // no user session available, someone you dont know

            // TODO: should move these out for performance...
            my.fb.userId = null;
            my.fb.accessToken = null;

            my.fb.logoutButton.hide();
            my.fb.loginButton.show();
            $('body').removeClass('logged-in').addClass('logged-out'); // TODO: just do a toggle
            my.fb.clearUser();
          }
        });
      },

      /**
       *
       */
      showUser : function() {
        FB.api('/me', function(response) {
          /* sample response:
            first_name:   "Luffy"
            gender:       "male"
            id:           "563133536"
            last_name:    "Khyuzo"
            link:         "http://www.facebook.com/profile.php?id=563133536"
            locale:       "en_US"
            name:         "Luffy Khyuzo"
            timezone:     -4
            updated_time: "2011-04-18T22:37:25+0000"
           */
          var result = '<a href="' + response.link + '" target="_blank" rel="me"><img src="' + my.fb.graphUrl + response.id + '/picture" alt="' + response.name +  '" />' + response.name + '</a> (' + response.id + ')';
          result += '<dl>';
          if (response.email)    result += '<dt>Email:</dt><dd><a href="mailto:' + response.email + '">' + response.email + '</a></dd>';
          if (response.website)  result += '<dt>Website:</dt><dd><a href="' + response.website + '" target="_blank">' + response.website + '</a></dd>';
          if (response.gender)   result += '<dt>Gender:</dt><dd>' + response.gender + '</dd>';
          if (response.birthday) result += '<dt>Birthday:</dt><dd>' + response.birthday + '</dd>';
          if (response.bio)      result += '<dt>Bio:</dt><dd>' + response.bio + '</dd>';
          if (response.relationship_status) result += '<dt>Relationship Status:</dt><dd>' + response.relationship_status + '</dd>';
          if (response.quotes)   result += '<dt>Favorite Quotes:</dt><dd>' + response.quotes + '</dd>';
          if (response.hometown) result += '<dt>Hometown:</dt><dd>' + response.hometown.name + '</dd>';
          if (response.location) result += '<dt>Location:</dt><dd>' + response.location.name + '</dd>';
          if (response.languages) {
            $.each(response.languages, function(index, language) {
              result += '<dt>Speaks:</dt><dd>' + language.name + '</dd>';
            });
          }
          if (response.work) {
            $.each(response.work, function(index, job) {
              result += '<dt>Employed:</dt><dd>';
              if (job.position.name) result += job.position.name + ' at ';
              result += job.employer.name;
              if (job.location.name) result += ' in ' + job.location.name;
              result += '</dd>';
            });
          }
          if (response.education) {
            $.each(response.education, function(index, education) {
              result += '<dt>Attended school at:</dt><dd>' + education.school.name + '</dd>';
            });
          }
          result += '</dl>';

          $('#user_info').find('div.populate').html(result);
        });
      },

      showUserStatus : function() {
        /* get user status */
        FB.api('/me/statuses', function(response) {
          var result = '';
          if (response.data.length) { // it's an array of statuses
            result += '<p id="user_status">' + response.data[0].message + '<small>' + response.data[0].updated_time + '</small></p>';
          }
          $('#user_status').find('div.populate').html(result);
        });
      },

      clearUser : function() {
        $('div.populate').html('');
      },

      initLogin : function() {
        // bind stuff
        my.fb.loginButton.click(function(e) {
          e.preventDefault();
          FB.login(function(response){}, {
            scope: $('.fb-login-button').first().data('perms')
          })
        });
        my.fb.logoutButton.click(function(e) {
          e.preventDefault();
          FB.logout(function(response) {
          });
        });
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

