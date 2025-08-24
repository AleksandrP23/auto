const video1 = new GraphLazyVideo("https://rutube.ru/play/embed/2f2e170cdc261a0ec45272505cb9773b/", {
  container: document.getElementById("video-1")
});

const video2 = new GraphLazyVideo("https://vkvideo.ru/video_ext.php?oid=-221125211&id=456244475&hash=c2d18c5b10747b39", {
  container: document.getElementById("video-2")
});

const video3 = new GraphLazyVideo("https://dzen.ru/embed/vJesfkIsc-gw", {
  container: document.getElementById("video-3"),
});

const video4 = new GraphLazyVideo("https://www.youtube.com/embed/4P7lPJr3NuA?si=eidyYEGpiOUYsTMM", {
  container: document.getElementById("video-4"),
});

const video5 = new GraphLazyVideo("video-ex.mp4", {
  container: document.getElementById("video-5"),
  isFile: true,
});
