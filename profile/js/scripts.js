const photobutt = document.getElementById("photo-butt");
const videobutt = document.getElementById("video-butt");
const webbutt = document.getElementById("web-butt");
const photobuttph = document.getElementById("photo-butt-ph");
const videobuttph = document.getElementById("video-butt-ph");
const webbuttph = document.getElementById("web-butt-ph");
const photo = document.getElementById("photo");
const video = document.getElementById("video");
const web = document.getElementById("web");
const wpart = document.getElementById("w-part")


// Event listener for web button
webbutt.addEventListener("click", function () {
    web.style.display = "block"; // Show web content
    photo.style.display = "none"; // Hide photo content
    video.style.display = "none"; // Hide video content

    webbutt.style.color = "pink"; // Highlight web button
    photobutt.style.color = "black"; // Reset photo button
    videobutt.style.color = "black"; // Reset video button
    document.body.style.background = "linear-gradient(to bottom right, #9d82a3, #6f5175)";
    wpart.style.backgroundColor = "#6f5175";

});

// Event listener for photo button
photobutt.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to bottom right, #0000ff, #000080)";
    wpart.style.backgroundColor = "rgb(0, 0, 128)";

    web.style.display = "none"; // Hide web content
    photo.style.display = "block"; // Show photo content
    video.style.display = "none"; // Hide video content

    photobutt.style.color = "pink"; // Highlight photo button
    webbutt.style.color = "black"; // Reset web button
    videobutt.style.color = "black"; // Reset video button
});

// Event listener for video button
videobutt.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to bottom right, #00ff00, #008000)";
    wpart.style.backgroundColor = "rgb(0, 128, 0)";
    


    web.style.display = "none"; // Hide web content
    photo.style.display = "none"; // Hide photo content
    video.style.display = "block"; // Show video content

    videobutt.style.color = "pink"; // Highlight video button
    photobutt.style.color = "black"; // Reset photo button
    webbutt.style.color = "black"; // Reset web button



});

webbuttph.addEventListener("click", function () {
    web.style.display = "block"; // Show web content
    photo.style.display = "none"; // Hide photo content
    video.style.display = "none"; // Hide video content

    webbuttph.style.color = "pink"; // Highlight web button
    photobuttph.style.color = "black"; // Reset photo button
    videobuttph.style.color = "black"; // Reset video button
    document.body.style.background = "linear-gradient(to bottom right, #9d82a3, #6f5175)";
    wpart.style.backgroundColor = "#6f5175";

});

// Event listener for photo button
photobuttph.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to bottom right, #0000ff, #000080)";
    wpart.style.backgroundColor = "rgb(0, 0, 128)";

    web.style.display = "none"; // Hide web content
    photo.style.display = "block"; // Show photo content
    video.style.display = "none"; // Hide video content

    photobuttph.style.color = "pink"; // Highlight photo button
    webbuttph.style.color = "black"; // Reset web button
    videobuttph.style.color = "black"; // Reset video button
});

// Event listener for video button
videobuttph.addEventListener("click", function () {
    document.body.style.background = "linear-gradient(to bottom right, #00ff00, #008000)";
    wpart.style.backgroundColor = "rgb(0, 128, 0)";
    


    web.style.display = "none"; // Hide web content
    photo.style.display = "none"; // Hide photo content
    video.style.display = "block"; // Show video content

    videobuttph.style.color = "pink"; // Highlight video button
    photobuttph.style.color = "black"; // Reset photo button
    webbuttph.style.color = "black"; // Reset web button



});