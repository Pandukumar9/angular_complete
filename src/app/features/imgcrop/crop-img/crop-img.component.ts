import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCropperComponent, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-img',
  imports: [ImageCropperComponent],
  templateUrl: './crop-img.component.html',
  styleUrl: './crop-img.component.scss'
})
export class CropImgComponent {
  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl  = '';

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  fileChangeEvent(event: Event): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    const safeUrl = event.objectUrl ?? ''; // Default to an empty string if null or undefined
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(safeUrl);
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
