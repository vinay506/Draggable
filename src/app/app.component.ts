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

  colsList = ["sampleCard", "sampleCard1", "sampleCard2", "sampleCard3", "sampleCard4", "sampleCard5"];
  currentlyDragging= '';

  ngOnInit() {
    this.initialize()
  }
  
  drag(event){
    this.currentlyDragging = (<HTMLDivElement>event.target).id;
  }

  initialize() {

    $(document).ready(() => {
      var ele1 = document.getElementById("sampleCard1");
      var ele = document.getElementById("sampleCard");
      var ele2 = document.getElementById("sampleCard2");
      var ele3 = document.getElementById("sampleCard3");
      var ele4 = document.getElementById("sampleCard4");
      var ele5 = document.getElementById("sampleCard5");


      ele.addEventListener('dragstart',(event)=>{
        this.drag(event);
      })

      ele1.addEventListener('dragstart',(event)=>{
        this.drag(event);
      })

      ele2.addEventListener('dragstart',(event)=>{
        this.drag(event);
      })

      ele3.addEventListener('dragstart',(event)=>{
        this.drag(event);
      })

      ele4.addEventListener('dragstart',(event)=>{
        this.drag(event);
      })
      ele5.addEventListener('dragstart',(event)=>{
        this.drag(event);
      })

      ele.addEventListener('mousedown', function (event) {
        const targetEle = event.target;
        $(targetEle).attr('draggable', 'true')
      });
      ele.addEventListener('mouseup', function (event) {
        const targetEle = event.target;
        $(targetEle).removeAttr('draggable')
      });

      ele1.addEventListener('mousedown', function (event) {
        const targetEle = event.target;
        $(targetEle).attr('draggable', 'true')
      });
      ele1.addEventListener('mouseup', function (event) {
        const targetEle = event.target;
        $(targetEle).removeAttr('draggable')
      });


      ele2.addEventListener('mousedown', function (event) {
        const targetEle = event.target;
        $(targetEle).attr('draggable', 'true')
      });
      ele2.addEventListener('mouseup', function (event) {
        const targetEle = event.target;
        $(targetEle).removeAttr('draggable')
      });


      ele3.addEventListener('mousedown', function (event) {
        const targetEle = event.target;
        $(targetEle).attr('draggable', 'true')
      });
      ele3.addEventListener('mouseup', function (event) {
        const targetEle = event.target;
        $(targetEle).removeAttr('draggable')
      });

      ele4.addEventListener('mousedown', function (event) {
        const targetEle = event.target;
        $(targetEle).attr('draggable', 'true')
      });
      ele4.addEventListener('mouseup', function (event) {
        const targetEle = event.target;
        $(targetEle).removeAttr('draggable')
      });

      ele5.addEventListener('mousedown', function (event) {
        const targetEle = event.target;
        $(targetEle).attr('draggable', 'true')
      });
      ele5.addEventListener('mouseup', function (event) {
        const targetEle = event.target;
        $(targetEle).removeAttr('draggable')
      });

      /**
       *  Add DragEnd event to elements
       * 
       */

      ele.addEventListener("dragend", (event) => {
        this.onDragEnd(event);
      });

      ele1.addEventListener("dragend", (event) => {
        this.onDragEnd(event);
      });

      ele2.addEventListener("dragend", (event) => {
        this.onDragEnd(event);
      });

      ele3.addEventListener("dragend", (event) => {
        this.onDragEnd(event);
      });

      ele4.addEventListener("dragend", (event) => {
        this.onDragEnd(event);
      });

      ele5.addEventListener("dragend", (event) => {
        this.onDragEnd(event);
      });


      /**
     *  Add Drag enter event to elements
     * 
     */


      ele.addEventListener("dragenter", (event) => {
        this.onDragEnter(event);
      },true);

      ele1.addEventListener("dragenter", (event) => {
        this.onDragEnter(event);
      },true);


      ele2.addEventListener("dragenter", (event) => {
        this.onDragEnter(event);
      },true);

      ele3.addEventListener("dragenter", (event) => {
        this.onDragEnter(event);
      },true);

      ele4.addEventListener("dragenter", (event) => {
        this.onDragEnter(event);
      },true);

      ele5.addEventListener("dragenter", (event) => {
        this.onDragEnter(event);
      },true);





    });
  }


  onDragEnd(event) {
    let targetEle = event.target;
    const offset = $(targetEle).offset();
    const offsetWidth = (<HTMLDivElement>targetEle).offsetWidth;
    const pos = event.clientX - offsetWidth / 2;
    $(targetEle).offset({ left: pos });
  }


  onDragEnter(event) {
    var targetEle = event.target;
    if (this.isColCard()) {

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

  }

  isColCard() {
   
    return this.colsList.some(item => {
      return (item === this.currentlyDragging);
    })
  }
}




