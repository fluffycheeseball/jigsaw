import { Component, Directive, ElementRef, AfterViewInit, Input, Renderer, ContentChild, ViewChildren, ViewChild ,HostListener } from '@angular/core';

@Component({
    selector: 'smiley',
    template: '<canvas #canvas></canvas>'
})
export class SmileyDirective {
    @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
    private left: number;
    private top: number;
    private dragon: boolean;
    private last: any;
    private imgW :number;
    private imgH :number;
    private Erase: ImageData;
    @Input('size') size: number;
    @Input('color') color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
      //   console.log("SmileyDirective constructor: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }

     @HostListener('mousedown', ['$event'])
     mouseDown(event: MouseEvent) {
         this.dragon = true;
         this.imgW = 226;
         this.imgH = 226;
  } 

    @HostListener('mouseup') mouseUp(event: MouseEvent) {
           this.dragon = false;
    } 

    @HostListener('mousemove', ['$event']) 
    mouseMove(event: MouseEvent) {
        if(this.dragon) {
            this.removeOld();
        
            this.draw(this.last.x,this.last.y)
            this.last = this.getMousePos(event);
        }
    } 

    ngOnInit() {
       //  console.log("SmileyDirective ngOnInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
    }

    ngAfterViewInit() {
         console.log("SmileyDirective ngAfterViewInit: size: ", this.size, ", color: ", this.color, ', this.canvas: ', this.canvas);
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = 5000;
        this.canvas.height = 4000;
        this.draw(0,0);
    }

    getMousePos( evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
          x: Math.round(evt.clientX - rect.left),
          y: Math.round(evt.clientY - rect.top)
        };
    } 

    draw(left: number, top:number) {
        if (this.canvas.getContext) {
            let canvas = this.canvas;
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                var imageObj = new Image();
                imageObj.onload = function() {
                     ctx.drawImage(imageObj, left, top);
                      return 
                };
            imageObj.src = '../../biggrin.png';
            }
        }
    }

    LoadImage

  getErase (ctx: any){
  if (this.Erase == undefined) {
       this.Erase = ctx.createImageData(226,226);
        for (var i = this.Erase.data.length; --i >= 0; )
        this.Erase.data[i] = 0;
  }
  }

   removeOld() {
        if (this.canvas.getContext) {
            let canvas = this.canvas;
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }
            if(this.last == undefined)
            {
                this.last = new Object();
                this.last.x = 0;
                this.last.y = 0;
            }
this.getErase(ctx)
        ctx.putImageData(this.Erase, this.last.x, this.last.y);
        }


   }
   
}