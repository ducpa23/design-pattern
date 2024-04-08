abstract class ImageType {
  protected viewer: ImageViewer;
  constructor(viewer: ImageViewer) {
    this.viewer = viewer;
  }
}

interface ImageViewer { 
  viewImage(fileType: string, fileName: string): void
}

class WindowsViewer implements ImageViewer {
  viewImage(fileType: string, fileName: string): void {
    console.log(`Windows: ${fileType} ${fileName}`);
  }
}

class LinuxViewer implements ImageViewer {
  viewImage(fileType: string, fileName: string): void {
    console.log(`Linux: ${fileType} ${fileName}`);
  }
}

class JPGImage extends ImageType {
  display() {
    this.viewer.viewImage('JPG', 'image.jpg');
  }
}

class PNGImage extends ImageType {
  display() {
    this.viewer.viewImage('PNG', 'image.png');
  }
}

const windowsViewer = new WindowsViewer();
const linuxViewer = new LinuxViewer();

const jpgImage = new JPGImage(windowsViewer);
jpgImage.display();
const pngImage = new PNGImage(linuxViewer);
pngImage.display();