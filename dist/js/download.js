function downloadCV() {
    fetch('../documents/cv.pdf')
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = 'leejin_resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert('cv file has downloaded!'); // or you know, something with better UX...
      })
      .catch((er) => alert(er));
}
