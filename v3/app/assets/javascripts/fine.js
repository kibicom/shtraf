/**
 * Created by ferios on 03.04.14.
 */
var regionsInfo = {22:{codes: [22], name: "Алтайский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 23:{codes: [23,93,123], name: "Краснодарский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 24:{codes: [24,124], name: "Красноярский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 25:{codes: [25,125], name: "Приморский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 26:{codes: [26], name: "Ставропольский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 27:{codes: [27], name: "Хабаровский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 28:{codes: [28], name: "Амурская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 29:{codes: [29,83], name: "Архангельская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 30:{codes: [30], name: "Астраханская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 31:{codes: [31], name: "Белгородская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 32:{codes: [32], name: "Брянская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 33:{codes: [33], name: "Владимирская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 34:{codes: [34], name: "Волгоградская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 35:{codes: [35], name: "Вологодская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 36:{codes: [36], name: "Воронежская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 52:{codes: [52,152], name: "Нижегородская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 37:{codes: [37], name: "Ивановская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 38:{codes: [38], name: "Иркутская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 06:{codes: [06], name: "Республика Ингушетия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 39:{codes: [39], name: "Калининградская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 69:{codes: [69], name: "Тверская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 40:{codes: [40], name: "Калужская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 41:{codes: [41], name: "Камчатский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 42:{codes: [42,142], name: "Кемеровская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 43:{codes: [43], name: "Кировская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 44:{codes: [44], name: "Костромская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 63:{codes: [63,163], name: "Самарская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 45:{codes: [45], name: "Курганская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 46:{codes: [46], name: "Курская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 78:{codes: [78,98,178], name: "Санкт-Петербург", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 47:{codes: [47], name: "Ленинградская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 48:{codes: [48], name: "Липецкая область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 49:{codes: [49], name: "Магаданская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 77:{codes: [77,97,99,177,199,197,777], name: "Москва", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 50:{codes: [50,90,150,190,750], name: "Московская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 51:{codes: [51], name: "Мурманская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 53:{codes: [53], name: "Новгородская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 54:{codes: [54,154], name: "Новосибирская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 55:{codes: [55], name: "Омская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 56:{codes: [56], name: "Оренбургская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 57:{codes: [57], name: "Орловская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 58:{codes: [58], name: "Пензенская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 59:{codes: [59,159], name: "Пермский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 60:{codes: [60], name: "Псковская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 61:{codes: [61,161], name: "Ростовская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 62:{codes: [62], name: "Рязанская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 64:{codes: [64], name: "Саратовская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 65:{codes: [65], name: "Сахалинская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 66:{codes: [66,96,196], name: "Свердловская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 67:{codes: [67], name: "Смоленская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 68:{codes: [68], name: "Тамбовская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 70:{codes: [70], name: "Томская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 71:{codes: [71], name: "Тульская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 72:{codes: [72,86,89,186], name: "Тюменская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 73:{codes: [73], name: "Ульяновская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 74:{codes: [74,174], name: "Челябинская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 75:{codes: [75], name: "Забайкальский край", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 87:{codes: [87], name: "Чукотский Автономный округ", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 76:{codes: [76], name: "Ярославская область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 01:{codes: [01], name: "Республика Адыгея", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 02:{codes: [02,102], name: "Республика Башкортостан", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 03:{codes: [03], name: "Республика Бурятия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 05:{codes: [05], name: "Республика Дагестан", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 07:{codes: [07], name: "Республика Кабардино-Балкария", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 04:{codes: [04], name: "Республика Алтай", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 08:{codes: [08], name: "Республика Калмыкия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 10:{codes: [10], name: "Республика Карелия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 11:{codes: [11], name: "Республика Коми", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 12:{codes: [12], name: "Республика Марий Эл", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 13:{codes: [13], name: "Республика Мордовия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 15:{codes: [15], name: "Республика Северная Осетия (Алания)", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 09:{codes: [09], name: "Республика Карачаево-Черкессия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 16:{codes: [16,116], name: "Республика Татарстан", methods: ["getFines","payFine","subscribe"]}, 17:{codes: [17], name: "Республика Тыва", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 18:{codes: [18], name: "Республика Удмуртия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 19:{codes: [19], name: "Республика Хакасия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 20:{codes: [20,95], name: "Республика Чечня", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 21:{codes: [21], name: "Республика Чувашия", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 14:{codes: [14], name: "Республика Саха /Якутия/", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}, 79:{codes: [79], name: "Еврейская Автономная область", methods: ["checkBeforePayment","getFines","subscribe","payFine"]}	};

$(function() {
    //    $(document).ready(function() {
//        $(".RegionNumber").autocomplete({
//            source: [{label: '01 - Республика Адыгея', value: '01'},{label: '02 - Республика Башкортостан', value: '02'},{label: '102 - Республика Башкортостан', value: '102'},{label: '03 - Республика Бурятия', value: '03'},{label: '04 - Республика Алтай', value: '04'},{label: '05 - Республика Дагестан', value: '05'},{label: '06 - Республика Ингушетия', value: '06'},{label: '07 - Республика Кабардино-Балкария', value: '07'},{label: '08 - Республика Калмыкия', value: '08'},{label: '09 - Республика Карачаево-Черкессия', value: '09'},{label: '10 - Республика Карелия', value: '10'},{label: '11 - Республика Коми', value: '11'},{label: '12 - Республика Марий Эл', value: '12'},{label: '13 - Республика Мордовия', value: '13'},{label: '14 - Республика Саха /Якутия/', value: '14'},{label: '15 - Республика Северная Осетия (Алания)', value: '15'},{label: '16 - Республика Татарстан', value: '16'},{label: '116 - Республика Татарстан', value: '116'},{label: '17 - Республика Тыва', value: '17'},{label: '18 - Республика Удмуртия', value: '18'},{label: '19 - Республика Хакасия', value: '19'},{label: '20 - Республика Чечня', value: '20'},{label: '95 - Республика Чечня', value: '95'},{label: '21 - Республика Чувашия', value: '21'},{label: '22 - Алтайский край', value: '22'},{label: '23 - Краснодарский край', value: '23'},{label: '93 - Краснодарский край', value: '93'},{label: '123 - Краснодарский край', value: '123'},{label: '24 - Красноярский край', value: '24'},{label: '124 - Красноярский край', value: '124'},{label: '25 - Приморский край', value: '25'},{label: '125 - Приморский край', value: '125'},{label: '26 - Ставропольский край', value: '26'},{label: '27 - Хабаровский край', value: '27'},{label: '28 - Амурская область', value: '28'},{label: '29 - Архангельская область', value: '29'},{label: '83 - Архангельская область', value: '83'},{label: '30 - Астраханская область', value: '30'},{label: '31 - Белгородская область', value: '31'},{label: '32 - Брянская область', value: '32'},{label: '33 - Владимирская область', value: '33'},{label: '34 - Волгоградская область', value: '34'},{label: '35 - Вологодская область', value: '35'},{label: '36 - Воронежская область', value: '36'},{label: '37 - Ивановская область', value: '37'},{label: '38 - Иркутская область', value: '38'},{label: '39 - Калининградская область', value: '39'},{label: '40 - Калужская область', value: '40'},{label: '41 - Камчатский край', value: '41'},{label: '42 - Кемеровская область', value: '42'},{label: '142 - Кемеровская область', value: '142'},{label: '43 - Кировская область', value: '43'},{label: '44 - Костромская область', value: '44'},{label: '45 - Курганская область', value: '45'},{label: '46 - Курская область', value: '46'},{label: '47 - Ленинградская область', value: '47'},{label: '48 - Липецкая область', value: '48'},{label: '49 - Магаданская область', value: '49'},{label: '50 - Московская область', value: '50'},{label: '90 - Московская область', value: '90'},{label: '150 - Московская область', value: '150'},{label: '190 - Московская область', value: '190'},{label: '750 - Московская область', value: '750'},{label: '51 - Мурманская область', value: '51'},{label: '52 - Нижегородская область', value: '52'},{label: '152 - Нижегородская область', value: '152'},{label: '53 - Новгородская область', value: '53'},{label: '54 - Новосибирская область', value: '54'},{label: '154 - Новосибирская область', value: '154'},{label: '55 - Омская область', value: '55'},{label: '56 - Оренбургская область', value: '56'},{label: '57 - Орловская область', value: '57'},{label: '58 - Пензенская область', value: '58'},{label: '59 - Пермский край', value: '59'},{label: '159 - Пермский край', value: '159'},{label: '60 - Псковская область', value: '60'},{label: '61 - Ростовская область', value: '61'},{label: '161 - Ростовская область', value: '161'},{label: '62 - Рязанская область', value: '62'},{label: '63 - Самарская область', value: '63'},{label: '163 - Самарская область', value: '163'},{label: '64 - Саратовская область', value: '64'},{label: '65 - Сахалинская область', value: '65'},{label: '66 - Свердловская область', value: '66'},{label: '96 - Свердловская область', value: '96'},{label: '196 - Свердловская область', value: '196'},{label: '67 - Смоленская область', value: '67'},{label: '68 - Тамбовская область', value: '68'},{label: '69 - Тверская область', value: '69'},{label: '70 - Томская область', value: '70'},{label: '71 - Тульская область', value: '71'},{label: '72 - Тюменская область', value: '72'},{label: '86 - Тюменская область', value: '86'},{label: '89 - Тюменская область', value: '89'},{label: '186 - Тюменская область', value: '186'},{label: '73 - Ульяновская область', value: '73'},{label: '74 - Челябинская область', value: '74'},{label: '174 - Челябинская область', value: '174'},{label: '75 - Забайкальский край', value: '75'},{label: '76 - Ярославская область', value: '76'},{label: '77 - Москва', value: '77'},{label: '97 - Москва', value: '97'},{label: '99 - Москва', value: '99'},{label: '177 - Москва', value: '177'},{label: '199 - Москва', value: '199'},{label: '197 - Москва', value: '197'},{label: '777 - Москва', value: '777'},{label: '78 - Санкт-Петербург', value: '78'},{label: '98 - Санкт-Петербург', value: '98'},{label: '178 - Санкт-Петербург', value: '178'},{label: '79 - Еврейская Автономная область', value: '79'},{label: '87 - Чукотский Автономный округ', value: '87'}],
//            minLength: 2,
//            select: function(event, ui) {
//                changeRegion2(ui.item);
//            }
////				change: function(event, ui) {
//            //					changeRegion2(ui.item);
//            //				}
//        });
//    });
    $(".RegionNumber").blur(function() {
        changeRegion2();
    });
    $(".Activable").focus(function() {
        $('.Activable').each(function() {
            $(this).closest('tr').removeClass('Active');
        });
        $(this).closest('tr').addClass('Active');
    });
    $(".Activable").focusout(function() {
        $(this).closest('tr').removeClass('Active');
    });
    $(".Hintable").focus(function() {
        var hint = $('table.CheckFinesForm tr.HintRow td.Hint .HintPlace');
        var t =  $(this);
        var tr = t.closest('tr');
        hint.css('margin-top', 0);
        $(".Hintable").each(function() {
            if ($(this) != t) {
                hint.removeClass($(this).attr('hintClass'));
            }
        });
        hint.addClass(t.attr('hintClass'));
        var hintParentTop = hint.parent().offset().top;
        var hintHeight = hint.outerHeight();
        var y = tr.offset().top + tr.height() / 2 - hintHeight / 2;
        y = Math.min(y, $('table.CheckFinesForm tr.Check').offset().top - hintHeight);
        y = Math.max(y, hintParentTop);
        y -=  hintParentTop;
        hint.css('margin-top', y);
    });
    $(".Hintable").focusout(function() {
        $('table.CheckFinesForm tr.HintRow td.Hint .HintPlace').removeClass($(this).attr('hintClass'));
    });
//хак, для фикса глюка с событием onchange в браузерах ie
//if ($.browser.msie) {
//    $(function() {$('input:radio, input:checkbox').click(function() { this.blur(); this.focus(); }); });
//}
    subscribeOnChange();
    changeRegion2();

    $(document).ready(function() {
        $(".FieldValue input.Text, .Subscribe input").focus(function() {
            if ($(this).hasClass('RegionNumber')) {
                return;
            }
            if ($(this).val() == $(this).attr('default')) {
                $(this).val('');
            }
            $(this).removeClass("idleField");
        });
        $(".FieldValue input.Text, .Subscribe input").blur(setDefault);
        $(".FieldValue input.Text, .Subscribe input").each(setDefault);
    });

    currentRegion = {code: 16, name: 'Республика Татарстан'};

    function changeRegion2(aRegion) {
        var reg = $.trim($(".RegionNumber").val());
        if (aRegion != undefined) {
            reg = aRegion.value;
        }
        reg = reg.replace(/[A-Za-z$-]/g, "");
        $(".RegionNumber").val(reg);
        var region = parseInt(reg, 10);
        if (isNaN(region) || !isFinite(region) || (region > 999)) {
            reg = $(".RegionNumber").attr('default');
            $(".RegionNumber").val(reg);
            region = parseInt(reg, 10);
        }
        //определяем первичный код региона
        var code = getRegionCode(region);
        var isRegionOutOfService = false;;
        if (code != -1) {
            //определяем координаты флага региона
            var position = {x: -1, y: -1};
            var positionCode = code;
            if (code >= 30) { positionCode += 6; }
            if (code >= 40) { positionCode += 6; }
            if (code >= 51) { positionCode += 1; }
            if (code >= 54) { positionCode += 5; }
            if (code >= 69) { positionCode += 6; }
            if (code >= 79) { positionCode += 5; }
            position.x = (positionCode - 1) % 7;
            position.y = Math.floor((positionCode - 1) / 7);
            //показываем нужный флаг
            $(".RegionHint .Flag").css('background-position',
                (-position.x * 22) + 'px ' + (-position.y * 15) + 'px');
            //пишем название выбранного региона
            if (regionsInfo[code] != 'undefined') {
                $(".RegionHint .Name").html(regionsInfo[code].name);
            } else {
                $(".RegionHint .Name").html('');
            }
            //показываем подсказку (с флагом и номером региона)
            $(".RegionHint").css('display','');
            var checkNote = '';
            //смотрим что мы умеем делать в этом регионе и говорим пользователю
            if ($.inArray('payFine', regionsInfo[code].methods) != -1) {
                //умеем оплачивать штрафы
                checkNote = 'Вы сможете оплатить штрафы после проверки';
            } else
            if ($.inArray('getFines', regionsInfo[code].methods) != -1) {
                //умеем проверять штрафы
                checkNote = '';
            } else
            if ($.inArray('getFinesTest', regionsInfo[code].methods) != -1) {
                //умеем проверять в тестовом режиме
            }
            else {
                //ничего не умеем
                isRegionOutOfService = true;
            }
            if ($.inArray('getFinesTest', regionsInfo[code].methods) != -1) {
                checkNote = 'Проверка работает в тестовом режиме.<br/>Информация может быть не актуальной.'
            }
        } else {
            //если незнакомый номер региона скрываем подсказку (с флагом и номером региона)
            $(".RegionHint").css('display', 'none');
            //и говорим об этом пользователю
            isRegionOutOfService = true;
        }
        var notificationElement = $('#edit-notification');
        if (isRegionOutOfService) {
            //если мы не можем обслужить этот регион
            checkNote = 'Вы получите уведомление о штрафах, когда подключение к базе ГИБДД в этом регионе будет доступно';
            //прячем галочку "Я хочу получать уведомления", чтобы отметить ее по умолчанию
            $('.Subscribe2').hide();
            //запоминаем значение получения уведомлений
            rememberChecked(notificationElement);
            //ставим галочку насильно
            notificationElement.attr('checked', 'checked')
            //показываем поле для ввода емейла
            $('.SubscribeEmail2').show();
            //и устанавливаем читабельный текст
            $('.SubscribeEmail2 .Caption').html('Электронная почта');
            $('.SubscribeEmail2 .SubCaption').html('');
        } else {
            //если мы обслуживаем этот регион
            //то нужно посмотреть разрешена ли подписка на емейл уведомления
            //и в зависимости от этого показать галочку "Я хочу получать уведомления" или спрятать
            if ($.inArray('subscribe', regionsInfo[code].methods) != -1) {
                $('.Subscribe2').show();
                //отмечаем галочку так, как она была отмечена до этого
                recallChecked(notificationElement);
                subscribeOnChange();
                $('.SubscribeEmail2 .Caption').html('По электронной почте');
                $('.SubscribeEmail2 .SubCaption').html('(Это бесплатно)');
            } else {
                //прячем галочку "Я хочу получать уведомления"
                $('.Subscribe2').hide();
                //запоминаем значение получения уведомлений
                rememberChecked(notificationElement);
                //убираем галочку насильно
                notificationElement.removeAttr('checked');
                //прячем поле для ввода емейла
                $('.SubscribeEmail2').hide();
            }
        }
        //показываем пользователю сообщение о том, что мы можем сделать в этом регионе
        $('#CheckNote').html(checkNote);
        //пишем номер регионе на изображении автономера
        $(".AutoRegion").html(reg);
        $("#edit-region").val(region);
        showRequiredFields();
        $(".ErrorToggle").hide();
        return false;
    }


});

function setDefault() {
    if ($(this).hasClass('RegionNumber')) {
        return;
    }
    if (($(this).val() == '') || ($(this).val() == $(this).attr('default'))) {
        $(this).addClass("idleField");
        $(this).val($(this).attr('default'));
    }
}
function getRegionCode(region) {
    var code = -1;
    for (r in regionsInfo) {
        for (i = 0; i < regionsInfo[r].codes.length; i++) {
            if (region == regionsInfo[r].codes[i]) {
                code = parseInt(r, 10);
            }
        }
    }
    return code;
}
function showRequiredFields() {
    $(".requiredSign").hide();
    $(".BirthDate").hide();
    $(".rAll").show();
    var r = $("#edit-region").val();
    var code = getRegionCode(r);
    $(".r" + pad(code,2)).show();
    //$(".r" + code).show();
}

function rememberChecked(el) {
    if (el.attr('oldChecked') == undefined) {
        el.attr('oldChecked', el.attr('checked'));
    }
}

function recallChecked(el) {
    if (el.attr('oldChecked') != undefined) {
        if (el.attr('oldChecked') != 'false') {
            el.attr('checked', 'checked');
        } else {
            el.removeAttr('checked');
        }
        el.removeAttr('oldChecked');
    }
}

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function subscribeOnChange() {
    if ($('#edit-notification').is(':checked')) {
        $('.ShowOnSubscribe').show();
    } else {
        $('.ShowOnSubscribe').hide();
    }
}

/*
    function submitform() {
        $("#wait-modal-content .Loading").show();
        $("#wait-modal-content .SeeFines").hide();
        $("#wait-modal-content").modal({close: false});
        if (!$("#edit-auto-number").is(":visible")) {
            $("#edit-auto-number").val("a123aa");
        }
        if (!$("#edit-driver-license").is(":visible")) {
            $("#edit-driver-license").val("12AA123456");
        }
        if (!$("#edit-registration").is(":visible")) {
            $("#edit-registration").val("123456");
        }
        if (!$("#edit-registration-full").is(":visible")) {
            $("#edit-registration-full").val("12АА123456");
        }
        $.post($('#check-fines-form').attr('action'),
            $('#check-fines-form').serialize(),
            submitCallback);
        //$('#check-fines-form').submit();
        _gaTrackFormSubmitEvent(
            'submit',
            $("#edit-region").val() + '_' +
                $("#edit-auto-number").val(),
            0
        );

        if ($("#edit-notification").is(':checked')) {
            if ($("#edit-email").val() != 'name@email.ru') {
                _gaTrackFormSubmitEvent('submit with email', $("#edit-email").val(), 0);
            }
            if ($("#edit-phone").val() != '7 (912) 123-45-67') {
                _gaTrackFormSubmitEvent('submit with phone', $("#edit-phone").val(), 0);
            }
        }
        submitFormTimeTracker = new TimeTracker();
        submitFormTimeTracker._setHistogramBuckets([500, 1000, 2000, 5000, 10000, 20000, 35000, 60000]);
        submitFormTimeTracker._recordStartTime();
        return false;
    }
    function submitCallback(d) {
        try {
            submitFormTimeTracker._recordEndTime();
            _gaTrackFormSubmitEvent(
                'callback',
                $("#edit-region").val() + '_' +
                    $("#edit-auto-number").val() + ': ' + d
            );
        } catch (err) {
        }
        try {
            //clearTimeout(showJokeTimeoutId);
            var data = eval('(' + d + ')');
            if (data.message != undefined) {
                $("#wait-modal-content .SeeFines .msg").html(data.message);
            }
            $('#WaitModalButton a').unbind('click');
            if (data.href != undefined) {
                $("#WaitModalButton a").attr('href', data.href);
            } else {
                $("#WaitModalButton a").click(function() {
                    $.modal.close();
                    return false;
                });
            }
            if (data.redirect != undefined) {
                _gaTrackFormSubmitEvent('callback with redirect', data.redirect);
                window.location.replace(data.redirect);
                return;
            }
            if (data.errors != undefined) {
                $(".ErrorToggle").hide();
                for (var key in data.errors) {
                    $("." + key + " .ErrorToggle").show();
                }
                _gaTrackFormSubmitEvent('callback with error', data.errors);
                $.modal.close();
            } else {
                _gaTrackFormSubmitEvent('callback success', '');
            }
            if (data.button != undefined) {
                $('#WaitModalButton a .Text').html(data.button);
            } else {
                $('#WaitModalButton a .Text').html('Смотреть штрафы');
            }
        } catch (err) {
            $("#wait-modal-content .SeeFines .msg").html('<h4>Случилась непредвиденная ошибка</h4>');
            $('#WaitModalButton a .Text').html('Назад');
            $("#WaitModalButton a").click(function() {
                $.modal.close();
                return false;
            });
            _gaTrackFormSubmitEvent('callback with exception', err);
        }
        $("#wait-modal-content .Loading").hide();
        $("#wait-modal-content .SeeFines").show();
    }

    function _gaTrackFormSubmitEvent(action, opt_label, opt_value) {
        if (typeof opt_value == 'undefined') {
            opt_value = submitFormTimeTracker._getTimeDiff();
        }
        _gaq.push([
            '_trackEvent',
            'Check fines - Form submit',
            action,
            opt_label,
            opt_value
        ]);
    }
*/
