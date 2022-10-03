export function TrapNationCopy(ctx) {
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
      analyser.fftSize = 8192;
      analyser.minDecibels = -61;
      analyser.maxDecibels = -23;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const numOfBars = 35;

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);

        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2 - 10,
          Math.max(dataArray[10] / 3, 60),
          0,
          Math.PI * 2
        );
        ctx.fill();

        for (let i = 0; i < numOfBars; i++) {
          ctx.save();
          ctx.translate(
            canvas.width / 2,
            canvas.height / 2
          );
          ctx.scale(1, -1);
          ctx.rotate(
            (180 / numOfBars) * i * (Math.PI / 180)
          );
          ctx.fillRect(0, 0, 2, dataArray[i] * 0.7);
          ctx.restore();
          ctx.save();
          ctx.translate(
            canvas.width / 2,
            canvas.height / 2
          );
          ctx.scale(1, -1);
          ctx.rotate(
            (180 / numOfBars) * -i * (Math.PI / 180)
          );
          ctx.fillRect(0, 0, 2, dataArray[i] * 0.7);
          ctx.restore();
        }
        requestAnimationFrame(render);
      }

      render();
    });
}
