(function() {
ApplyCSS();

function ApplyCSS() {
var styles = document.createElement("style");
styles.innerHTML=`
/* Temporary fixes. THESE WILL NOT WORK THE NEXT TIME YOUTUBE UPDATES ITS CODE. */
ytd-watch-metadata {
  display: none !important;
}
#meta-contents[hidden], #info-contents[hidden] {
  display: block !important;
}


/* Permanent fixes. For when the temporary fixes stop working. */
/* Removes second comment section, */
#comment-teaser.ytd-watch-metadata {
display: none;
}
/* Removes border around creator's name and sub button. NOTE: This part doesn't work anymore, but keeping it for now just in case it starts working again. */
#owner.ytd-watch-metadata {
border: none;
}
/* Removes border around creator's name and sub button. */
ytd-watch-metadata:not([modern-metapanel]) #owner.ytd-watch-metadata {
border: none;
}
/* Reverts the video title font (for when the temporary fix stops working) */
ytd-watch-metadata[smaller-yt-sans-light-title] h1.ytd-watch-metadata {
  font-family: "Roboto",sans-serif;
  font-weight: 400;
  font-size: 18px;
}
/* Reverts the video title font (will only work as long as the temporary fix works) */
ytd-video-primary-info-renderer[use-yt-sans20-light] .title.ytd-video-primary-info-renderer {
  font-family: "Roboto",sans-serif;
  font-weight: 400;
  font-size: 18px;
}
/* Removes the bold letters on upload date and view count. */
.yt-formatted-string[style-target="bold"] {
  font-weight: 400;
}`
document.head.appendChild(styles);
}
})();
