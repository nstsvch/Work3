// +/-
$('.minus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val(), 10);

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('.plus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val(), 10);

    if (value < 100) {
        value = value + 1;
    } else {
        value = Number.MAX_SAFE_INTEGER; /*Согласно ширине макета число больше трехначного не предусмотрено */
    }

    $input.val(value);
});

//Выбор ткани
let matt = document.getElementById("matt");
let glanc = document.getElementById("glanc");
let satin = document.getElementById("satin");
let tkan = document.getElementById("tkan");
let material_btn = document.querySelectorAll('.type-link');

$(material_btn[0]).on('click', function () {
    matt.style.visibility = 'visible';
    glanc.style.visibility = 'hidden';
    satin.style.visibility = 'hidden';
    tkan.style.visibility = 'hidden';
});
$(material_btn[1]).on('click', function () {
    matt.style.visibility = 'hidden';
    glanc.style.visibility = 'visible';
    satin.style.visibility = 'hidden';
    tkan.style.visibility = 'hidden';
});
$(material_btn[2]).on('click', function () {
    matt.style.visibility = 'hidden';
    glanc.style.visibility = 'hidden';
    satin.style.visibility = 'visible';
    tkan.style.visibility = 'hidden';
});
$(material_btn[3]).on('click', function () {
    matt.style.visibility = 'hidden';
    glanc.style.visibility = 'hidden';
    satin.style.visibility = 'hidden';
    tkan.style.visibility = 'visible';
});

//Нажатая кнопка
$(function () {
    $(".type-link").click(function () {
        $(this).toggleClass("pressed");
        if ($(this).hasClass("pressed")) {
            $(this).siblings(".type-link").removeClass("pressed");
        }
    });
    $(".producer-link").click(function () {
        $(this).toggleClass("pressed");
        if ($(this).hasClass("pressed")) {
            $(this).siblings(".producer-link").removeClass("pressed");
        }
    });
});

//Сохранение результата в итоговую стоимость
const Producers = {
    CLASSIC: 140,
    PONGS: 390,
    EVOLUTION: 290,
    TEQTUM: 440,
    PREMIUM: 190,
    LUMFER: 660,
    COLD_STRETCH: 390,
    D_PREMIUM: 140,
    CLIPSO: 390,
    CERUTTI: 290,
};

class Price {
    producer = 0;
    square = 0;
    angle = 4;
    anglecount = 0; 
    lamp = 0;
    lustra = 0;
    amount = 0;

    calcAndSetProducer(value) {
        this.producer = value;
        this.calc();
    }

    calcAndDecSquare() {
        if (this.square <= 0) {
            return;
        }
        this.square -= 1;
        this.calc();
    }

    calcAndIncSquare() {
        this.square += 1;
        this.calc();
    }

    calcAndDecAngle() {
        if (this.angle >= 1){
        this.angle--;

            if (this.angle <= 3) {
                return;   
            }
            else {
                this.calc();
            }
        }
        console.log(this.angle);
    }

    calcAndIncAngle() {     
        this.angle++; 
        if (this.angle > 4) {
            this.calc();    
        }

        console.log(this.angle);
    }

    calcAndDecLamp() {
        if (this.lamp <= 0) {
            return;
        }
        this.lamp -= 1;
        this.calc();
    }

    calcAndIncLamp() {
        this.lamp += 1;
        this.calc();
    }

    calcAndDecLustra() {
        if (this.lustra <= 0) {
            return;
        }
        this.lustra -= 1;
        this.calc();
    }

    calcAndIncLustra() {
        this.lustra += 1;
        this.calc();
    }

    calc() {
        
        this.amount = this.producer * this.square + (this.angle - 4) * 180 + this.lamp * 290 + this.lustra * 450;
        document.getElementById("result").innerHTML = this.amount;
    }
}

var price = new Price();

