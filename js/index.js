
// skills animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    // It's visible. Add the animation class here!
    entry.target.classList.add('start-animation');
  }
});
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.start'));



// about animation
const watcher = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    // It's visible. Add the animation class here!
    entry.target.classList.add('begin-animation');
  }
});
});

// Tell the observer which elements to track
watcher.observe(document.querySelector('.begin'));


const beginner = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    // It's visible. Add the animation class here!
    entry.target.classList.add('bring-animation');
  }
});
});

// Tell the observer which elements to track
beginner.observe(document.querySelector('.bring'));























