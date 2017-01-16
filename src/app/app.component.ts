import {
  Component,
  OnInit,
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {

    public ngOnInit() {
        $('.delay').css("display","none");
        
        $(".intro_element").typed({
            strings: ["Hello! ^1000", "I'm Tyler."],
            startDelay: 1000,
            // time before backspacing
            backDelay: 500,
            // show cursor
            showCursor: false,
            typeSpeed: 40,
            // call when done callback function
            callback: function() {
                setTimeout(function(){
                    $('.typed-cursor').css("display","none");
                    $(".intro_element").css("text-decoration", "underline")
                    $('.delay').css("display","inline-block");
                    fill_bio_element();
                },1000)
            },
          });
        
        function fill_bio_element(){
            $(".bio_element").typed({
                showCursor: false,
                stringsElement: $('#typed-strings')
            });
        }
    }
}