export function AudioBars(ctx) {
  const audio = document.getElementById('audio1');

  document
    .querySelector('#acceptBtn')
    .addEventListener('click', function () {
      console.log('analyser started');
      const audioCtx = new AudioContext({
        sampleRate: 40000,
        latencyHint: 'interactive'
      });
      let audioSource =
        audioCtx.createMediaElementSource(audio);
      let analyser = audioCtx.createAnalyser();
      audioSource.connect(analyser);
      analyser.connect(audioCtx.destination);
      // 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, and 32768
      analyser.fftSize = 64;
      analyser.minDecibels = -85;
      analyser.maxDecibels = 0;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = canvas.width / dataArray.length;

      function render() {
        console.log(audioCtx.baseLatency);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        for (let i = 0; i < dataArray.length; i++) {
          const barHeight =
            (dataArray[i] / 255) * canvas.height;
          ctx.fillRect(
            barWidth * i,
            canvas.height - barHeight,
            barWidth,
            barHeight
          );
        }
        requestAnimationFrame(render);
      }

      render();
    });
}
