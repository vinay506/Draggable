import {
  Component,
  OnInit
} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DraggCols';
  ngOnInit() {
    this.initialize()
  }
  initialize() {

    $(document).ready(function () {
      var ele1 = document.getElementById("sampleCard1");
      var ele = document.getElementById("sampleCard");
      var ele2 = document.getElementById("sampleCard2");


      ele.addEventListener("dragend", function (event) {

        let targetEle = event.target;
        const offset = $(targetEle).offset();
        const offsetWidth = (<HTMLDivElement>targetEle).offsetWidth;
        const pos = event.clientX - offsetWidth / 2;
        $(targetEle).offset({ left: pos });

      });

      // ele.addEventListener('click',(event)=>{
      //   const target = event.target;
      //   const eleOffset = $(target).offset();
      //   console.log('offset on click:::',eleOffset);
      // })

      ele1.addEventListener("dragenter", function (event) {
        onDragEnter(event);
      });


      ele2.addEventListener("dragenter", function (event) {
        onDragEnter(event);
      });

      // ele1.addEventListener('drop', function (event) {
      //   console.log('event:::on drjop::', event);
      // })

    });
  }
}






function onDragEnter(event) {

  var targetEle = event.target;
  var offset = $(targetEle).offset();
  var offsetWidth = (<HTMLDivElement>targetEle).offsetWidth;
  var targeOffset = offset.left + offsetWidth / 2;

  if (event.clientX < targeOffset) {
    const pos = offset.left - offsetWidth - offsetWidth / 2 - 30
    $(targetEle).offset({ left: pos });

  } else if (event.clientX > targeOffset) {
    const pos = offset.left + offsetWidth + offsetWidth / 2 + 30
    $(targetEle).offset({ left: pos });

  }

}
