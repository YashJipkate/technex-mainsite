import { Injectable } from '@angular/core';
import iziToast from 'izitoast';

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  success_toast(title, message) {
    iziToast.success({
        title: title,
        message: message,
        position: 'bottomCenter'
    });
  }
  error_toast(title, message) {
    iziToast.error({
        title: title,
        message: message,
        position: 'bottomCenter'
    });
  }
}
