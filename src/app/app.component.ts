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
                    fill_bio_about_me();
                },1000)
            },
          });
        
        function fill_bio_about_me(){
            $(".bio_element").typed({
                showCursor: false,
                stringsElement: $('#typed-about-me'),
                callback: function() {                    
                    setTimeout(function(){
                        $(".bio_element").typed({strings: [""], showCursor: false,});
                        setTimeout(function(){
                            fill_bio_work_history();
                        },1000)
                    },2000)
                }
            })
        }
        
        function fill_bio_work_history(){
            $(".bio_element").typed({
                showCursor: false,
                stringsElement: $('#typed-work'),
                callback: function() {                    
                    setTimeout(function(){
                        $(".bio_element").typed({strings: [""], showCursor: false,});
                        setTimeout(function(){
                            fill_bio_social();
                        },1000)
                    },2000)
                }
            })
        }
        
        function fill_bio_social(){
            $(".bio_element").typed({
                showCursor: false,
                stringsElement: $('#typed-social'),
                callback: function() {
                    $('.typed-cursor').css("display","none");
                    $('.social_container').css("display", "block");
                }
            })
        }
        
    }
}