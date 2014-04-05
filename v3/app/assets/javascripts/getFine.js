/**
 * Created by ferios on 03.04.14.
 */
$(function() {
    var rows = $('.fines');
    //var rows = $('tr').not(':first').not(':last');
    var sum = 0;
    rows.on('click', function(e) {
        var row = $(this);
        if ($(row).hasClass('active') != true) {
            row.addClass('active');
            var s = this.cells[3].innerHTML;
//            for (var j = 0, col; col = this.cells[j]; j++) {
//                this.cells[j].style.backgroundColor='#f00'
//            }
            var number = s.match(/\d+$/);
            number = parseInt(number, 10);
            sum += number;
            document.getElementById("total").innerHTML= sum.toString();
            this.cells[0].getElementsByTagName('input')[0].checked = true;
            requestFine();
            //document.getElementById("payBtn").innerHTML="<iframe width=\"168\" height=\"80\" style=\"border:0;width:168px;height:80px;overflow:hidden;background-color:transparent;\" allowTransparency=\"true\" src=\"https://auth.robokassa.ru:443/Merchant/PaymentForm/FormV.if?MrchLogin=demo&OutSum="+sum+"&InvId=0&Desc=ROBOKASSA+Advanced+User+Guide&Shp_code=Asp&Shp_item=&SignatureValue=1c980c5b65d4e60b0f395ea2ddf6ed16&Culture=ru&Encoding=utf-8\"></iframe>";
        } else {
            row.removeClass('active');
            var s = this.cells[3].innerHTML;
            var number = s.match(/\d+$/);
            number = parseInt(number, 10);
            sum -= number;
            document.getElementById("total").innerHTML= sum.toString();
            this.cells[0].getElementsByTagName('input')[0].checked = false;
            if(sum<=0)
                $("#payBtn").replaceWith('<div id=\"payBtn\"><h4>Выберите штрафы для оплаты.</h4></div>');
            else
                requestFine();
               // document.getElementById("payBtn").innerHTML="<%= link_to 'Оплата', {action: 'button', controller: 'robokassa'}, remote:true,  %>";
        }
    });

    function requestFine(){
        $.ajax(
            {
                url: "/../robokassa/button.js?sum="+sum,
                beforeSend: function( xhr ) {
                    xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
                }
            }).done(function( data )
            {
                eval(data);
                //if ( console && console.log ) {
                //     console.log( "Sample of data:", data.slice( 0, 100 ) );
                // }
            });
    }

    $(document).bind('selectstart dragstart', function(e) {
        e.preventDefault(); return false;
    });
});