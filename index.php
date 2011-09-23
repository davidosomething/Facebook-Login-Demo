<!doctype html>
<!--[if IE 7]><html class="no-js ie7 oldie" lang="en"><![endif]-->
<!--[if IE 8]><html class="no-js ie8 oldie" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"><!--<![endif]-->
<head><meta charset="utf-8">
  <title>Website content based on FB profile</title>
  <meta name="description" content="Demo site using FB profile information to cater tailored content.">
  <meta name="author" content="@davidosomething">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css">
  <!-- end CSS-->

  <script src="js/libs/modernizr-2.0.6.min.js"></script>
</head>
<body>
  <div id="container">
    <header>

    </header>
    <div id="main" role="main">

      <section id="custom">
        <h1>Custom Implementation</h1>
        <article id="custom-login">
          <h1>Login</h1>
          <p class="logged-out-only">
           <span class="smallcaps">Login to this page</span> and I'll
           automatically tailor it to fit your interests!
          </p>

          <div id="custom-login-options">
            <button id="custom-login-options-login" class="logged-out-only">Log me in!</button>
            <button id="custom-login-options-logout" class="logged-in-only">Log out</button>
          </div>
        </article>

        <article id="user_info" class="logged-in-only">
          <h1>Logged in as</h1>
          <div class="populate"></div>
        </article>

        <article id="user_status" class="logged-in-only">
          <h1>Status</h1>
          <div class="populate"></div>
        </article>
      </section>

      <section id="social-plugins">
        <h1>Social Plugins</h1>

        <article>
          <h1>Login Button</h1>
          <div class="fb-login-button"
            data-show-faces="true"
            data-width="200"
            data-max-rows="1"
            data-perms="user_photos,user_interests,user_likes,user_photo_video_tags,read_stream,user_about_me,user_activities,user_birthday,user_checkins,user_education_history,user_events,user_groups,user_hometown,user_interests,user_likes,user_location,user_online_presence,user_photos,user_relationship_details,user_relationships,user_religion_politics,user_status,user_videos,user_website,user_work_history,email,"
          ></div>
        </article>

        <article>
          <h1>Like Button</h1>
          <div class="fb-like" data-send="true" data-width="450" data-show-faces="true"></div>
        </article>
      </section>

    </div>
    <footer>

    </footer>
  </div> <!--! end of #container -->

  <div id="fb-root"></div>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.6.4.min.js"><\/script>')</script>

  <!-- scripts concatenated and minified via ant build script-->
  <script defer src="js/plugins.js"></script>
  <script defer src="js/script.js"></script>
  <!-- end scripts-->

  <?php // include 'partials/ga.php'; ?>
  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
</body>
</html>
