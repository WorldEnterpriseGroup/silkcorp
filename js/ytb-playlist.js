 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
         player = new YT.Player('player', {
           height: '480',
           width: '720',
           videoId: 'PLRokVXH5v4O0MJEyoBz8nXS1PP1O8mpn6',
           playerVars: {
               listType:'playlist',
               list: 'PLRokVXH5v4O0MJEyoBz8nXS1PP1O8mpn6',
                 'playsinline': 1
           },
           events: {
             'onReady': onPlayerReady,
             'onStateChange': onPlayerStateChange
           }
         });
       }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 100);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }

     // Change Playlist Function
       function changePlaylist(playlistId) {
           var i = 0;
           var interval = setInterval(function() {
               if (i < 10) {
                //    load the playlist
                   player.cuePlaylist({
                        playlist: playlistId,
                        index:i
                   });
               i++;
               console.log('i=' + i);
               } else {
                   i = 0;
                   // load the playlist
                   player.loadPlaylist({
                       list: playlistId,
                       index:i
                   });
        //            // exit the loop
                   clearInterval(interval);
                   console.log('Playlist changed');
                   console.log(playlistId);
               }
            }
           , 120);

       }

       // 4. The API will call this function when the video player is ready.
       function onPlayerReady(event) {
        //  event.target.playVideo();
       }
 
       var done = false;
       function onPlayerStateChange(event) {
         if (event.data == YT.PlayerState.PLAYING && !done) {
           setTimeout(stopVideo, 1);
           done = true;
         }
       }
       function stopVideo() {
         player.stopVideo();
       }