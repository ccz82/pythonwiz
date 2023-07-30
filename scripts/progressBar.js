// Set up a scroll event listener on the window object
window.onscroll = () => {updateProgressBar()};

// Update the progress bar based on the user's scrolling progress
function updateProgressBar() {
  // Get the current scroll position from the top of the page
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Calculate the total height of the page content (scrollable area)
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate the percentage of how much the user has scrolled
  const scrolled = (winScroll / height) * 100;

  // Update the width of the progress bar element (with id "myBar") to reflect the scrolling progress
  document.getElementById("progress").style.width = scrolled + "%";
}
