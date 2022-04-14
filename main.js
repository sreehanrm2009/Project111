Webcam.set({
      width: 350,
      height: 300,
      image_format: 'png',
      png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
      Webcam.snap(function (data_uri) {
            document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
      });
}
console.log('ML5 Version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M-KbKV65s/model.json', modelLoaded);